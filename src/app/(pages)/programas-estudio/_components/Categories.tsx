import {
  SiAstro,
  SiReact,
  SiTailwindcss,
  SiMysql,
  SiLaravel,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

interface FilterOption {
  id: number;
  name: string;
  value: string;
  icon: any;
}

interface CategoriesProps {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}

export const Categories = ({
  selectedCategory,
  setSelectedCategory,
}: CategoriesProps) => {
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
  ];
  return (
    <>
      {categories.map((category: any) => (
        <div
          onClick={() => setSelectedCategory(category.value)}
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
