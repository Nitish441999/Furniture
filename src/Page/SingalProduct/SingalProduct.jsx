import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../Component/Layout/Layout';
import { FcRating } from "react-icons/fc";
import myContext from '../../Context/myContext';
import { useParams } from 'react-router-dom';
import { fireDB } from "../../Firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addToCart, deleteFromCart } from "../../redux/cartSlice";

function SingleProduct() {
    const context = useContext(myContext);
    const { setLoading } = context;
    const { id } = useParams();
    const [product, setProduct] = useState(null); // Use null initially to differentiate between no data and empty data

    // Get single product from Firebase
    const getProductData = async () => {
        setLoading(true);
        try {
            const productRef = doc(fireDB, "product", id);
            const productSnap = await getDoc(productRef);
            console.log(productSnap.data())
            setProduct({ ...productSnap.data(), id: productSnap.id });
        } catch (error) {
            console.error("Error fetching product data: ", error);
        } finally {
            setLoading(false);
        }
    };

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleAddCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Added to cart");
    };

    const handleDeleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Deleted from cart");
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        getProductData();
    }, []);

    const isInCart = cartItems.some(cartItem => cartItem.id === product?.id);

    return (
        <div>
            <Layout>
                <div className='flex max-sm:flex-wrap w-full h-auto gap-10 pl-16 pr-16 max-sm:px-3'>
                    {product ? (
                        <>
                            <div className='w-4/5 max-sm:w-full flex max-sm:flex-wrap-reverse gap-8'>
                                <div className='max-sm:flex gap-3'>
                                    {[product.ProductImageURL1, product.ProductImageURL2, product.ProductImageURL3].map((imgSrc, index) => (
                                        <div key={index} className='w-24 h-24 max-sm:h-20 max-sm:w-20 max-sm:m-auto mt-5 bg-[#F9F1E7] rounded-xl'>
                                            <img className=' h-full w-full rounded-xl' src={imgSrc} alt={`Product Image ${index + 1}`} />
                                        </div>
                                    ))}
                                </div>
                                <div className='w-4/5 bg-[#F9F1E7] m-5 max-sm:m-auto max-sm:w-11/12 rounded-xl max-sm:h-96'>
                                    <img className=' h-full w-full rounded-xl' src={product.ProductImageURL1} alt='Product' />
                                </div>
                            </div>
                            <div className='w-4/5 max-sm:w-full p-5'>
                                <h1 className='text-3xl font-semibold'>{product.title}</h1>
                                <span className='text-2xl font-semibold text-gray-400 pt-8'>
                                    Rs.{product.originalPrice}
                                </span>
                                {product.discount && (
                                    <>
                                        <span className='text-xl font-semibold text-red-500 ml-3'>
                                            Discount: {product.discount}%
                                        </span><br></br>
                                        <span className='text-2xl text-start font-semibold text-green-500 ml-3'>
                                            Rs.{product.discountPrice}
                                        </span>
                                    </>
                                )}
                                <div className='flex gap-2 pt-3'>
                                    <span className='flex'><FcRating /><FcRating /><FcRating /><FcRating /><FcRating /></span>|
                                    <p className='text-sm text-gray-400'>5 Customer Reviews</p>
                                </div>
                                <p className='text-sm mt-3'>{product.description}</p>

                                <p className='pt-3 pb-3'>Size</p>
                                <ul className='flex gap-5'>
                                    <li className='w-10 h-10 flex justify-center items-center rounded-md bg-[#B88E2F] cursor-pointer'>1</li>
                                    <li className='w-10 h-10 flex justify-center items-center rounded-md bg-[#F9F1E7] cursor-pointer'>2</li>
                                    <li className='w-10 h-10 flex justify-center items-center rounded-md bg-[#F9F1E7] cursor-pointer'>3</li>
                                </ul>

                                <p className='pt-3 pb-3'>Color</p>
                                <ul className='flex gap-5'>
                                    <li className='w-10 h-10 flex justify-center items-center rounded-3xl bg-black cursor-pointer'></li>
                                    <li className='w-10 h-10 flex justify-center items-center rounded-3xl bg-blue-600 cursor-pointer'></li>
                                    <li className='w-10 h-10 flex justify-center items-center rounded-3xl bg-[#B88E2F] cursor-pointer'></li>
                                </ul>
                                <div className='flex gap-5 my-5'>
                                    {isInCart ? (
                                        <div
                                            className='border-2 border-[#B88E2F] bg-[#F9F1E7] flex justify-center items-center max-sm:px-2 px-10 rounded-lg cursor-pointer py-3'
                                            onClick={() => handleDeleteCart(product)}
                                        >
                                            <p className='max-sm:text-sm text-[#B88E2F]'>Delete From Cart</p>
                                        </div>
                                    ) : (
                                        <div
                                            className='border-2 border-[#B88E2F] bg-[#F9F1E7] flex justify-center items-center max-sm:px-2 px-10 rounded-lg cursor-pointer py-3'
                                            onClick={() => handleAddCart(product)}
                                        >
                                            <p className='max-sm:text-sm text-[#B88E2F]'>Add To Cart</p>
                                        </div>
                                    )}
                                    <div
                                        className='border-2 border-[#B88E2F] bg-[#F9F1E7] flex justify-center items-center max-sm:px-2 px-10 rounded-lg cursor-pointer py-3'
                                    >
                                        <p className='max-sm:text-sm text-[#B88E2F]'>Compare</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p>Loading product data...</p>
                    )}
                </div>
            </Layout>
        </div>
    );
}

export default SingleProduct;
