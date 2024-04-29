'use client';
import { useCategory } from '@/context/CategoryContext';
import { Book, SquareUserRound, Euro } from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
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

  const { selectedCategory, courses } = useCategory();
  return (
    courses &&
    courses.map((course: any) => (
      <div key={course.id} className="text-center mb-8">
        <h2
          className={clsx(
            'text-2xl font-bold mb-4 text-gradient bg-clip-text text-transparent',
            gradientMap[selectedCategory]
          )}
        >
          {course?.name}
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-8 mx-auto max-w-lg border-2 border-blue-300 flex items-center justify-center">
          <div>
            <div className="flex">
              <div className="flex items-center">
                <Book size={24} className="mr-2" />
                <span className="text-sm">
                  {course?.totalChapters} capitulos
                </span>
                <SquareUserRound size={24} className="mr-2" />
                <span className="text-sm">
                  {course?.author ?? 'Codejourney'}
                </span>
                <Euro size={24} className="mr-2" />
                <span className="text-sm">
                  {course?.free ? 'Gratis' : 'De pago'}
                </span>
              </div>
              <p className="line-clamp-4 mt-3 text-muted-foreground mb-4">
                {course?.description}
              </p>
            </div>
            <h1 className="text-xl mt-8">Capítulos:</h1>
            <ul className="list-decimal pl-6 mt-3">
              {course?.chapter.map((chapter: any) => (
                <li key={chapter.id}>{chapter.name}</li>
              ))}
            </ul>
            <div className="mt-10">
              <Button className="bg-blue-600 hover:bg-blue-400" asChild>
                <Link href={`/course-preview/${course.id}`}>Empezar ahora</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    ))
  );
};
