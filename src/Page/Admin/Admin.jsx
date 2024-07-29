import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';

function Admin() {
  return (
    <div>
     <section>
        <div className=' flex max-sm:flex-wrap justify-center gap-5 bg-gray-100 py-5 max-lg:gap-x-5 mx-auto'>

          <div className='   bg-white p-5 shadow-lg rounded-xl h-[25rem] max-sm:w-full '>

            <div className='bg-white shadow-md shadow-gray-600 rounded-3xl p-6'>
              <level className=' flex justify-center items-center'  ><img className=' w-16 h-16 border-2 rounded-full ' src='' alt=''/></level>
              <h3 className=' text-lg font-semibold py-1 text-center'>Nitish Kumar</h3>
              <h3 className=' text-[16px] font-semibold text-center'>nitish441999@gmail.com</h3>
              <h3 className=' text-[16px] font-semibold  text-center'> 9572576470 </h3>
            </div>

            <ul className='my-5'>
              <li className=' text-[20px] font-semibold p-3 shadow-md shadow-gray-600 text-center rounded-xl'><Link to={'/'} > Home</Link></li>
              <li className=' text-[20px] font-semibold p-3 shadow-md shadow-gray-600 text-center mt-5 rounded-xl  '><Link to={'/'} > Sing In</Link></li>
            
            </ul>

          </div>
          
            
              <div className='  w-9/12 bg-white p-5 shadow-md max-sm:w-full rounded-xl'>
              <Tabs>
                <TabList>
                <div className=' grid grid-cols-4 max-sm:grid-cols-2 max-md:grid-cols-2 gap-5 justify-evenly  shadow-sm shadow-gray-600 py-10 px-5 max-sm:gap-y-5 max-sm:gap-x-5  max-md:gap-x-1.5 rounded-xl'>
                  <Tab><div className='bg-white shadow-md rounded-md shadow-gray-600 p-10 cursor-pointer text-center  '>
                  <h3 className=' font-semibold text-lg text-center'>1</h3>
                  Total products 
                  </div></Tab>
                  <Tab><div className='bg-white shadow-md rounded-md shadow-gray-600 p-10 cursor-pointer text-center'><h3 className=' font-semibold text-lg text-center'>1</h3>user detail  </div></Tab>
                  <Tab><div className='bg-white shadow-md rounded-md shadow-gray-600 p-10 cursor-pointer text-center'> <h3 className=' font-semibold text-lg text-center'>1</h3>Total Order </div></Tab>
                  <Tab><div className='bg-white shadow-md rounded-md shadow-gray-600 p-10 cursor-pointer text-center'> <h3 className=' font-semibold text-lg text-center'>1</h3>active </div></Tab>

                </div>
                </TabList>
                </Tabs>

                <div className='  h-auto p-5 mt-10 shadow-sm shadow-gray-600 rounded-xl'>
                
                 <TabPanel>
                  alluser
                 </TabPanel>
                 <TabPanel>
                  alluser
                 </TabPanel>
                 <TabPanel>
                  alluser
                 </TabPanel>
                 <TabPanel>
                  alluser
                 </TabPanel>

                </div>
              </div>
            
          
        </div>
     </section>



        
    </div>

  )
}

export default Admin