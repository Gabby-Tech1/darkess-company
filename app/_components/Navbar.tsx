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
                    <li className='duration-300 ease-in cursor-pointer'>Home</li>
                    <li className='duration-300 ease-in cursor-pointer'>About Us</li>
                    <li className='duration-300 ease-in cursor-pointer'>Services</li>
                    <li className='duration-300 ease-in cursor-pointer'>Projects</li>
                    <li className='duration-300 ease-in cursor-pointer'>Contact</li>
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
                        <li className='duration-300 ease-in py-3 text-center cursor-pointer'>Home</li> <hr className='w-60'/>
                        <li className='duration-300 ease-in py-3 text-center cursor-pointer'>About Us</li> <hr className='w-60'/>
                        <li className='duration-300 ease-in py-3 text-center cursor-pointer'>Services</li> <hr className='w-60'/>
                        <li className='duration-300 ease-in py-3 text-center cursor-pointer'>Projects</li> <hr className='w-60'/>
                        <li className='duration-300 ease-in py-3 text-center cursor-pointer'>Contact</li>
                    </ul>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar