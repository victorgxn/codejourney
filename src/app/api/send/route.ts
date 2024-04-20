import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';
import * as React from 'react';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: any) {
//   const body = await request.body.json();
  const { to } = request;
  console.log(request);
  try {
    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['emc0018@gmail.com'],
      subject: 'No creo no?',
      react: EmailTemplate({ firstName: 'Historia' }) as React.ReactElement,
    });

    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
