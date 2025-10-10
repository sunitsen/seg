
import HeroSlider from '../components/Hero-slider/HeroSlider'
import React from 'react'
import HeroContent from '../components/Hero-contant/HeroContant'
import ParallaxSliderSection from '@/components/ParallaxSlider/ParallaxSliderSection'

import { projects } from '../data';

const page = () => {
  return (
    <>
    

      <div className="container-fluid mx-auto customPadding p-0 hero-section">


        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] ">

          <div className="">
            <HeroContent />
          </div>

          <div className="custom-shadow">
            <HeroSlider />
          </div>

        </div>

      </div>
      
      <div className=" bg-gradient-to-b from-[#E3D3CC] to-white">
       <div className='container-fluid mx-auto w-[85%]  p-0 '>
          <ParallaxSliderSection/>
       </div>
      </div>

    </>


  )
}

export default page


