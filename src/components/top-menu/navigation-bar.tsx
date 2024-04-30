'use client';

import * as React from 'react';

import Link from 'next/link';

import { cn } from '@/lib/utils';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import { LeftLogo } from '@/components/top-menu/logo';

//TODO : Separate the logic to a smaller component
export const NavigationBar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden md:flex md:space-x-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Inicio</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                     <LeftLogo />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      CodeJourney
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Plataforma online de venta de cursos de programación.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem title="Descubre nuestra comunidad" href="/#comunidad">Conversa y debate con otros estudiantes sobre los cursos</ListItem>
              <ListItem title="Cursos que ofrecemos" href="/#cursos">
                Carrousel interactivo con nuestros cursos mas populares
              </ListItem>
              <ListItem title="El equipo de codejourney" href="/#equipo">
                Nuestros miembros
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/programas-estudio" legacyBehavior passHref>
            <NavigationMenuLink className="font-medium">
              Programas de estudio
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/codejourney-empresas" legacyBehavior passHref>
            <NavigationMenuLink
              className="
              font-medium"
            >
              Codejourney para empresas
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/preguntas-y-respuestas" legacyBehavior passHref>
            <NavigationMenuLink
              className="
              font-medium"
            >
              FAQ
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
