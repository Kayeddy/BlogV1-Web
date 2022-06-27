import {request, gql } from 'graphql-request' 
const graphqlApi= process.env.PUBLIC_GRAPHCMS_ENDPOINT;

export const getPost = async() => {

    const query= gql`
        query myQuery {
            postsConnection {
                edges {
                  node {
                    authors {
                      bio
                      id
                      name
                      photo {
                        url
                      }
                      post {
                        categories {
                          name
                          slug
                        }
                      }
                    }
                    createdAt
                    slug
                    title
                    excerpt
                    featuredImage {
                      url
                    }
                  }
                }
            }
        }
    `

    const result = await  request(graphQlApi, query);
}