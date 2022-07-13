// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { GraphQLClient, gql } from 'graphql'
import { brotliDecompressSync } from 'zlib'
import { submitComment } from '../../services';

const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default function comments(req, res) {

    const {name, email, comment, slug } = req.body
    const graphqlApi = new GraphQLClient(graphqlApi, {
        headers: {
            authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}`
        }
    })
    const query = gql`
        mutation createComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
            createComment(data: {name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug }}}) { id }
        }
    `

    const result = await GraphQLClient.request(query, req.body)

    return res.status(200).send(result)

}
