import { ChevronRightIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Header = ({title, img, link}) => {
  return (
    <div className='relative font-[figtree]'>
        <img src={img ? img : "/farm.jpg"} className='h-full w-full absolute object-cover -z-10' alt="img" />
    
        <div className='p-16 sm:p-24 flex flex-col bg-gray-800 bg-opacity-50 gap-4 justify-center items-center text-white'>
            <p style={{ fontFamily : "Croissant One"}}  className='text-4xl text-center capitalize sm:text-6xl '>{title}</p>
            <div className='flex items-center gap-4 '>
              <span className='text-blue-500 font-semibold'>Home</span>
              <ChevronRightIcon className='h-5 w-5'/>
              <span className='text-blue-500 font-semibold'>{link}</span>
            </div>
        </div>
    </div>
  )
}

export default Header