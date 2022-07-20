import React, { useContext, useState } from "react"

const CartQuantityContext = React.createContext()
const ProductsContext = React.createContext()


export function useQuantity() {
    const {cartQuantity} = useContext(CartQuantityContext)

    return cartQuantity;
}

export function useAddToCart() {
    const {addToCart} = useContext(CartQuantityContext);

    return addToCart;
}

export function CartProvider({children}) {

    const [cartQuantity, setCartQuantity] = useState(0)
    const [products, setProducts] = useState([])


    const addToCart = (details) => {
        setCartQuantity(prevQuantity => prevQuantity + 1)
    }

    return (
        <CartQuantityContext.Provider value={{cartQuantity}}>
            <ProductsContext.Provider value={{products}}>
                {children}
            </ProductsContext.Provider>
        </CartQuantityContext.Provider>
    )
}
