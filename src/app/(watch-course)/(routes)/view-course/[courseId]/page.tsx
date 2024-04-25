'use client'

import {notFound} from "next/navigation";
import {ChapterNavigation} from "@/app/(watch-course)/(routes)/view-course/[courseId]/_components/ChapterNavigation";
import {ChapterVideoPlayer} from "@/app/(watch-course)/(routes)/view-course/[courseId]/_components/VideoPlayer";
import {useUser} from "@clerk/nextjs";
import {useEffect} from "react";
import {getCourseById, isUserEnrollCourse} from "@/app/_microservices";



export default function ChapterPage({params}: any) {
  const {user} = useUser()

  useEffect(() => {
    if (user) {
      getCourse().catch(console.error)
      userEnrollCourses().catch(console.error)
    }
  }, [user])

  const getCourse = async () => {
    try {
      const response = await getCourseById(params?.courseId)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  const userEnrollCourses = async () => {
    try {
      const response = await isUserEnrollCourse(params?.courseId, user?.primaryEmailAddress?.emailAddress)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  try {
    return (
      <div className='flex'>
        <div className='w-72 border shawdow-sm h-screen z-50'>
          <ChapterNavigation/>
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