import React from 'react'
import { Link } from 'react-router-dom/dist'
import Fade from 'react-reveal/Fade'
const About = () => {
  return (
    <div className='sm:p-20 px-5 py-16 gap-10 bg-white '>
        <div className='sm:p-10 space-y-5'>
            <div>
                <Fade bottom>
                <p className='text-green-500 font-semibold text-lg'>ABOUT BGGM PHS</p>
                <p className='text-4xl sm:text-5xl' style={{ fontFamily : "Croissant One"}}>Specialist In Public Healthcare</p>
                </Fade>
            </div>

            <div className='py-4 space-y-4'>
                <Fade bottom>
                    Welcome to BGGM PHS, a leading provider of public health services in the UK. Specializing in healthcare solutions that prioritize public well-being, we are dedicated to elevating health standards across the nation. Currently serving a diverse range of clients, from healthcare facilities and offices to public institutions and educational establishments, we take pride in meeting the unique public health needs of our UK customers.                
                <p>
                    At BGGM PHS, our core commitment lies in providing tailored public health solutions, delivering dedicated healthcare services, and supporting public institutions with quality services to promote community well-being. Our expertise is honed to meet the specific public health requirements within the UK.
                </p>
                <p>
                    Choose BGGM PHS for industry-tailored public health solutions, and join us in creating a healthier and safer environment for all. Wherever you are in the UK, we're here to ensure that public health meets expertise.
                </p>

                </Fade>

            </div>

            <Link to={"/about"}>
                <button className='bg-yellow-400 text-white px-8 py-3 text-lg shadow rounded'>Learn More</button>
            </Link>
        </div>
    </div>
  )
}

export default About