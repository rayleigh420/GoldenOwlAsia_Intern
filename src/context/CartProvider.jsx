import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalstorage";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [value, setValue] = useLocalStorage('cartItem', [])
    const [cart, setCart] = useState(value);

    useEffect(() => {
        setValue(cart)
    }, [cart])

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext