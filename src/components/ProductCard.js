import { Link } from "react-router-dom"
import star from '../assets/star.svg'

export default function ProductCard({image, rating, title, price}) {
    return (
        <div className="product" data-testid="product-card">
            <div className="product-image">
                <img src={image} alt={title}/>
            </div>
            <div className="product-rating">
                <p className="product-review"><img className="star" src={star} alt="yellow star"/> {rating.rate} ({rating.count} Reviews)</p>
            </div>
            <div className="product-detail">
                <h2 className="product-title">{title}</h2>
                <p className="price-name">Price:</p>
                <p className="product-price">${price}</p>
            </div>
        </div>
    )
}