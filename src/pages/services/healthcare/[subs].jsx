import React, { useEffect } from 'react'
import Navbar from '../../../components/navbar'
import Footer from '../../../components/footer'
import Header from '../../../components/header'
import { useParams } from 'react-router-dom'
import { healthCare } from '../../../data/healthcare'

const HealthSubs = () => {
    const { sub } = useParams();

    const data = healthCare.find((item) => item.title.toLowerCase().replace(/ /g, "-") === sub.toLowerCase());

    console.log(data);
    
  return (
    <div>
        <Navbar/>
        <Header
          title={data.title}
          link={data.href.replace("/", "").replace(".", "").toLowerCase()}/>

        <div className="bg-gray-100 min-h-[50vh] sm:p-16 p-5 font-[figtree]">
          <div className="bg-white gap-5 p-5 grid sm:grid-cols-2">
            <div className='gap-5 flex flex-col justify-center items-start'>
              <p className='inline-block pb-2 sm:pb-4 border-b-4 border-yellow-500 sm:text-xl font-[700]'>{data.title}</p>

              <p>
                {data.content}
              </p>
            </div>
            <div className='sm:p-5'>
              <img src={data.image || "/comm.jpg"} alt="" />
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default HealthSubs