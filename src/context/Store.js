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

export function useReduceQuantity() {
    const {reduceQuantity} = useContext(CartContext)

    return reduceQuantity
}

export function useRemoveFromCart() {
    const {removeFromCart} = useContext(CartContext)

    return removeFromCart
}

export function CartProvider({children}) {

    const [cartQuantity, setCartQuantity] = useState(() => 0)
    const [cart, setCart] = useState(() => [])

    const removeFromCart = (details) => {
        setCartQuantity(prevQuantity => prevQuantity - details.quantity)
        setCart(prevCart => {
            const productIndex = prevCart.findIndex((product) => product.id === details.id)

            const newCart = [...prevCart]

            newCart.splice(productIndex, 1)

            return newCart;
        })
    }


    const addToCart = (details) => {
        setCartQuantity(prevQuantity => prevQuantity + 1)
        setCart(prevCart => {


            const productIndex = prevCart.findIndex((product) => product.id === details.id)

            if(prevCart.length === 0 || productIndex === -1){

                return [...prevCart, {...details, quantity: 1}];
            }
            if(productIndex !== -1){
                const newCart = [...prevCart]

                newCart.splice(productIndex, 1, {...details, quantity: prevCart[productIndex].quantity + 1})

                return newCart;
            }
        })
    }

    const reduceQuantity = (details) => {
        setCart(prevCart => {

            const productIndex = prevCart.findIndex((product) => product.id === details.id)

            if(prevCart[productIndex]?.quantity === 1){
                return prevCart
            }
            

            setCartQuantity(prevQuantity => prevQuantity - 1)

            const newCart = [...prevCart]

            newCart.splice(productIndex, 1, {...details, quantity: prevCart[productIndex]?.quantity - 1})

            return newCart
        })
    }

    return (
        <CartContext.Provider value={{cart, addToCart, reduceQuantity, removeFromCart}}>
            <CartQuantityContext.Provider value={{cartQuantity}}>
                {children}
            </CartQuantityContext.Provider>
        </CartContext.Provider>
    )
}
