import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">
                    <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
                        Hello, I'm Kyle
                    </h1>
                    <p className='text-[#ADB7BE] text-lg lg:text-xl mb-6'>
                        Write Some Stuff about me here
                    </p>
                    <div className='py-2 '>
                        <button className='px-6 py-3 rounded-full mr-4 bg-[#4F2683] hover:bg-purple-400 text-white'>Email Me</button>
                        <button className='px-6 py-3 rounded-full  bg-[#4F2683] hover:bg-purple-400 text-white'>Download Resume</button>
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