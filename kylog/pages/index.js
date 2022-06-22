import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PostCard, Categories, PostWidget } from '../components'

const posts = [
  {
    title: 'Learning React web development' ,
    excerpt: '...'
  },
  {
    title: 'Learning Next.Js web development' ,
    excerpt: '...'
  }
]

const Home = () => {
  return (
    <div className="container mx-auto px-10 mb-8">

      <div className='background'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <Head>
        <title> Kaylog </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {
            posts.map((post) => ( <PostCard post = {post} key= {post.title}/> ))
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

export default Home
