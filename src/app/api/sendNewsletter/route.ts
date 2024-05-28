import { WelcomeEmail } from '@/components/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email, username } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: 'Codejourney <codejourney@codejourney.es>',
      to: [email],
      subject: `Bienvenido, ${username}!`,
      react: WelcomeEmail({
        username: username,
        company: 'Codejourney',
      }),
    });
    if (error) {
      return NextResponse.json({ error: error }, { status: 400 });
    }
    return NextResponse.json({ message: 'Con exito' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
  }
}
