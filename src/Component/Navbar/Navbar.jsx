import React from 'react'
import card1 from '../image/Frame 168.png'
import { Link } from 'react-router-dom'
import { FaCircleUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaSearch, FaShoppingCart, } from "react-icons/fa";


function Navbar() {
  return (
    <div>

      <section>

         <div className=' flex justify-center items-center w-full   lg:px-7 bg-[#FFFFFF] shadow-md'>
            <div className=' w-full flex justify-between items-center lg:px-5 px-2 md:px-8 py-3 bg-transparent '>
                <div>
                    <img className=' lg:w-28 w-20 h-10 md:w-24 object-contain cursor-pointer' src={ card1} alt='logo'/>
                </div>
                <div className=' '>
                    <ul className=' flex lg:space-x-10 space-x-2 md:space-x-4 font-sans font-semibold'>
                        <li className=''><Link to={'/'}> Home </Link></li>
                        <li><Link to={'/shope'}> Shope </Link></li>
                        <li><Link> About </Link></li>
                        <li><Link> Contact </Link></li>
                    </ul>
                </div>
                <div>
                <ul className=' flex lg:space-x-10 space-x-2 md:space-x-4 '>
                    <li><Link className=' text-lg'><FaSearch /></Link></li>
                    <li><Link className=' text-2xl'><CiHeart /></Link></li>
                    
                    <li><Link className=' text-xl'><FaCircleUser /></Link></li>
                    <li><Link to={"/cart"} className=' text-xl'><FaShoppingCart /></Link></li>
                </ul>
                    
                </div>
            </div>
         </div>
       
      </section>

    </div>
  )
}

export default Navbar