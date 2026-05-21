import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const form = await request.formData();
  const email = form.get('email');

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return NextResponse.json({ success: false, message: 'Please provide a valid email address.' }, { status: 400 });
  }

  return NextResponse.json({ success: true, message: `Subscribed ${email} to the newsletter.` });
}
