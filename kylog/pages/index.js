import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'
import { getPosts } from '../services'


export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8 mt-36 relative">

      <Head>
        <title> Kaylog </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {
            posts.map((post) => ( 
              <PostCard post = {post.node} key= {post.title}/> 
            ))
          }
        </div>

        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>

      </div>

      


    </div>
  )
}

//As we would usually do in the use effect, we can fetch our data using this method when using NextJs getStaticProps method, since it allows us to
//get the information as props and access them directly from our component (we can see how this works above when calling this Home component's props)
 export async function getStaticProps() {

  const fetchPosts = getPosts;

  const posts = (await fetchPosts()) || [];

  return {
    props:  { posts }
  }

}

