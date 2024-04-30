'use client';

import {notFound} from 'next/navigation';
import {ChapterNavigation} from '@/app/(watch-course)/(routes)/view-course/[courseId]/_components/ChapterNavigation';
import {ChapterVideoPlayer} from '@/app/(watch-course)/(routes)/view-course/[courseId]/_components/VideoPlayer';
import {UserButton, useUser} from '@clerk/nextjs';
import {useEffect, useState} from 'react';

import {
    PublishCourse,
    getCourseById,
    isUserEnrollCourse,
    updateCompletedChapter,
} from '@/app/_microservices';
import TopBar from "@/app/(watch-course)/(routes)/view-course/[courseId]/_components/TopBar";

export default function ChapterPage({params}: any) {

    interface UserCourseType {
        id: string; // replace 'string' with the actual type of 'id'
        // include other properties as needed
    }

    interface ActiveChapterType {
        chapterNumber: number; // replace 'number' with the actual type of 'chapterNumber'
        // include other properties as needed
    }

    const {user} = useUser();
    const [course, setCourse] = useState([]);
    const [userCourse, setUserCourse] = useState<UserCourseType[] | undefined>();
    const [completedChapter, setCompletedChapter] = useState();
    const [activeChapter, setActiveChapter] = useState<ActiveChapterType | undefined>();

    useEffect(() => {
        if (user) {
            getCourse().catch(console.error);
            userEnrollCourses().catch(console.error);
        }
    }, [user]);

    const getCourse = async () => {
        try {
            await getCourseById(params?.courseId).then(response => {
                //console.log('respuesta del getCourseByid', response);
                // @ts-ignore
                setCourse(response.courseList);
            });
        } catch (error) {
            console.error(error);
        }
    };

    interface ResponseType {
        userEnrollCourses: {
            completedChapter: any; // replace 'any' with the actual type
        }[];
    }

    const userEnrollCourses = async () => {
        try {
            if (user && user.primaryEmailAddress) {
                await isUserEnrollCourse(
                    params?.courseId,
                    user.primaryEmailAddress.emailAddress
                ).then((response: unknown) => {
                    const typedResponse = response as ResponseType;
                    // @ts-ignore
                    setUserCourse(typedResponse.userEnrollCourses);
                    setCompletedChapter(typedResponse.userEnrollCourses[0].completedChapter);
                });
            }
        } catch (error) {
            console.error(error);
        }
    }

    const updatedCompletedChapter = async () => {
        try {
            if (user?.primaryEmailAddress?.emailAddress && userCourse?.[0]?.id && activeChapter?.chapterNumber) {
                await updateCompletedChapter(
                    user.primaryEmailAddress.emailAddress,
                    userCourse[0].id,
                    activeChapter.chapterNumber
                ).then((response: any) => {
                    setCompletedChapter(response.updateUserEnrollCourse.completedChapter);
                });
            }
        } catch (error) {
            console.error(error);
        }
    };

    try {
        return (
            <div className="h-full">
                    <TopBar/>
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
