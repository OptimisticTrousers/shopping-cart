import CartItem from "./CartItem"
import logo from '../assets/optimistictrousers.jpg'
import rightArrow from '../assets/right-arrow.svg'
import leftArrow from '../assets/left-arrow.svg'
import { Link } from "react-router-dom"
import { useCart } from "../context/Store"

export default function Cart() {

    const cart = useCart()

    const subTotal = (cart.reduce((prevSubtotal, product) => prevSubtotal + product.price * product.quantity, 0)).toFixed(2)

    const tax = (subTotal * 0.05).toFixed(2)

    const total = (Number(subTotal) + Number(tax)).toFixed(2)

    const renderedCart = cart.map(item => {

        const {id, image, price, title, quantity, description, rating, category} = item
        return <CartItem key={id} id={id} image={image} price={price} title={title} quantity={quantity} description={description} rating={rating} category={category} />
    })

    return (
        <div className="cart-container">
            <div className="cart">
                <h2 className="cart-title">Your Cart</h2>
                {cart.length ? renderedCart : <p>Stuff</p>}
                <div className="cost">
                    <p className="subtotal">Subtotal</p>
                    <p className="amount" data-testid="subtotal">${subTotal}</p>
                </div>
                <div className="cost">
                    <p className="delivery">Delivery</p>
                    <p className="amount">$0.00</p>
                </div>
                <div className="cost">
                    <p className="tax">Tax</p>
                    <p className="amount" data-testid="tax">${tax}</p>
                </div>
                <div className="cost">
                    <p className="total">Total</p>
                    <p className="amount" data-testid="total">${total}</p>
                </div>
            </div>
            <div className="buttons">
                <button type="button" onClick={(event) => {
                    event.preventDefault()
                    window.location.reload()
                }}>Check Out<img className="right-arrow" src={rightArrow} alt="right arrow"/></button>
                <Link to="/shop">
                    <button type="button"><img className="left-arrow" src={leftArrow} alt="left arrow" /> Back To Products</button>
                </Link>
            </div>
        </div>
    )
}