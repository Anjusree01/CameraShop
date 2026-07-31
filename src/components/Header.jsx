import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
    FaBars,
    FaShoppingCart,
    FaHeart,
    FaUserCircle,
    FaBoxOpen,
    FaSignOutAlt,
    FaTimes
} from "react-icons/fa";
import "../styles/header.css";

const Header = ({
    search,
    setSearch,
    menuOpen,
    setMenuOpen
}) => {

    const cartItems = useSelector((state) => state.cart.cart);

    const wishlistItems = useSelector(
        (state) => state.wishlist.wishlist
    );

    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const user = JSON.parse(localStorage.getItem("user"));

    const [showDropdown, setShowDropdown] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("user");
        window.location.href = "/";
    };

    const closeDropdown = () => {
        setShowDropdown(false);
    };

    return (

        <header>

            {/* Logo */}

            <div className="header-logo">

                <Link to="/">
                    <h2>CameraShop</h2>
                </Link>

            </div>

            {/* Search */}

            <div className="header-search">

                <input
                    type="text"
                    placeholder="Search for products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>

            {/* Hamburger Menu */}

            <button
    className="menu-btn"
    onClick={() => setMenuOpen(!menuOpen)}
>
    {menuOpen ? <FaTimes /> : <FaBars />}
</button>

            {/* Desktop Navigation */}

            <div className="header-right">

                <Link
                    to="/cart"
                    className="nav-icon"
                >

                    <FaShoppingCart />

                    <span>
                        Cart ({totalItems})
                    </span>

                </Link>

                <Link
                    to="/wishlist"
                    className="nav-icon"
                >

                    <FaHeart />

                    <span>
                        Wishlist ({wishlistItems.length})
                    </span>

                </Link>

                <Link
                    to="/orders"
                    className="nav-icon"
                >

                    <FaBoxOpen />

                    <span>
                        My Orders
                    </span>

                </Link>

                <div className="user-menu">

                    <div
                        className="nav-icon"
                        onClick={() =>
                            setShowDropdown(!showDropdown)
                        }
                    >

                        <FaUserCircle />

                        <span>

                            Hi, {user?.name || "Guest"} ▼

                        </span>

                    </div>

                    {showDropdown && (

                        <div className="dropdown">

                            <Link
                                to="/profile"
                                onClick={closeDropdown}
                            >
                                My Profile
                            </Link>
                            <Link
                                to="/register"
                                onClick={closeDropdown}
                            >
                                Register
                            </Link>
                            <Link
                                to="/login"
                                onClick={closeDropdown}
                            >
                                Login
                            </Link>

                                             

                            <button
                                className="logout-btn"
                                onClick={() => {

                                    closeDropdown();
                                    handleLogout();

                                }}
                            >
                                Logout
                            </button>

                        </div>

                    )}

                </div>

            </div>
        {menuOpen && (

<div className="mobile-menu">

    <Link to="/cart" onClick={() => setMenuOpen(false)}>
        <FaShoppingCart /> Cart ({totalItems})
    </Link>

    <Link to="/wishlist" onClick={() => setMenuOpen(false)}>
        <FaHeart /> Wishlist ({wishlistItems.length})
    </Link>

    <Link to="/orders" onClick={() => setMenuOpen(false)}>
        <FaBoxOpen /> My Orders
    </Link>

    <Link to="/profile" onClick={() => setMenuOpen(false)}>
        <FaUserCircle /> My Profile
    </Link>

    <button
        onClick={()=>{
            setMenuOpen(false);
            handleLogout();
        }}
    >
        <FaSignOutAlt /> Logout
    </button>

</div>

)}
        </header>

    );

};

export default Header;