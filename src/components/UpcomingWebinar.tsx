'use client'
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";
import { title } from 'process';

const featuredWebinars = [
    {
        title: 'Understanding Music Theory',
        description:
            'Dive deep into the fundamentals of music theory and enhance your musical skills.',
        slug: 'understanding-music-theory',
        isFeatured: true,
    },
    {
        title: 'The Art of Songwriting',
        description:
            'Learn the craft of songwriting from experienced musicians and songwriters.',
        slug: 'the-art-of-songwriting',
        isFeatured: true,
    },
    {
        title: 'Mastering Your Instrument',
        description:
            'Advanced techniques to master your musical instrument of choice.',
        slug: 'mastering-your-instrument',
        isFeatured: true,
    },
    {
        title: 'Music Production Essentials',
        description:
            'Get started with music production with this comprehensive overview.',
        slug: 'music-production-essentials',
        isFeatured: true,
    },
    // Added two more webinars
    {
        title: 'Live Performance Techniques',
        description:
            'Enhance your live performance skills with expert tips and strategies.',
        slug: 'live-performance-techniques',
        isFeatured: true,
    },
    {
        title: 'Digital Music Marketing',
        description:
            'Learn how to promote your music effectively in the digital age.',
        slug: 'digital-music-marketing',
        isFeatured: true,
    },
];

const UpcomingWebinar = () => {

    return (
        <div className='p-12 bg-slate-900'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                <div className='text-center'>
                    <h2 className='text-blue-700 font-semibold'>FEATURED WEBINARS</h2>
                    <h1 className='font-bold text-4xl md:text-5xl leading-8 mt-2'>Enhance Your Musical Journey</h1>
                </div>
                <div className='mt-7'>
                    <HoverEffect
                        //@ts-ignore
                        items={featuredWebinars}
                    />
                </div>
                <div className='mt-5 text-center'>
                    <Link href={'/'}
                        className='bg-white text-black px-4 py-3 rounded-md hover:bg-green-400 transition-all duration-300'
                    >
                        View All Webinars
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UpcomingWebinar
