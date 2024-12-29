"use client"

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '@/public/home-hero.png';
import Hero1 from '@/public/hero1.png';
import Hero2 from '@/public/hero2.png';
import Building from '@/public/building.png';
import Building2 from '@/public/building2.png';
import Image from 'next/image';
import { Expertise, Choose } from './_constants';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: false });
  }, []);

  return (
    <div className="overflow-x-hidden w-screen">
      {/* Hero Section */}
      <div className="lg:h-[85vh] max-sm:h-[95vh] h-[90vh] flex items-center justify-center overflow-x-hidden" data-aos="fade-up">
        <Image src={Hero} alt="hero section" className="bg-cover bg-center relative w-full h-full" />
        <div className="absolute" data-aos="fade-down">
          <div className="flex justify-between flex-col-reverse lg:flex-row items-center max-md:px-4 lg:gap-20">
            <div className="flex gap-4 items-center" data-aos="zoom-in">
              <Image src={Hero1} alt="Engineer at work" width={280} height={330} className="max-md:w-[150px]" />
              <Image src={Hero2} alt="Engineer at work" width={280} height={380} className="max-md:w-[150px]" />
            </div>
            <div className="flex flex-col gap-8 text-white" data-aos="fade-left">
              <div className="lg:w-[40vw] flex flex-col gap-2">
                <h1 className="text-4xl font-semibold">Dakess Drilling And Construction Limited</h1>
                <p>We deliver reliable drilling solutions and exceptional construction services, building the future with precision and integrity</p>
              </div>
              <Link href="/contact">
                <button className="text-blue bg-white py-2 px-4 flex items-center gap-2 hover:gap-4 w-fit rounded-full hover:scale-110 duration-300 ease-linear">
                  Contact Us <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="flex items-center flex-col lg:flex-row justify-between text-white py-8 px-4 md:px-16 gap-8 md:gap-24" data-aos="fade-right">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2" data-aos="fade-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-blue font-semibold">Experts In Drilling And Construction Solutions</h1>
            <p className="text-gray-600">Trusted partner for your infrastructure needs.</p>
          </div>
          <Link href="/services">
            <button className="text-white bg-blue py-2 px-4 rounded-md w-fit hover:scale-110 duration-300 ease-linear">
              Explore Our Services
            </button>
          </Link>
        </div>
        <Image src={Building} alt="building" width={540} height={420} className="max-md:w-[80vw] max-md:mb-4" data-aos="fade-left" />
      </div>

      {/* Expertise Section */}
      <div className="flex items-center justify-center">
        <Image src={Building2} alt="down hero section" className="bg-cover bg-center relative w-full h-full max-md:h-[90vh] max-lg:h-[70vh]" data-aos="fade-up" />
        <div className="absolute">
          <div className="flex justify-between flex-col items-center gap-8 text-white px-4 lg:px-80">
            <div className="flex justify-between flex-col items-center gap-2" data-aos="fade-down">
              <h1 className="text-4xl md:text-5xl font-medium">Our Expertise</h1>
              <p className="text-center">Dakess Drilling and Construction Limited offers comprehensive drilling and construction service to meet your infrastructure needs.</p>
            </div>
            <div className="grid grid-cols-2 gap-6" data-aos="zoom-in">
              {Expertise.map((item) => (
                <div key={item.id} className="bg-gray-300 text-lg md:text-xl p-10 rounded-lg shadow-md font-medium flex items-center justify-center text-blue">
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="flex flex-col gap-16 py-8" data-aos="fade-up">
        <div className="flex flex-col gap-2 items-center max-md:px-4">
          <h1 className="text-blue text-3xl md:text-4xl" data-aos="fade-down">Why Choose Dakess</h1>
          <p className="text-center" data-aos="fade-left">Our commitment to safety, quality and customer satisfaction sets us apart.</p>
          <div className="bg-gray-300 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8 py-12 lg:px-20 lg:mx-44 px-10 mx-4" data-aos="zoom-in">
            {Choose.map((item) => (
              <div key={item.id} className="bg-blue rounded-xl w-60 md:text-xl text-lg shadow-md text-white flex justify-center py-4 px-2 md:py-8 md:px-4">
                <p className="text-center">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between max-md:items-center flex-col md:flex-row gap-4 px-4 md:px-16" data-aos="fade-up">
          <div className="flex flex-col gap-1">
            <p className="text-3xl font-semibold">Get Started With Dakess Today</p>
            <p>Contact us for a consultation or to learn more about our services.</p>
          </div>
          <Link href="/contact">
            <button className="text-white bg-blue flex items-center gap-2 hover:gap-4 py-2 px-8 w-fit rounded-lg max-md:h-fit hover:scale-110 duration-300 ease-linear">
              Contact Us <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}