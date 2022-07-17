import React, {useEffect} from "react"
import ProductCard from "./ProductCard"

export default function Shop() {

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => console.log(json))
    }, [])

    return (
        <main>
            <h1>Get Clothing!</h1>
            <p>Times are tough. Liven up with our top-notch clothing!</p>
            <div className="products">
                <ProductCard />

            </div>
        </main>
    )
}