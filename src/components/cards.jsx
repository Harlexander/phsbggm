import { ChevronRightIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"

export const Subcard = ({title, href, icon}) => {
    return (
        <Link to={href} className='bg-green-900 px-3 py-4 sm:p-5 text-white rounded shadow-xl items-center justify-between flex gap-3'>
            <div className="flex items-center gap-2">
                <img src={icon}   onerror="this.onerror=null;this.src='/icons/bin.png';" alt="icon" className='h-6 sm:h-8 w-6 sm:w-8' />
                <p className='text-sm md:text-md capitalize font-semibold'>{title}</p>
            </div>
            <ChevronRightIcon className="h-4 text-yellow-500 w-4"/>
        </Link>
    )
}