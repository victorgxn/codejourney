'use client';
import React, { useEffect, useState } from 'react';
import { getCourseList } from '@/app/_microservices';
import { CourseList } from '@/app/(home)/(routes)/dashboard/_components/CourseList';
import { Categories } from '@/app/(home)/_components';
import CourseSkeleton from '@/components/CourseSkeleton';
import { SearchBar } from '@/app/(home)/_components/(Side-BarNav)/SearchBar';
import { useSearch } from '@/context/SearchContext';

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

export default function Dashboard() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { search } = useSearch();

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    getCourseList().then((resp: unknown) => {
      const courseListResponse = resp as CourseListResponse;
      setCourses(courseListResponse.courseLists);
      setIsLoading(false); // Marcamos que la carga ha terminado
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="px-6 pt-6 lg:hidden lg:mb-0 block">
        <SearchBar />
      </div>
      <div className="p-6 space-y-4">
        <Categories />
        <div>
          {/* Mostrar el componente de esqueleto si isLoading es true */}
          {isLoading ? (
            <CourseSkeleton />
          ) : (
            // Mostrar la lista de cursos si isLoading es false
            <CourseList courses={courses} search={search} />
          )}
        </div>
      </div>
    </div>
  );
}
