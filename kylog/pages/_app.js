import '../styles/Globals.scss'
import '../styles/App.scss'
import React from 'react'
import { Layout } from '../components'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
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
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
