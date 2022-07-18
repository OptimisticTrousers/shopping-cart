import CartItem from "./CartItem"
import logo from '../assets/optimistictrousers.jpg'

export default function Cart() {

    return (
        <div className="cart-container">
            <div className="cart">
                <h1 className="cart-title">Your Cart</h1>
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
                <button type="button">Check Out</button>
                <button type="button">Back To Products</button>
            </div>
        </div>
    )
}