import pants from '../assets/pants.jpeg'

export default function Hero () {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1 className="hero-title">Welcome to the Optimistic Store</h1>
                <p>Our functional funware serves to express an individuals uniqueness through color and fabric. Functional funware that exemplifies todays leisure centric society.</p>
                <button className='hero-button'>Shop Now</button>
            </div>
            <div className="hero-image">
                <img src={pants} alt="pants"/>
            </div>
        </div>
    )
}