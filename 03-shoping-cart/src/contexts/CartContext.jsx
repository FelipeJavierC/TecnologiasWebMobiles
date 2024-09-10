import { createContext, useState } from 'react';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      return setCart(updatedCart);
    }

    return setCart([...cart, { ...product, quantity: 1 }]);
  }

  const removeFromCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    const updatedCart = [...cart];

    if (updatedCart[existingProductIndex].quantity > 1){
      updatedCart[existingProductIndex].quantity -= 1;
      return setCart(updatedCart);
    }else{
      setCart(cart.filter((item) => item.id !== product.id));
    }
  }

  const clearCart = () => {
    setCart([]);
  }

  const aumentCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    const updatedCart = [...cart];
    updatedCart[existingProductIndex].quantity += 1;
    return setCart(updatedCart);
  }
  

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart,aumentCart}}>
      {children}
    </CartContext.Provider>
  );
}
