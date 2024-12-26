import Hero from '@/public/home-hero.png'
import Hero1 from '@/public/hero1.png'
import Hero2 from '@/public/hero2.png'
import Building from '@/public/building.png'
import Building2 from '@/public/building2.png'
import Image from 'next/image';
import { Expertise, Choose } from './_constants'

export default function Home() {
  return (
    <div className='overflow-x-hidden w-screen'>
      <div className="h-[85vh] flex items-center justify-center  overflow-x-hidden">
        <Image src={Hero} alt="hero section" className="bg-cover bg-center relative w-full h-full" />
        <div className="absolute">
          <div className='flex justify-between items-center gap-20'>
            <div className="flex gap-4 items-center">
              <Image src={Hero1} alt="Engineer at work" width={280} height={330} />
              <Image src={Hero2} alt="Engineer at work" width={280} height={380} />
            </div>
            <div className="flex flex-col gap-8 text-white">
              <div className="w-[40vw] flex flex-col gap-2">
                <h1 className='text-4xl font-semibold'>Dakess Drilling And Construction Limited</h1>
                <p>We deliver reliable drilling solutions and exceptional construction services, building the future with precision and integrity</p>
              </div>
              <button className='text-blue bg-white py-2 px-4 flex items-center w-fit rounded-full'>Contact Us </button>
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between text-white py-8 px-16 gap-24'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-5xl text-blue font-semibold'>Experts In Drilling And Constrution Solutions</h1>
            <p className='text-gray-600'>Trusted partner for your infrastructure needs.</p>
          </div>
          <button className='text-white bg-blue py-2 px-4 rounded-md w-fit'>Explore Our Services</button>
        </div>
        <Image src={Building} alt="building" width={540} height={420}/>
      </div>
      <div className="flex items-center justify-center">
        <Image src={Building2} alt="down hero section" className="bg-cover bg-center relative w-full h-full" />
        <div className="absolute">
          <div className='flex justify-between flex-col items-center gap-8 text-white px-80'>
            <div className='flex justify-between flex-col items-center gap-2'>
              <h1 className='text-5xl font-medium'>Our Expertise</h1>
              <p className='text-center'>Dakess Drlling and Constructio Limited offers comprehensive drilling and construction service to meet you infrastructure needs.</p>
            </div>
            <div className='grid grid-cols-2 gap-6'>
              {Expertise.map(item => {
                return(
                  <div key={item.id} className='bg-gray-300 text-xl p-10 rounded-lg shadow-md font-medium flex items-center justify-center text-blue'>
                    {item.name}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-16 py-8'>
        <div className='flex flex-col gap-2 items-center'>
          <h1 className='text-blue text-4xl'>Why Choose Dakess</h1>
          <p>Our commitment to safety, quality and customer satisfaction sets us apart.</p>
          <div className='bg-gray-300 rounded-xl grid grid-cols-2 gap-8 py-12 px-20 mx-44'>
              {Choose.map(item => {
                return(
                  <div key={item.id} className='bg-blue rounded-xl w-60 text-xl shadow-md text-white flex justify-center py-8 px-4'>
                    <p className='text-center'>{item.name}</p>
                  </div>
                )
              })}
          </div>
        </div>
        <div className='flex justify-between px-16'>
          <div className='flex flex-col gap-1'>
              <p className='text-3xl font-semibold'>Get Started With Dakess Today</p>
              <p>Contact us for a consultation or to learn more about our services.</p>
          </div>
          <button className='text-white bg-blue py-1 px-8 w-fit rounded-lg'>Contact Us</button>
        </div>
      </div>
    </div>
  )
}
