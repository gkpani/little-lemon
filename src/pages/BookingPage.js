import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/BookingForm';

function BookingPage({ 
    availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"], 
    dispatch, 
    submitForm 
}) {
    const navigate = useNavigate();

    // Safely intercept or handle the submission sequence
    const handleFormSubmit = (formData) => {
        if (typeof submitForm === 'function') {
            const success = submitForm(formData);
            if (success) {
                navigate('/confirmed');
            }
        } else {
            // 🚀 Fallback: If no function prop was provided by Main.js,
            // log the data cleanly and navigate directly to your ConfirmedBooking screen!
            console.log("Form submitted successfully:", formData);
            navigate('/confirmed');
        }
    };

    return (
        <main>
            <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Reserve a Table</h1>
            <BookingForm 
                availableTimes={availableTimes} 
                dispatch={dispatch} 
                submitForm={handleFormSubmit} // Passes down the protected submission route
            />
        </main>
    );
}

export default BookingPage;