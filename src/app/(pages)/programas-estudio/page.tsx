import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import { Categories } from './_components/Categories';
import { Course } from './_components/Courses';

export const metadata = {
  title: 'Programas de Estudios | Codejourney',
  description:
    'Codejourney es tu plataforma para el aprendizaje en línea de desarrollo de software. Ofrecemos una amplia gama de cursos especializados en desarrollo de backend y frontend, diseñados para impulsar tu carrera como desarrollador. ',
};

export default function ProgramaEstudio() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8 ">
          <TypewriterEffect
            words={[
              { text: 'Programas ' },
              { text: 'de ' },
              { text: 'Estudios ' },
            ]}
          />
        </div>
        <div className="text-center">
          <p className="mb-8">
            Agrupados por tecnología que ofrecen nuestros cursos. Podrá ver
            algunos que estén disponibles para cada tecnología.
          </p>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Tecnologías</h2>
          <div className="flex flex-wrap mb-8 bg-white shadow-lg rounded-lg justify-center max-w-ld mx-auto">
            <Categories />
          </div>
        </div>
        {/* //TODO Curso seleccionado */}
        <div className="container mx-auto px-4 py-8">
          <Course />
        </div>
      </div>
    </>
  );
}
