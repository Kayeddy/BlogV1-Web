import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({ post }) => {
  console.log(post)
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6 h-fit-content'>
        <img src= {post.featuredImage.url} alt= {post.title} className= 'object-top absolute h-full w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg p-50' />
      </div>
      <h1 className='transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold'> 
        <Link href={`/post/${post.slug}`}>
          {post.title}
        </Link>
      </h1>

      <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
        <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>

          {post.authors.map((author) => (
            <>
              <img src= {author.photo.url} alt= {author.name} key= {author.id} width= '30px' height= '30px' className='align-middle rounded-full' />
              <p className='inline align-middle text-gray-700 ml-2 text-lg'>
                {author.name}
              </p>
            </>
          ))}
        
        <div className='font-medium text-gray-700'>

        </div>
        </div>

      </div>

    </div>
  )
}

export default PostCard