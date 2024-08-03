import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import ProductDetail from '../../Component/AdminPageDetails/ProductDetails';
import UserDetails from '../../Component/AdminPageDetails/UserDetails';
import TotalOrderDetails from '../../Component/AdminPageDetails/TotalOrderDetails';

function Admin() {
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
        <div className='flex max-sm:flex-wrap justify-center gap-3 bg-gray-100 py-5 max-lg:gap-x-5 mx-auto'>
          <div className='p-5 shadow-lg rounded-xl h-[28rem] max-sm:w-full bg-[#FFF3E3]'>
            <div className='bg-white shadow-md shadow-gray-600 rounded-3xl p-6'>
              <div className='flex justify-center items-center'>
                <img className='w-16 h-16 border-2 rounded-full' src='' alt=''/>
              </div>
              <h3 className='text-lg font-semibold py-1 text-center'>{user.name}</h3>
              <h3 className='text-[16px] font-semibold text-center'>{user.email}</h3>
              <h3 className='text-[16px] font-semibold text-center'>{user.role}</h3>
            </div>
            <ul className='my-5'>
              <li className='text-[20px] font-semibold p-3 shadow-md shadow-gray-600 text-center rounded-xl bg-white'>
                <Link to='/addProduct'>Add Product</Link>
              </li>
              <li className='text-[20px] font-semibold p-3 shadow-md shadow-gray-600 text-center rounded-xl bg-white mt-5'>
                <Link to='/'>Home</Link>
              </li>

              {!user && (
                <li className='text-[20px] font-semibold p-3 shadow-md shadow-gray-600 text-center mt-5 rounded-xl bg-white cursor-pointer'>
                  <Link to='/signin'>Sign In</Link>
                </li>
              )}
              {user && (
                <li className='text-[20px] font-semibold p-3 shadow-md shadow-gray-600 text-center mt-5 rounded-xl bg-white cursor-pointer'>
                  <div onClick={logout}>Logout</div>
                </li>
              )}
            </ul>
          </div>
          <div className='w-9/12 p-5  max-sm:w-full '>
            <Tabs>
              <TabList>
                <div className='grid grid-cols-4 max-sm:grid-cols-2 max-md:grid-cols-2 gap-5 justify-evenly shadow-sm shadow-gray-600 py-10 px-5 max-sm:gap-y-5 max-sm:gap-x-5 max-md:gap-x-1.5 rounded-xl bg-[#FFF3E3]'>
                  <Tab>
                    <div className='bg-white shadow-md rounded-md shadow-gray-600 p-10 cursor-pointer text-center'>
                      <h3 className='font-semibold text-lg text-center'>1</h3>
                      Total products
                    </div>
                  </Tab>
                  <Tab>
                    <div className='bg-white shadow-md rounded-md shadow-gray-600 p-10 cursor-pointer text-center'>
                      <h3 className='font-semibold text-lg text-center'>1</h3>
                      User details
                    </div>
                  </Tab>
                  <Tab>
                    <div className='bg-white shadow-md rounded-md shadow-gray-600 p-10 cursor-pointer text-center max-md:p-5'>
                      <h3 className='font-semibold text-lg text-center'>1</h3>
                      Total Orders
                    </div>
                  </Tab>
                  <Tab>
                    <div className='bg-white shadow-md rounded-md shadow-gray-600 p-10 cursor-pointer text-center max-md-p-5'>
                      <h3 className='font-semibold text-lg text-center'>1</h3>
                      Active
                    </div>
                  </Tab>
                </div>
              </TabList>
              <div className=''>
                <div className='mt-10'>
                  <TabPanel>
                    <ProductDetail/>
                  </TabPanel>
                  <TabPanel>
                    <UserDetails/>
                  </TabPanel>
                  <TabPanel>
                    <TotalOrderDetails/>
                  </TabPanel>
                  <TabPanel>
                    All users4
                  </TabPanel>
              </div>
              </div>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Admin;
