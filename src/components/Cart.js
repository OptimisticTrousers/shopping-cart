import CartItem from "./CartItem"
import logo from '../assets/optimistictrousers.jpg'
import rightArrow from '../assets/right-arrow.svg'
import leftArrow from '../assets/left-arrow.svg'
import { Link } from "react-router-dom"
import { useCart } from "../context/Store"

export default function Cart() {

    const cart = useCart()

    const subTotal = cart.reduce((prevValue, currentValue) => {
       return prevValue + currentValue.price
    }, 0)

    const tax = subTotal * 0.05

    const total = subTotal + tax

    return (
        <div className="cart-container">
            <div className="cart">
                <h2 className="cart-title">Your Cart</h2>
                {cart.map(item => {
                        const {id, image, price, title, quantity, description, rating, category} = item
                        return <CartItem key={id} id={id} image={image} price={price} title={title} quantity={quantity} description={description} rating={rating} category={category} />
                })}
                <div className="cost">
                    <p className="subtotal">Subtotal</p>
                    <p className="amount" data-testid="subtotal">{subTotal}</p>
                </div>
                <div className="cost">
                    <p className="delivery">Delivery</p>
                    <p className="amount">$0.00</p>
                </div>
                <div className="cost">
                    <p className="tax">Tax</p>
                    <p className="amount" data-testid="tax">+ {tax}</p>
                </div>
                <div className="cost">
                    <p className="total">Total</p>
                    <p className="amount" data-testid="total">{total}</p>
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