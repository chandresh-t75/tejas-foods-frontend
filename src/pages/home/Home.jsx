import React from 'react'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import Categories from './Categories'
import SpecialDishes from './SpecialDishes'
import Testimonials from './Testimonials'
import Services from './Services'

const Home = () => {
  return (
    <div className='bg-white'>
      
      <Banner/>
      <Categories/>
      <SpecialDishes/>
      <Testimonials/>
      <Services/>
    </div>
  )
}

export default Home