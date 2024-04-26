import {createContext} from "react";

interface CompletedChapterContextType {
    completedChapter: any[];
    setCompletedChapter: (completedChapter: any[]) => void;
}
export const CompletedChapterContext = createContext<any>(null);
