import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";
import "../styles/checkout.css";

const Checkout = () => {

    const cartItems = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const [address, setAddress] = useState({
        name: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: ""
    });

    const placeOrder = async () => {

        if (
            !address.name ||
            !address.phone ||
            !address.address ||
            !address.city ||
            !address.state ||
            !address.pincode
        ) {
            alert("Please fill all fields");
            return;
        }

        const user = JSON.parse(localStorage.getItem("user"));

        const order = {
            userId: user.id,
            customer: user.name,
            items: cartItems,
            total,
            address,
            status: "Placed",
            orderDate: new Date().toLocaleString()
        };

        try {

            const response = await fetch("http://localhost:5000/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(order)
            });

            if (response.ok) {

                dispatch(clearCart());

                alert("Order Placed Successfully");

                navigate("/order-success");

            } else {

                alert("Failed to place order");

            }

        } catch (error) {

            console.log(error);

        }
    };

    return (

        <div className="checkout">

            <h2>Checkout</h2>

            <div className="checkout-container">

                <div className="address">

                    <h3>Shipping Address</h3>

                    <input
                        type="text"
                        placeholder="Full Name"
                        value={address.name}
                        onChange={(e) =>
                            setAddress({
                                ...address,
                                name: e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Phone Number"
                        value={address.phone}
                        onChange={(e) =>
                            setAddress({
                                ...address,
                                phone: e.target.value
                            })
                        }
                    />

                    <textarea
                        placeholder="Address"
                        value={address.address}
                        onChange={(e) =>
                            setAddress({
                                ...address,
                                address: e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="City"
                        value={address.city}
                        onChange={(e) =>
                            setAddress({
                                ...address,
                                city: e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="State"
                        value={address.state}
                        onChange={(e) =>
                            setAddress({
                                ...address,
                                state: e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Pincode"
                        value={address.pincode}
                        onChange={(e) =>
                            setAddress({
                                ...address,
                                pincode: e.target.value
                            })
                        }
                    />

                    <h3>Payment Method</h3>

                    <label>
                        <input
                            type="radio"
                            name="payment"
                            defaultChecked
                        />
                        Cash on Delivery
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="payment"
                        />
                        UPI
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="payment"
                        />
                        Card
                    </label>

                </div>

                <div className="summary">

                    <h3>Order Summary</h3>

                    <p>Total Items: {cartItems.length}</p>

                    <h2>₹ {total.toLocaleString()}</h2>

                    <button onClick={placeOrder}>
                        Place Order
                    </button>

                </div>

            </div>

        </div>

    );

};

export default Checkout;