import React from 'react'
import Layout from '../../Component/Layout/Layout'
import { FcRating } from "react-icons/fc";

const ImgData = [
    {
        image: 'https://i.imgur.com/FGeudhI.png'
    },
    {
        image: 'https://i.imgur.com/7nJDpcQ.png'
    },
    {
        image: 'https://i.imgur.com/aDJuHp6.pngblob:https://imgu'
    },
    {
        image: 'https://i.imgur.com/pfSU1uB.png'
    },
]


function SingalProduct() {
  return (
    <div>
        <Layout>
            <div className=' flex max-sm:flex-wrap w-full h-auto gap-10 pl-16 pr-16 max-sm:px-3 '>
                <div className=' w-4/5 max-sm:w-full sm flex max-sm:flex-wrap-reverse gap-8'>
                
                    <div className=' max-sm:flex  gap-3'>
                    {ImgData.map((item, index) =>{
                        const {image} =item;
                        return(
                            <div key={index} className=' w-24 h-24  max-sm:h-20 max-sm:w-20 max-sm:m-auto  mt-5 bg-[#F9F1E7] rounded-xl'>
                            <img className=' py-3 px-2' src={image} alt=''/>
                            </div>

                        )
                    })}
                        
                        {/* <div className=' w-24 h-24 border-2 border-green-500 mt-5 bg-[#F9F1E7] rounded-xl'>
                            <img src='' alt=''/>
                        </div>
                        <div className=' w-24 h-24 border-2 border-green-500 mt-5 bg-[#F9F1E7] rounded-xl '>
                            <img src='' alt=''/>
                        </div>
                        <div className=' w-24 h-24 border-2 border-green-500 mt-5 bg-[#F9F1E7] rounded-xl '>
                            <img src='' alt=''/>
                        </div> */}
                    </div>

                    <div className='  w-4/5 bg-[#F9F1E7] m-5 max-sm:m-auto max-sm:w-11/12 rounded-xl max-sm:h-96'>
                        <img className=' py-10 max-sm:py-20' src='https://i.imgur.com/Cgs7Zd6.png' alt=''></img>
                    </div>
                </div>
                <div className='w-4/5 max-sm:w-full  p-5'>
                    <h1 className='text-3xl font-semibold'>Asgaard sofa</h1>
                    <span className=' text-2xl font-semibold text-gray-400 pt-5'>Rs.250000</span>
                    <div className='flex gap-2 pt-3'>
                        <span className='flex'><FcRating /> <FcRating /> <FcRating /> <FcRating /> <FcRating /></span>|
                        <p className=' text-sm text-gray-400'>5 Customer Review</p>
                    </div>
                    <p className='text-sm mt-3'>Setting the bar as one of the loudest speakers in its class, the <br/> Kilburn is a compact, stout-hearted hero with a well-balanced <br/> audio which boasts a clear midrange and extended highs for a <br></br> sound.</p>

                    <p className='pt-3 pb-3'>Size</p>
                    <ul className=' flex gap-5'>
                        <li className=' w-10 h-10 flex justify-center items-center rounded-md bg-[#B88E2F] cursor-pointer'>1</li>
                        <li className=' w-10 h-10 flex justify-center items-center rounded-md bg-[#F9F1E7] cursor-pointer'>2</li>
                        <li className=' w-10 h-10 flex justify-center items-center rounded-md bg-[#F9F1E7] cursor-pointer'>3</li>
                    </ul>

                    <p className='pt-3 pb-3'>Color</p>
                    <ul className=' flex gap-5'>
                        <li className=' w-10 h-10 flex justify-center items-center rounded-3xl bg-black cursor-pointer'></li>
                        <li className=' w-10 h-10 flex justify-center items-center rounded-3xl bg-blue-600 cursor-pointer'></li>
                        <li className=' w-10 h-10 flex justify-center items-center rounded-3xl bg-[#B88E2F] cursor-pointer'></li>
                    </ul>
                    <div className='flex gap-5 my-5'>
                        <div className='flex justify-center items-center gap-7 border-2 border-gray-200 p-2 rounded-lg '>
                            <p className='text-lg cursor-pointer'>+</p>
                            <p className='text-lg cursor-pointer'>1</p>
                            <p className='text-2xl cursor-pointer'>-</p>
                        </div>

                        <div className=' border-2 border-black flex justify-center items-center max-sm:px-2 px-10 rounded-lg cursor-pointer'>
                            <p className=' max-sm:text-sm'>Add To Cart</p>
                        </div>
                        <div className=' border-2 border-black flex justify-center items-center max-sm:px-3  px-10 rounded-lg cursor-pointer'>
                            <p>Compare</p>
                        </div>
                    </div>
                    

                </div>
            </div>

           
           




        </Layout>
    </div>
  )
}

export default SingalProduct