'use client'
import React, { FormEvent, useState } from "react";
import { Meteors } from "@/components/ui/meteors";
import { BackgroundBeams } from "@/components/ui/background-beams";


export default function () {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Submitted:', { email, message });
    };


    return <div className="relative pt-44 bg-slate-800 h-screen">
        <BackgroundBeams className="absolute top-0 pointer-events-none" />
        <Meteors number={40} />
        <h1 className="text-center text-5xl sm:text-6xl lg:text-8xl font-semibold">Contact Us</h1>
        <p className="text-neutral-400 max-w-lg mx-auto my-3 text-sm text-center">
            We&apos;re here to help with any questions about our courses,
            programs, or events. Reach out and let us know how we can assist you
            in your musical journey.
        </p>
        <form
            className=" p-12 flex flex-col z-20" action="handleSubmit">
            <input
                type="email"
                placeholder="Your email address"
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
                placeholder="Your message"
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 mt-5 min-h-32"
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
                type="submit"
                className="px-6 py-2 mt-3 max-w-48 cursor-pointer rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 m-auto"
            >
                Send Message
            </button>
        </form>

    </div>
}