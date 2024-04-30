'use client';
import { Categories } from '@/app/(home)/_components';
import { getCourseList } from '@/app/_microservices';
import { useEffect, useState } from 'react';
import { CourseList } from '@/app/(home)/(routes)/dashboard/_components/CourseList';
import { SearchBar } from '@/app/(home)/_components/(Side-BarNav)/SearchBar';
import { useSearch } from '@/context/SearchContext';
import { useCategoryDashboard } from './_context/CategoryDashboard';

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
  const { search } = useSearch();
  const { selectedCategoryDashboard, setSelectedCategoryDashboard } =
    useCategoryDashboard();

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    getCourseList().then((resp: unknown) => {
      const courseListResponse = resp as CourseListResponse;
      setCourses(courseListResponse.courseLists);
      //console.log(courseListResponse.courseLists)
    });
  };
  return (
    <div className="max-w-screen-xl mx-auto">
      {/*Buscador responsive*/}
      <div className="px-6 pt-6 lg:hidden lg:mb-0 block">
        <SearchBar />
      </div>
      {/*Categories*/}
      {/* //TODO: Problema linea esta por aqui pero estoy cansado jefe*/}
      <div className="p-6 space-y-4">
        <Categories />
        {/*Course grid*/}
        <div>
          {/* //TODO:Hacer aqui o tener en cuenta para lo del skeleton */}
          {courses && <CourseList courses={courses} search={search} />}
        </div>
      </div>
    </div>
  );
}
