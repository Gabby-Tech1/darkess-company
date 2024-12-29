"use client"

import React, { useEffect } from 'react';
import Hero from '@/public/Contact.png';
import Image from 'next/image';
import { FaPhoneVolume } from 'react-icons/fa6';
import { IoLocationSharp } from 'react-icons/io5';
import { MdMarkEmailRead } from 'react-icons/md';
import { IoMdTime } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: false });
  }, []);

  return (
    <section>
      {/* Background Section */}
      <div
        className="md:h-[60vh] h-[70vw] flex items-center justify-center w-screen"
        data-aos="fade-in"
      >
        <Image
          src={Hero}
          alt="hero section for about page"
          className="bg-cover bg-center relative w-full h-full"
        />
        <div className="absolute">
          <div className="text-white text-center flex">
            <h1 className="text-4xl md:text-5xl font-bold" data-aos="zoom-in">
              Contact Us
            </h1>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="bg-white py-12 px-6 md:px-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            className="bg-blue text-white p-2 md:p-6 rounded-md flex flex-col items-center"
            data-aos="fade-up"
          >
            <div className="pb-2">
              <FaPhoneVolume className="text-white text-xl" />
            </div>
            <p className="text-xl font-bold">PHONE</p>
            <p className="mt-2 max-sm:text-sm">+233 55 302 4319</p>
            <p className="max-sm:text-sm">+233 24 295 9650</p>
          </div>
          <div
            className="bg-blue text-white p-2 md:p-6 rounded-md flex flex-col items-center"
            data-aos="fade-up"
          >
            <div className="pb-2">
              <IoLocationSharp className="text-white text-xl" />
            </div>
            <p className="text-xl font-bold">LOCATION</p>
            <p className="mt-2 text-center max-sm:text-sm">
              Sapleiman Adjacent to VKAY Lodge
            </p>
          </div>
          <div
            className="bg-blue text-white p-2 md:p-6 rounded-md flex flex-col items-center"
            data-aos="fade-up"
          >
            <div className="pb-2">
              <MdMarkEmailRead className="text-white text-xl" />
            </div>
            <p className="text-xl font-bold">EMAIL</p>
            <p className="mt-2 max-sm:text-sm">yakubur259@gmail.com</p>
          </div>
          <div
            className="bg-blue text-white p-2 md:p-6 rounded-md flex flex-col items-center"
            data-aos="fade-up"
          >
            <div className="pb-2">
              <IoMdTime className="text-white text-xl" />
            </div>
            <p className="text-xl font-bold text-center">WORKING HOURS</p>
            <p className="mt-2 max-sm:text-sm">Mon-Fri: 08am-09pm</p>
            <p className="max-sm:text-sm">Saturday: 1pm-10pm</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-gray-50 py-12 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-center text-2xl font-bold mb-6">
            Get in touch with us today to discuss your project needs
          </h2>
          <form className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Phone"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={5}
              className="border border-gray-300 p-3 rounded-md w-full"
            ></textarea>
            <button
              type="submit"
              className="bg-blue text-white py-3 px-6 rounded-md font-bold hover:scale-95 duration-300 ease-linear"
              data-aos="zoom-in"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer Note */}
      <div className="bg-white py-6 px-6 md:px-32" data-aos="fade-in">
        <p className="text-center text-gray-600">
          Please don’t hesitate to contact us with any questions, enquiries or project proposals.
        </p>
      </div>
    </section>
  );
};

export default ContactPage;