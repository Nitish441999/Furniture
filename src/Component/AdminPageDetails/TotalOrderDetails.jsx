import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function TotalOrderDetails() {
  return (
    <div>

<div className="container mx-auto p-4 w-12/12 max-md:w-10/12 max-sm:w-11/12 bg-[#FFF3E3] rounded-2xl shadow-sm shadow-gray-600">
      <h1 className="text-2xl font-bold mb-4 text-center">Order List</h1>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">No.</th>
            <th className="px-4 py-2">Order ID</th>
            <th className="px-4 py-2">Customer Name</th>
            <th className="px-4 py-2">Total Amount</th>
            <th className="px-4 py-2">Order Date</th>
            <th className="px-4 py-2">Edit</th>
            <th className="px-4 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          
            <tr  className=' bg-white '>
              <td className=" text-center border px-2 py-5">1</td>
              <td className=" text-center border px-2 py-5">12345</td>
              <td className=" text-center border px-2 py-5">nitish</td>
              <td className=" text-center border px-2 py-5">Rs. 3000</td>
              <td className=" text-center border px-2 py-5">02/08/2024</td>
              <td className=" text-center border px-4 py-5">
                <button >
                  <FontAwesomeIcon icon={faEdit} className="text-blue-500" />
                </button>
              </td>
              <td className="border px-4 py-2 text-center">
                <button >
                  <FontAwesomeIcon icon={faTrash} className="text-red-500" />
                </button>
              </td>
            </tr>
        
        </tbody>
      </table>
    </div>


    </div>
  )
}

export default TotalOrderDetails