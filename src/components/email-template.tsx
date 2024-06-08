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
  Tailwind,
} from '@react-email/components';

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
      <Tailwind>
        <Body className="bg-slate-100 font-serif">
          <Container className="bg-white">
            <Section>
              <Link
                href={baseUrl}
                className="flex items-center justify-center w-full"
              >
                <Img
                  src='https://www.codejourney.es/images/logo/codejourneyLogo.png'
                  width={150}
                  height={150}
                  alt="Codejourney logo"
                />
                <Text
                  style={title}
                  className="self-center text-2xl font-semibold whitespace-nowrap"
                >
                  Codejourney
                </Text>
              </Link>
              <Hr className="my-5" />
              <Section className="mx-3">
                <Text>Hola {username},</Text>
                <Text>Gracias por suscribirte en {company}.</Text>
                <Text>
                  Recibiras noticias de los todos nuestros productos. Puedes
                  mirar los cursos aquí:
                </Text>
                <Container className="w-full flex items-center justify-center">
                  <Button
                    style={button}
                    className="w-80 text-lg bg-blue-500 rounded-md text-center hover:bg-blue-400 font-semibold text-white"
                    href={`${baseUrl}/dashboard`}
                  >
                    Dashboard
                  </Button>
                </Container>
              </Section>
              <Hr className="my-5" />
              <Section className="mx-3">
                <Text>
                  Si tiene alguna pregunta, no dude en{' '}
                  <Link href={`${baseUrl}/contacto`}>contactarnos</Link> y le
                  responderemos lo antes posible.
                </Text>
                <Text>
                  También puede encontrar la mayoría de respuestas a sus
                  preguntas en nuestro{' '}
                  <Link href={`${baseUrl}/preguntas-y-respuestas`}>FAQ</Link>.
                </Text>
                <Text>
                  — El equipo de{' '}
                  <span className="font-semibold">{company}</span>
                </Text>
              </Section>
              <Hr className="my-5" />
              <Section className="text-center">
                <Text>{company} | Bocatas Juanma 30 | Malaga, Spain 69069</Text>
              </Section>
            </Section>
          </Container>
          <Container className="flex flex-wrap w-full justify-around items-center">
            <Link href={baseUrl} className="text-xs text-center m-2">
              Cancelar Suscripción
            </Link>
            <Link
              href={`${baseUrl}/privacidad-generico`}
              className="text-xs text-center m-2"
            >
              Política de privacidad
            </Link>
            <Link
              href={`${baseUrl}/terminos-y-condiciones`}
              className="text-xs text-center m-2"
            >
              Terminos y servicios
            </Link>
            <Link
              href={`${baseUrl}/contacto`}
              className="text-xs text-center m-2"
            >
              Contacto
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const title = {
  fontSize: '24px',
  fontWeight: 'bold',
  background: 'linear-gradient(to right, #3b82f6, #6ee7b7)',
  webkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
};

const button = {
  padding: '5px 0',
};
