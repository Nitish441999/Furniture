import React, { useState } from 'react';
import card1 from '../image/Frame 168.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { getAuth, signOut } from "firebase/auth";

function Navbar() {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const user = JSON.parse(localStorage.getItem('users'));

  const navigate = useNavigate();

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        localStorage.clear(); // Clear local storage
        navigate("/signin"); // Redirect to login page
      })
      .catch((error) => {
        console.error("Error logging out: ", error);
      });
  };

  return (
    <div>
      <section>
        <div className='flex justify-center items-center w-full lg:px-7 bg-[#FFFFFF] shadow-md fixed z-10'>
          <div className='w-full flex justify-between items-center lg:px-5 px-2 md:px-8 py-3 bg-transparent'>
            <div>
              <img
                className='lg:w-28 w-20 h-10 md:w-24 object-contain cursor-pointer'
                src={card1}
                alt='logo'
              />
            </div>
            <div>
              <ul className='flex lg:space-x-10 space-x-2 md:space-x-4 font-sans font-semibold'>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/shop'}>Shop</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
              </ul>
            </div>
            <div>
              <ul className='flex lg:space-x-10 space-x-2 md:space-x-4 items-center'>
                <li><Link to={'/search'} className='text-lg'><FaSearch /></Link></li>
                <li><Link to={'/favorites'} className='text-2xl'><CiHeart /></Link></li>
                <div className='relative'>
                  <img
                    className='w-6 h-6 cursor-pointer z-50'
                    src='https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783_1280.png'
                    alt="User Profile"
                    onClick={handleProfileClick}
                  />
                  {isProfileDropdownOpen && (
                    <ul className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10'>
                      <li className='px-4 py-2 text-rose-400 bg-gray-100'>
                        <p className='capitalize font-bold'>Welcome, {user ? user.name : 'Guest'}</p>
                      </li>
                      <li className='px-4 py-2 hover:bg-rose-400 hover:text-white'>
                        <Link to="/userdashboard">Profile</Link>
                      </li>
                      <li className='px-4 py-2 hover:bg-rose-400 hover:text-white'>
                        <Link to="/orderHistory">Your Orders</Link>
                      </li>
                      {!user && (
                        <>
                          <li className='px-4 py-2 hover:bg-rose-400 hover:text-white'>
                            <Link to="/signin">Sign In</Link>
                          </li>
                          <li className='px-4 py-2 hover:bg-rose-400 hover:text-white'>
                            <Link to="/signup">Sign Up</Link>
                          </li>
                        </>
                      )}
                      {user?.role === "Admin" &&
                        <li className='px-4 py-2 hover:bg-rose-400 hover:text-white'>
                          <Link to="/admin">Admin</Link>
                        </li>
                      }
                      {user && 
                        <li className="cursor-pointer px-4 py-2 hover:bg-rose-400 hover:text-white" onClick={logout}>
                          Logout
                        </li>
                      }
                    </ul>
                  )}
                </div>
                <li className='relative'>
                  <Link to={"/cart"} className='text-xl'><FaShoppingCart /></Link>
                  <p className='absolute top-[-10px] right-[-5px] text-white text-[8px] bg-red-600 p-[3px] rounded-full'>10</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
