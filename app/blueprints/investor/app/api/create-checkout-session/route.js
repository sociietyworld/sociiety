import Stripe from 'stripe';
import { NextResponse } from 'next/server';

// ✅ Confirm your secret key is loaded
console.log("🔑 STRIPE KEY:", process.env.STRIPE_SECRET_KEY);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST() {
  try {
    console.log("✅ POST hit - Creating Stripe session...");

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: 'price_1RcvajANtZ7X2PRGL0I64udE', // ← $50,000 live price ID
          quantity: 1
        }
      ],
      mode: 'payment',
      success_url: 'https://sociietyworld.com/hiighsociiety?success=true',
      cancel_url: 'https://sociietyworld.com/hiighsociiety?canceled=true'
    });

    console.log("✅ Stripe session created:", session.id);
    return NextResponse.json({ id: session.id });
  } catch (err) {
    console.error("❌ Stripe session error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
