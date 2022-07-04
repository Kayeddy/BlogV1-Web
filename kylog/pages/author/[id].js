import React from 'react'
import { AuthorDetail } from '../../components'
import { getAuthorDetails, getAuthors, getPostByAuthor } from '../../services'

const Author = ({ author, authorPosts }) => {
  return (
    <div className='container mx-auto px-10 pb-8'>
      <div className='lg:grid-cols-12 gap-12'>
          <div className='col-span-1 lg:col-span-8'>
            {console.log(authorPosts)}
              <AuthorDetail author = { author } posts = { authorPosts }/>
          </div>

      </div>
    </div>
  )
}

export default Author

export async function getStaticProps({ params }) {

  const authorData = await getAuthorDetails(params.id)
  const authorPosts = await getPostByAuthor(params.id)

  return {
    props:  { author: authorData, authorPosts: authorPosts }
  }

}

export async function getStaticPaths() {
  const author = await getAuthors();

  return {
      paths: author.map(({ node: { id }}) => ({ params: { id }})),
      fallback: false
  }
}