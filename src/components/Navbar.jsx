import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = ({ menuOpen, setMenuOpen }) => {

    return (

        <nav className={menuOpen ? "navbar active" : "navbar"}>

            <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
            >
                Home
            </NavLink>

            <NavLink
                to="/shop"
                onClick={() => setMenuOpen(false)}
            >
                Shop
            </NavLink>

            <NavLink
                to="/about"
                onClick={() => setMenuOpen(false)}
            >
                About
            </NavLink>

            <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
            >
                Contact
            </NavLink>

        </nav>

    );

};

export default Navbar;