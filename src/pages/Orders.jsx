import { useEffect, useState } from "react";
import "../styles/orders.css";

const Orders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) return;

        fetch(`http://localhost:5000/orders?userId=${user.id}`)
            .then((response) => response.json())
            .then((data) => setOrders(data))
            .catch((error) => console.log(error));

    }, []);

    return (

        <div className="orders">

            <h2>My Orders</h2>

            {orders.length === 0 ? (

                <h3>No Orders Yet</h3>

            ) : (

                orders.map((order) => (

                    <div
                        className="order-card"
                        key={order.id}
                    >

                        <h3>Order #{order.id}</h3>

                        <p>
                            <strong>Date:</strong> {order.orderDate}
                        </p>

                        <p className="status">
    {order.status}
</p>
                        <p>
                            <strong>Total:</strong> ₹ {order.total.toLocaleString()}
                        </p>

                        <h4>Products</h4>

                        {order.items.map((item) => (

                            <div
                                className="order-product"
                                key={item.id}
                            >

                                <img
                                    src={item.image}
                                    alt={item.name}
                                />

                                <div>

                                    <h4>{item.name}</h4>

                                    <p>₹ {item.price}</p>

                                    <p>Quantity : {item.quantity}</p>

                                </div>

                            </div>

                        ))}

                    </div>

                ))

            )}

        </div>

    );

};

export default Orders;