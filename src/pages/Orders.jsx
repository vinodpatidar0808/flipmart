import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { getOrdersForUser } from '../utils/firebase';

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const getOrders = async () => {
    const res = await getOrdersForUser(user);
    if (res.es === 0) {
      setOrders(res.orders);
    } else {
      console.log(res.message);
    }
  };

  console.log(orders);
  /*eslint-disable*/
  useEffect(() => {
    if (!user) {
      return;
    }
    getOrders();
  }, []);
  /*eslint-enable*/

  return <div>Orders</div>;
};

export default Orders;
