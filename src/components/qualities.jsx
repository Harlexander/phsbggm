import React from 'react'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'
const Qualities = () => {
  return (
    <div className='sm:p-28 px-5 py-16 bg-blue-200 text-black'>
        <div className='sm:w-3/4  mx-auto pb-16 space-y-4 text-center'>
            <Fade bottom>
            <p  style={{ fontFamily : "Croissant One"}} className='sm:text-5xl text-3xl text-center font-bold'>Our Services</p>
            <p className='text-sm sm:text-md'>What makes BGGM PHS exceptional? It's our steadfast commitment to excellence in Public Health Services, Washroom Services, and Healthcare Solutions. Our distinctiveness lies in prioritizing public well-being through innovative approaches. Choose BGGM PHS for services that seamlessly integrate with our core values in public health, ensuring a cleaner and safer environment for all.</p>
            </Fade>
        </div>

         <div className='grid sm:grid-cols-2 gap-8'>
            <Fade bottom>
            <Card
                title={"Public Services"}
                text={"We understand the importance of creating an environment that meets the specific needs of visitors and staff, reflecting the values of your organization while offering quality services for peace of mind."}
                img={"public.jpg"}
                href={"/services/public-services"}/>
            </Fade>
            <Fade bottom>
            <Card
                title={"Healthcare Services"}
                text={"We recognize the unique challenges that healthcare businesses face in today's dynamic market. To alleviate your concerns, we focus on providing a comprehensive solution for the safe and legal disposal of infectious waste."}
                img={"healthcare.jpg"}
                href={"/services/healthcare-services"}/>                
            </Fade>
         </div>
    </div>
  )
}


const Card = ({title, text, img, href}) => (
    <div className='bg-white flex flex-col justify-between rounded shadow h-full'>
        <Link to={href}>
            <div className='p-10 space-y-5'>
                <p className='text-2xl border-b-4 border-bg inline'  style={{ fontFamily : "Croissant One"}}>{title}</p>
                <p className='text-sm'>
                    {text}
                </p>
            </div>
        </Link>
        <img src={img} className='w-full h-62 object-cover' alt="" />
    </div>
)
export default Qualities