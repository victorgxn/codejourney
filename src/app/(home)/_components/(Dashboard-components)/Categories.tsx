import { useCategoryDashboard } from '../../(routes)/dashboard/_context/CategoryDashboard';

interface FilterOption {
  id: number;
  name: string;
  value: string;
}

export const Categories = () => {
  const { selectedCategoryDashboard, setSelectedCategoryDashboard } =
    useCategoryDashboard();

  const filterOptions: FilterOption[] = [
    {
      id: 1,
      name: 'Todos',
      value: 'all',
    },
    {
      id: 2,
      name: 'Gratis',
      value: 'free',
    },
    {
      id: 3,
      name: 'React',
      value: 'react',
    },
    {
      id: 4,
      name: 'Tailwind',
      value: 'tailwind',
    },
    {
      id: 5,
      name: 'Astro',
      value: 'astro',
    },
    {
      id: 6,
      name: 'MySQL',
      value: 'mysql',
    },
    {
      id: 7,
      name: 'Laravel',
      value: 'laravel',
    },
    {
      id: 8,
      name: 'Java',
      value: 'java',
    },
    {
      id: 9,
      name: 'NextJs',
      value: 'nextjs',
    },
  ];
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {filterOptions.map(({ name, value }, index) => (
        <button
          key={index}
          onClick={() => setSelectedCategoryDashboard(value)}
          className={`border p-2 px-4 text-sm rounded-md hover:border-blue-400 font-semibold ${
            selectedCategoryDashboard === value
              ? 'border-blue-500 bg-blue-100 text-blue-700'
              : undefined
          }`}
        >
          <h3>{name}</h3>
        </button>
      ))}
    </div>
  );
};
