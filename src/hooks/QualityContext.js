import React, { useContext, useState } from "react"

const CartQuantityContext = React.createContext()

export function useQuantity() {
    const {cartQuantity} = useContext(CartQuantityContext)
}

export function useQuantityHandler() {
    const {handleCartQuantity} = useContext(CartQuantityContext);
}

export function CartQuantityProvider({children}) {

    const [cartQuantity, setCartQuantity] = useState(0)

    const handleCartQuantity = () => {
        setCartQuantity(prevQuantity => prevQuantity + 1)
    }

    return (
        <CartQuantityContext.Provider value={{cartQuantity, handleCartQuantity}}>
            {children}
        </CartQuantityContext.Provider>
    )
}