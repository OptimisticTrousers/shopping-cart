import { Link } from "react-router-dom"

export default function ProductCard({image, rating, title, price}) {
    return (
        <div className="product">
            <div className="product-image">
                <img src={image} alt={title}/>
            </div>
            <div className="product-rating">
                <p>{rating.rate} {rating.count} Reviews</p>
            </div>
            <p>{title}</p>
            <p>${price}</p>
        </div>
    )
}