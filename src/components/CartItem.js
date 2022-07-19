import trash from '../assets/trash.svg'

export default function CartItem({image, title, price, quantity}) {
    return (
        <div className="cart-item-container">
            <div className="item-image">
                <img src={image} alt={title}/>
            </div>
            <div className="cart-item-details">
                <div className="item-detail">
                    <h2 className='item-title product-title'>Title</h2>
                    <p className='item-price product-price'>Price</p>
                </div>
                <div className="item-stock">
                    <p className="item-stock-price">Price</p>
                    <p className="item-stock-status">In Stock</p>
                </div>
                <div className="user-input">
                    <div className="quantity">
                        <button type="button">+</button>
                        <p className="quantity-display">0</p>
                        <button type="button">-</button>
                    </div>
                    <div className="delete">
                        <img className="trash-image" src={trash} alt="trash can"/>
                        <p className="text">Delete</p>
                    </div>
                </div>
            </div>
        </div>
    )
}