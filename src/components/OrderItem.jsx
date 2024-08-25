const OrderItem = ({ order }) => {
  const date = new Date(order.created);
  const formattedDate = date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const subTotal = order.products.reduce(
    (acc, product) => acc + product.retail_price * product.quantity,
    0
  );
  const discount = order.products.reduce(
    (acc, product) => acc + (product.retail_price - product.discounted_price) * product.quantity,
    0
  );

  const delivery = subTotal - discount > 499 ? 0 : 50;
  const total = subTotal - discount + delivery + 10;

  

  return (
    <div className="flex flex-col shadow-md py-2  ">
      <div className="flex justify-between px-5 font-semibold ">
        <p>Order id: #{order.id}</p>
        <p> {formattedDate}</p>
      </div>
      <div className="flex justify-between bg-gray-200 w-full px-5 py-2">
        <p className="w-2/5 self-center ">Product Details</p>
        <p className="w-1/5 text-center">Retail price</p>
        <p className="w-1/5 text-center">Purchase price</p>
        <p className="w-1/5 text-center">Quantity</p>
        <p className="w-1/5 text-center">Total Amount</p>
      </div>

      <div className="flex flex-col border-b ">
        {order.products.map((product) => (
          <div
            key={product.id}
            className="flex justify-between px-5 py-2">
            <div className="w-2/5 flex gap-3 items-center ">
              <div>
                <img
                  className="w-24 h-24 object-contain"
                  src={product.image}
                  alt="product"
                />
              </div>
              <div>{product.product_name}</div>
            </div>
            <p className="w-1/5 self-center text-center">&#8377;{product.retail_price}</p>
            <p className="w-1/5 self-center text-center">&#8377;{product.discounted_price}</p>
            <p className="w-1/5 self-center text-center">{product.quantity}</p>
            <p className="w-1/5 self-center text-center">
              &#8377;{product.discounted_price * product.quantity}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-end px-10">
        <div className="flex flex-col">
          <div className="flex gap-10 justify-between items-center">
            <p className="px-5 py-2 font-semibold">Sub Total:</p>
            <p> &#8377;{subTotal}</p>
          </div>
          <div className="flex gap-10 justify-between items-center">
            <p className="px-5 py-2 font-semibold">Discount:</p>
            <p> &#8377;{discount}</p>
          </div>
          <div className="flex gap-10 justify-between items-center">
            <p className="px-5 py-2 font-semibold">Delivery Charge:</p>
            <p> &#8377;{delivery}</p>
          </div>
          <div className="flex gap-10 justify-between items-center">
            <p className="px-5 py-2 font-semibold">Platform Fee:</p>
            <p> &#8377;{10}</p>
          </div>
          <div className="flex gap-10 justify-between items-center">
            <p className="px-5 py-2 font-semibold">Total(&#8377;):</p>
            <p> &#8377;{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
