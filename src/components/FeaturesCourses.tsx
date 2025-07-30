""
import React from 'react'
import courseData from '../data/music_courses.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient';

interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
}

export default function FeaturesCourses() {
    const featuredCourses = courseData.courses.filter((course: Course) => (
        course.isFeatured
    ))

    return (
        <div className='bg-slate-900 px-5 py-12'>
            <div>
                <div className="flex flex-col justify-center items-center mb-5">
                    <h2 className='text-blue-700 font-semibold'>FEATURED COURSES</h2>
                    <h1 className='font-bold text-4xl md:text-5xl leading-8 mt-2'>Learn With the Best</h1>
                </div>
            </div>
            <div className='mt-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                    {featuredCourses.map((course: Course) => (
                        <div key={course.id} className='flex justify-center items-center'>
                            <BackgroundGradient
                                className='flex flex-col rounded-2xl bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'
                            >
                                <div
                                    className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'
                                >
                                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                    <Link
                                        className='bg-white text-black px-3 py-2 mt-5  rounded-md hover:bg-green-400 transition-all duration-300'
                                        href={`// ${course.slug}`}>
                                        Learn More
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-20 text-center'>
                <Link href={'/'}
                    className='bg-white text-black px-4 py-3 rounded-md hover:bg-green-400 transition-all duration-300'
                >
                    View All Courses
                </Link>
            </div>
        </div>
    )
}


