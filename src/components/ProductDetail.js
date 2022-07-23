import { Link, useLocation} from "react-router-dom"
import { useState } from "react"
import leftArrow from '../assets/left-arrow.svg'
import { useAddToCart} from "../context/Store"

export default function ProductDetail(){

    const addToCart = useAddToCart()

    const location = useLocation()

    const [details] = useState(location.state?.product)

    return (
        <div className="detail-container">
            <div className="image-detail-view">
                <img className="image-detail" src={details.image} alt={details.title}/>
            </div>
            <div className="product-details">
                <Link to="/shop">
                    <button type="button"><img className="left-arrow" src={leftArrow} alt="left arrow" /> Back To Products</button>
                </Link>
                <h1 className="product-title">{details.title}</h1>
                <p className="product-price">${details.price}</p>
                <p className="category-detail">Category: {details.category}</p>
                <p className="description-detail">{details.description}</p>
                <button onClick={() => addToCart(details)} className="add-to-cart-button" type="button">Add to Cart</button>
            </div>
        </div>
    )
}