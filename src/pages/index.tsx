import Navbar from '@/sections/Navbar'
import Banner from '@/components/Banner'

import React from 'react'
import Title from '@/components/Title';
import Hero from '@/sections/Hero';
import Products from '@/sections/Products';
import Footer from '@/sections/Footer';
import Head from 'next/head';

function Index() {
  const wishlistCount = 5;
  const bagCount = 10;
  return (
    <div className='App'>
        <Head>
        <title>Ni GAM</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
    
      <Banner/>
      <Title wishlistCount={wishlistCount} bagCount={bagCount} />
      <Navbar/>
      <Hero/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default Index
