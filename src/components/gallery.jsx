import React from 'react'
import { Fade } from 'react-reveal'

const Gallery = () => {
  return (
    <div className='sm:p-24 px-5 py-16 space-y-10' id='gallery'>
        <div className=' text-center space-y-5'>
            <p className='text-4xl' style={{ fontFamily : "Croissant One"}}>Photo Speaks</p>
            <p>Explore our gallery and let the pictures speak the story of Beulah Rice.</p>
        </div>
    
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-2'>
            <Fade bottom>
            <img src="/beulah1.jpg" className='h-full rounded-lg w-full' alt="" />
            </Fade>
            <Fade bottom>
            <img src="/beulah2.jpg" className='h-full rounded-lg w-full' alt="" />
            </Fade>
            <Fade bottom>
            <img src="/beulah3.jpg" className='h-full rounded-lg w-full' alt="" />
            </Fade>
            <Fade bottom>
            <img src="/beulah4.png" className='h-full rounded-lg w-full object-cover' alt="" />
            </Fade>
            <Fade bottom>
            <img src="/beulah5.png" className='h-full rounded-lg w-full' alt="" />
            </Fade>
            <Fade bottom>
            <img src="/beulah6.png" className='h-full rounded-lg w-full' alt="" />
            </Fade>
            <Fade bottom>
            <img src="/beulah7.png" className='h-full rounded-lg w-full' alt="" />
            </Fade>
        </div>
    </div>
  )
}

export default Gallery