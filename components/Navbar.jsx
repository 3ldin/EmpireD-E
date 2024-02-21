import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { XMarkIcon } from "@heroicons/react/24/solid";
import { CgMenu } from "react-icons/cg";
import MenuOverlay from './MenuOverlay';


const navLinks = [
    {
        title: "About",
        path: '/AboutPage',
    },
    {
        title: "Gallery",
        path: "/GalleryPage",
    },
    {
        title: "Contact",
        path: "/ContactPage",
    }
]


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  
    return (
    <nav className='fixed mx-auto border border-transparent top-0 left-0 right-0 z-10 bg-white bg-opacity-100 p-3 drop-shadow-sm'>
        <div className='flex lg:py-3 flex-wrap items-center justify-between mx-auto px-4 py-4'>
            <Link href={"/"} className=' md:pl-2'><img src='images/lowreslogo.png' alt='Empire D&E'></img></Link>
            <div className='mobile-menu block md:hidden'>
                
                    {!navbarOpen ? (
                    <button onClick={() => setNavbarOpen(true)} className='flex items-center py-2  text-black hover:text-slate-500 hover:border-slate-500'>
                      <CgMenu className='h-7 w-7'/>
                    </button>
                ) : (
                    <button onClick={() => setNavbarOpen(false)} className='flex items-center py-2 text-black hover:text-slate-500 hover:border-slate-500'>
                    <XMarkIcon className='h-7 w-7'/>
                    </button>
                )}
                
            </div>
    <div className='menu hidden md:block md:w-auto' id="navbar">
        <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {navLinks.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                </li>
             ))
            }
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar 