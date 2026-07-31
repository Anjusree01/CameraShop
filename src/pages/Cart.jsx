import { useDispatch, useSelector } from "react-redux";
import {
    incrementQuantity,
    decrementQuantity,
    removeFromCart
} from "../redux/cartSlice";
import { Link } from "react-router-dom";
import "../styles/cart.css";

const Cart = () => {

    const cartItems = useSelector((state) => state.cart.cart);

    const dispatch = useDispatch();

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (

        <div className="cart">

            <h2>Shopping Cart</h2>

            {cartItems.length === 0 ? (

                <h3>Your cart is empty.</h3>

            ) : (

                <>

                    {cartItems.map((item) => (

                        <div
                            className="cart-item"
                            key={item.id}
                        >

                            <img
                                src={item.image}
                                alt={item.name}
                            />

                            <div className="cart-details">

                                <h3>{item.name}</h3>

                                <p>{item.brand}</p>

                                <p>{item.category}</p>

                                <h4>
                                    ₹ {item.price.toLocaleString()}
                                </h4>

                                <div className="quantity">

                                    <button
                                        onClick={() =>
                                            dispatch(decrementQuantity(item.id))
                                        }
                                    >
                                        -
                                    </button>

                                    <span>{item.quantity}</span>

                                    <button
                                        onClick={() =>
                                            dispatch(incrementQuantity(item.id))
                                        }
                                    >
                                        +
                                    </button>

                                </div>

                                <button
                                    className="remove-btn"
                                    onClick={() =>
                                        dispatch(removeFromCart(item.id))
                                    }
                                >
                                    Remove
                                </button>

                            </div>

                        </div>

                    ))}

                    <div className="cart-footer">

                        <h2>
                            Grand Total : ₹ {totalPrice.toLocaleString()}
                        </h2>

                        <Link to="/checkout">

                            <button className="checkout-btn">
                                Proceed to Pay
                            </button>

                        </Link>

                    </div>

                </>

            )}

        </div>

    );

};

export default Cart;