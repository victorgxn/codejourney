'use client'

import {notFound} from "next/navigation";
import {ChapterNavigation} from "@/app/(watch-course)/(routes)/view-course/[courseId]/_components/ChapterNavigation";
import {ChapterVideoPlayer} from "@/app/(watch-course)/(routes)/view-course/[courseId]/_components/VideoPlayer";
import {useUser} from "@clerk/nextjs";
import {useEffect, useState} from "react";
import {getCourseById, isUserEnrollCourse} from "@/app/_microservices";

export default function ChapterPage({params}: any) {
  const {user} = useUser()
  const [course, setCourse] = useState([]);
  const [userCourse, setUserCourse] = useState();

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
          })


    } catch (error) {
      console.error(error)
    }
  }

  const userEnrollCourses = async () => {
    try {
      await isUserEnrollCourse(params?.courseId, user?.primaryEmailAddress?.emailAddress)
          .then(response => {
            //console.log(response)
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
          <ChapterNavigation course={course} userCourse={userCourse}/>
        </div>
        <div>
          <ChapterVideoPlayer/>
        </div>
      </div>
    )
  } catch (error) {
    console.error(error)
    notFound()
  }
}