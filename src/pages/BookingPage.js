import React from 'react';
import BookingForm from '../components/BookingForm';

// Destructure submitForm alongside availableTimes and dispatch
function BookingPage({ availableTimes, dispatch, submitForm }) {
    return (
        <main>
            <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Reserve a Table</h1>
            <BookingForm 
                availableTimes={availableTimes} 
                dispatch={dispatch} 
                submitForm={submitForm} // Hand off property safely
            />
        </main>
    );
}

export default BookingPage;