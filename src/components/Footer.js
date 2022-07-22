import githubLogo from '../assets/github-logo.svg'
import linkedInLogo from '../assets/linkedin-logo.svg'
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
                    <h2 className="contacts-title">Contacts</h2>
                    <p className="phone-text">Phone: <span>555-999-1111</span></p>
                    <p className="email-text">Email: <span>Bob Jones</span></p>
                    <p className="address-text">Address: <span>Planet Earth, Milky Way</span></p>
                </div>
                <div className="social">
                    <h2 className="contacts-title">Social</h2>
                    <a href="https://github.com/OptimisticTrousers">
                        <img className="logo" src={githubLogo} alt="github-logo" />
                    </a>
                    <br />
                    <a href="https://www.linkedin.com/in/tony-isern-9717a0189">
                        <img className="logo" src={linkedInLogo} alt="linkedin-logo" />
                    </a>
                    <p>Check out our social media!</p>
                </div>
            </div>
        </footer>
    )
}