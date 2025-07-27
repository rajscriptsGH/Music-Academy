import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

const HeroSection = () => {
    return (
        <div className='h-auto md:h-[40rem] rounded-md flex flex-col justify-center items-center min-h-screen w-full p-4 overflow-hidden py-10 md:py-0'>
            <Spotlight
                className="-top-40 left-0 md:-top-20 md:left-60"
                fill="white"
            />

            <div className='relative flex justify-center items-center flex-col text-center p-4 z-10 mt-20'>

                <h1
                    className="mt-20 md:mt-0 text-4xl md:text-6xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                >Master the art of music
                </h1>
                <p
                    className="mt-4  font-normal text-base md:text-lg text-neutral-300 max-w-64 md:max-w-[500px] lg:max-w-[600px] mx-auto"
                >Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.
                </p>
                <div className="mt-10">
                    <Link href={"/courses"}>
                        <Button
                            borderRadius="1.75rem"
                            className="cursor-pointer bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:bg-blue-950 transition-all duration-300"
                        >
                            Explore Courses
                        </Button>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default HeroSection
