import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/wishlistSlice";
import { addToCart } from "../redux/cartSlice";
import "../styles/wishlist.css";

const Wishlist = () => {

    const wishlistItems = useSelector(
        (state) => state.wishlist.wishlist
    );

    const dispatch = useDispatch();

    return (

        <div className="wishlist">

            <h2>My Wishlist</h2>

            {wishlistItems.length === 0 ? (

                <h3>Your Wishlist is Empty</h3>

            ) : (

                wishlistItems.map((item) => (

                    <div
                        className="wishlist-item"
                        key={item.id}
                    >

                        <img
                            src={item.image}
                            alt={item.name}
                        />

                        <div className="wishlist-details">

                            <h3>{item.name}</h3>

                            <p>{item.brand}</p>

                            <p>{item.category}</p>

                            <h4>
                                ₹ {item.price.toLocaleString()}
                            </h4>

                            <div className="wishlist-buttons">

                                <button
                                    className="cart-btn"
                                    onClick={() =>
                                        dispatch(addToCart(item))
                                    }
                                >
                                    Add to Cart
                                </button>

                                <button
                                    className="remove-btn"
                                    onClick={() =>
                                        dispatch(removeFromWishlist(item.id))
                                    }
                                >
                                    Remove
                                </button>

                            </div>

                        </div>

                    </div>

                ))

            )}

        </div>

    );

};

export default Wishlist;