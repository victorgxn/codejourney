'use client';
import {
  Home,
  BookOpenCheck,
  Shield,
  MailPlus,
  MonitorPlay,
  Wrench,
} from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { FooterAside } from '@/app/(home)/_components/(Side-BarNav)/FooterAside';

interface MenuItem {
  id: number;
  name: string;
  icon: React.ElementType; // Assuming the icon is a React component
  path: string;
}

export const Aside = ({ admin }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuList: MenuItem[] = [
    {
      id: 1,
      name: 'Cursos',
      icon: BookOpenCheck,
      path: '/dashboard',
    },
    {
      id: 2,
      name: 'Inicio',
      icon: Home,
      path: '/',
    },
    {
      id: 3,
      name: 'Plan premium',
      icon: Shield,
      path: '/plan-premium',
    },
    {
      id: 4,
      name: 'Mis cursos',
      icon: MonitorPlay,
      path: '/inscrito',
    },
    {
      id: 5,
      name: 'Promociones',
      icon: MailPlus,
      path: '/newsletter',
    },
    {
      id: 6,
      name: 'Administración',
      icon: Wrench,
      path: '/administracion',
    },
  ];
  return (
    <aside
      className="hidden lg:flex pt-[80px] h-full w-72 flex-col fixed inset-y-0 z-[48]"
      aria-label="Sidebar"
    >
      <div className="h-full flex flex-col bg-white border-r overflow-y-auto">
        <div className="flex flex-col w-full flex-1">
          <ul className="flex flex-col w-full space-y-1.5 p-3">
            {menuList.map((item, index: number) => {
              if (!admin && item.id === 6) return null;

              return (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    className={`flex items-center p-3 text-gray-700 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                      activeIndex === index
                        ? 'bg-gray-100 dark:bg-gray-900'
                        : ''
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <item.icon className="w-6 h-6 mr-2" />
                    <span>{item.name}</span>
                    {item.id === 3 && (
                      <div className="inline-flex items-center border rounded-md px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-sky-500/10 text-sky-800 ml-auto">
                        Nuevo
                      </div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="p-3.5">
          <div className="mt-52 rounded-lg border bg-card text-card-foreground shadow-none w-full">
            <div className="flex flex-col space-y-1.5 p-2 pt-0 md:p-4">
              <h3
                className=" flex items-center justify-center font-semibold tracking-tight text-base  bg-gradient-to-r
            from-blue-500
            to-green-300
            bg-clip-text
            text-transparent"
              >
                Pasate al plan Premium
              </h3>
              <p className="text-muted-foreground text-sm ">
                Desbloquea todos nuestros cursos por un unico pago de 9,99 € al
                mes.
              </p>
            </div>
            <div className="p-2 pt-0 md:p-4 md:pt-0">
              <Link
                className="inline-flex items-center justify-center font-medium ring-offset-background bg-gradient-to-r
            from-blue-900
            to-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 w-full text-xs"
                href="./plan-premium"
              >
                Mejorar
              </Link>
            </div>
          </div>
        </div>
        <FooterAside />
      </div>
    </aside>
  );
};
