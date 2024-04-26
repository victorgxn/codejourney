import type { Metadata } from 'next';
import { MainEstructure } from '@/app/(home)/_components';
import Providers from '@/components/Chat/Providers';
import Chat from '@/components/Chat/Chat';
import { SearchProvider } from '@/context/SearchContext';

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
    <Providers>
      <SearchProvider>
        <div className="flex flex-col h-full">
          <div className="flex-1">
            <MainEstructure />
            <div className="lg:pl-72 pt-[80px]">{children}</div>
            <Chat />
          </div>
        </div>
      </SearchProvider>
    </Providers>
  );
}
