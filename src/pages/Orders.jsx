import { useContext, useEffect, useState } from 'react';
import OrderItem from '../components/OrderItem';
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

  /*eslint-disable*/
  useEffect(() => {
    if (!user) {
      return;
    }
    getOrders();
  }, []);
  /*eslint-enable*/

  return (
    <div className="flex flex-col p-10 gap-5 mb-10 ">
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
