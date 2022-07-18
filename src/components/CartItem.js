export default function CartItem({image, title, price, quantity}) {
    return (
        <div className="card-item-container">
            <img src={image} alt={title}/>
            <div className="card-item-details">
                <div className="item-detail">
                    <h2>Title</h2>
                    <p>Price</p>
                </div>
                <div className="user-input">
                    <p>quantity</p>
                    <p>Delete</p>
                </div>
            </div>
        </div>
    )
}