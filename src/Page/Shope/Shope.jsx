import React, { useContext, useEffect } from 'react';
import Layout from '../../Component/Layout/Layout';
import { CiHeart } from "react-icons/ci";
import { FcRating } from "react-icons/fc";
import { MdOutlineHighQuality } from "react-icons/md";
import { BsPatchCheck } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiLockKeyOpenBold } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";
import myContext from '../../Context/myContext';
import { useNavigate } from 'react-router-dom';

const data = [
  // ... Your data here (same as before)
];

function Shope() {
  useEffect(() => {
    AOS.init();
  }, []);

  const navigate = useNavigate();
  const context = useContext(myContext);
  const { getAllProduct } = context;

  return (
    <Layout>
      <div className='w-full h-96 relative'>
        <img src='https://i.imgur.com/3pU6kXZ.png' alt='Shop Background' className='w-full h-full object-cover' />
        <h3 className='absolute left-1/2 transform -translate-x-1/2 top-1/2 text-3xl font-semibold text-white'>Shop</h3>
      </div>

      <section className='my-10'>
        <div className='mb-3'>
          <h1 className='text-3xl text-center font-serif font-bold'>Our Product</h1>
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
                    onClick={() => navigate(`/singalePage/${id}`)} // Corrected the route and used `id`
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

        <div className='flex justify-center mt-10 mb-10 gap-5'>
          <span className='w-10 h-10 flex justify-center items-center bg-[#B88E2F] rounded-md cursor-pointer'>1</span>
          <span className='w-10 h-10 flex justify-center items-center bg-[#F9F1E7] rounded-md cursor-pointer'>2</span>
          <span className='w-10 h-10 flex justify-center items-center bg-[#F9F1E7] rounded-md cursor-pointer'>3</span>
          <span className='w-16 h-10 flex justify-center items-center bg-[#F9F1E7] rounded-md cursor-pointer'>Next</span>
        </div>

        <div className='flex justify-around items-center h-60 bg-[#F9F1E7] w-full gap-5'>
          <div className='w-1/5 h-auto flex gap-1'>
            <div className='text-6xl'><MdOutlineHighQuality /></div>
            <div>
              <h2 className='text-xl font-semibold'>High Quality</h2>
              <p>Crafted from top materials</p>
            </div>
          </div>
          <div className='w-1/5 h-auto flex gap-1'>
            <div className='text-6xl'><BsPatchCheck /></div>
            <div>
              <h2 className='text-xl font-semibold'>Warranty Protection</h2>
              <p>Over 2 years</p>
            </div>
          </div>
          <div className='w-1/5 h-auto flex gap-1'>
            <div className='text-6xl'><LiaShippingFastSolid /></div>
            <div>
              <h2 className='text-xl font-semibold'>Free Shipping</h2>
              <p>On orders over 500</p>
            </div>
          </div>
          <div className='w-1/5 h-auto flex gap-1'>
            <div className='text-6xl'><PiLockKeyOpenBold /></div>
            <div>
              <h2 className='text-xl font-semibold'>24/7 Support</h2>
              <p>Dedicated support</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Shope;
