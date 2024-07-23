import React from 'react'
import card1 from '../image/scandinavian-interior-mockup-wall-decal-background 1.png'



function HeroSection() {
  return (
    <div>

        <div className=' w-full h-auto'>
            <div className=' w-full relative'>
                <img className=' w-full h-[30rem]' src={card1} alt='image' />
                <div className=' lg:w-1/3 md:w-1/2 w-[20rem] h-86 border-2 absolute lg:top-24 md:top-20 top-10 lg:right-16 right-5 bg-[#FFF3E3] p-10 space-y-3 rounded-xl'>
                <span>New Arrival</span>
                  <h1 className=' md:text-4xl font-sans font-bold text-[#B88E2F] text-2xl '>Discover Our <br/> New Collection</h1>
                  <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                  <button type='submit' className='px-20 py-5 uppercase bg-[#B88E2F] font-bold rounded-lg'>Buy Now</button>

                </div>
            </div>

        </div>
       

    </div>
  )
}

export default HeroSection