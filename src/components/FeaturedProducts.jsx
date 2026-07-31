import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import { addToWishlist } from "../redux/wishlistSlice";
import { useSelector, useDispatch } from "react-redux";
import "../styles/featuredProducts.css";

const FeaturedProducts = ({
    search = "",
    category = "All",
    sortBy = "default"
}) => {

    const [products, setProducts] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {

        fetch("https://camerashop-o9sj.onrender.com/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    const filteredProducts = products.filter((product) => {

        const matchesSearch =
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.brand.toLowerCase().includes(search.toLowerCase());

        const matchesCategory =
            category === "All" ||
            product.category === category;

        return matchesSearch && matchesCategory;

    });

    const sortedProducts = [...filteredProducts];

    if (sortBy === "lowToHigh") {

        sortedProducts.sort((a, b) => a.price - b.price);

    }
    else if (sortBy === "highToLow") {

        sortedProducts.sort((a, b) => b.price - a.price);

    }
    else if (sortBy === "rating") {

        sortedProducts.sort((a, b) => b.rating - a.rating);

    }
    const wishlistItems = useSelector(
    (state) => state.wishlist.wishlist
);

    return (

        <section className="featured-products">

            <h2>Featured Products</h2>

            <div className="product-container">

                                {sortedProducts.map((product) => (

                    <div
                        className="product-card"
                        key={product.id}
                    >

                        <Link
                            to={`/product/${product.id}`}
                            className="product-link"
                        >

                            <img
                                src={product.image}
                                alt={product.name}
                            />

                            <h3>{product.name}</h3>

                            <p>{product.brand}</p>

                            <p>{product.category}</p>

                            <h4>
                                ₹ {product.price.toLocaleString()}
                            </h4>

                        </Link>

                        <div className="product-actions">

    <button
        className="cart-btn"
        onClick={() => dispatch(addToCart(product))}
    >
        Add to Cart
    </button>

    <button
        className="heart-btn"
        onClick={() => {

            const exists = wishlistItems.find(
                (item) => item.id === product.id
            );

            if (exists) {
                dispatch(removeFromWishlist(product.id));
            } else {
                dispatch(addToWishlist(product));
            }

        }}
    >

        {
            wishlistItems.find(
                (item) => item.id === product.id
            )
                ? "❤️"
                : "♡"
        }

    </button>

</div>
                    </div>

                ))}

            </div>

        </section>

    );

};

export default FeaturedProducts;