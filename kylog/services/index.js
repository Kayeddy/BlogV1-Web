//IN HERE WE WRITE THE CODE THAT WILL ALLOW US TO FETCH DATA FROM the graphCMS API. This we do it after creating the respective
//elements (the data of our page) that we will need to fetch to populate our webpage. The site generates majority of the code for us.

import {request, gql } from 'graphql-request' 

const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async() => {

    const query = gql`
        query getAllPosts {
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

export const getPostDetails = async( slug ) => {

  const query = gql`
    query getPostDetails($slug: String!) {
        post(where: { slug: $slug }) {
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
        content {
          raw
        }
      }  
    }
                    
  `

  const result = await request(graphqlApi, query, { slug });
  return result.post;
}

export const getRecentPosts = async() => {
  const query = gql`
    query getPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      )
      {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `

  const result = await request(graphqlApi, query);
  return result.posts;
}

//We use this method to display articles(posts) that include some of the categories that we are aiming for except for the current article we
// are viewing. We use last: 3 to get the last 3 results.
export const getSimilarPosts = async(categories, slug) => {
  const query = gql`
    query getPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug, AND: {categories_some: {slug_in: $categories}}
        }
        last: 3
      )
      {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `

  const result = await request(graphqlApi, query, {categories, slug});
  return result.posts;
}

export const getCategories = async() => {
  const query = gql`
    query getCategories {
      categories {
        name
        slug
      }
    }
  `

  const result = await request(graphqlApi, query);
  return result.categories;
}

export const getPostByAuthor = async(author_id) => {
  
  const query = gql` 
    query getPostXauthor($author_id: ID!) {
      posts(where: {authors_every: {id: $author_id}}) 
      {
        title
        createdAt
        slug
        excerpt
        featuredImage {
        url
        }
      }
    }
  `
  const result = await request(graphqlApi, query, {author_id});
  return result.posts;
}

export const getAuthors = async() => {

  const query = gql`
      query getAllAuthors 
      {
        authorsConnection {
          edges {
            node {
              name
              id
              bio
              photo {
                url
              }
              posts {
                title
                excerpt
              }
            }
          }
        }
      }
    `

  const result = await request(graphqlApi, query);
  return result.authorsConnection.edges;
}

export const getAuthorDetails = async( id ) => {

  const query = gql`
    query getAuthorDetails($id: ID!) {
      author(where: {id: $id}) {
        bio
        name
        photo {
          url
        }
      }  
    }
                    
  `

  const result = await request(graphqlApi, query, { id });
  return result.author;
}

export const submitComment = async(comment) => {
  const result = await fetch('/api/comments', {
    method: 'POST', 
    body: JSON.stringify(comment), 
  })

  return result.json;
}