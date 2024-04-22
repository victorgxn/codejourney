'use client'

import {useEffect} from "react";
import {getCourseById} from "@/app/_microservices";

interface Params {
    course: {
        Id: string;
    };
}

interface CoursePreviewProps {
    params: Params;
}

export default function CoursePreview({params}: CoursePreviewProps) {

    useEffect(() => {
        if (params && params.course) {
            getCourse(params.course.Id);
        }
    }, [])

    const getCourse = (Id: string) => {
        getCourseById(Id).then(resp => {
            console.log(resp)
        })
    }

    return (
           <div>
               Course preview
           </div>
    );
}