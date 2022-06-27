import '../styles/globals.scss'
import '../styles/index.scss'
import { AppProps } from 'next/app'
import React, {useEffect, useState} from 'react'

import { Layout } from '../components'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
 
  )
}

export default MyApp