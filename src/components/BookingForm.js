import React, { useState } from 'react';

// Accept availableTimes and dispatch from props instead of maintaining locally
function BookingForm({ availableTimes, dispatch }) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    // Handle the date change event
    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        
        // Step 2: Dispatch the state change when the date form field is changed
        dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents page reload
    
    // 1. Optional: See your data in the inspect tool console
        console.log("Reservation Details:", { date, time, guests, occasion });
    
    // 2. Fixed Alert: Use backticks (`) instead of quotes to inject state data dynamically!
        alert(`Reservation confirmed successfully!\n\nDetails:\n📅 Date: ${date}\n⏰ Time: ${time}\n👥 Guests: ${guests}\n🎉 Occasion: ${occasion}`);
    };

  

    return (
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input 
                type="date" 
                id="res-date" 
                value={date} 
                onChange={handleDateChange} // Linked to our updated function above
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


