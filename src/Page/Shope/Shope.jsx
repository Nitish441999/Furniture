import React from 'react'
import Layout from '../../Component/Layout/Layout'
import { CiHeart } from "react-icons/ci";
import { FcRating } from "react-icons/fc";
import { MdOutlineHighQuality } from "react-icons/md";
import { BsPatchCheck } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiLockKeyOpenBold } from "react-icons/pi";



const data = [
    {
        titel: 'Syltherine',
       image: 'https://i.imgur.com/EOcEo71.png',
       
       price: '4000',
       discount: '30%',
       quantity: 1

    },
    {
        image: 'https://i.imgur.com/MAKlV31.png',
        titel: 'Syltherine',
        price: '4000',
        discount: '30%',
        quantity: 1
 
     },
     {
        image: 'https://i.imgur.com/JLenZKU.png',
        titel: 'Syltherine',
        price: '4000',
        discount: '30%',
        quantity: 1
 
     },
     {
        image: 'https://i.imgur.com/PNTA8Tl.png',
        titel: 'Syltherine',
        price: '4000',
        discount: '30%',
        quantity: 1
 
     },
     {
        image: 'https://i.imgur.com/Hr85POD.png',
        titel: 'Syltherine',
        price: '4000',
        discount: '30%',
        quantity: 1
 
     },
     {
        image: 'https://i.imgur.com/YbxLb8O.png',
        titel: 'Syltherine',
        price: '4000',
        discount: '30%',
        quantity: 1
 
     },
     {
        image: 'https://i.imgur.com/5p2XZvF.png',
        titel: 'Syltherine',
        price: '4000',
        discount: '30%',
        quantity: 1
 
     },
     {
        image: 'https://i.imgur.com/EOcEo71.png',
        titel: 'Syltherine',
        price: '4000',
        discount: '30%',
        quantity: 1
 
     },
     
        {
            titel: 'Syltherine',
           image: 'https://i.imgur.com/EOcEo71.png',
           
           price: '4000',
           discount: '30%',
           quantity: 1
    
        },
        {
            image: 'https://i.imgur.com/MAKlV31.png',
            titel: 'Syltherine',
            price: '4000',
            discount: '30%',
            quantity: 1
     
         },
         {
            image: 'https://i.imgur.com/JLenZKU.png',
            titel: 'Syltherine',
            price: '4000',
            discount: '30%',
            quantity: 1
     
         },
         {
            image: 'https://i.imgur.com/PNTA8Tl.png',
            titel: 'Syltherine',
            price: '4000',
            discount: '30%',
            quantity: 1
     
         },
         {
            image: 'https://i.imgur.com/Hr85POD.png',
            titel: 'Syltherine',
            price: '4000',
            discount: '30%',
            quantity: 1
     
         },
         {
            image: 'https://i.imgur.com/YbxLb8O.png',
            titel: 'Syltherine',
            price: '4000',
            discount: '30%',
            quantity: 1
     
         },
         {
            image: 'https://i.imgur.com/5p2XZvF.png',
            titel: 'Syltherine',
            price: '4000',
            discount: '30%',
            quantity: 1
     
         },
         {
            image: 'https://i.imgur.com/EOcEo71.png',
            titel: 'Syltherine',
            price: '4000',
            discount: '30%',
            quantity: 1
     
         }

]

function Shope() {
  return (
    <div>
        <Layout>

        <div className='w-full h-80'>
                <img src='https://i.imgur.com/3pU6kXZ.png' alt='' className='w-full h-full '/>

                
        </div>
        <h3 className=' absolute left-[37rem] top-52 text-3xl font-semibold'>Shop</h3>


        <section className='my-10'>
         <div className='mb-3'>
          <h1 className='text-3xl text-center font-serif font-bold '>Our Product</h1>
         </div>
        
        <div  className=' flex flex-wrap justify-center  gap-5 gap-y-10 mx-auto'>
        {data.map((item, index) =>{
            const {titel, image, price, discount} = item
            
            return(

            
                <div key={index}  className=' w-[290px] max-sm:w-[320px] shadow-md shadow-gray-400 shadow-grey-100 rounded-xl '>
                    <div className=' w-full h-72 relative bg-cover rounded-t-xl  overflow-hidden '>
                        <img className='w-full h-full object-cover  rounded-t-xl hover:scale-105 duration-700 cursor-pointer  ' src={image} alt='image'/>
                        
                            
                        <span className=' absolute top-3 right-3 w-10 p-2 bg-red-500 rounded-3xl text-white text-sm'>{discount}</span>

                   
                    

                    </div>
                    <div className='w-full h-40 p-3  rounded-b-xl ' >
                        <h1 className='  text-md font-serif font-semibold'>{titel}</h1>
                        <p className='flex py-1 cursor-pointer'><FcRating /> <FcRating /> <FcRating /> <FcRating /> <FcRating /></p>
                    
                        <h3 className=' text-lg   '>Rs. {price}</h3>
                        <ul className=' flex justify-between py-3'>
                            <li ><button className=' cursor-pointer text-sm  bg-[#B88E2F] text-white py-2 px-4 rounded-md font-bold  ' type='submit'>Add TO Cart</button></li>
                            <li className='cursor-pointer text-3xl'><CiHeart /></li>
                        </ul>

                    </div>
                </div>
            

            )
        })}
        </div>

        
        <div className=' flex justify-center mt-10 mb-10 gap-5 '>
            <span className=' w-10 h-10  flex justify-center items-center bg-[#B88E2F] rounded-md cursor-pointer'>1</span>
            <span className=' w-10 h-10  flex justify-center items-center bg-[#F9F1E7] rounded-md cursor-pointer' >2</span>
            <span className=' w-10 h-10  flex justify-center items-center bg-[#F9F1E7] rounded-md cursor-pointer'>3</span>
            <span className=' w-16 h-10  flex justify-center items-center bg-[#F9F1E7] rounded-md cursor-pointer'>Next</span>
        </div>

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
        
        
      </section>


        </Layout>
    </div>
  )
}

export default Shope