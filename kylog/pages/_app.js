import '../styles/globals.scss'
import '../styles/app.scss'
import { AppProps } from 'next/app'
import React, {useEffect, useState} from 'react'
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
