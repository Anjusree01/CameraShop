import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-left">
        <h1>Capture Every Moment</h1>

        <p>
          Discover the latest cameras, lenses and accessories
          at the best prices.
        </p>

        <button className="shop-btn">Shop Now</button>
      </div>

      <div className="hero-right">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800"
          alt="Camera"
        />
      </div>

    </section>
  );
};

export default Hero;