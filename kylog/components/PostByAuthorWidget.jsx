import { log } from 'console'
import React from 'react'
import { getSimilarPostsByAuthor } from '../services'

const PostByAuthorWidget = ({ post }) => {

    const [similarPosts, setSimilarPosts] = useState([])

    const authors = post.authors.map(author => [author.id]);

    useEffect(() => {
       
    }, [])
    
  return (
    <div>
        {
           console.log(authors)
        }
    </div>
  )
}

export default PostByAuthorWidget