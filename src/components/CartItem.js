import trash from '../assets/trash.svg'

export default function CartItem({image, title, price, quantity}) {
    return (
        <div className="card-item-container">
            <div className="item-image">
                <img src={image} alt={title}/>
            </div>
            <div className="card-item-details">
                <div className="item-detail">
                    <h2>Title</h2>
                    <p>Price</p>
                </div>
                <div className="user-input">
                    <div className="quantity">
                        <button type="button">+</button>
                        <p className="quantity-display">0</p>
                        <button type="button">-</button>
                    </div>
                    <div className="delete">
                        <img src={trash} alt="trash can"/>
                        <span>Delete</span>
                    </div>
                </div>
            </div>
        </div>
    )
}