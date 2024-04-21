import Image from "next/image";
import {Book} from "lucide-react";

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

interface CourseListProps {
    courses?: Course[]
}

export const CourseList = ({courses}: CourseListProps) => {

    // @ts-ignore
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
            {courses && courses.map((course, index) => (
                <div key={index} className='border rounded-lg p-2 hover:border-blue-400 cursor-pointer'>
                    <Image src={course.banner.url}
                           alt={course.name}
                           width={1000}
                           height={500}
                           className='rounded-lg'
                    />
                    <div className='mt-1.5'>
                        <h2 className='text-[18px] md:text-[16] font-medium '>{course.name}</h2>
                        <h2 className='text-gray-400 text-[13px]'>victor-g</h2>
                    </div>
                    <div className='flex items-center gap-2 mt-1.5'>
                        <Book className='h-6 w-6 text-blue-600 rounded-full bg-blue-100 p-1'/>
                        <h4 className='text-[12px] text-gray-400'>{course.totalChapters} Capitulos</h4>
                    </div>
                    <h3 className='text-[14px]'>{course.free? 'Gratis' : 'De pago'}</h3>
                </div>
            ))}
        </div>
    );
}