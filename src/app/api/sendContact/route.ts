import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email, subject, message } = await req.json();
  console.log('holaa');
  try {
    const { data, error } = await resend.emails.send({
      from: 'Codejourney Contact <contactemails@codejourney.es>',
      to: ['codejourneytech@gmail.com'],
      subject: subject,
      html: `<h1>Correo de contacto</h1>
        <h3>De:<a href='mailto:${email}'>${email}</a></h3>
        <p>${message}</p>`,
    });
    if (error) {
      return NextResponse.json({ error: error }, { status: 400 });
    }
    return NextResponse.json({ message: 'Con exito' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
  }
}
