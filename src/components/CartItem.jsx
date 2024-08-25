import { useContext } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';

// Design reference flipkart cart item
const CartItem = ({ product }) => {
  const { cart, updateCart, removeItemFromCart } = useContext(CartContext);

  const updateQuantity = (action) => {
    if (action === 'DEC') {
      
      if (product.quantity > 1) {
        updateCart({
          ...product,
          quantity: product.quantity - 1,
        });
        return
      }
      removeItemFromCart(product.id);
      return 
    }

    updateCart({
      ...product,
      quantity: product.quantity + 1,
    });

    console.log(action);
  };

  return (
    <div className="flex gap-5 py-4 px-3 border-b">
      <div className="flex flex-col items-center gap-4">
        <div className="w-32 h-32  shadow-md   ">
          <img
            className="aspect-square object-contain"
            alt="product"
            src={product.image}
          />
        </div>
        <div className="flex items-center gap-3">
          <div
            onClick={() => updateQuantity('DEC')}
            className=" flex justify-center items-center w-8 h-8 border-2 rounded-full ">
            <FaMinus className="w-3" />
          </div>
          <p>{product.quantity}</p>
          <div
            onClick={() => updateQuantity('INC')}
            className=" flex justify-center items-center w-8 h-8 border-2 rounded-full ">
            <FaPlus className="w-3" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center justify-between gap-5">
          <p className="text-lg">{product.product_name}</p>
          <p className="text-sm ">
            Delivery by Tue Aug 27 | <span className="line-through">&#8377;40</span>
            <span className="text-primary"> Free</span>
          </p>
        </div>
        <p>color: blue</p>
        <p>Seller: Flipmart</p>
        <div className="flex gap-3 mt-4">
          <p className="line-through text-sm">&#8377;{product.retail_price}</p>
          <p className="font-bold text-gray-800">&#8377;{product.discounted_price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
