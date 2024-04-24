import {ChapterNavigation} from "@/app/(watch-course)/(routes)/view-course/[courseId]/_components/ChapterNavigation";
import {ChapterVideoPlayer} from "@/app/(watch-course)/(routes)/view-course/[courseId]/_components/VideoPlayer";
import {Metadata} from "next";
import {gql, request} from "graphql-request";
import {notFound} from "next/navigation";
import {auth, clerkClient} from "@clerk/nextjs";
import {useState} from "react";
'use client'
{/*TODO: Sacar a un componente o a la carpeta microservices estas funciones se repite codigo con la pagina de CoursePreview*/
}

const MASTER_URL = "https://api-eu-west-2.hygraph.com/v2/" + process.env.NEXT_PUBLIC_HYGRAPH_KEY + "/master";

interface Props {
    params: {
        courseId: string
    };
}

{/*Metadata dynamic para los cursos*/}
export async function generateMetadata({params}: Props): Promise<Metadata> {
    try {
        // @ts-ignore
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

{/*Query para obtener la información de un curso por él, id*/
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
    free
    description
    totalChapters
    tag
    author
  }
}`
        return await request(MASTER_URL, query);
    } catch (error) {
        notFound();
    }

}


{/*Query para saber si el usuario está inscrito en el curso*/
}
{/*A diferencia del course-preview necesitamos esta función aquí por el dato de retorno completedChapter*/
}
const isUserEnrollCourse = async (id: string, userEmail: string) => {
    try {
        const query = gql`
    query course {
    userEnrollCourses(where: {courseId: "${id}", userEmail: "${userEmail}"}){
    courseId
    userEmail
    completedChapter
  }
}`
        return await request(MASTER_URL, query);
    } catch (error) {
        notFound();
    }

}

export default  function ChapterPage({params}: Props) {


    try {

        const [activeChapter, setActiveChapter] = useState()

        const {userId} = auth();

        const userResponse = await clerkClient.users.getUser(userId as string);

        // @ts-ignore
        const {courseList} = await getCourseById(params.courseId);

        // @ts-ignore
        const {userEnrollCourses} = await isUserEnrollCourse(params.courseId, userResponse.emailAddresses[0].emailAddress);

        //console.log(courseList);
        //console.log(userEnrollCourses);

        return (
            <div className='flex'>
                <div className='w-72 border shawdow-sm h-screen z-50'>
                    <ChapterNavigation
                        courseDetails={courseList}
                        userEnrollCourse={userEnrollCourses}
                        setActiveChapter={(chapter) => setActiveChapter(chapter)}
                    />
                </div>
                <div>
                    <ChapterVideoPlayer activeChapter = {activeChapter}/>
                </div>
            </div>
        );

    } catch (error) {
        console.log(error);
        notFound();
    }
}