'use client'

import {PauseCircle, PlayCircle} from "lucide-react";
import {useEffect, useState} from "react";

export const ChapterNavigation = ({courseDetails, userEnrollCourses, setActiveChapter}: any) => {

    {/*Poner en activo, el que le des en el clic*/}
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setActiveChapter(courseDetails?.chapter[0])
    }, [])
    console.log(courseDetails);

    {/*TODO: Esto da undefined problemas futuros*/}
    //console.log(userEnrollCourses)

    return (
        <div>
            <div className='border-b p-5'>
                <h2 className='font-medium text-[20px]'>{courseDetails.name}</h2>
                <h2 className='text-gray-400 text-[14px]'> Realizado por: {courseDetails.author}</h2>
            </div>
            <div>
                {courseDetails.chapter.map((chapter: any, index: number) => (
                    <div key={index}
                         onClick={() => {setActiveIndex(index); setActiveChapter(chapter )}}
                         className={`flex gap-2 text-gray-500 text-[16px] px-5 p-4 cursor-pointer border hover:bg-grey-100
                    ${activeIndex == index ? 'bg-blue-100 text-blue-700' : null}`}>
                        {activeIndex == index ? <PauseCircle/> : <PlayCircle/>}
                        <h2>{chapter.name}</h2>
                    </div>
                ))}
            </div>
        </div>);
}
