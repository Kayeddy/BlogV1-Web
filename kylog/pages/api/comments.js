// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { GraphQLClient, gql } from 'graphql-request'


const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphCmsToken = process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN;

export default async function comments(req, res) {

    const client = new GraphQLClient(graphqlApi, {
        headers: {
            authorization: `Bearer ${graphCmsToken}`
        }
    })
    const query = gql`
        mutation createComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
            createComment(data: { name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug }} }) { id }
        }
    `

try {

    const result = await client.request(query, req.body)
    return res.status(200).send(result)  

} catch (error) {
 console.log(error)
 return res.status(500).send(error)
}
  

}
