import React, { useEffect } from 'react'
import Navbar from '../../../components/navbar'
import Header from '../../../components/header'
import { useParams } from 'react-router-dom'
import { healthCare } from '../../../data/healthcare'
import { publicServices } from '../../../data/publicservice'

const PublicSubs = () => {
    const { sub } = useParams();

    const data = publicServices.find((item) => item.title.toLowerCase().replace(/ /g, "-") === sub.toLowerCase());
    
  return (
    <div className=''>
        <Navbar/>
        <Header
          title={data.title}
          link={data.href.replace("/", "").replace(".", "").toLowerCase()}/>


          <div className='p-5 sm:p-16 bg-gray-100 min-h-screen'>
            <div className='bg-white'>

            </div>
          </div>
    </div>
  )
}

export default PublicSubs