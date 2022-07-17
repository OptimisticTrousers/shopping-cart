import React, {useEffect, useState} from "react"
import ProductCard from "./ProductCard"

export default function Shop() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const renderedProducts = products.map((product) => {
        return <ProductCard key={product.id} image={product.image} rating={product.rating} title={product.title} price={product.price}/>
    })

    return (
        <div className="shop">
            <h1>Get Clothing!</h1>
            <p>Times are tough. Liven up with our top-notch clothing!</p>
            <div className="products">
                {renderedProducts}
            </div>
        </div>
    )
}