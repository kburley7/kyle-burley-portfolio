import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavLink from './NavLink'


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
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 h-30 bg-black/80 shadow-md" >
            <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
                <Image
                    src="/images/TechStack.png"
                    alt="Tech Stack"
                    width={75}
                    height={75}
                />

                <div className='menu md:block md:w-auto' id="navbar">
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