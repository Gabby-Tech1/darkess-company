import React from 'react'
import Hero from '@/public/about-hero.png'
import Founder from '@/public/founder.png'
import Image from 'next/image'

const About = () => {
  return (
    <div>
        <div className="md:h-[60vh] h-[50vw] flex items-center justify-center w-screen">
            <Image src={Hero} alt="hero section for about page" className="bg-cover bg-center relative w-full h-full" />
            <div className="absolute">
                <div className="text-white text-center flex ">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        About Us
                    </h1>
                </div>
            </div>
        </div>
        <div className="py-10 flex flex-col gap-10">
            <div className='flex flex-col items-center'>
                <h1 className='text-2xl'>Welcome to</h1>
                <p className='text-blue text-3xl text-center md:text-4xl '>Dakess Drilling And Construction Limited</p>
                <p className='text-center lg:px-44 md:px-10 px-4'>At Dakess Drilling and Construction Limited, we are a leading provider of expert drilling and construction services, dedicated to delivering high-quality solutions to our clients. With a strong commitment to safety, innovation, and customer satisfaction, we have established ourselves as a trusted partner in the industry.</p>
            </div>
            <div className='flex items-center flex-col-reverse md:flex-row justify-center gap-10 lg:gap-20 lg:mx-44 px-4'>
                <Image src={Founder} alt="picture of the founder" width={300} height={450} />
                <div className='flex flex-col gap-4'>
                    <h1 className='text-3xl text-blue font-semibold'>Our History</h1>
                    <p className='text-lg'>Founded [in 2017] by Madam Diana Kessie, Dakess Drilling and Construction Limited has grown from a small startup to a reputable company, serving all regions across the country . Our team of experienced professionals has decades of combined experience, ensuring that every project is executed with precision and care.</p>
                </div>
            </div>
        </div>
        <div className='bg-blue rounded-md text-center flex flex-col items-center gap-4 md:mx-10 md:p-12 lg:p-20 p-10 lg:mx-44 mx-4 text-white my-8'>
            <h1 className='text-3xl font-semibold'>Our Mission</h1>
            <div className=''>
                <p>Our mission is to provide exceptional drilling and construction services, exceeding client expectations while prioritizing safety, quality, and environmental responsibility.</p>
                <p>We strive to build long-term relationships with our clients, founded on trust, reliability, and mutual respect.</p>
            </div>
        </div>
        <div className='flex flex-col items-center gap-4 py-12 md:mx-10 md:p-12 px-4 lg:px-44'>
            <h1 className='text-3xl text-blue'>Our Values</h1>
            <div className='grid grid-cols-2 gap-8 md:gap-16 border-2 border-blue md:p-16 p-8'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-xl lg:text-2xl text-blue font-semibold'>SAFETY</h1>
                    <p>We prioritize the well-being of our employees, clients, and the environment</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-xl lg:text-2xl text-blue font-semibold'>QUALITY</h1>
                    <p>We deliver exceptional results, meeting and exceeding industry standards</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-xl lg:text-2xl text-blue font-semibold'>INNOVATION</h1>
                    <p>We embrace new technologies and methods to improve efficiency and effectiveness.</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-xl lg:text-2xl text-blue font-semibold'>CUSTOMER SATISFACTION</h1>
                    <p>We listen to our clients and tailor our services to meet their unique needs.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About