import { useContext } from 'react';
import { FaSearch, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { CartContext } from '../context/CartContext';
import UserDropdown from './UserDropdown';

const Header = () => {
  const { user } = useContext(AuthContext);
  const { itemsInCart } = useContext(CartContext);

  return (
    <>
      {/* <Portal>
        <Loader />
      </Portal> */}
      <nav className="sticky top-0 bg-white z-50 border-b-1 shadow-md flex items-center justify-between px-12 py-6 w-screen ">
        <Link
          to={'/'}
          className=" relative  text-2xl font-bold text-primary">
          Flipmart
          {user?.isAdmin && (
            <span className="text-secondary text-sm absolute -bottom-3  right-0 ">Admin</span>
          )}
        </Link>

        <div className="flex gap-3 ">
          <Link to={'/'}>Home</Link>
          <Link to={'/products'}>Products</Link>
        </div>

        <div className="flex gap-3">
          {user ? (
            <>
              <div className="w-9 h-9 border-2 border-secondary flex items-center justify-center rounded-full hover:bg-secondary">
                <FaSearch className="fill-primary" />
              </div>

              <Link
                to="user/cart"
                className="flex justify-center items-center relative">
                <FaShoppingBag className="fill-primary w-8 h-8" />
                {/* TODO: remove hardcode value */}
                {itemsInCart > 0 && (
                  <span className="animate-pulse absolute top-1 -right-1 bg-secondary rounded-full w-5 h-5 text-sm flex items-center justify-center">
                    {itemsInCart}
                  </span>
                )}
              </Link>

              <UserDropdown />
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-primary text-white font-bold px-4 py-2 rounded-md">
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-primary text-white font-bold px-4 py-2 rounded-md">
                Signup
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
