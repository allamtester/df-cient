import { useState } from "react";
import { getCart, saveCart } from "../utils/localStorage";

const useCart = () => {
    const [cart, setCart] = useState(getCart());

    const addToCart = (item) => {
        const updatedCart = [...cart, item];
        setCart(updatedCart);
        saveCart(updatedCart);
    };

    const removeFromCart = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        saveCart(updatedCart);
    };

    return { cart, addToCart, removeFromCart };
};

export default useCart;
