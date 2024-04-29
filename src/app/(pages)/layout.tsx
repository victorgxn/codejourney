import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { TopMenu, Footer } from '@/components';
import { CategoryProvider } from '@/context/CategoryContext';

const font = Outfit({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Dashboard | Codejourney',
  description: 'Pagina de cursos para nuestros miembros.',
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CategoryProvider>
      <div className={`${font.className} bg-gray-50 min-h-screen`}>
        <TopMenu />
        {children}
        <Footer />
      </div>
    </CategoryProvider>
  );
}
