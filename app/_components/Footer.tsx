import Image from 'next/image'
import React from 'react'
import logo from '@/public/logo-img.png'

const Footer = () => {
  return (
    <section className="bg-blue w-full flex flex-col text-white px-4 md:px-44 absolute bottom-0 py-4">
        <div className="flex md:flex-row flex-col justify-center gap-4 md:gap-16 items-start">
            <div className="flex flex-col gap-0 items-center pb-4 md:pb-8">
                <Image src={logo} alt="logo" width={120} height={120} />
                <h1 className="text-2xl font-semibold text-center">Dakess Construction Limited</h1>
            </div>
            <div className="flex flex-col gap-4 md:justify-center">
                <h1 className="font-semibold">Important Links</h1>
                <ul className="flex flex-col gap-2">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">About Us</li>
                    <li className="cursor-pointer">Services</li>
                    <li className="cursor-pointer">Contact Us</li>
                </ul>
            </div>
            <div className="flex flex-col gap-4 justify-center mb-4">
                <h1 className="font-semibold">Contact Us</h1>
                <div className="flex flex-col gap-2">
                    <p>Call: +233 550 302 4319 </p>
                    <p>Email: yakubur259@gmail.com</p>
                    <p>Address: Sapeiman adjacent Vkays Lodge, Ghana</p>
                </div>
            </div>
        </div>
        <hr className='w-full h-0.5 text-white'/>
        <div>
            <p>Dakess Construction &copy; 2024. All Right Reserved</p>
            <div></div>
        </div>
    </section>
  )
}

export default Footer