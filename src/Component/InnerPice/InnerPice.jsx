import React from 'react'
import Slider from "react-slick";

function InnerPice() {

    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }; 
  return (
    <div>
        
        <section className=' bg-[#FCF8F3] px-4 py-8    w-full h-aout mt-10'>
            <div className=' w-full h-aout grid grid-cols-3 gap-8 ' >
                <div className=' h-aout flex justify-center items-center'>
                    <div className=' '>
                        <h1 className=' lg:text-3xl md:text-xl font-bold text-black'>50+ Beautiful rooms<br/> inspiration</h1>
                        <p className=' lg:text-sm md:text-[10px] py-1 font-thin'>our designer already made a lot of Beautiful<br/> prototipe of rooms that inspire you</p>
                        <button className=' py-2 px-4 bg-[#B88E2F] text-md text-white my-4 rounded-lg'> Explore More</button>
                    </div>
                </div>
                <div className=' overflow-hidden '>
                    <img className='w-full bg-cover object-cover lg:h-[35rem] md:h-[30rem] hover:scale-105 duration-1000 rounded-md' src='https://i.imgur.com/d9FIiMn.png' alt=''/>
                </div>
                <div className=''>

                    <Slider {...settings} className=' overflow-hidden' >
                        <div>
                            <img className='w-full lg:h-[31rem] md:h-[27rem] bg-cover object-cover ' src='https://i.imgur.com/W8KMYwf.png ' alt=''/>
                        </div>
                        <div>
                            <img className='w-full lg:h-[31rem] md:h-[27rem] bg-cover object-cover' src='https://i.imgur.com/pkcOm3E.png ' alt=''/>
                        </div>
                        <div>
                            <img className='w-full lg:h-[31rem] md:h-[27rem] bg-cover object-cover' src='https://i.imgur.com/QHrRXFp.png ' alt=''/>
                        </div>
                        <div>
                            <img className='w-full lg:h-[31rem] md:h-[27rem] bg-cover object-cover' src='https://i.imgur.com/ejibyF8.png' alt=''/>
                        </div>
                        <div>
                            <img className='w-full lg:h-[31rem] md:h-[27rem] bg-cover object-cover' src='https://i.imgur.com/robbzRK.png ' alt=''/>
                        </div>
                        <div>
                            <img className='w-full lg:h-[31rem] md:h-[27rem] bg-cover object-cover' src='https://i.imgur.com/d9FIiMn.png ' alt=''/>
                        </div>
                    </Slider>

                </div>
            </div>
        </section>
    


    </div>
  )
}

export default InnerPice;