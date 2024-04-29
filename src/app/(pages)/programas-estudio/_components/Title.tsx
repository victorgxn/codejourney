'use client';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import { useCategoryDashboard } from '@/app/(home)/(routes)/dashboard/_context/CategoryDashboard';

export const Title = () => {
  const { setSelectedCategoryDashboard } = useCategoryDashboard();
  const { user } = useUser();
  return (
    <>
      <div
        className="mt-20 text-4xl sm:text-6xl flex justify-center text-center font-bold md:px-20 pb-10
    text-gradient
    bg-gradient-to-r
    from-blue-500
    to-green-300
    bg-clip-text
    text-transparent
    "
      >
        ¡Regístrate gratis para ver todos los cursos disponibles que ofrecemos!
      </div>
      <div className="flex gap-4 justify-center pt-10">
        <Link
          onClick={() => setSelectedCategoryDashboard('all')}
          href={user ? '/dashboard' : '/sign-up'}
        >
          <button className="bg-blue-500 text-white px-10 py-4 rounded-md text-lg font-bold">
            Empieza ahora
          </button>
        </Link>
        <Link
          onClick={() => setSelectedCategoryDashboard('all')}
          href={user ? '/dashboard' : '/sign-up'}
        >
          <button className="bg-gray-600 text-white px-10 py-4 rounded-md text-lg font-bold">
            Saber más
          </button>
        </Link>
      </div>
    </>
  );
};
