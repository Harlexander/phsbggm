import React from 'react'
import Navbar from '../../../components/navbar'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import { Subcard } from '../../../components/cards'
import { publicServices } from '../../../data/publicservice'

const PublicServices = () => {
  return (
    <div>
        <Navbar/>
        <Header
            title={"Public Services"}/>

<div className='bg-white px-5 py-16 sm:p-24 font-[figtree] space-y-10'>
          <div className='grid sm:grid-cols-2'>
            <div className='space-y-5'>
                <p className='text-3xl font-bold border-b-4 pb-4 inline-block border-bg'>Public Services</p>
                <p>
                The state of your washroom speaks volumes about your organization, conveying a message to both your staff and visitors regarding your values and operational standards. Maintaining a clean, pleasant, and modern washroom is not just an aesthetic consideration; it's a positive reflection of your organization's commitment to excellence.                </p>
                <p>
                At BGGM PHS, we collaborate with public services of all sizes throughout the UK to offer a comprehensive range of washroom services. Our goal is to help these organizations fulfill their duty of care obligations by providing fully-serviced, hygienic commercial washrooms. We understand the importance of creating an environment that meets the specific needs of visitors and staff, reflecting the values of your organization while offering quality services for peace of mind.                </p>
                <p>
                Acknowledging and addressing people's human needs is a fundamental aspect of your duty of care. It signifies a genuine commitment to prioritizing the well-being of both staff and visitors, creating an environment
                </p>
            </div>
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-4 gap-1'>
            {
              publicServices.map((sub, index) => (
                <Subcard
                icon={sub.icon}
                href={sub.href}
                title={sub.title}
                key={index}/>
              ))
            }
          </div>
        </div>

        <Footer/>
    </div>
  )
}

export default PublicServices