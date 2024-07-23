import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const category = [
    {
        name: 'Badroom',
        image: 'https://i.imgur.com/li7yOLC.png'
    },
    {
        name: 'Badroom',        
        image: 'https://i.imgur.com/5jFclkA.png'

    },
    {
        name: 'Badroom',
        image: 'https://i.imgur.com/ZjcyrRJ.png'
    },
    {
        name: 'Badroom',
        image: 'https://i.imgur.com/li7yOLC.png'
    },
    {
        name: 'Badroom',
        image: 'https://i.imgur.com/5jFclkA.png'
    },
    {
        name: 'Badroom',
        image: 'https://i.imgur.com/ZjcyrRJ.png'
    },
    {
        name: 'Badroom',
        image: 'https://i.imgur.com/li7yOLC.png'
    },
//      {
//         name: 'Badroom',
//         image: 'https://i.imgur.com/5jFclkA.png'
//     },
//     {
//         name: 'Badroom',
//         image: 'https://i.imgur.com/ZjcyrRJ.png'
//     },
 ]

function Category() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };


  return (
    <div>

       <section>

        <div className="slider-container mt-10">
            <Slider {...settings} className=' overflow-hidden'>
                {/* <div className=' p-10 '> */}
                {category.map((item, index) =>{
                    const {image, name} = item;
                    return(
                        <div key={index } className=' flex justify-center items-center h-auto  py-3 lg:px-5 md:px-9 px-1'>
                            <div className=' h-48  lg:w-56 md:w-56 w-48  object-cover overflow-hidden'>
                                <img className='w-full h-full cursor-pointer hover:scale-105 duration-700' src={image}></img>
                            </div>
                            <h3 className=' text-center uppercase font-semibold tracking-normal py-2'>{name}</h3>
                        </div>

                    )
                })}
                
                {/* </div>  */}
            </Slider>
        </div>
  


       </section>



       {/* <section>
        {category.map((item, index) ={
            return(
                <div key={index}  > {item.name}</div>

            )
        })}
        <div className=' flex justify-center items-center gap-4'>
            <div>
                <img src={""} alt='image' />
            </div>
        </div>
       </section> */}

    </div>
  )
}

export default Category;