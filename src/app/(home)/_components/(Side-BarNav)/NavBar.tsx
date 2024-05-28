import Link from 'next/link';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { FooterAside } from './FooterAside';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { AlignJustify, BellIcon } from 'lucide-react';
import { SearchBar } from '@/app/(home)/_components/(Side-BarNav)/SearchBar';

export const NavBar = async ({ admin }: any) => {
  return (
    <div>
      {' '}
      <nav className="p-4 gap-x-4 h-full flex items-center bg-white border-b">
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <AlignJustify />
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[240px]" side="left">
              <SheetHeader>
                <SheetDescription>
                  <div className="flex flex-col min-h-screen">
                    <div className="flex-grow">
                      {/*LOGO RESPONSIVE */}
                      <Link
                        href="/"
                        className="flex ms-2 md:me-24 items-center border-b-4 justify-center w-full"
                      >
                        <Image
                          src="/images/logo/codejourneyLogo.png"
                          className="h-12 w-auto"
                          width={100}
                          height={50}
                          alt="Codejourney logo"
                        />
                        <span
                          className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-gradient
                        bg-gradient-to-r
                         from-blue-500
                         to-green-300
                        bg-clip-text
                        text-transparent"
                        >
                          Codejourney
                        </span>
                      </Link>
                      <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                        <Link href="/">Inicio</Link>
                        <Link href="/dashboard">Cursos</Link>
                        <Link href="/plan-premium">Plan premium</Link>
                        <Link href="/inscrito">Mis cursos</Link>
                        <Link href="/newsletter">Promociones</Link>
                        {admin && (
                          <Link href="/administracion">Administración</Link>
                        )}
                      </div>
                    </div>
                    {/*DERECHOS*/}
                    <div className="pb-5">
                      <FooterAside />
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div className="items-center gap-x-2 hidden lg:flex hover:opacity-75 transition-opacity">
          <Link href="/dashboard" className="flex ms-2 md:me-24 items-center">
            <Image
              src="/images/logo/codejourneyLogo.png"
              className="h-12 w-auto"
              width={100}
              height={50}
              alt="Codejourney logo"
            />
            <span
              className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-gradient
            bg-gradient-to-r
            from-blue-500
            to-green-300
            bg-clip-text
            text-transparent"
            >
              Codejourney
            </span>
          </Link>
        </div>
        <div className="ml-auto hidden lg:block">
          <SearchBar />
        </div>
        {/* //TODO:Quedarse con uno de los dos*/}
        <div className="flex items-center gap-x-4 ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-heart"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-bell-dot text-gray-500"
          >
            <path d="M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3"></path>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            <circle cx="18" cy="8" r="3"></circle>
          </svg>
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>
    </div>
  );
};
