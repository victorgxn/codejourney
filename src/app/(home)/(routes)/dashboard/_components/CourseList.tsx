import { useCategoryDashboard } from '../_context/CategoryDashboard';

import Image from 'next/image';
import { Book } from 'lucide-react';
import Link from 'next/link';

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

interface CourseListProps {
  courses?: Course[];
  search?: string;
}

export const CourseList = ({ courses, search }: CourseListProps) => {
  const { selectedCategoryDashboard } = useCategoryDashboard();
  const cursosFiltrados = (courses ?? []).filter(course => {
    let categoryMatch = false;
    if (selectedCategoryDashboard === 'free') {
      categoryMatch = course.free;
    } else {
      categoryMatch =
        selectedCategoryDashboard === 'all' ||
        course.tag.includes(selectedCategoryDashboard);
    }

    const searchMatch =
      !search || course.name.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
      {(cursosFiltrados ?? []).map(course => (
        <Link href={'/course-preview/' + course.id} key={course.id}>
          <div className="border rounded-lg p-2 hover:border-blue-400 cursor-pointer">
            <Image
              src={course?.banner?.url}
              alt={course.name}
              width={1000}
              height={500}
              className="w-70 h-40 rounded-lg object-cover"
              priority={false}
            />
            <div className="mt-1.5">
              <h2 className="text-[18px] md:text-[16] font-medium ">
                {course.name}
              </h2>
              <h2 className="text-gray-400 text-[13px]">
                {course?.author ?? 'Codejourney'}
              </h2>
            </div>
            <div className="flex items-center gap-2 mt-1.5">
              <Book className="h-6 w-6 text-blue-600 rounded-full bg-blue-100 p-1" />
              <h4 className="text-[12px] text-gray-400">
                {course.totalChapters} Capitulos
              </h4>
            </div>
            <h3 className="text-[14px]">
              {course.free ? 'Gratis' : 'De pago'}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};
