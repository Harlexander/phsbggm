import React from 'react'
import Navbar from '../../../components/navbar'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import { Subcard } from '../../../components/cards'
import { healthCare } from '../../../data/healthcare'

const HealthCare = () => {
  return (
    <div>
        <Navbar/>
        <Header
          title={"Healthcare Services"}
          link={"Healthcare-services"}/>

        <div className='bg-white px-5 py-16 sm:p-24 font-[figtree] space-y-10'>
          <div className='grid sm:grid-cols-2'>
            <div className='space-y-5'>
                <p className='text-3xl font-bold border-b-4 pb-4 inline-block border-bg'>Healthcare Services</p>
                <p>
                  Assisting you in cultivating a welcoming, hygienic, and secure healthcare environment is our commitment at BGGM PHS.
                </p>
                <p>
                  We recognize the unique challenges that healthcare businesses face in today's dynamic market. To alleviate your concerns, we focus on providing a comprehensive solution for the safe and legal disposal of infectious waste.
                </p>
                <p>
                  In the competitive landscape of healthcare, building a successful and profitable business entails earning the trust of patients and their families. This requires not only delivering excellent care and treatment but also maintaining a professional and inviting working environment. BGGM PHS is dedicated to helping you achieve these standards.
                </p>
                <p>
                  Adhering to regulatory requirements is crucial for any healthcare provider. BGGM PHS understands the importance of demonstrating professional knowledge of legislation and regulatory standards. We implement efficient practices to ensure compliance, giving you confidence in meeting and exceeding regulatory expectations.
                </p>
                <p>
                  In an era where patients are increasingly informed about health and safety practices, their decisions on healthcare providers are influenced by the perceived hygiene of the facility. BGGM PHS recognizes that patient safety is paramount. Whether you're a doctor, dentist, hospital, care home provider, tattooist, or veterinarian, we specialize in offering services for the safe storage, collection, and disposal of various healthcare waste types. This includes managing swabs, dressings, sharps, and waste specific to your profession.
                </p>
            </div>
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 '>
            {
              healthCare.map((sub, index) => (
                <Subcard
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

export default HealthCare