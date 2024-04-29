import React from "react";

type Technology =
  | "react"
  | "tailwind"
  | "astro"
  | "mysql"
  | "laravel"
  | "java"
  | "nextjs";

type CourseInfo = {
  title: string;
  lessons: number;
  hours: number;
  topics: string[];
};

export const Courses: React.FC<{ technology: Technology }> = ({
  technology,
}) => {
  const courseData: Record<Technology, CourseInfo> = {
    react: {
      title: "Fundamentos de React",
      lessons: 25,
      hours: 20,
      topics: [
        "Introducción a React",
        "Componentes y Propiedades",
        "Estado y Ciclo de Vida",
        "Manejo de Eventos",
        "Renderizado Condicional",
      ],
    },
    tailwind: {
      title: "Dominio de Tailwind CSS",
      lessons: 20,
      hours: 15,
      topics: [
        "Empezando con Tailwind",
        "Personalización de la Configuración de Tailwind",
        "Diseño Responsivo con Tailwind",
        "Optimización del Flujo de Trabajo con Tailwind",
      ],
    },
    astro: {
      title: "Conceptos Básicos de Astro",
      lessons: 15,
      hours: 10,
      topics: [
        "Introducción a Astro",
        "Construcción de Sitios Estáticos con Astro",
        "Funcionalidades Dinámicas con Astro",
        // Agregar más temas si es necesario
      ],
    },
    mysql: {
      title: "Fundamentos de MySQL",
      lessons: 30,
      hours: 25,
      topics: [
        "Introducción a MySQL",
        "Diseño de Base de Datos y Normalización",
        "Consulta de Datos con SQL",
        // Agregar más temas si es necesario
      ],
    },
    laravel: {
      title: "Conceptos Esenciales de Laravel",
      lessons: 35,
      hours: 30,
      topics: [
        "Empezando con Laravel",
        "Construcción de Aplicaciones Web con Laravel",
        "Desarrollo de API con Laravel",
        // Agregar más temas si es necesario
      ],
    },
    java: {
      title: "Programación en Java",
      lessons: 40,
      hours: 35,
      topics: [
        "Introducción a Java",
        "Programación Orientada a Objetos en Java",
        "Programación de Interfaces Gráficas de Usuario en Java",
        // Agregar más temas si es necesario
      ],
    },
    nextjs: {
      title: "Curso Intensivo de Next.js",
      lessons: 20,
      hours: 15,
      topics: [
        "Empezando con Next.js",
        "Enrutamiento y Navegación en Next.js",
        "Renderizado en el Lado del Servidor con Next.js",
        // Agregar más temas si es necesario
      ],
    },
  };

  const courses: CourseInfo = courseData[technology] || {
    title: "",
    lessons: 0,
    hours: 0,
    topics: [],
  };

  return (
    <div className="relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col">
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-center">
          {courses.title || "Courses"}
        </h3>
        <ul className="list-none pl-6 mb-4">
          <li className="font-bold">{courses.lessons} Lecciones</li>
          <li className="font-bold">
            {courses.hours} Horas de video bajo demanda
          </li>
        </ul>
        <ul className="list-decimal pl-6">
          {courses.topics &&
            courses.topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
        </ul>
      </div>
      <a
        className="bg-gradient-to-r
            from-blue-900
            to-blue-500 text-white hover:bg-emerald-100 mt-8 block w-full py-3 px-6 border-w-0 border-transparent rounded-md text-center font-medium"
        href="/dashboard"
      >
        Ver curso
      </a>
    </div>
  );
  
};
