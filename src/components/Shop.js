import React, {useEffect, useState} from "react"
import ProductCard from "./ProductCard"
import { Link, useOutletContext } from "react-router-dom"

export default function Shop() {

    const products = useOutletContext()

    const renderedProducts = products.map((product) => {
        return <Link key={product.id} to={`${product.id}`}>
            <ProductCard  image={product.image} rating={product.rating} title={product.title} price={product.price}/>
        </Link>
    })

    return (
        <div className="shop">
            <h2 className="shop-title">Get Clothing!</h2>
            <p className="shop-description">Times are tough. Liven up with our top-notch clothing!</p>
            <div className="products">
                {renderedProducts}
            </div>
        </div>
    )
}