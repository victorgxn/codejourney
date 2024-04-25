'use client'

import {PauseCircle, PlayCircle} from "lucide-react";
import {useEffect, useState} from "react";

export const ChapterNavigation = ({course, userCourse, setActiveChapter}: any) => {
    //console.log('info del curso -->', course);
    console.log('user course -->', userCourse);


    {/*Poner en activo, el que le des en el clic*/
    }
    const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    if (course && course.chapter) {
        setActiveChapter(course.chapter[0]);
    }
}, [course]);

    {/*Aquí va el skeleton*/}
    if (!course || !course.chapter) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <div className='border-b p-5'>
                <h2 className='font-medium text-[20px]'>{course.name}</h2>
                <h2 className='text-gray-400 text-[14px]'> Realizado por: {course.author}</h2>
            </div>
            <div>
                {course.chapter.map((chapter: any, index: number) => (
                    <div key={index}
                         onClick={() => {
                             setActiveIndex(index);
                             setActiveChapter(chapter);
                         }}
                         className={`flex gap-2 text-gray-500 text-[16px] px-5 p-4 cursor-pointer border hover:bg-grey-100
                    ${activeIndex == index ? 'bg-blue-100 text-blue-700' : null}`}>
                        {activeIndex == index ? <PauseCircle/> : <PlayCircle/>}
                        <h2>{chapter.name}</h2>
                    </div>
                ))}
            </div>
        </div>);
}
