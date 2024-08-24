import { FaMinus, FaPlus } from 'react-icons/fa';

// Design reference flipkart cart item
const CartItem = () => {
  return (
    <div className="flex gap-5 py-4 px-3 border-b">
      <div className="flex flex-col items-center gap-4">
        <div className="w-32 h-32  shadow-md   ">
          <img
            className="aspect-square object-contain"
            alt="product"
            src="http://img6a.flixcart.com/image/top/m/h/p/1-1-k9003-urban-fashion-bank-m-original-imaebpzfgkkhh9kn.jpeg"
          />
        </div>
        <div className="flex items-center gap-3">
          <div className=" flex justify-center items-center w-8 h-8 border-2 rounded-full ">
            <FaMinus className="w-3" />
          </div>
          <p>1</p>
          <div className=" flex justify-center items-center w-8 h-8 border-2 rounded-full ">
            <FaPlus className="w-3" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center justify-between gap-5">
          <p className="text-lg">Zed Loafers</p>
          <p className="text-sm ">
            Delivery by Tue Aug 27 | <span className="line-through">&#8377;40</span>
            <span className="text-primary"> Free</span>
          </p>
        </div>
        <p>color: blue</p>
        <p>Seller: Flipmart</p>
        <div className="flex gap-3 mt-4">
          <p className="line-through text-sm">&#8377;1400</p>
          <p className="font-bold text-gray-800">&#8377;500</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
