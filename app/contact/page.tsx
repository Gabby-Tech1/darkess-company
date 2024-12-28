import React from 'react';
import Hero from '@/public/Contact.png'
import Image from 'next/image'



const ContactPage = () => {
  return (
    <section>
      {/* Background Section */}
      <div className="md:h-[60vh] h-[70vw] flex items-center justify-center w-screen">
            <Image src={Hero} alt="hero section for about page" className="bg-cover bg-center relative w-full h-full" />
            <div className="absolute">
                <div className="text-white text-center flex ">
                  {/* <h1 className="text-4xl font-bold">Drakes Drilling and Construction Limited</h1> */}
                    {/* <p className="text-2xl mt-2">Contact Us</p> */}
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Contact Us
                    </h1>
                </div>
            </div>
        </div>

      {/* Contact Info Section */}
      <div className="bg-white py-12 px-6 md:px-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue text-white p-2 md:p-6 rounded-md flex flex-col items-center !important">
            <p className="text-xl font-bold">PHONE</p>
            <p className="mt-2 max-sm:text-sm">+233 55 302 4319</p>
            <p className="max-sm:text-sm">+233 24 295 9650</p>
          </div>
          <div className="bg-blue text-white p-2 md:p-6 rounded-md flex flex-col items-center">
            <p className="text-xl font-bold">LOCATION</p>
            <p className="mt-2 text-center max-sm:text-sm">Sapleiman Adjacent to VKAY Lodge</p>
          </div>
          <div className="bg-blue text-white p-2 md:p-6 rounded-md flex flex-col items-center">
            <p className="text-xl font-bold">EMAIL</p>
            <p className="mt-2 max-sm:text-sm">yakubur259@gmail.com</p>
          </div>
          <div className="bg-blue text-white p-2 md:p-6 rounded-md flex flex-col items-center">
            <p className="text-xl font-bold">WORKING HOURS</p>
            <p className="mt-2 max-sm:text-sm">Mon-Fri: 08am-09pm</p>
            <p className="max-sm:text-sm">Saturday: 1pm-10pm</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-gray-50 py-12 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto">
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
              rows= {5}
              className="border border-gray-300 p-3 rounded-md w-full"
            ></textarea>
            <button
              type="submit"
              className="bg-blue text-white py-3 px-6 rounded-md font-bold hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer Note */}
      <div className="bg-white py-6 px-6 md:px-32">
        <p className="text-center text-gray-600">
          Please don’t hesitate to contact us with any questions, enquiries or project proposals.
        </p>
      </div>
    </section>
  );
};

export default ContactPage;
