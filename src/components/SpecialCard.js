import React from 'react';

function SpecialCard({ image, title, price, description }) {
    return (
        <article className="special-card">
            <img src={image} alt={title} className="special-img" />
            <div className="special-card-header">
                <h3>{title}</h3>
                <span className="price">${price}</span>
            </div>
            <p>{description}</p>
            <button className="order-delivery-btn">
                Order a delivery <span>🚴</span>
            </button>
        </article>
    );
}

export default SpecialCard;