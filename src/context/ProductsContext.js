import React, { useContext, useState } from "react";

const ProductsContext = React.createContext()

export function useProducts() {
    const [products] = useContext(ProductsContext)

    return products
}

export function useProductAdder() {
    const [products] = useContext(ProductsContext)

    return products
}

export function ProductsProvider({children}) {

    const [products, setProducts] = useState([])

    function addProduct(){
        
    }

    return (
        <ProductsContext.Provider value={{products, addProduct}}>
            {children}
        </ProductsContext.Provider>
    )
}