import { useEffect, useState } from 'react';
import { FaCarSide, FaExchangeAlt, FaPhone, FaUserShield } from 'react-icons/fa';
import Loader from '../components/Loader';
import ProductItem from '../components/ProductItem';
import ServiceCard from '../components/ServiceCard';
import { getAdminProducts } from '../utils/firebase';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await getAdminProducts(30);
    setProducts(res);
    setLoading(false);
  };
  /*eslint-disable*/
  useEffect(() => {
    getProducts();
  }, []);
  /*eslint-enable*/

  return (
    <>
      {/* <Header /> */}
      <div className="flex bg-gradient-to-r from-primaryLighter to-primaryLight py-10 px-10">
        <div className="flex flex-col gap-3 px-20 items-center justify-center w-1/2">
          <p className="text-primary font-bold text-4xl">
            Find Everything You Love, All in One Place!
          </p>
          <p className="text-primary font-semibold">
            Shop a wide range of exclusive products with unbeatable prices and seamless shopping
            experience.
          </p>
        </div>
        <div className=" h-96 w-1/2">
          <img
            className="object-contain h-full w-full"
            src="/LandingHeaderImg.png"
            alt=""
          />
        </div>
      </div>

      <div className="flex gap-5 justify-center">
        <ServiceCard
          title={'Free Shipping'}
          description={`Free on orders above ₹499`}>
          <FaCarSide className="text-white rotate-45 w-16 h-16" />
        </ServiceCard>
        <ServiceCard
          title={'Secure Payment'}
          description={'100% Secure payment'}>
          <FaUserShield className="text-white rotate-45 w-16 h-16" />
        </ServiceCard>
        <ServiceCard
          title={'10 Days return'}
          description={'10 days money back guarantee'}>
          <FaExchangeAlt className="text-white rotate-45 w-16 h-16" />
        </ServiceCard>
        <ServiceCard
          title={'24/7 Support'}
          description={'Faster support round the clock'}>
          <FaPhone className="text-white rotate-45 w-16 h-16" />
        </ServiceCard>
      </div>

      <div className="flex flex-col items-center justify-center min-h-32 gap-5  px-10">
        {loading ? (
          <div>
            <Loader />
          </div>
        ) : (
          <>
            <h2 className="text-gray-800 text-xl">Recent Arrivals</h2>
            <div className="flex flex-wrap gap-5">
              {products.map((product) => (
                <ProductItem
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
