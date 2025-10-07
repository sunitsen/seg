
import HeroSlider from '../components/Hero-slider/HeroSlider'
import React from 'react'
import HeroContent from '../components/Hero-contant/HeroContant'

const page = () => {
  return (
    <>
    

      <div className="container-fluid mx-auto customPadding p-0 hero-section">

        {/* new test section */}
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] ">

          <div className="">
            <HeroContent />
          </div>

          <div className="custom-shadow">
            <HeroSlider />
          </div>

        </div>

      </div>

    </>


  )
}

export default page


