import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import * as AiIcons from 'react-icons/ai'

const PostCard = ({ post }) => {
  console.log(post)
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden pb-80 mb-6 flex justify-center'>
        <img src= {post.featuredImage.url} alt= {post.title} height = '480rem' width= '390rem' className= 'object-top absolute object-fit shadow-lg rounded-t-lg lg:rounded-lg py-auto' />
      </div>
      <h1 className='transition duration-500 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold'> 
        <Link href={`/post/${post.slug}`}>
          {post.title}
        </Link>
      </h1>

      <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
        <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>

          {post.authors.map((author) => (
                <>
                  <img src= { author.photo.url } alt= { author.name } key= { author.id } width= '30px' height= '30px' className='align-middle rounded-full' />
                  <p className='inline align-middle text-gray-700 ml-2 text-lg cursor-pointer'>
                  <Link href = { `/author/${author.id}` } alt = { author.name }>
                    { author.name }
                  </Link>
                  </p>
                </>
          ))}
          
        </div>

        <div className='flex font-medium text-gray-700 text-center justify-center items-center'>
          <AiIcons.AiFillCalendar className='inline h-7 mr-1'/>
          <span>
            {
              moment(post.createdAt).format('MMM DD, YYYY')
            }
          </span>
        </div>

      </div>

      <p className='text-center text-lg text-gray-7 font-normal px-4 lg:p-20 mb-8'>
        {post.excerpt}
      </p>

      <div className='text-center'>
        <Link href={`/post/${post.slug}`}>
          <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>
            Continue reading
          </span>
        </Link>
      </div>

    </div>
  )
}

export default PostCard