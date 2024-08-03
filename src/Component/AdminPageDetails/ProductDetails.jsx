import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import myContext from '../../Context/myContext';
import { useNavigate } from 'react-router-dom';
import { deleteDoc, doc } from 'firebase/firestore';
import { fireDB } from '../../Firebase/FirebaseConfig';
import toast from 'react-hot-toast';

function ProductDetail() {
  const { setLoading, getAllProduct, getAllProductFunction } = useContext(myContext);
  const navigate = useNavigate();

  const deleteProduct = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, 'product', id));
      toast.success('Product Deleted successfully');
      getAllProductFunction();
    } catch (error) {
      console.log(error);
      toast.error('Failed to delete product');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item) => {
    console.log('Edit product', item);
    // Implement your navigation or editing logic here
    navigate(`/edit-product/${item.id}`);
  };

  return (
    <div className="container mx-auto p-4 w-12/12 max-md:w-10/12 max-sm:w-11/12 bg-[#FFF3E3] rounded-2xl shadow-sm shadow-gray-600">
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left">
          <thead className="border-b-2">
            <tr>
              <th className="text-center px-4 py-2">No</th>
              <th className="text-center px-4 py-2">Image</th>
              <th className="text-center px-4 py-2">Title</th>
              <th className="text-center px-4 py-2">Category</th>
              <th className="text-center px-4 py-2">Original Price</th>
              <th className="text-center px-4 py-2">Discount</th>
              <th className="text-center px-4 py-2">Discount Price</th>
              <th className="text-center px-4 py-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {getAllProduct.map((item, index) => {
              const { id, ProductImageURL1, title, category, originalPrice, discount, discountPrice } = item;

              return (
                <tr key={id} className="bg-white">
                  <td className="text-center border px-1 py-5">{index + 1}</td>
                  <td className="border px-4 py-5">
                    <img src={ProductImageURL1} alt="" className="w-20 h-auto rounded-lg" />
                  </td>
                  <td className="text-center border px-1 py-5">{title}</td>
                  <td className="text-center border px-1 py-5">{category}</td>
                  <td className="text-center border px-1 py-5">{originalPrice}</td>
                  <td className="text-center border px-1 py-5">{discount}%</td>
                  <td className="text-center border px-1 py-5">{discountPrice}</td>
                  <td className="text-center border px-1 py-5">
                    <button onClick={() => handleEdit(item)} className="mr-8">
                      <FontAwesomeIcon icon={faEdit} className="text-blue-500" />
                    </button>
                    <button onClick={() => deleteProduct(id)}>
                      <FontAwesomeIcon icon={faTrash} className="text-red-500" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductDetail;
