import {Metadata} from "next";

const MASTER_URL = "https://api-eu-west-2.hygraph.com/v2/" + process.env.NEXT_PUBLIC_HYGRAPH_KEY + "/master";

import {request, gql} from "graphql-request";
import {useEffect} from "react";
import {notFound} from "next/navigation";

interface Props {
    params: {
        courseId: string
    };
}


export async function generateMetadata({params}: Props): Promise<Metadata> {
    try {
        const {courseList} = await getCourseById(params.courseId)
        return {
            title: `${courseList.name}`,
            description: `${courseList.description}`,
        }
    } catch (error) {
        return {
            title: 'Pagina del curso',
            description: 'Pagina de la empresa codejourney'
        }
    }
}

{/*TODO: Mejorar escalabilidad creando una interface*/
}
const getCourseById = async (id: string) => {

    try {
        const query = gql`
    query course {
  courseList(where: {id: "${id}"}) {
    chapter {
      ... on Chapter {
        id
        name
        video {
          url
        }
      }
    }
    name
    id
    description
    totalChapters
  }
}`

        const result = await request(MASTER_URL, query)
        return result;
    } catch (error) {
        notFound();
    }

}


export default async function CoursePreview({params}: Props) {

    try {
        const {courseList} = await getCourseById(params.courseId)
        console.log(courseList)
        return (
            <div>
                {courseList.name}
                {courseList.description}
            </div>
        );
    } catch (error) {
        notFound();
    }
}