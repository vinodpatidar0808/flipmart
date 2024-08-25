import { useState } from 'react';
import Loader from '../components/Loader';
import Portal from '../components/Portal';
import { addProductToDb } from '../utils/firebase';

const CreateProduct = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    product_name: '',
    // product_category: [],
    product_category: '',
    description: '',
    brand: '',
    retail_price: '',
    discounted_price: '',
    image: '',
    // images: [],
  });
  const handleCreateProduct = async () => {
    // TODO: add product
    setLoading(true);
    const res = await addProductToDb(product);
    console.log('res', res);
    setLoading(false);
  };

  const handleFormFieldChange = (e) => {
    console.log('name, value', e.target.name, e.target.value);
    // TODO: modify accordingly
    // if(e.target.name === 'image') {

    // }
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  console.log('product', product);

  if (loading) {
    return (
      <Portal>
        <Loader />
      </Portal>
    );
  }

  return (
    <div className=" flex flex-col gap-3  items-center py-5 px-5">
      <h2 className="font-bold text-lg ">Create a new product</h2>
      <div className="flex flex-col gap-3 w-1/2">
        {/* product name */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product name
          </label>
          <input
            type="text"
            name="product_name"
            value={product.product_name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-primary focus:border-primary block w-full p-2.5 "
            placeholder=""
            required
            onChange={handleFormFieldChange}
          />
        </div>

        {/* product category */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select an option
          </label>
          <select
            name="product_category"
            // value={product.product_category?.[0] ?? ""}
            value={product.product_category}
            onChange={handleFormFieldChange}
            className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-primary block w-full p-2.5 ">
            {/* TODO: introduce dynamic categories */}
            <option value="">Choose a category</option>
            <option value="US">Clothing</option>
            <option value="CA">Footwear</option>
            <option value="FR">Sunglasses</option>
          </select>
        </div>

        {/* product brand name */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Brand name
          </label>
          <input
            type="text"
            name="brand"
            value={product.brand}
            onChange={handleFormFieldChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-primary focus:border-primary block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>

        {/* product description */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product description
          </label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleFormFieldChange}
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 outline-none bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary"
            placeholder="Write product description here..."></textarea>
        </div>

        {/* product retail price price */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Retail Price (INR)
          </label>
          <input
            type="number"
            name="retail_price"
            value={product.retail_price}
            onChange={handleFormFieldChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-primary focus:border-primary block w-full p-2.5 "
            placeholder=""
            min={1}
            required
          />
        </div>

        {/* product discounted price */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Discounted Price (INR)
          </label>
          {/* TODO: max value of discounted price should be less than retail price */}
          <input
            type="number"
            id="first_name"
            name="discounted_price"
            value={product.discounted_price}
            onChange={handleFormFieldChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-primary focus:border-primary block w-full p-2.5 "
            placeholder=""
            min={0}
            // max={}
            required
          />
        </div>

        {/* product image */}
        {/* implement input field to take image url, once everything works introduce storage bucket and change flow. */}
        {/* TODO: Remove input field or make user select one of the 2 option and then handle accordingly */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Image Url
          </label>
          {/* TODO: max value of discounted price should be less than retail price */}
          <input
            type="text"
            name="image"
            // value={product.images?.[0] ?? ''}
            value={product.image}
            onChange={handleFormFieldChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-primary focus:border-primary block w-full p-2.5 "
            placeholder="Insert product image url here..."
            // max={}
            required
          />
        </div>
      </div>

      <div
        className="bg-secondary text-white font-bold px-8 rounded-md py-2"
        onClick={handleCreateProduct}>
        Submit
      </div>
    </div>
  );
};

export default CreateProduct;
