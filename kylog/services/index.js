//IN HERE WE WRITE THE CODE THAT WILL ALLOW US TO FETCH DATA FROM the graphCMS API. This we do it after creating the respective
//elements (the data of our page) that we will need to fetch to populate our webpage. The site generates majority of the code for us.

import {request, gql } from 'graphql-request' 

const graphqlApi = 'https://api-ca-central-1.graphcms.com/v2/cl4q0a7gl2zck01w7cyyt93jj/master';

export const getPosts = async() => {

    const query = gql`
        query MyQuery {
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
                        }
                        createdAt
                        slug
                        title
                        excerpt
                        featuredImage {
                          url
                        }
                        categories {
                          name 
                          slug
                        }
                      }
                    }
                }
              }
    `

    const result = await request(graphqlApi, query);
    return result.postsConnection.edges;
}