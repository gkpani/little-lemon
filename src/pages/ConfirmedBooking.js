import React from 'react';
import { Link } from 'react-router-dom';

function ConfirmedBooking() {
    return (
        // FIXED: Changed maxWidth from '60px' to '600px' so text layout stretches normally
        <div style={{ textAlign: 'center', padding: '60px 20px', maxWidth: '600px', margin: '0 auto' }}>
            <h1 style={{ color: '#F4CE14', fontSize: '2.5rem' }}>Booking Confirmed!</h1>
            <p style={{ fontSize: '1.2rem', margin: '20px 0', color: '#333333' }}>
                Thank you for choosing Little Lemon. Your table reservation has been successfully verified and locked in.
            </p>
            <p style={{ fontSize: '1rem', color: '#666666' }}>
                A confirmation summary has been dispatched to your provided contact details.
            </p>
            <Link 
                to="/" 
                style={{
                    display: 'inline-block',
                    backgroundColor: '#495E57',
                    color: '#FFFFFF',
                    padding: '12px 24px',
                    borderRadius: '16px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    marginTop: '30px'
                }}
            >
                Return Home
            </Link>
        </div>
    );
}

export default ConfirmedBooking;