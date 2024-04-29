'use client';
import { useState } from 'react';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import { Categories } from './_components/Categories';
import { Courses } from './_components/Courses';
import { Technology } from './_components/Categories'; // Importa el tipo Technology de Categories

// Define la variable metadata dentro del componente
const metadata = {
  title: 'Programas de Estudios | Codejourney',
  description:
    'Codejourney es tu plataforma para el aprendizaje en línea de desarrollo de software. Ofrecemos una amplia gama de cursos especializados en desarrollo de backend y frontend, diseñados para impulsar tu carrera como desarrollador.',
};

// Define el componente ProgramaEstudio
export default function ProgramaEstudio() {
  // Define el estado para la tecnología seleccionada
  const [selectedTechnology, setSelectedTechnology] =
    useState<Technology>('react'); // Por defecto, establece la tecnología seleccionada en 'react'

  // Retorna el JSX del componente ProgramaEstudio
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
            Agrupados por tecnología que ofrecen nuestros cursos. Podrá ver que
            cursos están disponibles para cada tecnología.
          </p>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Tecnologías</h2>
          <div className="flex flex-wrap mb-8 bg-white shadow-lg rounded-lg justify-center max-w-ld mx-auto">
            <Categories
              selectedTechnology={selectedTechnology}
              setSelectedTechnology={setSelectedTechnology}
            />
          </div>
        </div>
        <Courses technology={selectedTechnology} />
      </div>
    </>
  );
}
