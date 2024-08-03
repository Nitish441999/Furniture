import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import myContext from '../../Context/myContext';

function UserDetails() {
    const context = useContext(myContext)
    const {getAllUser} = context
    const users = getAllUser
  return (
    <div>

    <div className="container mx-auto p-4 w-12/12 max-md:w-10/12 max-sm:w-11/12 bg-[#FFF3E3] rounded-2xl shadow-sm shadow-gray-600">
      <h1 className="text-2xl font-bold mb-4 text-center">User List</h1>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-2 py-2">No.</th>
            <th className="px-2 py-2">Name</th>
            <th className="px-2 py-2">Email</th>
            <th className="px-2 py-2">Role</th>
            <th className="px-2 py-2">Mobile No</th>
            <th className="px-2 py-2">Edit</th>
            <th className="px-2 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className='bg-white'>
              <td className=" text-center border px-2 py-5">{index + 1}</td>
              <td className=" text-center border px-2 py-5">{user.name}</td>
              <td className=" text-center border px-2 py-5">{user.email}</td>
              <td className=" text-center border px-2 py-5">{user.role}</td>
              <td className=" text-center border px-2 py-5">{user.mobile}</td>
              <td className=" text-center border px-4 py-5 ">
                <button onClick={() => handleEdit(user.id)}>
                  <FontAwesomeIcon icon={faEdit} className="text-blue-500" />
                </button>
              </td>
              <td className="border px-4 py-2 text-center">
                <button onClick={() => handleDelete(user.id)}>
                  <FontAwesomeIcon icon={faTrash} className="text-red-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>




    </div>
  )
}

export default UserDetails