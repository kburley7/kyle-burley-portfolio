"use client";
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavLink from './NavLink'
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"


const navLinks = [
    {
        title: "About",
        path: "#About"
    },
    {
        title: "Projects",
        path: "#Projects"
    },
    {
        title: "Contact",
        path: "#Contact"
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);


    return (
        <nav className="fixed top-0 left-0 right-0 z-10 h-30 bg-black/80 shadow-md" >
            <div className='flex flex-wrap items-center justify-between mx-auto p-8 px-4 py-2'>
                <Image
                    src="/images/TechStack.png"
                    alt="Tech Stack"
                    width={75}
                    height={75}
                />
                <div className='mobile-menu block md:hidden'>
                    {
                        !navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200  text-slate-200 hover:text-white hover:border-white'>
                                <Bars3Icon className='h-5 w-5 '/>
                            </button>
                        ): (
                            <button onClick={()=> setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200  text-slate-200 hover:text-white hover:border-white'>
                                <XMarkIcon className='h-5 w-5 '/>
                            </button>
                        )
                    }
                </div>
                <div className='menu hidden md:block md:w-auto' id="navbar">
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-9 mt-0'>
                        {
                            navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar