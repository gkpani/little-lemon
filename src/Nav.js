import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar">
            {/* Logo Container Section */}
            <div className="navbar-logo">
                <img 
                    src="/images/logo.png" 
                    alt="Little Lemon Logo" 
                    style={{ height: "50px", width: "auto" }} 
                />
            </div>

            {/* Navigation Links Menu List Section */}
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="/order-online">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
                
            </ul>
        </nav>
    );
}

export default Nav;