import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "../styles/productDetails.css";

const ProductDetails = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {

        fetch(`http://localhost:5000/Cameras/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
            })
            .catch((error) => console.log(error));

    }, [id]);

    if (!product) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="product-details">

            <div className="left">

                <img
                    src={product.image}
                    alt={product.name}
                />

            </div>

            <div className="right">

                <h2>{product.name}</h2>

                <h3>{product.brand}</h3>

                <p>{product.category}</p>

                <h4>₹ {product.price.toLocaleString()}</h4>

                <p>{product.description}</p>

                <p>⭐ {product.rating}</p>

                <button onClick={() => dispatch(addToCart(product))}>
                Add to Cart
                </button>

            </div>

        </div>
    );
}

export default ProductDetails;