import React from 'react';
import BookingForm from '../components/BookingForm'; // Back out of pages, look in components

function BookingPage({ availableTimes, dispatch }) {
    return (
        <main className="booking-page-container">
            <h1>Reserve a Table</h1>
            {/* Injecting the reusable component into the page container */}
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </main>
    );
}

export default BookingPage;