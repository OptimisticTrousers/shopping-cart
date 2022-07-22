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

    const emptyCart = (
        <div className="empty-cart">
            <div className="empty-cart-image">
                <svg data-testid="cart-svg" width="20" height="22" viewBox="0 0 20 22" fill="none" stroke="currentColor"><path d="M4 1L1 5V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V5L16 1H4Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M1 5H19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14 9C14 10.0609 13.5786 11.0783 12.8284 11.8284C12.0783 12.5786 11.0609 13 10 13C8.93913 13 7.92172 12.5786 7.17157 11.8284C6.42143 11.0783 6 10.0609 6 9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
            <h1 className="empty-cart-title">Your cart is empty</h1>
            <p className="empty-cart-description">Biscuit oat cake wafer icing ice cream tiramisu pudding cupcake.</p>
        </div>
    )

    return (
        <div className="cart-container">
            <div className="cart">
                <h2 className="cart-title">Your Cart</h2>
                {cart.length ? renderedCart : emptyCart}
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