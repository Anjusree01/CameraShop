import dslr from "../assets/categories/dslr.jpg";
import mirrorless from "../assets/categories/mirrorless.jpg";
import lens from "../assets/categories/lens.jpg";
import accessories from "../assets/categories/accessories.jpg";
import "../styles/categories.css";

const categories = [
    {
        id: 1,
        title: "DSLR Cameras",
        image: dslr,
    },
    {
        id: 2,
        title: "Mirrorless Cameras",
        image: mirrorless,
    },
    {
        id: 3,
        title: "Camera Lenses",
        image: lens,
    },
    {
        id: 4,
        title: "Accessories",
        image: accessories,
    },
];

const Categories = () => {

    return (

        <section className="categories">

            <h2>Shop by Category</h2>

            <div className="categories-container">

                {categories.map((category) => (

                    <div
                        key={category.id}
                        className="category-card"
                    >

                        <img
                            src={category.image}
                            alt={category.title}
                        />

                        <h3>{category.title}</h3>

                    </div>

                ))}

            </div>

        </section>

    );

};

export default Categories;