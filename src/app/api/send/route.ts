import WelcomeTemplate from '../../../components/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email, userFirstName } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [email],
      subject: 'Bienvenido!',
      react: WelcomeTemplate({
        username: userFirstName,
        company: 'Codejourney',
      }),
    });
    if (error?.statusCode >= 500) {
      return NextResponse.json({ error: error }, { status: 500 });
    }
    if (error?.statusCode >= 400) {
      return NextResponse.json({ error: error }, { status: 400 });
    }
    return NextResponse.json({ message: 'Con exito' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
  }
}
