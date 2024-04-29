'use client';
import { useContext, useState, useEffect, FC, createContext } from 'react';
import { getCourseList } from '@/app/_microservices';
interface Course {
  free: boolean;
  id: string;
  name: string;
  description: string;
  banner: {
    url: string;
  };
  tag: string;
  totalChapters: number;
  author: string;
}

interface CourseListResponse {
  courseLists: Course[];
}

const CategoryContext = createContext<{
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  courses: Course[];
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
}>({
  selectedCategory: 'react',
  setSelectedCategory: () => {},
  courses: [],
  setCourses: () => {},
});

export const CategoryProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('react');
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const getCourses = () => {
      getCourseList().then((resp: unknown) => {
        const courseListResponse = resp as CourseListResponse;
        const filteredCourses = courseListResponse.courseLists.filter(
          (course: any) => course.tag.includes(selectedCategory)
        );
        const randomCourses = filteredCourses.sort(() => Math.random() - 0.5);
        const selectedCourses = randomCourses.slice(0, 2);
        setCourses(selectedCourses);
      });
    };

    getCourses();
  }, [selectedCategory]);

  return (
    <CategoryContext.Provider
      value={{ selectedCategory, setSelectedCategory, courses, setCourses }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);
