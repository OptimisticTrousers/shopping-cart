import CartItem from "./CartItem"
import logo from '../assets/optimistictrousers.jpg'

export default function Cart() {

    return (
        <div className="cart-container">
            <h1 className="cart-title">Your Cart</h1>
            <div className="cart">
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