import pants from '../assets/pants.jpeg'
import { Link } from 'react-router-dom'

export default function Hero () {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1 className="hero-title">Welcome to the Optimistic Store</h1>
                <p>Our functional funware serves to express an individuals uniqueness through color and fabric. Functional funware that exemplifies todays leisure centric society.</p>
                <Link to="/shop">
                    <button className='hero-button'>Shop Now</button>
                </Link>
            </div>
            <div className="hero-image-container">
                <img className="hero-image" src={pants} alt="pants"/>
            </div>
        </div>
    )
}