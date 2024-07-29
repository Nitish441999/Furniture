import React from 'react'

import { MdOutlineHighQuality } from "react-icons/md";
import { BsPatchCheck } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiLockKeyOpenBold } from "react-icons/pi";

function Quality() {
  return (
    <div>
        
        <div className=' flex justify-around items-center h-60 bg-[#F9F1E7] w-full gap-5 '>
            
            <div className=' w-1/5 h-auto  flex gap-1'>
                <div className='text-6xl'><MdOutlineHighQuality /></div>

                <div>
                    <h2 className=' text-xl font-semibold'>High Quality</h2> 
                    <p className=''>crafted from top meterial</p>
                </div>
            </div>
            <div className='  w-1/5 h-auto  flex gap-1'>
                <div className='text-6xl'><BsPatchCheck /></div>

                <div>
                    <h2 className=' text-xl font-semibold'>Warranty Protection</h2>
                    <p>over 2 years</p>
                </div>
                
            </div>
            <div className='  w-1/5 h-auto  flex gap-1'>
                <div className='text-6xl'><LiaShippingFastSolid /></div>

                <div>
                    <h2 className=' text-xl font-semibold'>Free Shiping</h2>
                    <p>order over 500</p>
                </div>
                
                
            </div>
            <div className='  w-1/5 h-auto  flex gap-1'>
                <div className='text-6xl'><PiLockKeyOpenBold /></div>

                <div>
                    <h2 className=' text-xl font-semibold'>24/7 Support</h2>
                    <p>Dedicated support</p>
                </div>
                
            </div>
        
    </div>
        
    </div>
  )
}

export default Quality