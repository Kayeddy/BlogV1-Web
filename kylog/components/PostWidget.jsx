import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  //This useEffect will only change/act when the slug changes
  useEffect(() => {
    if(slug) {
      getSimilarPosts(categories, slug).then(res => setRelatedPosts(res));
    }
    else {
      getRecentPosts().then(res => setRelatedPosts(res));
    }
  }, [slug])

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 overflow-y-scroll h-96'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? 'Related posts' :  'Recent posts'}
      </h3>

      {relatedPosts.map((post) => (
        <div key={post.title} className = 'flex items-center w-full mb-4 transition duration-500 hover:text-pink-600'>
          <div className='w-16 flex-none'>
            <img src={post.featuredImage.url} alt= {post.title} height = '60px' width= '60px' className='align-middle rounded-full'/>
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-gray-500 font-xs'>
              { moment(post.createdAt).format('MMM DD, YYYY') }
            </p>
            <Link href={`/post/${ post.slug }`} key = { post.title } className = 'text-md'>
              { post.title }
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget