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
      courseLists(first: 50) {
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
        chapter {
          ... on Chapter {
            name
            id
          }
        }
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
                    id
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

// Actualizar cursos completados

export const updateCompletedChapter = async (
  userEmail: string | undefined,
  userEnrollId: string,
  chapterId: number
) => {
  const mutationQuery = gql`
    mutation CompletedChapter {
      updateUserEnrollCourse(
        where: { id: "${userEnrollId}" }
        data: {
          userEmail: "${userEmail}"
          completedChapter: {
            create: { CompletedChapter: { data: { chapterId: "${chapterId}" } } }
          }
        }
      )
      {
        completedChapter {
          ... on CompletedChapter {
            chapterId
          }
        }
      }
      publishUserEnrollCourse(where: {id: "${userEnrollId}"}) {
        id
      }
    }
  `;
  return await request(MASTER_URL, mutationQuery, {
    userEmail,
    userEnrollId,
    chapterId,
  });
};

export const createAsset = async (url: string) => {
  const query = gql`
    mutation createAsset {
      createAsset(data: { uploadUrl: "${url}" }) {
        id
      }
    }
  `;
  try {
    return await request(MASTER_URL, query);
  } catch (error) {
    throw error;
  }
};

export const publishAsset = async (id: string) => {
  const query = gql`
    mutation publishAsset {
      publishAsset(where: {id: "${id}"}) {
        id
      }
    }
  `;
  try {
    return await request(MASTER_URL, query);
  } catch (error) {
    throw error;
  }
};

export const publishCourse = async (id: string) => {
  const query = gql`
    mutation publishCourse {
      publishCourseList(where: {id: "${id}"}) {
        id
      }
    }
  `;
  try {
    return await request(MASTER_URL, query);
  } catch (error) {
    throw error;
  }
};

export const createCourse = async (
  name: string,
  tag: string[],
  totalChapters: number,
  free: boolean,
  bannerId: string,
  chapters: { name: string; chapterNumber: number; youtubeUrl: string }[],
  description?: string,
  author?: string
) => {
  const createCourseMutation = gql`
    mutation CreateCourse(
      $name: String!
      $tag: [Tags!]!
      $totalChapters: Int!
      $free: Boolean!
      $description: String
      $author: String
      $bannerId: ID!
      $chapters: [CourseListchapterUnionCreateInput!]!
    ) {
      createCourseList(
        data: {
          name: $name
          free: $free
          tag: $tag
          totalChapters: $totalChapters
          description: $description
          author: $author
          banner: { connect: { id: $bannerId } }
          chapter: { create: $chapters }
        }
      ) {
        id
      }
    }
  `;

  try {
    return await request(MASTER_URL, createCourseMutation, {
      name,
      tag,
      totalChapters,
      free,
      description,
      author,
      bannerId,
      chapters: chapters.map(chapter => ({
        Chapter: {
          name: chapter.name,
          youtubeUrl: chapter.youtubeUrl,
          chapterNumber: chapter.chapterNumber,
        },
      })),
    });
  } catch (error) {
    throw error;
  }
};

export const deleteCourse = async (id: string) => {
  const query = gql`
    mutation deleteCourse {
      deleteCourseList(where: {id: "${id}"}) {
        id
      }
      deleteManyUserEnrollCoursesConnection(where: {courseId: "${id}"}) {
        edges {
          node {
            id
          }
        }
      }
    }
  `;
  try {
    return await request(MASTER_URL, query);
  } catch (error) {
    throw error;
  }
};
