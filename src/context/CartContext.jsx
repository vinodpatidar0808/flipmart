import { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const cartStorage = JSON.parse(localStorage.getItem('cart'));
  const [cart, setCart] = useState(cartStorage || []);
  const [loading, setLoading] = useState(true);

  console.log('cart', cart);

  const updateCart = (product) => {
    const cartCopy = [...cart];
    const index = cart.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      cartCopy[index] = product;
    } else {
      cartCopy.push(product);
    }
    setCart(cartCopy);
  };

  const cartValue = {
    itemsInCart: cart.length || 0,
    cart,
    updateCart,
  };

  return <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>;
};


export default CartProvider;