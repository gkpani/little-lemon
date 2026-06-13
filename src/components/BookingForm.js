import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) { // Added submitForm destructuring
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const handleSubmit = (e) => {
        e.preventDefault(); // Lock screen against standard browser refreshes

        // Construct object parameters to reflect state choices
        const formData = {
            date: date,
            time: time,
            guests: guests,
            occasion: occasion
        };

        // Call the submission action passed through component props
        submitForm(formData); 
    };
    
     

    return (
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input 
                type="date" 
                id="res-date" 
                value={date} 
                onChange={(e) => {
                    setDate(e.target.value);
                    // This triggers the reducer to call fetchAPI with the new date!
                    dispatch({ type: 'UPDATE_TIMES', payload: e.target.value });
                }} 
                required 
            />



            
            <label htmlFor="res-time">Choose time</label>
            <select 
                id="res-time" 
                value={time} 
                onChange={(e) => setTime(e.target.value)}
                required
            >
                <option value="" disabled>Select a time</option>
                {/* Dynamically reading from props now instead of local state! */}
                {availableTimes.map((timeOption) => (
                    <option key={timeOption} value={timeOption}>
                        {timeOption}
                    </option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input 
                type="number" 
                placeholder="1" 
                min="1" 
                max="10" 
                id="guests" 
                value={guests} 
                onChange={(e) => setGuests(e.target.value)}
                required 
            />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <input type="submit" value="Make Your Reservation" aria-label="On Click" />
        </form>
    );
}

export default BookingForm;


