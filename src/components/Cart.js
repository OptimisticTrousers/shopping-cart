import CartItem from "./CartItem"
import logo from '../assets/optimistictrousers.jpg'
import rightArrow from '../assets/right-arrow.svg'
import leftArrow from '../assets/left-arrow.svg'
import { Link } from "react-router-dom"
import { useCart } from "../context/Store"

export default function Cart() {

    const cart = useCart()

    const renderedCart = cart.map(item => {
        console.log(item)
        const {id, image, price, title, quantity} = item
        return <CartItem key={id} id={id} image={image} price={price} title={title} quantity={quantity} />
    })

    return (
        <div className="cart-container">
            <div className="cart">
                <h2 className="cart-title">Your Cart</h2>
                {renderedCart}
                <div className="cost">
                    <p className="subtotal">Subtotal</p>
                    <p className="amount">$400.99</p>
                </div>
                <div className="cost">
                    <p className="delivery">Delivery</p>
                    <p className="amount">$0.00</p>
                </div>
                <div className="cost">
                    <p className="tax">Tax</p>
                    <p className="amount">+ $14.00</p>
                </div>
                <div className="cost">
                    <p className="total">Total</p>
                    <p className="amount">$78.13</p>
                </div>
            </div>
            <div className="buttons">
                <button type="button">Check Out<img className="right-arrow" src={rightArrow} alt="right arrow"/></button>
                <Link to="/shop">
                    <button type="button"><img className="left-arrow" src={leftArrow} alt="left arrow" /> Back To Products</button>
                </Link>
            </div>
        </div>
    )
}