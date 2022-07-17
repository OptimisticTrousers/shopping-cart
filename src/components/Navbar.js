import shoppingCart from '../assets/shopping_cart.svg'
import logo from '../assets/optimistictrousers.jpg'

export default function Navbar() {
    return (
        <nav>            
            <div className="links">
                <img src={logo} alt="smiling pair of pants"/>
                <img src={shoppingCart} alt="shopping cart"/>
            </div>
        </nav>
    )
}