"use client"
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Land = () => {
    const Imageref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const imageElement = Imageref.current;
            if (!imageElement) return;
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;
            if (scrollPosition > scrollThreshold) {
                imageElement.classList.add("scrolled");
            } else {
                imageElement.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Set initial state
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className="pb-20 px-4">
            <div className='container mx-auto text-center'>
                <h1 className='font-extrabold text-5xl md:text-8xl lg:text-[105px] gradient-title text-blue-700 animate-typing '>Track Budget Grow<br />
                    Smarter Finances
                </h1>
                <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto mt-3'>
                    Take charge of your finances with intelligent tracking, smart analysis, and instant insights — all in one streamlined platform
                </p>
                <div className="flex justify-center gap-4 mt-4">
                    <Link href='/dashboard'>
                        <Button size="lg" variant="outline" className="px-8">
                            Get Started
                        </Button>
                    </Link>
                    <Link href="https://www.youtube.com" target="_blank">
                        <Button size="lg" variant="outline" className="px-8 bg-black text-white">
                            Watch demo
                        </Button>
                    </Link>
                </div>
                <div className='land-image-wrapper'>
                    <div className="land-image mt-8 flex justify-center" ref={Imageref}>
                        <Image
                            src="/land_buisness.png"
                            width={1280}
                            height={720}
                            alt="Dashboard preview"
                            className="rounded-lg shadow"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Land