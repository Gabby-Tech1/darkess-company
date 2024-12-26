"use client";

import React, { useState } from 'react';
import { CgMenu } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { FaPhoneVolume } from "react-icons/fa6";
import logo from '@/public/logo-img.png';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-blue shadow-md">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <Image src={logo} alt="logo" width={80} className='mr-1'/>
                    {/* <span className="text-2xl font-bold tracking-wide">Dakess Construction</span> */}
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12 font-medium text-lg text-white">
                    <Link href="/" className='duration-300 ease-in cursor-pointer'>Home</Link>
                    <Link href="/about" className='duration-300 ease-in cursor-pointer'>About Us</Link>
                    <Link href="/services" className='duration-300 ease-in cursor-pointer'>Services</Link>
                    <Link href="/contact" className='duration-300 ease-in cursor-pointer'>Contact</Link>
                </ul>
                <div className="lg:hidden md:flex md:flex-col justify-end text-white">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <AiOutlineClose className='text-3xl font-bold' /> : <CgMenu className='text-3xl font-bold' />}
                    </button>
                </div>
            </div>

            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 w-full p-12 flex flex-col bg-white justify-center items-center lg:hidden text-blue bg-opacity-70">
                    <ul className='font-semibold text-lg'>
                        <Link href="/" className='duration-300 ease-in py-3 text-center cursor-pointer'>Home</Link> <hr className='w-60'/>
                        <Link href="/about" className='duration-300 ease-in py-3 text-center cursor-pointer'>About Us</Link> <hr className='w-60'/>
                        <Link href="/services" className='duration-300 ease-in py-3 text-center cursor-pointer'>Services</Link> <hr className='w-60'/>
                        <Link href="/contact" className='duration-300 ease-in py-3 text-center cursor-pointer'>Contact</Link>
                    </ul>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar