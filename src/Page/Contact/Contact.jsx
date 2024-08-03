import React from 'react';
import Layout from '../../Component/Layout/Layout';
import Quality from '../../Component/Qualitiy/Quality';

function Contact() {
  return (
    <div>
      <Layout>
        <div className='w-full h-80 relative'>
          <img src='https://i.imgur.com/3pU6kXZ.png' alt='' className='w-full h-full object-cover'/>
          <h3 className='absolute left-1/2 transform -translate-x-1/2 top-1/2 text-3xl font-semibold text-white'>Contact</h3>
        </div>
        
     
        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-wrap lg:flex-nowrap bg-[#F9F1E7] rounded-lg shadow-lg overflow-hidden">
            
            {/* Left Side Contact Details */}
            <div className="w-full lg:w-1/2 p-6 text-black">
              <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
              <p className="mb-4"><strong>Address:</strong> 236 5th SE Avenue, New York NY10000, United States</p>
              <p className="mb-4"><strong>Phone:</strong> (123) 456-7890</p>
              <p className="mb-4"><strong>Email:</strong> contact@example.com</p>
              <p><strong>Working Hours:</strong> Mon - Fri, 9am - 5pm</p>
            </div>

            {/* Right Side Contact Form */}
            <div className="w-full lg:w-1/2 p-6 bg-white">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <form action="#" method="POST">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                  <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" required/>
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" required/>
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                  <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" required></textarea>
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="bg-[#B88E2F] text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Quality/>
      </Layout>
    </div>
  );
}

export default Contact;
