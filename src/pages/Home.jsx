import React from 'react'
import HomeNavbar from '../components/HomeNavbar'
import HeroSection from '../components/HeroSection'
import StatsSection from '../components/StatsSection'
import MenuSection from '../components/MenuSection'
import Categories from '../components/Categories'
import Courses from '../components/Courses'
import Instructors from '../components/Instructors'
import Feedbacks from '../components/Feedbacks'
import ShapeTheFuture from '../components/ShapeTheFuture'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div 
    className='
    w-full flex items-center justify-center flex-col gap-4'
    >
      <HomeNavbar />
      <hr className='w-full'/>
      <HeroSection />
      <MenuSection />
      <StatsSection />
      <Categories />
      <Courses />
      <Instructors />
      <Feedbacks />
      <ShapeTheFuture />
      <Footer />
    </div>
  )
}

export default Home
