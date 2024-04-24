import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

const baseUrl = process.env.URL ? process.env.URL : '';

interface WelcomeEmailProps {
  username?: string;
  company?: string;
}

export const WelcomeEmail = ({
  username,
  company = 'Codejourney',
}: WelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Link
              href={baseUrl}
              className="flex ms-2 items-center border-b-2 justify-center w-full"
            >
              <Img
                src={`${baseUrl}/images/logo/codejourneyLogo.png`}
                width={100}
                height={100}
                alt="Codejourney logo"
              />
              <Text
                className="self-center text-xl font-semibold whitespace-nowrap text-gradient
                        bg-gradient-to-r
                         from-blue-500
                         to-green-300
                        bg-clip-text
                        "
              >
                Codejourney
              </Text>
            </Link>
            <Hr style={hr} />
            <Text style={paragraph}>
              Hola, {username}! Gracias por suscribirte en {company}.
            </Text>
            <Text style={paragraph}>
              Puedes ver ya los cursos que hay disponibles para ti en el
              dashboard!
            </Text>
            <Button style={button} href={`${baseUrl}/dashboard`}>
              Empieza ya!
            </Button>
            <Hr style={hr} />
            <Text style={paragraph}>
              If you haven't finished your integration, you might find our{' '}
              <Link style={anchor} href="https://stripe.com/docs">
                docs
              </Link>{' '}
              handy.
            </Text>
            <Text style={paragraph}>
              Once you're ready to start accepting payments, you'll just need to
              use your live{' '}
              <Link
                style={anchor}
                href="https://dashboard.stripe.com/login?redirect=%2Fapikeys"
              >
                API keys
              </Link>{' '}
              instead of your test API keys. Your account can simultaneously be
              used for both test and live requests, so you can continue testing
              while accepting live payments. Check out our{' '}
              <Link style={anchor} href="https://stripe.com/docs/dashboard">
                tutorial about account basics
              </Link>
              .
            </Text>
            <Text style={paragraph}>
              Finally, we've put together a{' '}
              <Link
                style={anchor}
                href="https://stripe.com/docs/checklist/website"
              >
                quick checklist
              </Link>{' '}
              to ensure your website conforms to card network standards.
            </Text>
            <Text style={paragraph}>
              We'll be here to help you with any step along the way. You can
              find answers to most questions and get in touch with us on our{' '}
              <Link style={anchor} href="https://support.stripe.com/">
                support site
              </Link>
              .
            </Text>
            <Text style={paragraph}>— The {company} team</Text>
            <Hr style={hr} />
            <Text style={footer}>
              {company} | Bocatas Juanma 30 | Malaga, Spain 69069
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const box = {
  padding: '0 48px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const paragraph = {
  color: '#525f7f',

  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
};

const anchor = {
  color: '#556cd6',
};

const button = {
  backgroundColor: '#656ee8',
  borderRadius: '5px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '100%',
  padding: '10px',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
};
