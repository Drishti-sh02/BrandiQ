import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: 'You must be logged in to checkout' }, { status: 401 });
    }

    const { cartItems } = await request.json();

    if (!cartItems || cartItems.length === 0) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 });
    }

    const productIds = cartItems.map(item => item.id);

    // Store the product IDs in a cookie so we know what to fulfill in capture
    const cookieStore = await cookies();
    cookieStore.set('checkout_product_ids', JSON.stringify(productIds), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600 // 1 hour
    });

    // Construct PayPal Payments Standard URL
    const baseUrl = 'https://www.paypal.com/cgi-bin/webscr';
    const params = new URLSearchParams({
      cmd: '_cart',
      upload: '1',
      business: process.env.PAYPAL_EMAIL || 'rakeshsingh8319@gmail.com',
      currency_code: 'USD',
      return: `${process.env.NEXTAUTH_URL}/api/checkout/capture`,
      cancel_return: `${process.env.NEXTAUTH_URL}/?payment=cancelled`,
    });

    // Add items to the URL
    cartItems.forEach((item, index) => {
      const i = index + 1;
      params.append(`item_name_${i}`, item.title || 'Digital Product');
      params.append(`amount_${i}`, item.price.toString());
      params.append(`quantity_${i}`, '1');
    });

    const checkoutUrl = `${baseUrl}?${params.toString()}`;

    return NextResponse.json({ url: checkoutUrl });
  } catch (error) {
    console.error('PayPal Checkout Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
