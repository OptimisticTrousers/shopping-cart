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
            </div>
            <p>SUBTOTAL</p>
            <div className="buttons">
                <button type="button">Check Out</button>
                <button type="button">Back To Products</button>
            </div>
        </div>
    )
}