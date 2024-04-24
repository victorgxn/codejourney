import {gql, request} from "graphql-request";

const MASTER_URL = "https://api-eu-west-2.hygraph.com/v2/" + process.env.NEXT_PUBLIC_HYGRAPH_KEY + "/master";

{/*Obtener toda la lista de cursos disponibles*/}
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
    }`

    return await request(MASTER_URL, query);
}

{/*Crear el draft para que un usuario pueda inscribirse a un curso*/}
export const EnrollCourse = async (courseId: string, userEMail: string | undefined) => {
    const mutationQuery = gql`
    mutation EnrollCourse {
        createUserEnrollCourse(data: {userEmail: "${userEMail}", courseId: "${courseId}"}) {
        id
        }
    }`

    return await request(MASTER_URL, mutationQuery);
}

{/*//TODO : Pensar mejor que estado devolver cuando se haga la peticion, facilidades futuras*/}
{/*Publicar el draft creado anteriormente*/}
export const PublishCourse = async (idDraft : string) => {
    const mutationQuery = gql`
    mutation EnrollCoursePublish {
        publishUserEnrollCourse(where: {id: "${idDraft}"}) {
            id
        }
    }`

    return await request(MASTER_URL, mutationQuery);
}