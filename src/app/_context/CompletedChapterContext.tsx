import React, {createContext} from "react";

type CompletedChapterContextType = {
    completedChapter: any;
    setCompletedChapter: React.Dispatch<React.SetStateAction<any>>;
};

export const CompletedChapterContext = React.createContext<CompletedChapterContextType | null>(null);
