import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const product = {
  id: '123',
  title: 'Product 1 dshfjkahsdfjk adhsfh jaksdfhsdkfhksh',
  price: 100,
  product_rating: 4.5,
  description: 'Product 1 description',
  category: 'Product 1 category',
  image:
    'http://img6a.flixcart.com/image/top/m/h/p/1-1-k9003-urban-fashion-bank-m-original-imaebpzfgkkhh9kn.jpeg',
};

const ProductItem = () => {
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
          <Link to={`/product/${product.id}`}>{product.title}1</Link>
        </p>
        <p></p>
        {/* <p>{product.description}</p> */}
        <p>&#8377;{product.price}</p>
        <div className="flex gap-2">
          <p className="flex  items-center gap-1 bg-primary text-sm rounded-sm px-1 text-white font-bold">
            {product.product_rating}
            <FaStar className="w-3" />
          </p>
          <p className="text-gray-500 text-sm">(748454)</p>
        </div>
        <p className="font-bold">&#8377;{product.price}</p>
        {/* <p className="text-gray-500 text-sm">{product.category}</p> */}
      </div>
    </div>
  );
};

export default ProductItem;
