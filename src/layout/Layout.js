import React from 'react'
import Head from 'next/head'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <Container>
      <Head>
        <title>Demehin Ibukun Portfolio</title>
        <link rel="icon" href="/images/ibk.png" />
      </Head>
     <Header/>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}
