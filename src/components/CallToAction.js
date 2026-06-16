import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction() {
    return (
        <section className="hero-section" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '40px 10vw', backgroundColor: '#495E57', color: '#EDEFEE' }}>
            <div className="hero-content" style={{ maxWidth: '50%' }}>
                <h1 style={{ color: '#F4CE14', fontSize: '3rem', margin: 0 }}>Little Lemon</h1>
                <h2 style={{ color: '#EDEFEE', fontSize: '1.8rem', marginTop: '0' }}>Chicago</h2>
                <p style={{ fontSize: '1.1rem', margin: '20px 0' }}>
                    We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <Link to="/booking" style={{ textDecoration: 'none' }}>
                    <button className="reserve-btn" style={{ backgroundColor: '#F4CE14', color: '#495E57', border: 'none', padding: '12px 24px', fontSize: '1rem', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer' }}>
                        Reserve a Table
                    </button>
                </Link>
            </div>
            
            {/* ✅ Added the Restaurant Image from public directory */}
            <div className="hero-image-container">
                <img 
                    src={process.env.PUBLIC_URL + '/images/restaurant.jpg'} 
                    alt="Little Lemon Restaurant patio" 
                    style={{ width: '350px', height: '400px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
                />
            </div>
        </section>
    );
}

export default CallToAction;