import { Link } from 'react-router-dom'
import githubLogo from '../assets/github-logo.svg'
import linkedInLogo from '../assets/linkedin-logo.svg'
export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="newsletter">
                    <p className='newsletter-description'>Subscribe to our newsletter!</p>
                    <h2 className='newsletter-title'>NEWSLETTER</h2>
                    <div className='newsletter-input'>
                        <input placeholder="Email"></input>
                        <button className="newsletter-button" type="submit">Subscribe</button>
                    </div>
                </div>
                <div className="contacts">
                    <h2 className="contacts-title">Contacts</h2>
                    <p className="phone-text">Phone: <span>555-999-1111</span></p>
                    <p className="email-text">Email: <span>bobjones@gmail.com</span></p>
                    <p className="address-text">Address: <span>Planet Earth, Milky Way</span></p>
                </div>
                <div className="footer-links">
                    <h2 className='contacts-title'>Links</h2>
                    <Link to="/">
                        <p>Home</p>
                    </Link>
                    <Link to="/shop">
                        <p>Shop</p>
                    </Link>
                    <Link to="/cart">
                        <p>Cart</p>
                    </Link>
                </div>
                <div className="social">
                    <h2 className="contacts-title">Social</h2>
                    <div className='logos'>
                        <a href="https://github.com/OptimisticTrousers">
                            <img className="github-logo" src={githubLogo} alt="github-logo" />
                        </a>
                        <br />
                        <a href="https://www.linkedin.com/in/tony-isern-9717a0189">
                            <img className="linkedin-logo" src={linkedInLogo} alt="linkedin-logo" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}