import {Book} from "lucide-react";

export default function CourseDetails({courseDetails} : any) {

    return (
        <div className='mt-5 p-5 border rounded-lg'>
            <h2 className='text-[20px] font-medium'>{courseDetails.name}</h2>
            <div className='flex items-center gap-2 mt-1.5'>
                <Book className='h-6 w-6 text-blue-600 rounded-full bg-blue-100 p-1'/>
                <h4 className='text-[12px] text-gray-400'>{courseDetails.totalChapters} Capitulos</h4>
            </div>
            <p className='line-clamp-4 mt-3 text-gray-600'>{courseDetails.description}</p>
        </div>
    );
}