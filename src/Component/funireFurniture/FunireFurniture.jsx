import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const leftImages = [
  { src: 'https://i.imgur.com/moervWh.png', classes: 'h-72 w-1/4 lg:w-28 absolute bottom-0 left-0' },
  { src: 'https://i.imgur.com/LTogM50.png', classes: 'w-3/4 lg:w-[28rem] ml-24 lg:ml-[8rem]' },
  { src: 'https://i.imgur.com/MlcYKQj.png', classes: 'h-72 w-1/2 lg:w-60' },
  { src: 'https://i.imgur.com/ejibyF8.png', classes: 'w-1/2 lg:w-[28rem]' },
];

const rightImages = [
  { src: 'https://i.imgur.com/QHrRXFp.png', classes: 'h-full w-3/4 lg:w-[20rem]' },
  { src: 'https://i.imgur.com/robbzRK.png', classes: 'w-1/4 lg:w-[13rem] h-80 absolute bottom-0 right-0' },
  { src: 'https://i.imgur.com/bsw8whB.png', classes: 'h-72 w-1/2 lg:w-48' },
  { src: 'https://i.imgur.com/7MNjy30.png', classes: 'w-1/2 lg:w-[17rem]' },
];

function FunireFurniture() {
    useEffect(()=>{
        AOS.init();
    })
  return (
    <div>
      <section className='py-7 w-full h-auto'>
        <div>
          <h1 className='text-4xl font-bold font-serif text-center'>#Funire Furniture</h1>
          <p className='text-center mt-4'>
            Explore our range of beautifully designed and meticulously crafted furniture that blends style with functionality. Our collection is perfect for enhancing the aesthetic of any space, ensuring both comfort and elegance.
          </p>
        </div>

        <div className='flex flex-wrap lg:flex-nowrap w-full h-auto gap-4 mt-8'>
          <div className='w-full lg:w-5/12 h-auto py-10'>
            <div className='flex w-full h-64 gap-3 relative'>
              {leftImages.slice(0, 2).map((image, index) => (
                <div key={index} className={`${image.classes} overflow-hidden`} data-aos="fade-down" data-aos-duration="1600">
                  <img className='w-full h-full bg-cover object-cover hover:scale-105 duration-700' src={image.src} alt='' />
                </div>
              ))}
            </div>
            <div className='flex w-full h-64 gap-3 mt-3'>
              {leftImages.slice(2).map((image, index) => (
                <div key={index} className={`${image.classes} overflow-hidden`} data-aos="fade-up" data-aos-duration="1500">
                  <img className='w-full h-full bg-cover object-cover hover:scale-105 duration-700' src={image.src} alt='' />
                </div>
              ))}
            </div>
          </div>

          <div className='w-full lg:w-2/12 flex justify-center items-center'>
            <div className='border-2 w-full h-80 overflow-hidden' data-aos="zoom-in-up" data-aos-duration="1500">
              <img className='w-full h-full bg-cover object-cover hover:scale-105 duration-700' src='https://i.imgur.com/pkcOm3E.png' alt='' />
            </div>
          </div>

          <div className='w-full lg:w-5/12 h-auto py-10'>
            <div className='flex w-full h-64 gap-3 relative'>
              {rightImages.slice(0, 2).map((image, index) => (
                <div key={index} className={`${image.classes} overflow-hidden`} data-aos="fade-down" data-aos-duration="1600">
                  <img className='w-full h-full bg-cover object-cover hover:scale-105 duration-700' src={image.src} alt='' />
                </div>
              ))}
            </div>
            <div className='flex w-full h-64 gap-3 mt-3'>
              {rightImages.slice(2).map((image, index) => (
                <div key={index} className={`${image.classes} overflow-hidden`} data-aos="fade-up" data-aos-duration="1500">
                  <img className='w-full h-full bg-cover object-cover hover:scale-105 duration-700' src={image.src} alt='' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FunireFurniture;
