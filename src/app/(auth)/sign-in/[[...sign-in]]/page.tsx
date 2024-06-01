import { SignIn } from '@clerk/nextjs';

export const metadata = {
  title: 'Inicio sesion | Codejourney',
  description: 'En esta pagina nuestros usuarios podran iniciar sesion',
};

export default function Page() {
  return <SignIn routing="hash" />;
}
