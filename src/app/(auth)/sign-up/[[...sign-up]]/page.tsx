import React from 'react';
import { SignUp } from '@clerk/nextjs';
export const metadata = {
  title: 'Registrarse | Codejourney',
  description: 'En esta podran registrar nuevos usuarios',
};

export default function Page() {
  return <SignUp routing="hash" />;
}