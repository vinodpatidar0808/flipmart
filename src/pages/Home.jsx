import { FaCarSide, FaExchangeAlt, FaPhone, FaUserShield } from 'react-icons/fa';
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
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

    </>
  );
};

export default Home;
