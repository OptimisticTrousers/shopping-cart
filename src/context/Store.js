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

export function useIncrementQuantityInCart(details) {

    const {setCartQuantity} = useContext(CartContext);

    setCartQuantity(prevQuantity => prevQuantity + 1)
}

export function CartProvider({children}) {

    const [cartQuantity, setCartQuantity] = useState(0)
    const [cart, setCart] = useState([])


    const increaseProductQuantity = (details, prevCart) => {

        const productIndex = prevCart.findIndex((product) => product.id === details.id)

        if(productIndex !== -1){
            const newCart = [...prevCart]

            newCart.splice(productIndex, 1, {...details, quantity: prevCart[productIndex].quantity + 1})

            return newCart;
        }
        return [...prevCart, {...details, quantity: 1}];
    }

    const addToCart = (details) => {
        setCartQuantity(prevQuantity => prevQuantity + 1)
        setCart(prevCart => increaseProductQuantity(details, prevCart))
    }

    return (
        <CartContext.Provider value={{cart, addToCart}}>
            <CartQuantityContext.Provider value={{cartQuantity}}>
                {children}
            </CartQuantityContext.Provider>
        </CartContext.Provider>
    )
}
