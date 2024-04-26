'use client';
import { useContext, useState, FC, createContext } from 'react';

const SearchContext = createContext<{
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}>({
  search: '',
  setSearch: () => {},
});

export const SearchProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
