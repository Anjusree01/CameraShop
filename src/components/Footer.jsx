import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
    return (

        <footer>

            <div className="footer-top">

                <div className="footer-column">

                    <h3>CameraShop</h3>

                    <p>
                        Your one-stop destination for Cameras,
                        Lenses and Photography Accessories.
                    </p>

                </div>

                <div className="footer-column">

                    <h4>Shop</h4>

                    <Link to="/shop">All Products</Link>
                    <Link to="/wishlist">Wishlist</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/orders">Orders</Link>

                </div>

                <div className="footer-column">

                    <h4>Customer Service</h4>

                    <Link to="/contact">Contact Us</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/">FAQs</Link>
                    <Link to="/">Help Center</Link>

                </div>

                <div className="footer-column">

                    <h4>Follow Us</h4>

                    <a href="#">Instagram</a>
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">LinkedIn</a>

                </div>

            </div>

            <hr />

            <div className="footer-bottom">

                © 2026 CameraShop. All Rights Reserved.

            </div>

        </footer>

    );
};

export default Footer;