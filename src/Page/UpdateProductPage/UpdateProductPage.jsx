
import React, { useContext, useState } from 'react';
import myContext from '../../Context/myContext';
import { useNavigate, useParams } from 'react-router-dom';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { fireDB } from '../../Firebase/FirebaseConfig';

function UpdateProductPage() {
    const Context = useContext(myContext);
    const { Loading, setLoading , getAllProduct} = Context;

    const navigate = useNavigate();

    const { id } = useParams()  
    console.log(id)


    
    const [product, setProduct] = useState({
      ProductImageURL1: "",
      ProductImageURL2: "",
      ProductImageURL3: "",
      title: "",
      category: "",
      originalPrice: "",
      discount: "",
      discountPrice: "",
      quantity: "",
      description: "",
      time: Timestamp.now(),
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      })
    });
  
    const AddProductFunction = async () => {
      if (
        product.title === "" ||
        product.originalPrice === "" ||
        product.ProductImageURL1 === "" ||
        product.ProductImageURL2 === "" ||
        product.ProductImageURL3 === "" ||
        product.category === ""
      ) {
        return toast.error("All fields are required");
      }
  
        setLoading(true)
      try {
        const productRef = collection(fireDB, 'product');
        await addDoc(productRef, product);
        toast.success("Product added successfully");
        navigate('/admin');
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        toast.error("Add Product Failed");
      }
    };





    
  return (
    <div className="container mx-auto p-4 w-8/12 max-md:w-10/12 max-sm:w-11/12 bg-[#F9F1E7] rounded-2xl">
    <h1 className="text-2xl font-bold mb-4 text-center">Add New Product</h1>
    <form className="space-y-4">
      {/* Image URLs */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image1">
          Product Image URL 1
        </label>
        <input
          type="text"
          id="image1"
          name="image1"
          className="border border-gray-300 rounded-lg p-2 w-full bg-white"
          required
          value={product.ProductImageURL1}
          onChange={(e) => {
            setProduct({ ...product, ProductImageURL1: e.target.value });
          }}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image2">
          Product Image URL 2
        </label>
        <input
          type="text"
          id="image2"
          name="image2"
          className="border border-gray-300 rounded-lg p-2 w-full bg-white"
          required
          value={product.ProductImageURL2}
          onChange={(e) => {
            setProduct({ ...product, ProductImageURL2: e.target.value });
          }}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image3">
          Product Image URL 3
        </label>
        <input
          type="text"
          id="image3"
          name="image3"
          className="border border-gray-300 rounded-lg p-2 w-full bg-white"
          required
          value={product.ProductImageURL3}
          onChange={(e) => {
            setProduct({ ...product, ProductImageURL3: e.target.value });
          }}
        />
      </div>

      {/* Title */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Product Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="border border-gray-300 rounded-lg p-2 w-full"
          required
          value={product.title}
          onChange={(e) => {
            setProduct({ ...product, title: e.target.value });
          }}
        />
      </div>

      {/* Category */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
          Category
        </label>
        <select
          id="category"
          name="category"
          className="border border-gray-300 rounded-lg p-2 w-full"
          required
          value={product.category}
          onChange={(e) => {
            setProduct({ ...product, category: e.target.value });
          }}
        >
          <option value="">Select a category</option>
          <option value="Furniture">Furniture</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
          <option value="Toys">Toys</option>
        </select>
      </div>

      {/* Original Price */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="originalPrice">
          Original Price ($)
        </label>
        <input
          type="number"
          id="originalPrice"
          name="originalPrice"
          className="border border-gray-300 rounded-lg p-2 w-full"
          min="0"
          required
          value={product.originalPrice}
          onChange={(e) => {
            setProduct({ ...product, originalPrice: e.target.value });
          }}
        />
      </div>

      {/* Discount */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="discount">
          Discount (%)
        </label>
        <input
          type="number"
          id="discount"
          name="discount"
          className="border border-gray-300 rounded-lg p-2 w-full"
          min="0"
          max="100"
          required
          value={product.discount}
          onChange={(e) => {
            setProduct({ ...product, discount: e.target.value });
          }}
        />
      </div>

      {/* Discount Price */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="discountPrice">
          Discount Price ($)
        </label>
        <input
          type="number"
          id="discountPrice"
          name="discountPrice"
          className="border border-gray-300 rounded-lg p-2 w-full"
          min="0"
          required
          value={product.discountPrice}
          onChange={(e) => {
            setProduct({ ...product, discountPrice: e.target.value });
          }}
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="border border-gray-300 rounded-lg p-2 w-full"
          rows="4"
          required
          value={product.description}
          onChange={(e) => {
            setProduct({ ...product, description: e.target.value });
          }}
        />
      </div>

      {/* Quantity */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          className="border border-gray-300 rounded-lg p-2 w-full"
          min="1"
          required
          value={product.quantity}
          onChange={(e) => {
            setProduct({ ...product, quantity: e.target.value });
          }}
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="button"
          onClick={AddProductFunction}
          className="border-2 border-[#B88E2F] text-[#B88E2F] px-16 py-2 rounded-lg hover:bg-[#B88E2F] hover:text-white"
        >
          Add Product
        </button>
      </div>
    </form>
  </div>
  )
}

export default UpdateProductPage