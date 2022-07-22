export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="newsletter-input">
                    <h2>Newsletter</h2>
                    <input placeholder="Email"></input>
                </div>
                <button className="newsletter-button" type="submit">Subscribe</button>
                <div className="contacts">
                    <p className="phone-text">Phone: <span>555-999-1111</span></p>
                    <p className="email-text">Email: <span>Bob Jones</span></p>
                    <p className="address-text">Address: <span>Planet Earth, Milky Way</span></p>
                </div>
                <div className="social">
                    <h2>Icon 1</h2>
                    <h2>Icon 1</h2>
                    <h2>Icon 1</h2>
                    <p>Check out our social media!</p>
                </div>
            </div>
            <a href="https://github.com/OptimisticTrousers">
                Created by Tony Isern 
            </a>
        </footer>
    )
}