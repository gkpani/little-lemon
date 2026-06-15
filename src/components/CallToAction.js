import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="hero">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>
        We are a family-owned Mediterranean restaurant,
        focused on traditional recipes served with a modern twist.
      </p>
      {/* ✅ Wrap your original styled button tag inside the React Router Link */}
      <Link to="/booking" style={{ textDecoration: 'none' }}>
        <button className="reserve-btn">
          Reserve a Table
        </button>
      </Link>


          </section>
  );
}

export default CallToAction;