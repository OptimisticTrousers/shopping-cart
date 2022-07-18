import CartItem from "./CartItem"
import logo from '../assets/optimistictrousers.jpg'
import rightArrow from '../assets/right-arrow.svg'
import leftArrow from '../assets/left-arrow.svg'

export default function Cart() {

    return (
        <div className="cart-container">
            <div className="cart">
                <h2 className="cart-title">Your Cart</h2>
                <CartItem image={logo}/>
                <CartItem image={logo}/>
                <CartItem image={logo}/>
                <CartItem image={logo}/>
                <CartItem image={logo}/>
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
                <button type="button"><img className="left-arrow" src={leftArrow} alt="left arrow" /> Back To Products</button>
            </div>
        </div>
    )
}