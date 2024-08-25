import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import Portal from '../components/Portal';
import ProductItem from '../components/ProductItem';
import { getProductsForListing } from '../utils/firebase';

const Products = () => {
  const [loading, setLoding] = useState(true);
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState('');

  const getProducts = async () => {
    const res = await getProductsForListing(keyword, 20);
    if (res.es === 0) {
      setProducts(res.products);
    } else {
      setProducts([]);
      console.log('Failed to get products.');
    }
    setLoding(false);
  };
  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return (
      <Portal>
        <Loader />
      </Portal>
    );
  }

  return (
    <div className="flex gap-3 py-5 ">
      {/* category filter, price filter etc */}
      <div>
        
      </div>
      {/* product cards on clicking a card it should redirect to product detail page */}
      <div className="flex flex-wrap gap-1">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
