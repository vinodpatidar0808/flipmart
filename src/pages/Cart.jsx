import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { CartContext } from '../context/CartContext';
import { createOrder } from '../utils/firebase';
import CartItem from './../components/CartItem';

const Cart = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const { cart, cartAmount, itemsInCart, clearCart } = useContext(CartContext);
  const isAuthenticated = Object.keys(user ?? {}).length > 0;

  const handlePlaceOrder = async () => {
    if (!isAuthenticated) {
      navigate('/login');
    }
    setLoading(true);
    const res = await createOrder(user, cart, cartAmount.total);
    if (res.es === 0) {
      // TODO: toast message here
      clearCart();
      navigate('/orders');
    } else {
      console.log('something went wrong');
    }

    setLoading(false);
  };

  return (
    <>
      <div className="flex px-10 gap-5 py-5  bg-gray-100">
        {/* Cart items container with purchase button */}
        {cart.length > 0 && (
          <>
            <div className="relative bg-white w-2/3 shadow-lg">
              {cart.map((product) => (
                <CartItem
                  key={product.id}
                  product={product}
                />
              ))}
              <div className="sticky bottom-0  flex items-center px-4 py-6 drop-shadow-2xl border-t shadow-neutral-500 opacity-100 bg-white justify-end">
                <button
                  onClick={handlePlaceOrder}
                  className="bg-secondary text-white font-bold px-6 py-2 ">
                  Place Order
                </button>
              </div>
            </div>

            {/* cart priciing container with total price and other detail */}
            <div className="p-4 bg-white w-1/3 shadow-lg h-1/2">
              <p className=" text-md font-medium text-gray-500 pb-3 border-b">PRICE DETAILS</p>
              <div className="flex flex-col gap-4 my-4">
                <div className="flex justify-between">
                  {/* TODO: calculate price and make number of items as dynamic */}
                  <p>Price ({itemsInCart} items)</p>
                  <p>&#8377; {cartAmount.total}</p>
                </div>
                <div className="flex justify-between">
                  {/* TODO: calculate price and make number of items as dynamic */}
                  <p>Platform Fee</p>
                  <p>&#8377;{cartAmount.platform}</p>
                </div>
                <div className="flex justify-between">
                  {/* TODO: calculate price and make number of items as dynamic */}
                  <p>Delivery Charges</p>
                  <p>&#8377; {cartAmount.delivery}</p>
                </div>
                <div className="flex justify-between">
                  {/* TODO: calculate price and make number of items as dynamic */}
                  <p>Discount</p>
                  <p className="text-primary">-&#8377;{cartAmount.discount}</p>
                </div>
              </div>
              <div className="border-t py-4 ">
                <div className="flex font-bold justify-between ">
                  <p className="">Total Amount</p>
                  <p>&#8377; {cartAmount.total + cartAmount.platform + cartAmount.delivery}</p>
                </div>
              </div>

              {/* <div className="border-t border-b">
          <div className="flex justify-between mt-4  ">
            <p>Total Amount</p>
            <p>&#8377; 1500</p>
          </div>
        </div> */}
              {/* <div className="mt-7  text-sm text-gray-700 ">
          <p>Safe and Secure Payments.Easy returns.100% Authentic products.</p>
        </div> */}
            </div>
          </>
        )}

        {cart.length < 1 && (
          <div className="flex flex-col items-center justify-center w-full h-full gap-4">
            <p className="text-3xl font-bold">Cart is Empty😕</p>
            <p className="text-md text-gray-500">Please add some items to continue</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
