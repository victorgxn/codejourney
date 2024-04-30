import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import { Categories } from './_components/Categories';
import { Course } from './_components/Courses';
import { Title } from './_components/Title';

export const metadata = {
  title: 'Programas de Estudios | Codejourney',
  description:
    'Codejourney es tu plataforma para el aprendizaje en línea de desarrollo de software. Ofrecemos una amplia gama de cursos especializados en desarrollo de backend y frontend, diseñados para impulsar tu carrera como desarrollador. ',
};

export default function ProgramaEstudio() {
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
        <Title />
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
