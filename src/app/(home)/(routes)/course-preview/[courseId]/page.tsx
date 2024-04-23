import {Metadata} from "next";
import {gql, request} from "graphql-request";
import {notFound} from "next/navigation";
import VideoPlayer from "@/app/(home)/(routes)/course-preview/[courseId]/_components/VideoPlayer";
import CourseDetails from "@/app/(home)/(routes)/course-preview/[courseId]/_components/CourseDetails";
import ButtonsSection from "@/app/(home)/(routes)/course-preview/[courseId]/_components/ButtonsSection";
import EnrollmentSection from "@/app/(home)/(routes)/course-preview/[courseId]/_components/EnrollmentSection";
import {auth, clerkClient} from "@clerk/nextjs";

const MASTER_URL = "https://api-eu-west-2.hygraph.com/v2/" + process.env.NEXT_PUBLIC_HYGRAPH_KEY + "/master";

interface Props {
    params: {
        courseId: string
    };
}

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

const getCourseById = async (id: string, userEmail: string) => {
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
    tag
  }
   userEnrollCourses(where: {courseId: "${id}, userEmail: "${userEmail}}){
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

export default async function CoursePreview({params}: Props) {

    try {

        const { userId } = auth();

        const userResponse = await clerkClient.users.getUser(userId);


        // @ts-ignore
        const {courseList} = await getCourseById(params.courseId, userResponse?.emailAddresses[0]?.emailAddress );

        return (
            <div className='p-6 max-w-screen-xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div className='col-span-2'>
                        <VideoPlayer video={courseList.chapter[0].video.url}/>
                        <CourseDetails courseDetails={courseList}/>
                    </div>
                    {/*TODO: Arreglar responsive*/}
                    <div className='mt-5 md:mt-0'>
                        <ButtonsSection/>
                        <EnrollmentSection courseDetails={courseList}/>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        notFound();
    }
}