export default function ProductCard({image, rating, title, price}) {
    return (
        <div className="product">
            <div className="product-image">
                <img src={image} />
            </div>
            <div className="product-rating">
                <p>{rating.rate} {rating.count} Total Reviews</p>
            </div>
            <p>{title}</p>
            <p>{price}</p>
        </div>
    )
}