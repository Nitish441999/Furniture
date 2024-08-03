import React, { useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';

const category = [
    {
        name: 'Bedroom',
        image: 'https://i.imgur.com/li7yOLC.png'
    },
    {
        name: 'Living',
        image: 'https://i.imgur.com/5jFclkA.png'
    },
    {
        name: 'Cafe Chair',
        image: 'https://i.imgur.com/ZjcyrRJ.png'
    },
    {
        name: 'Dining',
        image: 'https://i.imgur.com/li7yOLC.png'
    },
    {
        name: 'Lighting & Lamps',
        image: 'https://i.imgur.com/5jFclkA.png'
    },
    {
        name: 'Kitchen',
        image: 'https://i.imgur.com/ZjcyrRJ.png'
    },
    {
        name: 'Outdoor',
        image: 'https://i.imgur.com/li7yOLC.png'
    },
];

function Category() {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init();
    }, []);

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
                    <Slider {...settings} className='overflow-hidden'>
                        {category.map((item, index) => {
                            const { image, name } = item;
                            return (
                                <div key={index} className='flex justify-center items-center h-auto py-3 lg:px-5 md:px-9 px-1' data-aos="fade-up" data-aos-duration="1700">
                                    <div className='h-48 lg:w-56 md:w-56 w-48 object-cover overflow-hidden' onClick={() => navigate(`/category/${name}`)}>
                                        <img className='w-full h-full cursor-pointer hover:scale-105 duration-700' src={image} alt={name} />
                                    </div>
                                    <h3 className='text-center uppercase font-semibold tracking-normal py-2'>{name}</h3>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </section>
        </div>
    );
}

export default Category;
