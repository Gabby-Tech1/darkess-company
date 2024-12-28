import React from 'react'
import Hero from '@/public/Service_hero.png'
import Founder from '@/public/Bottom.png'
import Founder1 from '@/public/Image1.png'
import Founder2 from '@/public/Image2.png'
import Founder3 from '@/public/Image3.png'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <div className="md:h-[60vh] h-[50vw] flex items-center justify-center w-screen">
        <Image
          src={Hero}
          alt="hero section for about page"
          className="bg-cover bg-center relative w-full h-full"
        />
        <div className="absolute">
          <div className="text-white text-center flex ">
            <h1 className="text-4xl md:text-xl font-bold">
              At Dakess Drilling and Construction Limited, we offer a
              comprehensive range of services to meet your infrastructure needs.
            </h1>
          </div>
        </div>
      </div>
      <div className="py-10 flex flex-col gap-10">
        <div className="py-10 flex flex-col items-center">
          <h1 className="text-2xl">We offer the following services</h1>
          {/* <p className='text-blue text-3xl text-center md:text-4xl '>Dakess Drilling And Construction Limited</p>
                <p className='text-center lg:px-44 md:px-10 px-4'>At Dakess Drilling and Construction Limited, 
                  we are a leading provider of expert drilling and construction services, dedicated to 
                  delivering high-quality solutions to our clients. With a strong commitment to safety, 
                  innovation, and customer satisfaction, we have established ourselves as a trusted partner
                   in the industry.</p> */}
        </div>
        <div className="flex items-center flex-col-reverse md:flex-row justify-center gap-10 lg:gap-20 lg:mx-44 px-4">
          <Image
            src={Founder1}
            alt="picture of the founder"
            width={300}
            height={450}
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl text-blue font-semibold">
              Drilling and Construction Services
            </h1>
            <p className="text-lg">- Borehole drilling for water supply</p>
            <p className="text-lg">
              - Foundation drilling for construction projects
            </p>
            <p className="text-lg">- Construction management</p>
            <p className="text-lg">- Site investigation and assessment</p>
          </div>
        </div>
        <div className="py-10 flex items-center flex-col-reverse md:flex-row justify-center gap-10 lg:gap-20 lg:mx-44 px-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl text-blue font-semibold">
              Borehole Installation
            </h1>
            <p className="text-lg">- Design and installation of boreholes</p>
            <p className="text-lg">- Borehole rehabilitation and maintenance</p>
            <p className="text-lg">- Water yield testing and analysis</p>
          </div>
          <Image
            src={Founder2}
            alt="picture of the founder"
            width={300}
            height={450}
          />
        </div>

        <div className="py-10 px-10 flex items-center flex-col-reverse md:flex-row justify-center gap-10 lg:gap-20 lg:mx-44 px-4">
          <Image
            src={Founder3}
            alt="picture of the founder"
            width={300}
            height={450}
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl text-blue font-semibold">
              Water Treatment Solutions
            </h1>
            <p className="text-lg">- Water purification systems</p>
            <p className="text-lg">- Water filtration systems</p>
            <p className="text-lg">
              - Water treatment plant design and installation
            </p>
          </div>
        </div>
      </div>



      {/* Geological Survey */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          <div className="bg-gray-50 shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-bold text-blue-600">Geological Survey</h3>
              <ul className="mt-4 text-gray-700 space-y-2">
                <li>- Site investigation and geological mapping</li>
                <li>- Soil and rock sampling and analysis</li>
                <li>- Hydrogeological studies</li>
              </ul>
            </div>
          </div>

          {/* Recreational Services */}
          <div className="bg-gray-50 shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-bold text-blue-600">Recreational Services</h3>
              <ul className="mt-4 text-gray-700 space-y-2">
                <li>- Swimming Pool construction</li>
                <li>- Pool maintenance and repair</li>
              </ul>
            </div>
          </div>

          {/* Security Services */}
          <div className="bg-gray-50 shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-bold text-blue-600">Security Services</h3>
              <ul className="mt-4 text-gray-700 space-y-2">
                <li>- CCTV installation</li>
                <li>- Electrical fencing</li>
              </ul>
            </div>
          </div>
          {/* Security Services */}
          <div className="bg-gray-50 shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-bold text-blue-600">Electrical Services</h3>
              <ul className="mt-4 text-gray-700 space-y-2">
                <li>- Electrical wiring and installation</li>
                <li>- Electrical maintenance and repair</li>
              </ul>
            </div>
          </div>
          {/* Security Services */}
          <div className="bg-gray-50 shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-bold text-blue-600">Building Finishing Services</h3>
              <ul className="mt-4 text-gray-700 space-y-2">
                <li>- POP (Plaster of Paris) construction</li>
                <li>- Ceiling design and installation</li>
              </ul>
            </div>
          </div>
          {/* Security Services */}
          <div className="bg-gray-50 shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-bold text-blue-600">Industrial Services</h3>
              <ul className="mt-4 text-gray-700 space-y-2">
                <li>- Pure Water Factory setup and equipment installation</li>
                <li>- Bottling plant design and construction</li>
              </ul>
            </div>
          </div>
          </div>
        


     
     
      {/* buttonImage */}

      <div className="md:h-[60vh] h-[50vw] flex items-center justify-center w-screen">
        <Image
          src={Founder}
          alt="hero section for about page"
          className="bg-cover bg-center relative w-full h-full"
        />
        <div className="absolute">
          <div className="text-white text-center flex ">
            {/* <h1 className="text-4xl md:text-xl font-bold">
                    At Dakess Drilling and Construction Limited, we offer a comprehensive
                     range of services to meet your infrastructure needs.

                    </h1> */}
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Why Choose Dakess?</h2>
              <ul className="list-disc list-inside text-lg space-y-4">
                <li>
                  Experienced professionals with decades of combined experience
                </li>
                <li>State-of-the-art equipment</li>
                <li>Customer-centric solutions</li>
                <li>Safety-first approach</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page