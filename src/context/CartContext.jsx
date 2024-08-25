import { createContext, useState } from 'react';

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const cartStorage = JSON.parse(localStorage.getItem('cart'));
  const [cart, setCart] = useState(cartStorage || []);

  const updateCart = (product) => {
    const cartCopy = [...cart];
    const index = cart.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      cartCopy[index] = product;
    } else {
      cartCopy.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cartCopy));
    setCart(cartCopy);
  };

  const getCartAmount = () => {
    let total = 0;
    let discount = 0;
    cart.forEach((product) => {
      total += product.discounted_price * product.quantity;
      discount += (product.retail_price - product.discounted_price) * product.quantity;
    });
    return { total, discount, delivery: total > 499 ? 0 : 50, platform: 10 };
  };

  const removeItemFromCart = (id) => {
    const cartCopy = [...cart];
    const index = cart.findIndex((p) => p.id === id);
    if (index !== -1) {
      cartCopy.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cartCopy));
    setCart(cartCopy);
  };

  const clearCart = () => {
    localStorage.removeItem('cart');
    setCart([]);
  };

  const cartValue = {
    itemsInCart: cart.reduce((total, product) => total + product.quantity, 0) || 0,
    cart,
    clearCart,
    updateCart,
    removeItemFromCart,
    cartAmount: { ...getCartAmount() },
  };

  return <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>;
};

export default CartProvider;
