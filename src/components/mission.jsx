import React from 'react'
import { Fade } from 'react-reveal'

const Mission = () => {
  return (
    <div className='py-16 grid sm:grid-cols-2 gap-8' id='mission'>
        <Fade bottom>
        <div className='sm:p-20 p-5 space-y-8 flex flex-col justify-center font-[figtree]'>
            <h4 className='text-blue-500 font-bold text-5xl'>Our Mission</h4>
            <p className='text-gray-800'>
              At BGGM PHS, our mission is to elevate public health, washroom services, and healthcare solutions to new heights. We are dedicated to creating positive, impactful environments by delivering innovative, tailored services that exceed expectations and contribute to a healthier, more sustainable world.
            </p>
            <p className='text-gray-800'>
              As a trusted partner for businesses and public services, we prioritize excellence, ethical practices, and client needs. Through continuous innovation and unwavering commitment to service excellence, BGGM PHS aims to set new standards in the industries we serve, making a meaningful difference in communities and ensuring a brighter and healthier future for all.
            </p>
        </div>
        <div className='p-10 flex h-full justify-center items-center'>
            <img src="./animate.jpg" className='h-80 object-cover' alt="bags"/>
        </div>
        </Fade>
    </div>
  )
}

export default Mission