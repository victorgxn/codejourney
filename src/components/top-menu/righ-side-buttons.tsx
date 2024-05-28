import { UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { SignUpButton } from '@clerk/nextjs';

import { AlignJustify } from 'lucide-react';

import Link from 'next/link';

import { auth } from '@clerk/nextjs/server';

//TODO : Add the links to the buttons
export const RightSideButtons = () => {
  const { userId } = auth();

  return (
    <div>
      <div className="md:hidden flex items-center justify-between">
        <div className="mr-4">
          {' '}
          {/* Agregar margen derecho */}
          <UserButton afterSignOutUrl="/" />
        </div>
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                  {/* Contenido del Sheet */}

                  {userId ? (
                    <Button asChild className="text-md bg-blue-500">
                      <Link href="/dashboard">Dashboard</Link>
                    </Button>
                  ) : (
                    <SignUpButton>
                      <Button className="text-md bg-blue-500">
                        Registrarse
                      </Button>
                    </SignUpButton>
                  )}
                  {!userId && <Link href="/sign-in">Iniciar Sesión</Link>}

                  <Link href="/">Inicio</Link>
                  <Link href="/programas-estudio">Programas de estudio</Link>
                  <Link href="/codejourney-empresas">
                    CodeJourney para empresas
                  </Link>
                  <Link href="/preguntas-y-respuestas">FAQ</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:flex md:space-x-4">
        <Button asChild className="text-md" variant="ghost">
          <Link href={userId ? '/dashboard' : '/sign-in'}>
            {userId ? 'Dashboard' : 'Iniciar sesión'}
          </Link>
        </Button>
        {/* //TODO : Center img */}

        {userId ? (
          <div className="flex items-center h-full">
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <Button asChild className="text-md bg-blue-500">
            <Link href={userId ? '/' : '/sign-up'}>
              {userId ? 'Cerrar sesión' : 'Registrarse'}
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};
