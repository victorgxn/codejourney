'use client'
import {Categories} from "@/app/(home)/_components";
import {Search} from "lucide-react";
import {getCourseList} from "@/app/_microservices";
import {useEffect} from "react";

export default function Dashboard() {

    useEffect(() => {
        getCourseList()
    }, [])

    const getCourses = () => {
        getCourseList().then(resp => {
            console.log(resp)
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
           <div className='p-6 space-y-4'>
               <Categories/>
           </div>
           {/*Course grid*/}
           <div>
               <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6'>

               </div>
           </div>
       </div>
    )


}