import React, { useEffect } from 'react';
import Layout from '../../Component/Layout/Layout';
import Quality from '../../Component/Qualitiy/Quality';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, deleteFromCart, incrementQuantity } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications
import { useNavigate } from 'react-router-dom';

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Deleted from cart");
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const cartTotal = cartItems.reduce((prevValue, item) => prevValue + item.discountPrice * item.quantity, 0);
  const originalTotal = cartItems.reduce((prevValue, item) => prevValue + item.originalPrice * item.quantity, 0);
  const savingsTotal = originalTotal - cartTotal;

  const cartItemTotal = cartItems.map((item) => item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);

  // Calculate tax and total
  const taxPercentage = 0.18; // 18%
  const taxAmount = cartTotal * taxPercentage;
  const finalTotal = cartTotal + taxAmount + 99; // Adding Rs. 99 for store pickup

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div>
      <Layout>
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>

            <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
              <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="rounded-lg border border-gray-200 bg-[#F9F1E7] p-4 shadow-md dark:border-gray-700 dark:bg-gray-800 md:p-6">
                      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                        <a href="#" className="shrink-0 md:order-1" onClick={() => navigate(`/singlePage/${item.id}`)}>
                          <img className="h-24 w-24 dark:hidden rounded-lg" src={item.ProductImageURL1} alt={item.title} />
                          <img className="hidden h-24 w-24 dark:block rounded-lg" src={item.ProductImageURL1} alt={item.title} />
                        </a>

                        <label htmlFor={`counter-input-${item.id}`} className="sr-only">Choose quantity:</label>
                        <div className="flex items-center justify-between md:order-3 md:justify-end">
                          <div className="flex items-center">
                            <button
                              type="button"
                              onClick={() => handleDecrement(item.id)}
                              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                            >
                              <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                              </svg>
                            </button>
                            <input
                              type="text"
                              id={`counter-input-${item.id}`}
                              className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                              value={item.quantity}
                              readOnly
                            />
                            <button
                              type="button"
                              onClick={() => handleIncrement(item.id)}
                              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                            >
                              <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                              </svg>
                            </button>
                          </div>
                          <div className="text-end md:order-4 md:w-32">
                            <p className="text-base font-bold text-gray-900 dark:text-white">Rs. {item.discountPrice * item.quantity}</p>
                          </div>
                        </div>

                        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                          <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white" onClick={() => navigate(`/singlePage/${item.id}`)}>{item.title}</a>

                          <div className="flex items-center gap-4">
                            <button type="button" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                              <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                              </svg>
                              Add to Favorites
                            </button>

                            <button
                              type="button"
                              onClick={() => deleteCart(item)}
                              className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                            >
                              <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                              </svg>
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                <div className="space-y-4 rounded-lg border border-gray-200 p-4 shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-6 bg-[#F9F1E7]">
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">Order Summary</p>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">Rs. {originalTotal}</dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                        <dd className="text-base font-medium text-green-600">-Rs. {savingsTotal}</dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">Rs. 99</dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">Rs. {taxAmount.toFixed(2)}</dd>
                      </dl>
                    </div>

                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                      <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                      <dd className="text-base font-bold text-gray-900 dark:text-white">Rs. {finalTotal.toFixed(2)}</dd>
                    </dl>
                  </div>

                  <a href="#" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-black">Proceed to Checkout</a>

                  <div className="flex items-center justify-center gap-2">
                    <a href="#" title="" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 hover:no-underline dark:text-primary-500 border-2 py-2 px-3 border-[#B88E2F] rounded-md hover:bg-[#B88E2F] hover:text-white" >
                      Continue Shopping
                      <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Quality />
      </Layout>
    </div>
  );
}

export default Cart;
