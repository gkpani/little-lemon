import React from 'react';

function Chicago() {
    return (
        <section id="about" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '60px 10vw', backgroundColor: '#EDEFEE', color: '#495E57' }}>
            <div className="about-content" style={{ maxWidth: '50%' }}>
                <h1 style={{ fontSize: '2.8rem', color: '#F4CE14', margin: 0 }}>Little Lemon Chicago</h1>
                <h2 style={{ fontSize: '1.5rem', marginTop: 0 }}>Our Story</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                    Little Lemon was founded by two Italian chefs and brothers, Mario and Adrian, who moved to Chicago to share their grandmother's traditional Mediterranean recipes with a modern flavor flare.
                </p>
            </div>
            
            {/* ✅ Added Mario and Adrian's Image from public directory */}
            <div className="about-image-container">
                <img 
                    src={process.env.PUBLIC_URL + '/images/Mario_Adrian.jpg'} 
                    alt="Mario and Adrian cooking at Little Lemon" 
                    style={{ width: '400px', height: '300px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 4px 8px rgba(0,0,0,0.15)' }}
                />
            </div>
        </section>
    );
}

export default Chicago;