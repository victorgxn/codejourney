import { gql, request } from 'graphql-request';
import { notFound } from 'next/navigation';

const MASTER_URL =
  'https://api-eu-west-2.hygraph.com/v2/' +
  process.env.NEXT_PUBLIC_HYGRAPH_KEY +
  '/master';

{
  /*Obtener toda la lista de cursos disponibles*/
}
export const getCourseList = async () => {
  const query = gql`
    query courseList {
      courseLists {
        free
        id
        name
        description
        banner {
          url
        }
        tag
        totalChapters
        author
      }
    }
  `;

  return await request(MASTER_URL, query);
};

{
  /*Query para obtener la información de un curso por él, id*/
}
export const getCourseById = async (id: string) => {
  try {
    const query = gql`
    query getCourseById {
  courseList(where: {id: "${id}"}) {
    chapter {
      ... on Chapter {
        id
        name
        chapterNumber
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
}`;
    return await request(MASTER_URL, query);
  } catch (error) {
    notFound();
  }
};

{
  /*Query para saber si el usuario está inscrito en el curso*/
}
export const isUserEnrollCourse = async (id: string, userEmail: string) => {
  try {
    const query = gql`
            query isUserEnrollCourse {
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

{
  /*Crear el draft para que un usuario pueda inscribirse a un curso*/
}
export const EnrollCourse = async (
  courseId: string,
  userEmail: string | undefined
) => {
  const mutationQuery = gql`
    mutation EnrollCourse {
        createUserEnrollCourse(data: {userEmail: "${userEmail}", courseId: "${courseId}", courseList: {connect: {id: "${courseId}"}}}) {
        id
        }
    }`;

  return await request(MASTER_URL, mutationQuery);
};

{
  /*//TODO : Pensar mejor que estado devolver cuando se haga la peticion, facilidades futuras*/
}
{
  /*Publicar el draft creado anteriormente*/
}
export const PublishCourse = async (idDraft: string) => {
  const mutationQuery = gql`
    mutation EnrollCoursePublish {
        publishUserEnrollCourse(where: {id: "${idDraft}"}) {
            id
        }
    }`;

  return await request(MASTER_URL, mutationQuery);
};

{
  /*Obtener la lista de cursos que está inscrito un usuario por el email*/
}

export const getEnrollCourses = async (userEmail: string | undefined) => {
  const query = gql`
        query getEnrollCourses {
            userEnrollCourses(where: { userEmail: "${userEmail}" }) {
                courseList {
                    banner {
                        url
                    }
                    description
                    name
                    id
                    free
                    sourceCode
                    totalChapters
                    tag
                }
            }
        }
    `;
  return await request(MASTER_URL, query);
};
