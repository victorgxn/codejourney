'use client';

import { getEnrollCourses } from '@/app/_microservices';
import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Book } from 'lucide-react';

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

interface UserEnrollCourse {
  courseId: string;
  userEmail: string;
  completedChapter: { chapterId: string }[];
  courseList: Course[];
}

export default function CursosInscritos() {
  const { user } = useUser();

  const [userCourseList, setUserCourseList] = useState<UserEnrollCourse[]>([]);
  const [loading, setLoading] = useState(true); // Nuevo estado para el indicador de carga
  useEffect(() => {
    user ? getUserCourse() : null;
  }, [user]);

 interface ResponseType {
  userEnrollCourses: UserEnrollCourse[];
}

const getUserCourse = async () => {
  await getEnrollCourses(user?.primaryEmailAddress?.emailAddress)
    .then((response: unknown) => {
      const typedResponse = response as ResponseType;
      //console.log('userEnrollList', typedResponse);
      if (typedResponse) {
        setUserCourseList(typedResponse.userEnrollCourses);
      }
    })
    .finally(() => setLoading(false));
};

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="p-6 space-y-4 ">
        <div
          className="items-center justify-center flex text-3xl font-bold md:pb-10 px-10
bg-gradient-to-r
from-blue-500
to-green-300
bg-clip-text
text-transparent"
        >
          Bienvenido de nuevo, {user?.username} continua con tus cursos y
          mejora tus conocimientos!
        </div>
        <div>
          {userCourseList.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
              {userCourseList
                .flatMap(enrollCourse => enrollCourse.courseList)
                .map((course, index) => (
                  <Link href={'/course-preview/' + course?.id} key={course?.id}>
                    <div className="border rounded-lg p-2 hover:border-blue-400 cursor-pointer">
                      <Image
                        src={course?.banner.url}
                        alt={course?.name}
                        width={1000}
                        height={500}
                        className="w-70 h-40 rounded-lg object-cover"
                        priority={false}
                      />
                      <div className="mt-1.5">
                        <h2 className="text-[18px] md:text-[16] font-medium ">
                          {course?.name}
                        </h2>
                        <h2 className="text-gray-400 text-[13px]">
                          {course?.author ?? 'Codejourney'}
                        </h2>
                      </div>
                      <div className="flex items-center gap-2 mt-1.5">
                        <Book className="h-6 w-6 text-blue-600 rounded-full bg-blue-100 p-1" />
                        <h4 className="text-[12px] text-gray-400">
                          {course?.totalChapters} Capítulos
                        </h4>
                      </div>
                      <h3 className="text-[14px]">
                        {course?.free ? 'Gratis' : 'De pago'}
                      </h3>
                    </div>
                  </Link>
                ))}
            </div>
          ) : (
            <div className="items-center justify-center flex text-3xl font-bold md:pb-10 px-10">
              No estás inscrito en ningún curso.
              <Link
                className="text-blue-500 hover:text-blue-300"
                href="/dashboard"
              >
                Ver cursos disponibles
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
