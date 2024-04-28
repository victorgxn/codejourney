'use client';

import { notFound } from 'next/navigation';
import { ChapterNavigation } from '@/app/(watch-course)/(routes)/view-course/[courseId]/_components/ChapterNavigation';
import { ChapterVideoPlayer } from '@/app/(watch-course)/(routes)/view-course/[courseId]/_components/VideoPlayer';
import { UserButton, useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import {
  PublishCourse,
  getCourseById,
  isUserEnrollCourse,
  updateCompletedChapter,
} from '@/app/_microservices';

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

  const updatedCompletedChapter = async () => {
    try {
      await updateCompletedChapter(
        user?.primaryEmailAddress?.emailAddress,
        userCourse?.[0]?.id,
        activeChapter?.chapterNumber
      ).then((response: any) => {
        setCompletedChapter(response.updateUserEnrollCourse.completedChapter);
      });
    } catch (error) {
      console.error(error);
    }
  };

  try {
    return (
      <div className="">
        <div className="hidden fixed bg-white md:block md:w-80 border shadow-sm h-screen z-50">
          <ChapterNavigation
            course={course}
            userCourse={userCourse}
            activeChapter={activeChapter}
            setActiveChapter={setActiveChapter}
            completedChapter={completedChapter}
          />
        </div>
        <div className="ml-80">
          <div className="float-right p-5">
            <UserButton />
          </div>
          <ChapterVideoPlayer
            handleCompletedChapter={updatedCompletedChapter}
            activeChapter={activeChapter}
            completedChapter={completedChapter}
          />
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    notFound();
  }
}
