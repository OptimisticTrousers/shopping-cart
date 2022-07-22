import trash from '../assets/trash.svg'
import { useAddToCart, useReduceQuantity, useRemoveFromCart} from '../context/Store'

export default function CartItem(props) {

    const {image, title, price, quantity} = props

    const addToCart = useAddToCart()

    const reduceQuantity = useReduceQuantity()

    const removeFromCart = useRemoveFromCart()

    return (
        <div className="cart-item-container" data-testid="cart-item">
            <div className="item-image">
                <img src={image} alt={title}/>
            </div>
            <div className="cart-item-details">
                <div className="item-detail">
                    <h2 className='item-title product-title'>{title}</h2>
                    <p className='item-price product-price'>${price}</p>
                </div>
                <div className="item-stock">
                    <p className="item-stock-price">${price}</p>
                    <p className="item-stock-status">In Stock</p>
                </div>
                <div className="user-input">
                    <div className="quantity">
                        <button type="button" onClick={() => addToCart(props)}>+</button>
                        <p className="quantity-display" data-testid="product-quantity">{quantity}</p>
                        <button type="button" onClick={() => reduceQuantity(props)}>-</button>
                    </div>
                    <div className="delete">
                        <img className="trash-image" src={trash} alt="trash can"/>
                        <p className="text" onClick={() => removeFromCart(props)}>Delete</p>
                    </div>
                </div>
            </div>
        </div>
    )
}