import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';
import * as React from 'react';

const WelcomeEmail = ({
  username,
  company = 'Codejourney',
}: WelcomeEmailProps) => {
  const previewText = `Welcome to ${company}, ${username}!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-dark my-auto mx-auto font-sans">
          <Container className="my-10 mx-auto p-5 w-[465px]">
            <Section className="mt-8">
              <Link
                href={baseUrl}
                className="flex ms-2 items-center border-b-2 justify-center w-full"
              >
                <Img
                  src="/images/logo/codejourneyLogo.png"
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
            </Section>
            <Heading className="text-2xl font-normal text-center p-0 my-8 mx-0">
              Welcome to <strong>{company}</strong>, {username}!
            </Heading>
            <Text className="text-sm">Hello {username},</Text>
            <Text className="text-sm">
              We&apos;re excited to have you onboard at{' '}
              <strong>{company}</strong>. We hope you enjoy your journey with
              us. If you have any questions or need assistance, feel free to
              reach out.
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-blue-500 rounded font-semibold p-2 text-white text-lg hover:bg-blue-200"
                href={`${baseUrl}/dashboard`}
              >
                Get Started
              </Button>
            </Section>
            <Text className="text-sm">
              Cheers,
              <br />
              The {company} Team
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

interface WelcomeEmailProps {
  username?: string;
  company?: string;
}

const baseUrl = process.env.URL ? process.env.URL : '';

export default WelcomeEmail;
