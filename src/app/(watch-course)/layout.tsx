import type { Metadata } from 'next';
import { MainEstructure } from '@/app/(home)/_components';
import Providers from '@/components/Chat/Providers';
import Chat from '@/components/Chat/Chat';

export const metadata: Metadata = {
  title: 'Pagina cursos | Codejourney',
  description: 'Pagina de visualizado de cursos para nuestros miembros.',
};

export default function CourseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className='h-full'>{children}</div>;
}
