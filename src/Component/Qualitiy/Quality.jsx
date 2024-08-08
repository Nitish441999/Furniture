import React from 'react';
import { MdOutlineHighQuality } from "react-icons/md";
import { BsPatchCheck } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiLockKeyOpenBold } from "react-icons/pi";

function Quality() {
  return (
    <div className='bg-[#F9F1E7] w-full py-10'>
      <div className='flex flex-col md:flex-row justify-around items-center gap-10'>
        <div className='flex items-center gap-4 w-full md:w-1/4 px-4'>
          <div className='text-6xl'><MdOutlineHighQuality /></div>
          <div>
            <h2 className='text-xl font-semibold'>High Quality</h2>
            <p>crafted from top material</p>
          </div>
        </div>
        <div className='flex items-center gap-4 w-full md:w-1/4 px-4'>
          <div className='text-6xl'><BsPatchCheck /></div>
          <div>
            <h2 className='text-xl font-semibold'>Warranty Protection</h2>
            <p>over 2 years</p>
          </div>
        </div>
        <div className='flex items-center gap-4 w-full md:w-1/4 px-4'>
          <div className='text-6xl'><LiaShippingFastSolid /></div>
          <div>
            <h2 className='text-xl font-semibold'>Free Shipping</h2>
            <p>order over 500</p>
          </div>
        </div>
        <div className='flex items-center gap-4 w-full md:w-1/4 px-4'>
          <div className='text-6xl'><PiLockKeyOpenBold /></div>
          <div>
            <h2 className='text-xl font-semibold'>24/7 Support</h2>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quality;
