import React, { useContext, useState } from "react"

const CartQuantityContext = React.createContext()
const CartContext = React.createContext()


export function useQuantity() {
    const {cartQuantity} = useContext(CartQuantityContext)

    return cartQuantity;
}

export function useAddToCart() {
    const {addToCart} = useContext(CartContext);

    return addToCart;
}

export function useCart() {
    const {cart} = useContext(CartContext)

    return cart
}

export function CartProvider({children}) {

    const [cartQuantity, setCartQuantity] = useState(0)
    const [cart, setCart] = useState([])


    const addToCart = (details) => {
        setCartQuantity(prevQuantity => prevQuantity + 1)
        setCart(prevCart => {
            return [...prevCart, {details}]
        })
    }

    return (
        <CartContext.Provider value={{cart, addToCart}}>
            <CartQuantityContext.Provider value={{cartQuantity}}>
                {children}
            </CartQuantityContext.Provider>
        </CartContext.Provider>
    )
}
