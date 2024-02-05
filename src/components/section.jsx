import React from 'react'

const Section = () => {
  return (
    <div className='w-full relative'>
        <img src="comm.jpg" className='absolute -z-10 h-full w-full object-cover' alt="" />

        <div className='w-full h-full text-white py-40 flex text-center gap-8 flex-col justify-center items-center z-20 bg-gray-800 bg-opacity-70'>
            <p className='capitalize text-3xl sm:text-5xl w-4/5' style={{ fontFamily : "Croissant One"}}>
              Join us in creating a healthier and safer environment for all.
            </p>
            <a href='mailto:info@bggm.co.uk' className='bg-blue-400 px-8 py-3 text-lg shadow rounded'>Contact Us</a>
        </div>
    </div>
  )
}

export default Section