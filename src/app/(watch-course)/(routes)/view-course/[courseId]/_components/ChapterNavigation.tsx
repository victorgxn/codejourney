'use client'

import {PlayCircle} from "lucide-react";
import {useState} from "react";

export const ChapterNavigation = ({courseDetails, userEnrollCourses} : any) => {


    {/*TODO: Creo que la he cagado, puede ser mas rentable llamar a la función dentro de un useEffect con el segundo parámetro [] para que se llame solo una vez a la petición API*/}
    const [activeIndex, setActiveIndex] = useState(0);
    //console.log(courseDetails);
    //console.log(userEnrollCourses)

    return (
        <div>
            <div className='border-b p-5'>
                <h2 className='font-medium text-[20px]'>{courseDetails.name}</h2>
                <h2 className='text-gray-400 text-[14px]'> Realizado por: {courseDetails.author}</h2>
            </div>
            <div>
                {courseDetails.chapter.map((chapter : [], index : number) => (
                    <div key={index} className={`flex gap-2 text-gray-500 text-[16px] px-5 p-4 cursor-pointer border hover:bg-grey-100
                    ${activeIndex == index ? 'bg-blue-100 text-blue-800' : null}`}>
                        <PlayCircle/>
                        <h2>{chapter.name}</h2>
                    </div>
                ))}
            </div>
        </div>  );
}
