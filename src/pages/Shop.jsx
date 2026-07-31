import { useState } from "react";
import FeaturedProducts from "../components/FeaturedProducts";
import "../styles/shop.css";

const Shop = ({ search }) => {

    const [category, setCategory] = useState("All");
    const [sortBy, setSortBy] = useState("default");

    return (

        <div className="shop">

            <h2>Shop</h2>

            <div className="filters">

                <div className="filter-group">

                    <label>Category : </label>

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="DSLR">DSLR</option>
                        <option value="Mirrorless">Mirrorless</option>
                        <option value="Action Camera">Action Camera</option>
                    </select>

                </div>

                <div className="filter-group">

                    <label>Sort By : </label>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="default">Default</option>
                        <option value="lowToHigh">Price: Low → High</option>
                        <option value="highToLow">Price: High → Low</option>
                        <option value="rating">Rating: High → Low</option>
                    </select>

                </div>

            </div>

            <FeaturedProducts
                search={search}
                category={category}
                sortBy={sortBy}
            />

        </div>

    );

};

export default Shop;