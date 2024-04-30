import { ReceiptEmail } from '@/components/receipt.template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email, userFirstName, courseList } = await req.json();
    console.log('buenas');
  try {
    const { data, error } = await resend.emails.send({
      from: 'Codejourney <codejourney@codejourney.es>',
      to: [email],
      subject: `Tu pedido se ha completado, ${userFirstName}!`,
      react: ReceiptEmail({
        userFirstName: userFirstName,
        email: email,
        courseList: courseList,
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
