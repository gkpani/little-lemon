import React from 'react';
import { Link } from 'react-router-dom';

function SpecialCard({ image, title, price, description }) {
    return (
        <article className="special-card">
            <img src={image} alt={title} className="special-img" />
            <div className="special-card-header">
                <h3>{title}</h3>
                <span className="price">${price}</span>
            </div>
            <p>{description}</p>

            <Link to="/order-online" style={{ textDecoration: 'none', color: 'inherit' }}>
                <button className="delivery-btn" style={{ cursor: 'pointer' }}>
                    Order a delivery 🚴
                </button>
            </Link>

           
        </article>
    );
}

export default SpecialCard;