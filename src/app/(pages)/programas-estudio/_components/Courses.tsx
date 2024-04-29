'use client';
import React from 'react';
import { useCategory } from '@/context/CategoryContext';
import { Book, SquareUserRound, Euro } from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const Course = () => {
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

  return (
    courses &&
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
    ))
  );
};
