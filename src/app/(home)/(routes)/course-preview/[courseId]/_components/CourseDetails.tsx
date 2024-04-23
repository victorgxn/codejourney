import {Book} from "lucide-react";
export default function CourseDetails({courseDetails}: any) {

    return (
        <div className='mt-5 p-5 border rounded-lg'>
            <h2 className='text-[20px] font-medium'>{courseDetails.name}</h2>
            <div className='flex items-center gap-2 mt-1.5'>
                <Book className='h-6 w-6 text-blue-600 rounded-full bg-blue-100 p-1'/>
                <h4 className='text-[12px] text-gray-400'>{courseDetails.totalChapters} Capitulos</h4>
            </div>
            <p className='line-clamp-4 mt-3 text-muted-foreground mb-4'>{courseDetails.description}</p>
            <div className='flex gap-1 flex-wrap'>
                {courseDetails.tag.map((tag: string  , index: any) => (
                    <p key={index}
                       className='border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground hover:bg-blue-100 rounded-md text-center flex items-center justify-center'>
                        {tag}
                    </p>
                ))}
            </div>
        </div>
    );
}