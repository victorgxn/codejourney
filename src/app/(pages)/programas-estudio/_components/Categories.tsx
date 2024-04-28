import React from 'react';
import {
  SiAstro,
  SiReact,
  SiTailwindcss,
  SiMysql,
  SiLaravel,
  SiNextdotjs,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

import { useCategory } from '@/context/CategoryContext';

export type Technology = 'react' | 'tailwind' | 'astro' | 'mysql' | 'laravel' | 'java' | 'nextjs'; // Exporta el tipo Technology

interface CategoriesProps {
  setSelectedTechnology: (technology: Technology) => void;
}

interface FilterOption {
  id: number;
  name: string;
  value: string;
  icon: any;
}

export const Categories: React.FC<CategoriesProps> = ({ setSelectedTechnology }) => {
  const categories: FilterOption[] = [
    {
      id: 1,
      name: 'React',
      value: 'react',
      icon: SiReact,
    },
    {
      id: 2,
      name: 'Tailwind',
      value: 'tailwind',
      icon: SiTailwindcss,
    },
    {
      id: 3,
      name: 'Astro',
      value: 'astro',
      icon: SiAstro,
    },
    {
      id: 4,
      name: 'MySQL',
      value: 'mysql',
      icon: SiMysql,
    },
    {
      id: 5,
      name: 'Laravel',
      value: 'laravel',
      icon: SiLaravel,
    },
    {
      id: 6,
      name: 'Java',
      value: 'java',
      icon: FaJava,
    },
    {
      id: 7,
      name: 'NextJs',
      value: 'nextjs',
      icon: SiNextdotjs,
    },
  ];

  const { selectedCategory, setSelectedCategory } = useCategory();

  return (
    <>
      {categories.map((category: any) => (
        <div
          onClick={() => setSelectedTechnology(category.value as Technology)}
          key={category.id}
          className="m-2 text-center hover:bg-gray-200 transition duration-300 ease-in-out rounded-lg p-4 flex flex-col justify-center items-center"
        >
          <category.icon size="2x" className="w-10 h-10" />
          <p>{category.name}</p>
        </div>
      ))}
    </>
  );
};
