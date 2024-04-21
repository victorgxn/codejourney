import {request, gql} from "graphql-request";

const MASTER_URL = "https://api-eu-west-2.hygraph.com/v2/" + process.env.NEXT_PUBLIC_HYGRAPH_KEY + "/master";

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
        }
    }`

    const data = await request(MASTER_URL, query);
    return data;
}

export const getCourseById = async (id: string) => {
    const query = gql`
    query course {
        courseList(where: {id: "` + id + `"}) {
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

}