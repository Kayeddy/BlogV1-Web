import { React, useState, useEffect } from 'react'
import { getSimilarPostsByAuthor } from '../services'
import moment from 'moment'
import Link from 'next/link'
import Slider from "react-slick";

const PostByAuthorWidget = ({ post }) => {

    const [similarPosts, setSimilarPosts] = useState([])

    const authors = post.authors.map(author => author.id);

    useEffect(() => {
       getSimilarPostsByAuthor(authors, post.slug).then(res => setSimilarPosts(res))
    }, [])
    
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };

  return (
    <Slider {...sliderSettings}>
        {
          similarPosts.map(post => (
            
              <div key={post.slug} className=' bg-white w-fit p-5 rounded flex-column justify-center align-middle text-center'>
                <p className='align-middle text-gray-700 ml-2 py-5'>
                  {
                    moment(post.createdAt).format('MMM DD, YYYY')
                  }
                </p>
                <h2 className=''>
                  {
                    post.title
                  }
                </h2>
                {
                  post.authors.map(author => (
                    <>
                      <img src= { author.photo.url } alt= { author.name } key= { author.id } width= '30px' height= '30px' className='inline rounded-full' />
                      <p className='inline align-middle text-gray-700 text-lg cursor-pointer'>
                      <Link href = { `/author/${author.id}` } alt = { author.name }>
                        { author.name }
                      </Link>
                      </p>
                    </>
                  ))
                }
              </div>
            
          ))
        }
    </Slider>
  )
}

export default PostByAuthorWidget