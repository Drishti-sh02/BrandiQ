import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/authOptions';
import { prisma } from '@/lib/prisma';

export async function GET(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: {
        cartItems: true,
        wishlistItems: true,
        downloads: true
      }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await req.json();
    const { action, payload } = data;

    if (action === 'updateProfile') {
      const updatedUser = await prisma.user.update({
        where: { id: session.user.id },
        data: {
          dob: payload.dob,
          phone: payload.phone,
        }
      });
      return NextResponse.json({ success: true, user: updatedUser });
    }

    if (action === 'updateCart') {
      // payload is the full array of cart items from state
      // For simplicity, clear existing and recreate
      await prisma.cartItem.deleteMany({
        where: { userId: session.user.id }
      });
      if (payload && payload.length > 0) {
        await prisma.cartItem.createMany({
          data: payload.map(item => ({
            userId: session.user.id,
            productId: item.id.toString(), // assuming item.id is the product id
            quantity: 1
          }))
        });
      }
      return NextResponse.json({ success: true });
    }

    if (action === 'updateWishlist') {
      await prisma.wishlistItem.deleteMany({
        where: { userId: session.user.id }
      });
      if (payload && payload.length > 0) {
        await prisma.wishlistItem.createMany({
          data: payload.map(productId => ({
            userId: session.user.id,
            productId: productId.toString()
          }))
        });
      }
      return NextResponse.json({ success: true });
    }

    if (action === 'addDownload') {
      await prisma.download.create({
        data: {
          userId: session.user.id,
          productId: payload.productId.toString(),
          downloadUrl: payload.downloadUrl || null
        }
      });
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('Error syncing user data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
