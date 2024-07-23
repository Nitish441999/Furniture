import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FcRating } from "react-icons/fc";

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
        image: 'https://i.imgur.com/MAKlV31.png',
        titel: 'Syltherine',
        price: '4000',
        discount: '30%',
        quantity: 1
 
     }
]

function HomePageProduct() {
  return (
    <div>
    

      
      <section className='my-10'>
         <div className='mb-3'>
          <h1 className='text-3xl text-center font-serif font-bold '>Our Product</h1>
         </div>
        {/* <div className=' flex justify-center items-center  h-auto '> */}
        <div  className='  flex flex-wrap justify-center gap-5 gap-y-10 mx-auto'>
        {data.map((item, index) =>{
            const {titel, image, price, discount} = item
            
            return(

            
                <div key={index}  className=' w-[290px] max-sm:w-[320px]  shadow-md shadow-gray-400  rounded-xl   '>
                    <div className=' w-full h-72 relative bg-cover  rounded-t-xl  overflow-hidden'>
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

        {/* </div> */}
        <div className=' flex justify-center pt-7'>
          <button type='submit' className='py-2 px-6 border-2 border-[#B88E2F] text-[#B88E2F] rounded-lg'> Show More</button>  
        </div>
        
      </section>



    </div>
  )
}

export default HomePageProduct