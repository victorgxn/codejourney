'use client'
import {Categories} from "@/app/(home)/_components";
import {Search} from "lucide-react";
import {getCourseList} from "@/app/_microservices";
import {useEffect, useState} from "react";
import {CourseList} from "@/app/(home)/(routes)/dashboard/_components/CourseList";

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
}

interface CourseListResponse {
    courseLists: Course[];
}

export default function Dashboard() {

    const [courses,setCourses] = useState<Course[]>([])

    useEffect(() => {
        getCourses()
    }, [])

    const getCourses = () => {
        // @ts-ignore
        getCourseList().then((resp: CourseListResponse) => {
            setCourses(resp.courseLists)
            console.log(resp.courseLists)
        })
    }
    return (
        <div className='max-w-screen-xl mx-auto'>
            {/*Buscador responsive*/}
            <div className="px-6 pt-6 lg:hidden lg:mb-0 block">
                <form className="flex items-center relative"><input
                    className="flex h-10 border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full lg:w-[600px] rounded-lg rounded-r-none focus-visible:ring-transparent pr-8"
                    placeholder="Search for a course"/>
                    <button
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-sky-700 text-white hover:bg-sky-700/80 h-10 px-4 py-2 rounded-l-none"
                        type="submit">
                        <Search className="w-5 h-5" color="#ffffff"/>
                    </button>
                </form>
            </div>
            {/*Categories*/}
            {/* //TODO: Problema linea esta por aqui pero estoy cansado jefe*/}
            <div className='p-6 space-y-4'>
                <Categories/>
                {/*Course grid*/}
                <div>
                        {/* //TODO:Hacer aqui o tener en cuenta para lo del skeleton */}
                            { courses? <CourseList courses={courses}/>: null}
                </div>
            </div>
        </div>
    )

}