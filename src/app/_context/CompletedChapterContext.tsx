'use client';
import { useContext, useState, FC, createContext } from 'react';

const CompletedChapterContext = createContext<{
  completedChapter: any[];
  setCompletedChapter: React.Dispatch<React.SetStateAction<any[]>>;
}>({
  completedChapter: [],
  setCompletedChapter: () => {},
});

export const CompletedChapterProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [completedChapter, setCompletedChapter] = useState<any[]>([]);

  return (
    <CompletedChapterContext.Provider
      value={{ completedChapter, setCompletedChapter }}
    >
      {children}
    </CompletedChapterContext.Provider>
  );
};

export const useCompletedChapter = () => useContext(CompletedChapterContext);
