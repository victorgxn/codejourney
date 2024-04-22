import {Metadata} from "next";

const MASTER_URL = "https://api-eu-west-2.hygraph.com/v2/" + process.env.NEXT_PUBLIC_HYGRAPH_KEY + "/master";

import {request, gql} from "graphql-request";
import {notFound} from "next/navigation";
import VideoPlayer from "@/app/(home)/(routes)/course-preview/[courseId]/_components/VideoPlayer";

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
        const {courseList} = await getCourseById(params.courseId);

        return (
            <div className='border'>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div className='col-span-2'>
                        <VideoPlayer video={courseList.chapter[0].video.url}/>
                    </div>
                    <div>
                        Enroll Option
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        notFound();
    }
}