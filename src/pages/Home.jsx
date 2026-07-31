import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";

const Home = ({ search }) => {

    return (
        <>

            <Hero />
            
            <Categories />

            <FeaturedProducts search={search}/>

        </>
    );
};

export default Home;