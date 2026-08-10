import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/?payment=error&reason=unauthorized`);
    }

    const userId = session.user.id;
    
    // We assume the payment is successful because the user was redirected back here
    // In a production environment with a Business account, you should use IPN or REST API for true verification.

    const cookieStore = await cookies();
    const productIdsCookie = cookieStore.get('checkout_product_ids');
    
    if (productIdsCookie) {
      const productIds = JSON.parse(productIdsCookie.value);
      
      // Add to downloads
      for (const productId of productIds) {
        // Check if it already exists to prevent duplicates
        const existing = await prisma.download.findFirst({
          where: { userId, productId: productId.toString() }
        });
        
        if (!existing) {
          await prisma.download.create({
            data: {
              userId,
              productId: productId.toString(),
              downloadUrl: `/api/download/${productId}`, 
            }
          });
        }
      }
      
      // Clear the cookie
      cookieStore.delete('checkout_product_ids');
    }

    // Clear the cart items from database if they were stored there
    await prisma.cartItem.deleteMany({
      where: { userId }
    });

    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/?payment=success`);

  } catch (error) {
    console.error('PayPal Return Error:', error);
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/?payment=error`);
  }
}
