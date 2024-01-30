import { EnvelopeIcon, MapIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='font-[figtree] sm:p-24 px-5 py-16 bg-bg grid sm:grid-cols-3 font-light text-sm text-gray-200 gap-20'>

        <div className='space-y-5'>
            <div className='flex gap-4 items-center'>
                {/* <img src="logo2.png" className='h-28' alt="" /> */}
                <p className='text-4xl font-bold text-yellow-400'>BGGM PHS</p>
            </div>
            <p>Welcome to BGGM PHS, a leading provider of public health services in the UK. Specializing in healthcare solutions that prioritize public well-being, we are dedicated to elevating health standards across the nation. Currently serving a diverse range of clients, from healthcare facilities and offices to public institutions and educational establishments, we take pride in meeting the unique public health needs of our UK customers.</p>            
        </div>

        <div className='space-y-5' id='contact'>
            <p className='font-bold text-2xl inline border-b border-yellow-400 text-white'>Quick Links</p>

            <div className='divide-y divide-gray-50/50'>
                <div className='flex py-4 items-center gap-4 hover: text-white'>
                    <Link to={"/"}>Home</Link>
                </div>
                <div className='flex py-4 items-center gap-4 hover: text-white'>
                    <Link to={"/"}>About BGGM PHS</Link>
                </div>
                <div className='flex py-4 items-center gap-4 hover: text-white'>
                    <Link to={"/"}>Healthcare Services</Link>
                </div>
                <div className='flex py-4 items-center gap-4 hover: text-white'>
                    <Link to={"/"}>Public Services</Link>
                </div>
                <div className='flex py-4 items-center gap-4 hover: text-white'>
                    <Link to={"/"}>Contact</Link>
                </div>
            </div>
        </div>
        <div className='space-y-5' id='contact'>
            <p className='font-bold text-2xl inline border-b border-yellow-400 text-white'>Contact Us</p>

            <div className='divide-y divide-gray-50/50'>
                <div className='flex py-4 items-center gap-4 hover: text-white'>
                    <PhoneIcon className='h-4'/>
                    <span><a href="tel:+44 (0) 1215729718">+44 (0) 1215729718</a></span>
                </div>
                <div className='flex py-4 items-center gap-4 hover: text-white'>
                    <EnvelopeIcon className='h-4'/>
                    <a href='mailto:info@bggm.co.uk'>info@bggm.co.uk</a>
                </div>
                <div className='flex py-4 items-start gap-4'>
                    <MapPinIcon className='h-4 flex-shrink-0'/>
                    <span>109 Javelin Avenue, Castle Vale, Birmingham B35 7LH</span>
                </div>
            </div>
        </div>
    </div>
    <div className='bg-gray-800 py-4 text-center'>
        <p className='text-sm text-gray-500'>&copy; 2022. Designed by Peachy Inc.</p>
    </div>
    </>
  )
}

export default Footer