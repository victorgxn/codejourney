'use client';
import { useRef, useState, useEffect } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { getCourseList } from '@/app/_microservices';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
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

interface CourseListResponse {
  courseLists: Course[];
}

export function Cursos() {
  const [courses, setCourses] = useState<Course[]>([]);
  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    getCourseList().then((resp: unknown) => {
      const courseListResponse = resp as CourseListResponse;
      setCourses(courseListResponse.courseLists.slice(0,10));
    });
  };

  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full max-w-4xl"
    >
      <CarouselContent>
        {courses &&
          courses.map(course => {
            return (
              <CarouselItem className="basis-8/12" key={course.id}>
                <div className="p-1 border-2 border-blue-100">
                  <Link href={`/course-preview/${course.id}`}>
                    <Image
                      src={course?.banner?.url}
                      alt={course.name}
                      priority={true}
                      width={1000}
                      height={500}
                    />
                  </Link>
                </div>
                <h1 className="text-center font-semibold text-xl">
                  {course.name}
                </h1>
              </CarouselItem>
            );
          })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
