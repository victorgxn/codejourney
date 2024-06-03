'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { getCourseList, deleteCourse } from '@/app/_microservices';

import { CourseForm } from './CourseForm';
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
export const CoursesTable = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    getCourseList().then((resp: unknown) => {
      const courseListResponse = resp as CourseListResponse;
      setCourses(courseListResponse.courseLists);
    });
  };

  const handleDeleteCourse = (id: string) => {
    deleteCourse(id).then(() => {
      getCourses();
    });
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Crear Curso</Button>
        </DialogTrigger>
        <DialogContent className="w-full max-h-[700px] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Crear Curso</DialogTitle>
          </DialogHeader>
          <CourseForm />
        </DialogContent>
      </Dialog>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-3">
        {courses.map(course => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-lg p-5 flex flex-col"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">{course.name}</h3>
              <div className="flex items-center">
                <Button
                  onClick={() => handleDeleteCourse(course.id)}
                  variant="outline"
                >
                  Eliminar
                </Button>
              </div>
            </div>
            <div className="flex mt-5">
              <ul className="list-decimal pl-6 lg:w-96 mr-5">
                <li className="font-bold flex">
                  Autor: {course.author ?? 'Codejourney'}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
