import { Metadata } from 'next';
import { gql, request } from 'graphql-request';
import { notFound } from 'next/navigation';
import VideoPlayer from '@/app/(home)/(routes)/course-preview/[courseId]/_components/VideoPlayer';
import CourseDetails from '@/app/(home)/(routes)/course-preview/[courseId]/_components/CourseDetails';
import ButtonsSection from '@/app/(home)/(routes)/course-preview/[courseId]/_components/ButtonsSection';
import EnrollmentSection from '@/app/(home)/(routes)/course-preview/[courseId]/_components/EnrollmentSection';
import { auth, clerkClient } from '@clerk/nextjs/server';

const MASTER_URL =
  'https://api-eu-west-2.hygraph.com/v2/' +
  process.env.NEXT_PUBLIC_HYGRAPH_KEY +
  '/master';

interface Props {
  params: {
    courseId: string;
  };
}

{
  /*Metadata dynamic para los cursos*/
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    // @ts-ignore
    const { courseList } = await getCourseById(params.courseId);
    return {
      title: `${courseList.name}`,
      description: `${courseList.description}`,
    };
  } catch (error) {
    return {
      title: 'Pagina del curso',
      description: 'Pagina de la empresa codejourney',
    };
  }
}

{
  /*Query para obtener la información de un curso por él, id*/
}
const getCourseById = async (id: string) => {
  try {
    const query = gql`
    query GetCourseById {
        courseList(where: {id: "${id}"}) {
            chapter {
                ... on Chapter {
                    id
                    name
                    video {
                        url
                    }
                    youtubeUrl
                }
            }
            name
            id
            free
            description
            totalChapters
            tag
            author
            banner {
                url
            }
        }
    }`;
    return await request(MASTER_URL, query);
  } catch (error) {
    notFound();
  }
};

const isUserEnrollCourse = async (id: string, userEmail: string) => {
  try {
    const query = gql`
    query IsUserEnrollCourse {
        userEnrollCourses(where: {courseId: "${id}", userEmail: "${userEmail}"}){
            courseId
            userEmail
            completedChapter {
                ... on CompletedChapter {
                    chapterId
                }
            }
        }
    }`;
    return await request(MASTER_URL, query);
  } catch (error) {
    notFound();
  }
};
export default async function CoursePreview({ params }: Props) {
  try {
    const { userId } = auth();

    const userResponse = await clerkClient.users.getUser(userId as string);

    // @ts-ignore
    const { courseList } = await getCourseById(params.courseId);

    // @ts-ignore
    const { userEnrollCourses } = await isUserEnrollCourse(
      params.courseId,
      userResponse.emailAddresses[0].emailAddress
    );

    //console.log(courseList);
    //console.log(userEnrollCourses);
    return (
      <div className="p-6 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-2">
            {courseList.chapter[0]?.video?.url && (
              <VideoPlayer video={courseList.chapter[0]?.video.url} />
            )}
            {courseList.chapter[0]?.youtubeUrl && (
              <div className="border rounded-lg p-3">
                <h2 className="text-gray-400 mb-3">Vista previa del curso</h2>
                <div
                  style={{
                    position: 'relative',
                    paddingBottom: '56.25%',
                    height: 0,
                    overflow: 'hidden',
                    maxWidth: '100%',
                  }}
                >
                  <iframe
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                    src={courseList.chapter[0].youtubeUrl}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
            <CourseDetails courseDetails={courseList} />
          </div>
          <div className="mt-5 md:mt-0">
            <ButtonsSection />
            <EnrollmentSection
              courseDetails={courseList}
              userEnrollCourses={userEnrollCourses}
            />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    //console.log(error);
    notFound();
  }
}
