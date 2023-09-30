import Navbar from '@/sections/Navbar'
import Banner from '@/components/Banner'

import React from 'react'
import Title from '@/components/Title';
import Hero from '@/sections/Hero';
import ProductCard from '@/components/ProductCard';
import Products from '@/sections/Products';
import Footer from '@/sections/Footer';

function Index() {
  const wishlistCount = 5;
  const bagCount = 10;
  return (
    <div>
    
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
