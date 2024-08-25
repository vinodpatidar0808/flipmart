import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminProduct from '../components/AdminProduct';
import Loader from '../components/Loader';
import Portal from '../components/Portal';
import { getAdminProducts } from '../utils/firebase';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    const res = await getAdminProducts();
    setProducts(res);
    setLoading(false);
  };

  /*eslint-disable */
  useEffect(() => {
    getProducts();
  }, []);
  /*eslint-enable */

  if (loading) {
    return (
      <Portal>
        <Loader />
      </Portal>
    );
  }

  return (
    <div>
      <div className="flex w-full justify-end px-5 py-5">
        <Link
          className="bg-secondary px-2 py-2 text-white font-semibold text-lg rounded-md border outline-none"
          to="/admin/createproduct">
          Add product
        </Link>
      </div>
      <div>
        <h1>Products</h1>
        <div>
          <AdminProduct />
        </div>
      </div>
    </div>
  );
};

export default Admin;
