import { useContext, useEffect, useState } from 'react';
import Loader from '../components/Loader';
import OrderFilters from '../components/OrderFilters';
import OrderItem from '../components/OrderItem';
import Portal from '../components/Portal';
import { AuthContext } from '../context/AuthProvider';
import { getDayEndTimestamp, getDayStartTimestamp } from '../utils/constants';
import { getOrdersForAdmin, getOrdersForUser } from '../utils/firebase';

const Orders = () => {
  const { user } = useContext(AuthContext);
  const isAdmin = user && user.isAdmin;
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    fromDate: '',
    toDate: '',
  });

  console.log('filters: ', filters);


  const getOrders = async () => {
    setLoading(true);
    let res = null;
    const startDate = getDayStartTimestamp(filters.fromDate);
    const endDate = getDayEndTimestamp(filters.toDate);
    console.log(startDate, endDate);
    if (isAdmin) {
      res = await getOrdersForAdmin(10, startDate, endDate);
    } else {
      res = await getOrdersForUser(user);
    }
    if (res.es === 0) {
      setOrders(res.orders);
    } else {
      console.log(res.message);
    }
    setLoading(false);
  };

  const resetFilters = () => {
    setFilters({ fromDate: '', toDate: '' });
    getOrders();
  };

  /*eslint-disable*/
  useEffect(() => {
    if (!user) {
      return;
    }
    getOrders();
  }, []);
  /*eslint-enable*/

  if (loading) {
    return (
      <Portal>
        <Loader />
      </Portal>
    );
  }

  return (
    <div className="flex flex-col p-10 gap-5 mb-10 ">
      <OrderFilters
        filters={filters}
        setFilters={setFilters}
        resetFilters={resetFilters}
        handleFilterSubmit={getOrders}
      />
      {orders.map((order) => (
        <OrderItem
          key={order.id}
          order={order}
        />
      ))}
    </div>
  );
};

export default Orders;
