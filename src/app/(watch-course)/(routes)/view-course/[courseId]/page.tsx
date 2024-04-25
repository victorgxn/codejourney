'use client'

import {notFound} from "next/navigation";
import {ChapterNavigation} from "@/app/(watch-course)/(routes)/view-course/[courseId]/_components/ChapterNavigation";
import {ChapterVideoPlayer} from "@/app/(watch-course)/(routes)/view-course/[courseId]/_components/VideoPlayer";
import {UserButton, useUser} from "@clerk/nextjs";
import {useEffect, useState} from "react";
import {getCourseById, isUserEnrollCourse} from "@/app/_microservices";

export default function ChapterPage({params}: any) {
  const {user} = useUser()
  const [course, setCourse] = useState([]);
  const [userCourse, setUserCourse] = useState();
  const [activeChapter, setActiveChapter] = useState();

  useEffect(() => {
    if (user) {
      getCourse().catch(console.error)
      userEnrollCourses().catch(console.error)
    }
  }, [user])

  const getCourse = async () => {
    try {
      await getCourseById(params?.courseId)
          .then(response => {
            //console.log(response)
            // @ts-ignore
            setCourse(response.courseList);
            // @ts-ignore || única solución que se me ha ocurrido para inicializar el video al primero y que no llegue null
            setActiveChapter(response.courseList.chapter[0])
          })


    } catch (error) {
      console.error(error)
    }
  }

  const userEnrollCourses = async () => {
    try {
      await isUserEnrollCourse(params?.courseId, user?.primaryEmailAddress?.emailAddress)
          .then(response => {
            console.log('respuesta del userEnrollCourses -->', response)
            // @ts-ignore
            setUserCourse(response.userEnrollCourses)
          })

    } catch (error) {
      console.error(error)
    }
  }

  try {
    return (
      <div className='flex'>
        <div className='w-72 border shawdow-sm h-screen z-50'>
          <ChapterNavigation course={course} userCourse={userCourse} setActiveChapter={setActiveChapter} />
        </div>
        <div>
            <div className='float-right p-5'>
                <UserButton/>
            </div>
          <ChapterVideoPlayer activeChapter={activeChapter}/>
        </div>
      </div>
    )
  } catch (error) {
    console.error(error)
    notFound()
  }
}