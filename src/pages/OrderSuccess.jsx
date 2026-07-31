import { Link } from "react-router-dom";
import "../styles/orderSuccess.css";

const OrderSuccess = () => {

    return (

        <div className="success">

            <h1>✅</h1>

            <h2>
                Order Placed Successfully
            </h2>

            <p>
                Thank you for shopping with CameraShop.
            </p>

            <Link to="/orders">

                <button>

                    View My Orders

                </button>

            </Link>

        </div>

    );

};

export default OrderSuccess;