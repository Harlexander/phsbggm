import React from 'react'
import Fade from 'react-reveal/Fade'
const Hero = () => {
  return (
    <div className='h-[80vh] sm:h-screen w-full relative'>
        <img src="/farm.jpg" className="h-full w-full object-cover absolute -z-10" alt="" />

        <Fade>
          <div className='bg-gray-500 gap-4 flex-col text-center bg-opacity-80 w-full h-full text-white z-20 flex justify-center items-center'>
              <p className='border-b-2 border-yellow-400'>Empowering Communities, Promoting Wellness</p>
              <p className='text-6xl' style={{ fontFamily : "Croissant One"}}>Welcome to PHS BGGM</p>
              <p className='sm:w-2/4'>At BGGM PHS, we believe in fostering a healthier and safer tomorrow for everyone. Explore our comprehensive range of public health services designed to uplift communities and enhance well-being.</p>
              <a href='mailto:beulahriceltd@gmail.com' className='bg-yellow-500 px-8 py-3 text-lg shadow rounded'>Contact Us</a>
          </div>          
        </Fade>

    </div>
  )
}

export default Hero