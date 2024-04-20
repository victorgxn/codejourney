import WelcomeTemplate from '../../../components/email-template';
import { Resend } from 'resend';
import * as React from 'react';
import { render } from '@react-email/render';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
  const { email, userFirstName } = await req.json();

  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: [email],
    subject: 'Prueba',
    react: WelcomeTemplate({
      username: userFirstName,
      company: 'Codejourney',
    }) as React.ReactElement,
    // html: render(WelcomeTemplate({ userFirstName })),
  });

  if (error) {
    return Response.json(error);
  }

  return Response.json({ message: 'Email sent successfully' });
}
