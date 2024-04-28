'use client';
import { useContext, useState, FC, createContext } from 'react';

const CategoryContext = createContext<{
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}>({
  selectedCategory: '',
  setSelectedCategory: () => {},
});

export const CategoryProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);
