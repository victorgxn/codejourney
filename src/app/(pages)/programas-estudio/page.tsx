import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import { Categories } from './_components/Categories';
import { Course } from './_components/Courses';
import Link from 'next/link';
import { auth } from '@clerk/nextjs';

export const metadata = {
  title: 'Programas de Estudios | Codejourney',
  description:
    'Codejourney es tu plataforma para el aprendizaje en línea de desarrollo de software. Ofrecemos una amplia gama de cursos especializados en desarrollo de backend y frontend, diseñados para impulsar tu carrera como desarrollador. ',
};

export default function ProgramaEstudio() {
  const { userId } = auth();

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <TypewriterEffect
            words={[
              { text: 'Programas ' },
              { text: 'de ' },
              { text: 'estudios ' },
            ]}
          />
        </div>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Tecnologías</h2>
          <div className="flex flex-wrap mb-8 bg-white shadow-lg rounded-lg justify-center mx-auto">
            <Categories />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-full lg:py-6 flex flex-col justify-center items-center">
            <Course />
          </div>
        </div>
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
          ¡Regístrate gratis para ver todos los cursos disponibles que
          ofrecemos!
        </div>
        <div className="flex gap-4 justify-center pt-10">
          <Link href={userId ? '/dashboard' : '/sign-up'}>
            <button className="bg-blue-500 text-white px-10 py-4 rounded-md text-lg font-bold">
              Empieza ahora
            </button>
          </Link>
          <Link href={userId ? '/dashboard' : '/sign-up'}>
            <button className="bg-gray-600 text-white px-10 py-4 rounded-md text-lg font-bold">
              Saber más
            </button>
          </Link>
        </div>
        <div className="lg:w-full lg:pr-10 lg:py-6">
          <video
            className="rounded-xl w-full mt-5"
            width="100%"
            height="auto"
            autoPlay
            muted
            loop
          >
            <source src="/videos/hero2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}
