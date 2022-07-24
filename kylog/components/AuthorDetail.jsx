import React from 'react'
import Link from 'next/link'

const AuthorDetail = ({ author, posts }) => {
  return (
   
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md mb-6 p-50 flex justify-center'>
        <img src= { author.photo.url } alt= { author.name } height = '200px' width= '200px' className= '' />
      </div>
      <h1 className='transition duration-700 text-center mb-3 text-3xl font-semibold'> 
        { author.name }
      </h1>
      <h1 className='text-center text-gray-700 mb-20 font-semibold'> 
        { author.bio }
      </h1>

      <div className='relative overflow-hidden text-center'>
        <h1 className='text-center mb-5 text-2xl font-semibold'> Posts by the author </h1>

          {posts.map((post) => 
            <div className='p-5 justify-center flex-column align-center text-center border-2 w-100 mx-5 mb-10' key={ posts.slug }>
              
              <h1 className='text-center text-gray-700 mb-10 font-semibold text-lg'>
                { post.title }
              </h1>
              <p className='text-center align-middle'>
                { post.excerpt }
              </p>

              <div className='relative overflow-hidden flex justify-center'>
                <img src= { post.featuredImage.url } alt= { post.title } height = '200px' width= '200px' className=' rounded-t-lg lg:rounded my-5 mx-0 pb-10 object-center'/>
              </div>

              <div className='text-center'>
                <Link href={`/post/${ post.slug }`}>
                  <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>
                    See full article
                  </span>
                </Link>
              </div>

            </div> 
          )}  

      </div>
    </div>
  )
}

export default AuthorDetail