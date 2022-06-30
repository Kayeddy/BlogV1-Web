import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({categories, slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  //This useEffect will only change when the slug changes
  useEffect(() => {
    if(slug) {
      getSimilarPosts(category, slug).then(res => setRelatedPosts(res));
    }
    else {
      getRecentPosts().then(res => setRelatedPosts(res));
    }
  }, [slug])

  return (
    <div className='bg_white shadow-lg rounded-lg p-8 mb-8'>

    </div>
  )
}

export default PostWidget