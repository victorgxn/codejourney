'use client';
import { useContext, useState, FC, createContext } from 'react';

const CategoryContext = createContext<{
  selectedCategoryDashboard: string;
  setSelectedCategoryDashboard: React.Dispatch<React.SetStateAction<string>>;
}>({
  selectedCategoryDashboard: 'react',
  setSelectedCategoryDashboard: () => {},
});

export const CategoryDashboard: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedCategoryDashboard, setSelectedCategoryDashboard] =
    useState<string>('react');
  return (
    <CategoryContext.Provider
      value={{ selectedCategoryDashboard, setSelectedCategoryDashboard }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryDashboard = () => useContext(CategoryContext);
