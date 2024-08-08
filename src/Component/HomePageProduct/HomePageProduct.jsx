import React, { useContext, useEffect } from 'react';
import { CiHeart } from "react-icons/ci";
import { FcRating } from "react-icons/fc";
import AOS from "aos";
import "aos/dist/aos.css";
import myContext from '../../Context/myContext';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import { toast } from 'react-toastify'; // Import toast for notifications
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications

function HomePageProduct() {
  useEffect(() => {
    AOS.init();
  }, []);

  const context = useContext(myContext);
  const { getAllProduct } = context;
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart || []); // Ensure cartItems is an array
  const dispatch = useDispatch();

  const addCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Added to cart");
  };

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Removed from cart");
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  
  

  return (
    <div>
      <section className='my-10'>
        <div className='mb-3'>
          <h1 className='text-3xl text-center font-serif font-bold'>Our Products</h1>
        </div>
        <div className='flex flex-wrap justify-center gap-5 gap-y-10 mx-auto'>
          {getAllProduct.map((item) => {
            const { id, title, ProductImageURL1, originalPrice, discount, discountPrice } = item;
            const isInCart = cartItems.some(cartItem => cartItem.id === id); // Check if the item is in the cart
            
            return (
              <div
                key={id}
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
                  {discount && (
                    <span className='absolute top-3 right-3 w-10 p-2 bg-red-500 rounded-3xl text-white text-sm'>
                      {discount}%
                    </span>
                  )}
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
                      {isInCart ? 
                        <button
                          onClick={() => deleteCart(item)}
                          className='cursor-pointer text-sm bg-red-500 text-white py-2 px-10 rounded-md font-bold'
                        >
                          Delete Cart
                        </button>
                      : 
                        <button
                          onClick={() => addCart(item)}
                          className='cursor-pointer text-sm bg-[#B88E2F] text-white py-2 px-10 rounded-md font-bold'
                        >
                          Add To Cart
                        </button>
                      }
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
          <button type='button' className='py-2 px-6 border-2 border-[#B88E2F] text-[#B88E2F] rounded-lg' onClick={() => navigate('/shop')}>
            Show More
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePageProduct;
