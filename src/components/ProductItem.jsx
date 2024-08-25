import { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { CartContext } from '../context/CartContext';

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const { updateCart } = useContext(CartContext);
  const isAuthenticated = user && Object.keys(user).length > 0;

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      navigate('/login');
    }

    updateCart({ ...product, quantity: 1 });
  };

  return (
    <div className="w-64 h-96 bg-white flex flex-col gap-2 border-2 hover:shadow-lg">
      <div className="w-full flex justify-center items-center h-[3/5] overflow-hidden">
        <img
          className="object-contain w-full h-full hover:shadow-lg"
          src={product.image}
          alt="product"
        />
      </div>
      <div className="flex flex-col p-2 gap-1">
        <p>
          <Link to={`/product/${product.id}`}>{product.product_name}1</Link>
        </p>
        {/* <p></p> */}
        <div className="flex gap-2">
          <div className="flex bg-primary px-2 py-1 rounded-md  items-center">
            <p className="gap-1 bg-primary text-sm rounded-sm px-1 text-white font-bold">
              {product.product_rating !== 'No rating available' ? product.product_rating : 0}
            </p>
            <FaStar className="w-3 h-3 text-white" />
          </div>
          {/* <p className="text-gray-500 text-sm">(748454)</p> */}
        </div>
        {/* <p>{product.description}</p> */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <p className="line-through">&#8377;{product.retail_price}</p>
            <p className="font-bold">&#8377;{product.discounted_price}</p>
          </div>
          {isAuthenticated && (
            <button
              onClick={handleAddToCart}
              className="border bg-secondary rounded-md font-semibold text-white hover:shadow-md px-2 py-2">
              Add to cart
            </button>
          )}
        </div>
        {/* <p className="text-gray-500 text-sm">{product.category}</p> */}
      </div>
    </div>
  );
};

export default ProductItem;
