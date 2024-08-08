import Layout from '../../Component/Layout/Layout';
import React from "react";

function Address() {
  return (
    
    <div>
    <Layout>
      <div class="w-full my-5 flex justify-center items-center">
        <div class="py-6 px-6 border lg:w-3/5 mx-auto border-gray-200 sm:rounded-md bg-pink-200">
          <div className='flex justify-center items-center'><label className=' capitalize font-semibold text-xl text-center'>Enter your Address</label></div>
          <form
            method="POST"
          
          >
            <label class="block mb-3">
              <span class="text-black">Your Name</span>
              <input
                name="name"
                type="text"
                class="
                    block
                    w-full
                    mt-1
                    py-3
                    shadow-gray-400
                    px-3
                    border-2
                    border-gray-100
                    rounded-md
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                    bg-transparent
                    placeholder-gray-600
                    text-gray-300
                    bg-white
                "
                placeholder="Enter Name"
              />
            </label>
            <div className=' w-full flex gap-5  '>
            <label class="block mb-3 w-full">
              <span class="text-black">Enter Your City</span>
              <input
                name="city"
                type="text"
                class="
                    block
                    w-full
                    mt-1
                    border-gray-600
                    rounded-md
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                    bg-transparent
                    placeholder-gray-600
                    text-gray-300
                    py-3
                    shadow-gray-400
                    px-3
                    bg-white
                "
                placeholder="Enter City"
              />
            </label>
            <label class="block mb-3 w-full">
              <span class="text-black">State/Province</span>
              <input
                name="state"
                type="text"
                class="
                    block
                    w-full
                    mt-1
                    border-gray-600
                    rounded-md
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                    bg-transparent
                    placeholder-gray-600
                    text-gray-300
                    py-3
                    shadow-gray-400
                    px-3
                    bg-white
                "
                placeholder="Enter State"
              />
            </label>
            </div>
            <label class="block mb-6">
              <span class="text-black">Enter  Full Address </span>
              <input
                name=" Address 1"
                type="text"
                class="
                    block
                    w-full
                    mt-1
                    border-gray-600
                    rounded-md
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                    bg-transparent
                    placeholder-gray-600
                    text-gray-300
                    py-3
                  shadow-gray-400
                    px-3
                    bg-white
                " 
                placeholder="Enter Full Address "
              />
            </label>
            
            <div className='w-full flex gap-5'>
            <label class="block mb-3 w-full">
              <span class="text-black">Zip/Postal code</span>
              <input
                name="zip"
                type="text"
                class="
                    block
                    w-full
                    mt-1
                    border-gray-600
                    rounded-md
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                    bg-transparent
                    placeholder-gray-600
                    text-gray-300
                    py-3
                    shadow-gray-400
                    px-3
                    bg-white
                "
                placeholder=" Enter Zip Code"
              />
            </label>
            <label class="block mb-3 w-full">
              <span class="text-black">Country</span>
              <input
                name="country"
                type="text"
                class="
                    block
                    w-full
                    mt-1
                    border-gray-600
                    rounded-md
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                    bg-transparent
                    placeholder-gray-600
                    text-gray-300
                    py-3
                    shadow-gray-400
                    px-3
                    bg-white
                    
                "
                placeholder="Enter Country"
              />
            </label>
            </div>
            <label class="block mb-3">
              <span class="text-black">Mobile</span>
              <input
                name="telephone"
                type="text"
                class="
                    block
                    w-full
                    mt-1
                    border-gray-600
                    rounded-md
                    shadow-sm
                    shadow-gray-400
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                    bg-transparent
                    placeholder-gray-600
                    text-gray-300
                    py-3
                    px-3
                    bg-white
                "
                placeholder="Mobile No"
              />
            </label>

            <div class="mb-1 flex justify-around">
              <button
                type="submit"
                class="
                    h-10 w-52
                    
                    
                    
                    text-black
                    bg-gradient-to-r from-[#ef8197] to-[#9a091f] hover:from-pink-700 hover:to-pink-950
                    rounded-lg
                    transition-colors
                    duration-150
                    focus:shadow-outline
                    hover:text-white font-semibold
                    
                    
                    
                    
                    
                "
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      </Layout>
    </div>
  );
}

export default Address;
