import React from 'react';
import SpecialCard from './SpecialCard';

// Sample data array representing items from your design
const specialsData = [
    {
        id: 1,
        title: "Greek Salad",
        price: "12.99",
        image: "/assets/greek-salad.jpg",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
        id: 2,
        title: "Bruchetta",
        price: "5.99",
        image: "/assets/bruchetta.svg",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
    },
    {
        id: 3,
        title: "Lemon Dessert",
        price: "5.00",
        image: "/assets/lemon-dessert.jpg",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    }
];

function Specials() {
    return (
        <section className="specials-section">
            <div className="specials-top-bar">
                <h2>This Week's Specials!</h2>
                <button className="menu-btn">Online Menu</button>
            </div>
            
            <div className="specials-grid">
                {specialsData.map((item) => (
                    <SpecialCard 
                        key={item.id} // Essential for React rendering performance
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default Specials;