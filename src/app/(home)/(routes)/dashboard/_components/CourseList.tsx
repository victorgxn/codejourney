import Image from "next/image";

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
        <div>
            {courses && courses.map((course, index) => (
                <div key={index} className='group hover:shadow-sm border transition overflow-hidden rounded-lg h-full flex flex-col bg-white'>
                tetas
                </div>
            ))}
        </div>
    );
}