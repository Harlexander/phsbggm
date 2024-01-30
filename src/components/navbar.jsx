import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Dialog } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { Bars3Icon, BookOpenIcon, DocumentTextIcon, EnvelopeOpenIcon, HomeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Services', href: '/#services', current: false },
  { name: 'Contact', href: '/contact', current: false },
]


const menu = [
    {
      icon: HomeIcon,
      title: "Home",
      href: "/"
    },
    {
      icon: BookOpenIcon,
      title: "About BGGM PHS",
      href: "/about"
    },
    {
      icon: DocumentTextIcon,
      title: "Public Services",
      href: "/services/public-services"
    },
    {
      icon: DocumentTextIcon,
      title: "Healthcare Services",
      href: "/services/healthcare-services"
    },
    {
      icon: EnvelopeOpenIcon,
      title: "Contact",
      href: "/contact"
    }
  ];
  
  console.log(menu);
  
const Navbar = ({darkmode, setDarkmode, setLanguage, language}) => {
    const [scrolling, setScrolling] = useState(false);

  // Add a scroll event listener to track scroll position
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const [open, setOpen] = useState(false)
    return(
        <nav
          className="relative font-[figtree]"
          data-te-navbar-ref>
          <div className='bg-yellow-400 text-gray-800 text-xs py-5 px-5 sm:px-24 flex items-center divide-x'>
            <div className='flex gap-4 pr-4'>
              <PhoneIcon className='h-4'/>
              <span>+44 (0) 1215729718</span>
            </div>
            <div className='flex gap-4 px-4'>
              <EnvelopeOpenIcon className='h-4'/>
              <span>info@bggm.co.uk</span>
            </div>
            <div className='flex gap-4 hidden sm:flex px-4'>
              <MapPinIcon className='h-4'/>
              <span>109 Javelin Avenue, Castle Vale, Birmingham B35 7LH</span>
            </div>
          </div>
            <div className='sticky top-0 z-20 w-full'>
                <div className={`relative flex h-20 items-center bg-white px-5 text-black sm:px-20 justify-between`}>
                        <div className="flex flex-1 font-semibold items-center justify-between">
                            <div className="flex items-center">
                              {/* <img src="logo.png" className='h-20' alt="" /> */}
                              <Link to={"/"}><span className='text-3xl uppercase'>bggm phs</span></Link>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-8">                    
                                    {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={'hover:bg-yellow-500 rounded-md px-3 py-2 text font-medium'}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </a>
                                    ))}
                                </div>  
                            </div>
                            <div className="inset-y-0 sm:hidden left-0 flex items-center p-2" onClick={() => setOpen(!open)}>
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            </div>
                        </div>
                </div>
            </div>
            <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-30" onClose={setOpen}>
                <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                >
                <div className="fixed inset-0 bg-yellow-100 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
                    <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                        enterFrom="-translate-x-full"
                        enterTo="-translate-x-0"
                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                        leaveFrom="-translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <Dialog.Panel className="pointer-events-auto relative w-screen max-w-xs">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-500"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in-out duration-500"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="mx-auto px-5">
                            </div>



                        </Transition.Child>
                        <div className="flex h-full flex-col overflow-y-scroll bg-bg shadow-xl">
                            <div className="">
                            <Dialog.Title className="text-base font- leading-6">
                                
                                <div className='border-b'>
                                    <Link to={"/"}>
                                      <p className='text-center p-5 text-xl font-bold text-white'>BGGM PHS</p>
                                    </Link>
                                </div>

                                <div className='p-5 text-gray-200'>
                                    {
                                        menu.map(({icon:Icon, title, href}) => (
                                            <a href={href}>
                                              <div className='flex gap-4 font-600 px-4 py-4 border-b border-gray-100'>
                                                  <Icon className='h-5'/>
                                                  <span className='text-sm font-[figtree]'>{title}</span>
                                              </div>                                            
                                            </a>

                                        ))
                                    }
                                </div>

                            </Dialog.Title>
                            </div>
                            <div className="relative mt-6 flex-1 px-4 sm:px-6">{/* Your content */}</div>
                        </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </div>
            </Dialog>
            </Transition.Root>        
        </nav>

  )
}

export default Navbar;
