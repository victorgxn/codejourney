'use client';
import React from 'react';
import { useCategory } from '@/context/CategoryContext';
import { useCategoryDashboard } from '@/app/(home)/(routes)/dashboard/_context/CategoryDashboard';
import { Book, SquareUserRound, Euro } from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const Course = () => {
  const courseData: any = {
    react: {
      title: 'Fundamentos de React',
      lessons: 25,
      hours: 20,
      topics: [
        'Introducción a React',
        'Componentes y Propiedades',
        'Estado y Ciclo de Vida',
        'Manejo de Eventos',
        'Renderizado Condicional',
      ],
    },
    tailwind: {
      title: 'Dominio de Tailwind CSS',
      lessons: 20,
      hours: 15,
      topics: [
        'Empezando con Tailwind',
        'Personalización de la Configuración de Tailwind',
        'Diseño Responsivo con Tailwind',
        'Optimización del Flujo de Trabajo con Tailwind',
      ],
    },
    astro: {
      title: 'Conceptos Básicos de Astro',
      lessons: 15,
      hours: 10,
      topics: [
        'Introducción a Astro',
        'Construcción de Sitios Estáticos con Astro',
        'Funcionalidades Dinámicas con Astro',
      ],
    },
    mysql: {
      title: 'Fundamentos de MySQL',
      lessons: 30,
      hours: 25,
      topics: [
        'Introducción a MySQL',
        'Diseño de Base de Datos y Normalización',
        'Consulta de Datos con SQL',
      ],
    },
    laravel: {
      title: 'Conceptos Esenciales de Laravel',
      lessons: 35,
      hours: 30,
      topics: [
        'Empezando con Laravel',
        'Construcción de Aplicaciones Web con Laravel',
        'Desarrollo de API con Laravel',
      ],
    },
    java: {
      title: 'Programación en Java',
      lessons: 40,
      hours: 35,
      topics: [
        'Introducción a Java',
        'Programación Orientada a Objetos en Java',
        'Programación de Interfaces Gráficas de Usuario en Java',
      ],
    },
    nextjs: {
      title: 'Curso Intensivo de Next.js',
      lessons: 20,
      hours: 15,
      topics: [
        'Empezando con Next.js',
        'Enrutamiento y Navegación en Next.js',
        'Renderizado en el Lado del Servidor con Next.js',
      ],
    },
  };

  const gradientMap: any = {
    react: 'bg-gradient-react',
    tailwind: 'bg-gradient-tailwind',
    astro: 'bg-gradient-astro',
    mysql: 'bg-gradient-mysql',
    laravel: 'bg-gradient-laravel',
    java: 'bg-gradient-java',
    nextjs: 'bg-gradient-nextjs',
  };

  const colorMap: any = {
    react: 'text-react-primary',
    tailwind: 'text-tailwind-primary',
    astro: 'text-astro-primary',
    mysql: 'text-mysql-primary',
    laravel: 'text-laravel-primary',
    java: 'text-java-primary',
    nextjs: 'text-nextjs-primary',
  };

  const colors: any = {
    react: '#61DAFB',
    tailwind: '#38B2AC',
    astro: '#FFD369',
    mysql: '#00758F',
    laravel: '#FF2D20',
    java: '#007396',
    nextjs: '#000000',
  };

  const { selectedCategory, courses } = useCategory();
  const { setSelectedCategoryDashboard } = useCategoryDashboard();

  return (
    <>
      {courseData[selectedCategory] && (
        <div className="relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col lg:w-8/12 w-full">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-center">
              {courseData[selectedCategory].title || 'Courses'}
            </h3>
            <ul className="list-none pl-6 mb-4">
              <li className="font-bold">
                {courseData[selectedCategory].lessons} Lecciones
              </li>
              <li className="font-bold">
                {courseData[selectedCategory].hours} Horas de video bajo demanda
              </li>
            </ul>
            <ul className="list-decimal pl-6">
              {courseData[selectedCategory].topics &&
                courseData[selectedCategory].topics.map(
                  (topic: any, index: number) => <li key={index}>{topic}</li>
                )}
            </ul>
          </div>
          <Link
            onClick={() => setSelectedCategoryDashboard(selectedCategory)}
            className={clsx(
              'text-white mt-8 block w-full py-3 px-6 border-w-0 border-transparent rounded-md text-center font-medium',
              gradientMap[selectedCategory]
            )}
            href="/dashboard"
          >
            Ver cursos
          </Link>
        </div>
      )}
      <h1
        className="text-4xl font-semibold mt-20 text-gradient
    bg-gradient-to-r
    from-blue-500
    to-green-300
    bg-clip-text
    text-transparent"
      >
        Algunos de nuestros cursos con esta tecnología:{' '}
      </h1>
      {courses &&
        courses.map((course: any) => (
          <div
            key={course.id}
            className="relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col mt-5 lg:w-8/12"
          >
            <div className="flex-1">
              <h3
                className={clsx(
                  'text-2xl font-semibold text-center text-gradient bg-clip-text text-transparent',
                  gradientMap[selectedCategory]
                )}
              >
                {course?.name}
              </h3>
              <div className="mt-10 lg:flex flex-col-reverse lg:flex-row">
                <div className="mt-5 lg:flex-grow">
                  <ul className="list-none pl-6 mb-4">
                    <li className="font-bold flex">
                      <SquareUserRound
                        color={colors[selectedCategory]}
                        size={24}
                        className="mr-2"
                      />
                      {course?.author ?? 'Codejourney'}
                    </li>
                    <li className="font-bold flex">
                      <Book
                        color={colors[selectedCategory]}
                        size={24}
                        className="mr-2"
                      />
                      {course?.totalChapters} Capítulos
                    </li>
                    <li className="font-bold flex">
                      <Euro
                        color={colors[selectedCategory]}
                        size={24}
                        className="mr-2"
                      />
                      {course?.free ? 'Gratis' : 'De pago'}
                    </li>
                  </ul>
                  <ul className="list-decimal pl-6 lg:w-96 mr-5">
                    {course?.chapter.map((chapter: any) => (
                      <li key={chapter.id}>{chapter.name}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5 flex flex-col items-end lg:w-96">
                  <Image
                    src={course?.banner.url}
                    width={400}
                    height={200}
                    alt={course?.name}
                    className="rounded-lg"
                  />
                  <p className="line-clamp-4 mt-3 text-muted-foreground mb-4">
                    {course?.description}
                  </p>
                </div>
              </div>
            </div>
            <Button
              className={clsx(
                'text-white mt-8 block w-full py-3 px-6 border-w-0 border-transparent rounded-md text-center font-medium',
                gradientMap[selectedCategory]
              )}
              asChild
            >
              <Link href={`/course-preview/${course.id}`}>Ver curso</Link>
            </Button>
          </div>
        ))}
    </>
  );
};
