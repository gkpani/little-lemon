import React from 'react';
import { Link } from 'react-router-dom';

function UnderConstruction({ pageName }) {
    return (
        <div style={{
            textAlign: 'center',
            padding: '100px 20px',
            minHeight: '60vh',
            backgroundColor: '#EDEFEE',
            color: '#495E57'
        }}>
            <h1 style={{ color: '#F4CE14', fontSize: '3rem', marginBottom: '10px' }}>Coming Soon!</h1>
            <h2>The {pageName} Section is under development.</h2>
            <p style={{ margin: '20px auto', maxWidth: '500px', fontSize: '1.1rem' }}>
                We are currently cooking up something delicious based on our high-fidelity design prototypes. 
                In the meantime, feel free to try out our fully operational table reservation system!
            </p>
            <Link to="/booking">
                <button style={{
                    backgroundColor: '#F4CE14',
                    color: '#495E57',
                    border: 'none',
                    padding: '12px 24px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginTop: '20px'
                }}>
                    Reserve a Table Now
                </button>
            </Link>
        </div>
    );
}

export default UnderConstruction;