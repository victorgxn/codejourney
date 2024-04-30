'use client';
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

import clsx from 'clsx';

interface FilterOption {
  id: number;
  name: string;
  value: string;
  icon: any;
  primary?: string;
  accent?: string;
}

const categories: FilterOption[] = [
  {
    id: 1,
    name: 'React',
    value: 'react',
    icon: SiReact,
    primary: 'text-react-primary',
    accent: 'text-react-accent',
  },
  {
    id: 2,
    name: 'Tailwind',
    value: 'tailwind',
    icon: SiTailwindcss,
    primary: 'text-tailwind-primary',
    accent: 'text-tailwind-accent',
  },
  {
    id: 3,
    name: 'Astro',
    value: 'astro',
    icon: SiAstro,
    primary: 'text-astro-primary',
    accent: 'text-astro-accent',
  },
  {
    id: 4,
    name: 'MySQL',
    value: 'mysql',
    icon: SiMysql,
    primary: 'text-mysql-primary',
    accent: 'text-mysql-accent',
  },
  {
    id: 5,
    name: 'Laravel',
    value: 'laravel',
    icon: SiLaravel,
    primary: 'text-laravel-primary',
    accent: 'text-laravel-accent',
  },
  {
    id: 6,
    name: 'Java',
    value: 'java',
    icon: FaJava,
    primary: 'text-java-primary',
    accent: 'text-java-accent',
  },
  {
    id: 7,
    name: 'NextJs',
    value: 'nextjs',
    icon: SiNextdotjs,
    primary: 'text-nextjs-primary',
    accent: 'text-nextjs-accent',
  },
];

export const Categories = () => {
  const { selectedCategory, setSelectedCategory } = useCategory();

  return (
    <>
      {categories.map((category: any) => (
        <div
          onMouseOver={() => setSelectedCategory(category.value)}
          key={category.id}
          className={`m-2 text-center hover:bg-gray-200 transition duration-300 ease-in-out rounded-lg p-4 flex flex-col justify-center items-center cursor-pointer ${
            selectedCategory === category.value ? 'bg-gray-300' : undefined
          }`}
        >
          <category.icon className={clsx('w-10 h-10', `${category.primary}`)} />
          <p className="font-semibold">{category.name}</p>
        </div>
      ))}
    </>
  );
};
