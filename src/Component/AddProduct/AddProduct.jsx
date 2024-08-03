import React, { useContext, useState } from 'react';
import myContext from '../../Context/myContext';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { fireDB } from '../../Firebase/FirebaseConfig';

function AddProduct() {
  const { Loading, setLoading } = useContext(myContext);
  const navigate = useNavigate();

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

    setLoading(true);
    try {
      const productRef = collection(fireDB, 'product');
      await addDoc(productRef, product);
      toast.success("Product added successfully");
      navigate('/admin');
    } catch (error) {
      console.log(error);
      toast.error("Add Product Failed");
    } finally {
      setLoading(false);
    }
  };

  // discont calculate
  const calculateDiscountPrice = (originalPrice, discount) => {
    const price = parseFloat(originalPrice);
    const discountPercent = parseFloat(discount);
    if (!isNaN(price) && !isNaN(discount) && price > 0 && discount >= 0) {
      const discountAmount = (price * discountPercent) / 100;
      return (price - discountAmount).toFixed(2);
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => {
      const updatedProduct = { ...prevProduct, [name]: value };

      // Recalculate discountPrice when either originalPrice or discount changes
      const discountPrice = name === 'originalPrice' || name === 'discount'
        ? calculateDiscountPrice(updatedProduct.originalPrice, updatedProduct.discount)
        : prevProduct.discountPrice;

      return { ...updatedProduct, discountPrice };
    });
  };

  return (
    <div className="container mx-auto p-4 w-8/12 max-md:w-10/12 max-sm:w-11/12 bg-[#F9F1E7] rounded-2xl">
      <h1 className="text-2xl font-bold mb-4 text-center">Add New Product</h1>
      <form className="space-y-4">
        {/* Image URLs */}
        {["ProductImageURL1", "ProductImageURL2", "ProductImageURL3"].map((url, index) => (
          <div className="mb-4" key={index}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={url}>
              {`Product Image URL ${index + 1}`}
            </label>
            <input
              type="text"
              id={url}
              name={url}
              className="border border-gray-300 rounded-lg p-2 w-full bg-white"
              required
              value={product[url]}
              onChange={handleChange}
            />
          </div>
        ))}

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
            onChange={handleChange}
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
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            <option value="Bedroom">Bedroom</option>
            <option value="Living">Living</option>
            <option value="Dining">Dining</option>
            <option value="Lighting & Lamps">Lighting & Lamps</option>
            <option value="Cafe Chair">Cafe Chair</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Outdoor">Outdoor</option>
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            readOnly // Make this field read-only
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
            onChange={handleChange}
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
            onChange={handleChange}
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
  );
}

export default AddProduct;
