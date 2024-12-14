import { useState } from "react";
import { getCart, saveCart } from "../utils/localStorage";

const useCart = () => {
  const [cart, setCart] = useState(getCart());

  const addToCart = (productId) => {
    const objData = { productId, quantity: 1 };
    let updatedCart = cart.map((product) =>
      product.productId == objData.productId
        ? { productId: objData.productId, quantity: product.quantity + objData.quantity }
        : product
    );
    if (!updatedCart.some(item => item.productId === objData.productId)) {
      updatedCart.push(objData);
    }
    saveCart(updatedCart);
    setCart(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((product) => product.productId !== id);
    saveCart(updatedCart);
    setCart(updatedCart);
  };

  return { cart, addToCart, removeFromCart };
};

export default useCart;