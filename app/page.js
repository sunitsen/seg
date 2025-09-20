import Navbar from '../components/Navbar/Navbar'
import HeroSlider from '../components/Hero-slider/HeroSlider'
import React from 'react'
import HeroContant from '@/components/Hero-contant/HeroContant'

const page = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar />


      <div className="max-w-screen-7xl w-full mx-auto custom-bg-primary flex flex-wrap justify-center items-center min-h-screen p-4">
        {/* Content - 40% on md+, full width below md */}
        <div className=" w-full md:w-2/5 flex items-center justify-center p-4 z-1">
          <HeroContant />
        </div>

        {/* Slider - 60% on md+, full width below md */}
        <div className=" custom-shadow w-full md:w-3/5 flex items-center justify-center p-4 z-0">
          <HeroSlider />
        </div>
      </div>




    </div>


  )
}

export default page
