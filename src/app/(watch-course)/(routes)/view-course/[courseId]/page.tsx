'use client';

import { notFound } from 'next/navigation';
import { ChapterNavigation } from '@/app/(watch-course)/(routes)/view-course/[courseId]/_components/ChapterNavigation';
import { ChapterVideoPlayer } from '@/app/(watch-course)/(routes)/view-course/[courseId]/_components/VideoPlayer';
import { UserButton, useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { getCourseById, isUserEnrollCourse } from '@/app/_microservices';
import { CompletedChapterContext } from '@/app/_context/CompletedChapterContext';

export default function ChapterPage({ params }: any) {
  const { user } = useUser();
  const [course, setCourse] = useState([]);
  const [userCourse, setUserCourse] = useState();
  const [activeChapter, setActiveChapter] = useState();
  const [completedChapter, setCompletedChapter] = useState();

  useEffect(() => {
    if (user) {
      getCourse().catch(console.error);
      userEnrollCourses().catch(console.error);
    }
  }, [user]);

  const getCourse = async () => {
    try {
      await getCourseById(params?.courseId).then(response => {
        console.log('respuesta del getCourseByid', response);
        // @ts-ignore
        setCourse(response.courseList);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const userEnrollCourses = async () => {
    try {
      // @ts-ignore
      await isUserEnrollCourse(
        params?.courseId,
        user.primaryEmailAddress.emailAddress
      ).then(response => {
        //console.log('respuesta del userEnrollCourses -->', response)
        //console.log('Complete chapter',response.userEnrollCourses[0].completedChapter)
        // @ts-ignore
        setUserCourse(response.userEnrollCourses);
        // @ts-ignore
        setCompletedChapter(response.userEnrollCourses[0].completedChapter);
      });
    } catch (error) {
      console.error(error);
    }
  };

  try {
    return (
      <div className="">
        <CompletedChapterContext.Provider
          value={{ completedChapter: [], setCompletedChapter: () => {} }}
        >
          <div className="hidden fixed bg-white md:block md:w-80 border shadow-sm h-screen z-50">
            <ChapterNavigation
              course={course}
              userCourse={userCourse}
              setActiveChapter={(chapter: any) => setActiveChapter(chapter)}
            />
          </div>
          <div className="ml-80">
            <div className="float-right p-5">
              <UserButton />
            </div>
            <ChapterVideoPlayer activeChapter={activeChapter} />
          </div>
        </CompletedChapterContext.Provider>
      </div>
    );
  } catch (error) {
    console.error(error);
    notFound();
  }
}
