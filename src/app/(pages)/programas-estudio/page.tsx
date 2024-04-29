'use client';
import { useState } from 'react';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import { Categories } from './_components/Categories';
import { Courses } from './_components/Courses';
import { Technology } from './_components/Categories'; // Importa el tipo Technology de Categories

// Define el componente ProgramaEstudio
export default function ProgramaEstudio() {
  // Define el estado para la tecnología seleccionada
  const [selectedTechnology, setSelectedTechnology] =
    useState<Technology>('react'); // Por defecto, establece la tecnología seleccionada en 'react'

  // Retorna el JSX del componente ProgramaEstudio
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <TypewriterEffect
            words={[
              { text: 'Programas ' },
              { text: 'de ' },
              { text: 'Estudios ' },
            ]}
          />
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
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 lg:pr-10 lg:py-6">
            <Courses technology={selectedTechnology} />
          </div>
          <div className="lg:w-1/2 lg:pr-10 lg:py-6">
            <video
              className="rounded-xl w-full"
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
      </div>
    </>
  );
}
