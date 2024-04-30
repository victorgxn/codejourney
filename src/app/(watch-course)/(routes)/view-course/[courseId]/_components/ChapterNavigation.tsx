'use client';

import {CheckCircle, PauseCircle, PlayCircle} from 'lucide-react';
import {useEffect, useState} from 'react';

export const ChapterNavigation = ({
                                      course,
                                      userCourse,
                                      setActiveChapter,
                                      completedChapter,
                                  }: any) => {
    //console.log('info del curso -->', course);
    //console.log('user course -->', userCourse);
    {
        /*Poner en activo, el que le des en el clic*/
    }
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (course && course.chapter) {
            setActiveChapter(course.chapter[0]);
        }
    }, [course]);

    const isChapterCompleted = (chapterId: any) => {
        return Array.isArray(completedChapter) && completedChapter.find(
            (item: { chapterId: any }) => item.chapterId == chapterId
        );
    };

    {
        /*Aquí va el skeleton*/
    }
    if (!course || !course.chapter) {
        return <div>Cargando...</div>;
    }

    return (
        <div className='hidden lg:flex h-full w-80 flex-col fixed inset-y-0 z-50'>
            <div className="h-full border-r flex flex-col shadow-sm bg-white">
                <div className='p-8 flex flex-col border-b'>
                    <h2 className="font-semibold line-clamp-2">{course.name}</h2>
                    <h2 className="font-medium mt-2 text-blue-600 text-sm">
                        {' '}
                        Realizado por: {course.author}
                    </h2>
                </div>

                <div className='relative overflow-hidden flex flex-col w-full'>
                    <div className='h-full w-full rounded-[inherit]'>


                    {course.chapter.map((chapter: any, index: number) => (
                        <div
                            key={index}
                            onClick={() => {
                                setActiveIndex(index);
                                setActiveChapter(chapter);
                            }}
                            className={`flex gap-2 text-gray-500 text-[16px] px-5 p-4 cursor-pointer border hover:bg-grey-100
                    ${
                                activeIndex == index ? 'bg-blue-100 text-blue-700' : null
                            }`}
                        >
                            {activeIndex == index ? (
                                <PauseCircle/>
                            ) : isChapterCompleted(chapter.chapterNumber) ? (
                                <CheckCircle/>
                            ) : (
                                <PlayCircle/>
                            )}
                            <h2>{chapter.name}</h2>
                        </div>
                    ))}
                    </div>
                </div>
                {/*Hasta aquí crack*/}
            </div>
        </div>
    );
};
