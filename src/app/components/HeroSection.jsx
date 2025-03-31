"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {

    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">
                    <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-50 to-purple-500">
                            Hello, I'm{" "}
                            <br/>
                            <TypeAnimation
                                sequence={[
                                    "Kyle",
                                    1000,
                                    "Web Developer",
                                    1000,
                                    "Software Engineer",
                                    1000,
                                ]}
                                wrapper='span'
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </h1>
                    <p className='text-[#ADB7BE] text-lg lg:text-xl mb-6'>
                        Write Some Cool Stuff about me here
                    </p>
                    <div className='py-2 '>
                        <a href="mailto:burleykyle10@gmail.com">
                            <button className='px-6 py-3 rounded-full mr-4 bg-[#4F2683] hover:bg-purple-400 text-white' >Email Me</button>
                        </a>
                        <a href="\files\Kyle_Burley_Software_Developer.pdf" download>
                            <button className='px-6 py-3 rounded-full  bg-[#4F2683] hover:bg-purple-400 text-white'>Download Resume</button>
                        </a>
                    </div>
                </div>
                <div className='col-span-5 place-self-center'>
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] relative overflow-hidden ring-2 ring-[#2c2c2c] shadow-lg">
                        <Image
                            src="/images/hero-image.webp"
                            alt='hero image'
                            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover rounded-full'
                            width={250}
                            height={250}
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeroSection