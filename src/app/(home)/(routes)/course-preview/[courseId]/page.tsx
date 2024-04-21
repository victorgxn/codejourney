'use client'

import {useEffect} from "react";
import {getCourseById} from "@/app/_microservices";

export default function CoursePreview({params}) {

    useEffect(() => {
        getCourse(params.course.Id);
    }, [])

    const getCourse = (Id: any) => {
        getCourseById(params.course.Id).then(resp => {
            console.log(resp)
        })
    }

    return (
           <div>
               Course preview
           </div>
    );
}
