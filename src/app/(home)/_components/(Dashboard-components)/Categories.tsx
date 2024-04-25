interface FilterOption {
  id: number;
  name: string;
  value: string;
}

interface CategoriesProps {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}

export const Categories = ({
  selectedCategory,
  setSelectedCategory,
}: CategoriesProps) => {
  const filterOptions: FilterOption[] = [
    {
      id: 1,
      name: 'All',
      value: 'all',
    },
    {
      id: 2,
      name: 'React',
      value: 'react',
    },
    {
      id: 3,
      name: 'Tailwind',
      value: 'tailwind',
    },
    {
      id: 4,
      name: 'Astro',
      value: 'astro',
    },
    {
      id: 5,
      name: 'MySQL',
      value: 'mysql',
    },
    {
      id: 6,
      name: 'Laravel',
      value: 'laravel',
    },
    {
      id: 7,
      name: 'Java',
      value: 'java',
    },
  ];
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {filterOptions.map(({ name, value }, index) => (
        <button
          key={index}
          onClick={() => setSelectedCategory(value)}
          className={`border p-2 px-4 text-sm rounded-md hover:border-blue-400 font-semibold ${
            selectedCategory === value
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
