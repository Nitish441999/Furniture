import React, { useContext, useEffect } from 'react';
import { CiHeart } from "react-icons/ci";
import { FcRating } from "react-icons/fc";
import AOS from "aos";
import "aos/dist/aos.css";
import myContext from '../../Context/myContext';
import { useNavigate } from 'react-router-dom';

function HomePageProduct() {
  useEffect(() => {
    AOS.init();
  }, []);

  const context = useContext(myContext);
  const { getAllProduct } = context;
  const navigate = useNavigate();

  return (
    <div>
      <section className='my-10'>
        <div className='mb-3'>
          <h1 className='text-3xl text-center font-serif font-bold'>Our Products</h1>
        </div>
        <div className='flex flex-wrap justify-center gap-5 gap-y-10 mx-auto'>
          {getAllProduct.map((item, index) => {
            const { id, title, ProductImageURL1, originalPrice, discount, discountPrice } = item;

            return (
              <div
                key={id} // Use `id` for the key
                className='w-[290px] max-sm:w-[320px] shadow-md shadow-gray-400 rounded-xl'
                data-aos="zoom-in-up"
                data-aos-duration="1700"
              >
                <div className='w-full h-72 relative bg-cover rounded-t-xl overflow-hidden'>
                  <img
                    onClick={() => navigate(`/singlePage/${id}`)} // Corrected the route and used `id`
                    className='w-full h-full object-cover rounded-t-xl hover:scale-105 duration-700 cursor-pointer'
                    src={ProductImageURL1}
                    alt={`Image of ${title}`}
                  />
                  <span className='absolute top-3 right-3 w-10 p-2 bg-red-500 rounded-3xl text-white text-sm'>
                    {discount}%
                  </span>
                </div>
                <div className='w-full h-40 p-3 rounded-b-xl'>
                  <div className='flex justify-between items-center'>
                    <h1 className='text-md font-serif font-semibold'>{title}</h1>
                    <p className='flex py-1 cursor-pointer'>
                      <FcRating /> <FcRating /> <FcRating /> <FcRating /> <FcRating />
                    </p>
                  </div>
                  <div className='flex flex-col mt-2'>
                    <span className='text-lg line-through text-gray-500'>Rs. {originalPrice}</span>
                    <span className='text-lg font-bold text-red-500'>Rs. {discountPrice}</span>
                  </div>
                  <ul className='flex justify-between py-3'>
                    <li>
                      <button className='cursor-pointer text-sm bg-[#B88E2F] text-white py-2 px-10 rounded-md font-bold'>
                        Add To Cart
                      </button>
                    </li>
                    <li className='cursor-pointer text-3xl'>
                      <CiHeart />
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <div className='flex justify-center pt-7'>
          <button type='button' className='py-2 px-6 border-2 border-[#B88E2F] text-[#B88E2F] rounded-lg'>
            Show More
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePageProduct;
