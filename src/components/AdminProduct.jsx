import { FaPen, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { deleteProductById } from '../utils/firebase';

const AdminProduct = ({ product, setLoading }) => {
  const {
    id,
    product_name,
    product_category,
    brand,
    image,
    description,
    retail_price,
    discounted_price,
  } = product;

  const handleDelete = async () => {
    setLoading(true);
    const res = await deleteProductById(id);
    if (res.es === 0) {
      // TODO: toast message here
      console.log('product deleted', res.message);
    } else {
      console.log('product not deleted', res.message);
    }
    setLoading(false);
  };

  return (
    <div className="flex border items-center shadow-md px-3 py-2 gap-5">
      <div className="">
        <img
          className="h-32 w-32"
          src={image}
          alt="product"
        />
      </div>
      <div className="flex flex-col justify-between  flex-1 gap-2">
        {/* <div className="flex gap-5"></div> */}
        {/* product name */}
        <div className="flex justify-between items-center text-gray-800">
          <p>
            <span className="font-semibold">Name:</span> {product_name}
          </p>
          {/* buttons for updating and deleting product */}
          <div className="flex gap-3">
            <Link
              to={`/admin/updateproduct/${id}`}
              className="hover:shadow-lg border border-primary rounded-full px-2 py-2">
              <FaPen className="text-secondary" />
            </Link>
            <button
              onClick={handleDelete}
              className="hover:shadow-lg border rounded-full border-primary px-2 py-2">
              <FaTrash className="text-red-600" />
            </button>
          </div>
        </div>
        {/* product brand and category */}
        <div className="flex  gap-5">
          <p>
            <span className="font-semibold">Brand:</span> {brand}
          </p>
          <p>|</p>
          <p>
            <span className="font-semibold"> Category:</span> {product_category}
          </p>
        </div>
        {/* product retail and discounted price */}
        <div className="flex gap-5">
          <p>
            <span className="font-semibold"> Retail Price:</span> &#8377;{retail_price}
          </p>
          <p>|</p>
          <p>
            <span className="font-semibold"> Discounted Price:</span> &#8377;{discounted_price}
          </p>
        </div>
        {/* product description */}
        <div className="">
          <span className="font-semibold">Description:</span> {description.substring(0, 50) + '...'}
        </div>

        {/* <div className="flex gap-3 self-end">
          <button className="border border-secondary px-3 py-2 rounded-md text-primary hover:bg-secondary hover:text-white font-semibold">
            Update
          </button>
          <button className="border border-secondary px-3 py-2 rounded-md text-primary hover:bg-secondary hover:text-white font-semibold">
            Delete
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default AdminProduct;
