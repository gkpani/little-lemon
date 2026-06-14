import React, { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
    // 1. Establish state hooks for each form field input
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");

    // 2. Handle Date changes and pass them to the dispatch reducer
    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        if (dispatch) {
            dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
        }
    };

    // 3. React Client-side Validation: Evaluate form completion criteria
    // Form is considered valid if:
    // - Date is picked
    // - Time is chosen
    // - Guests count is between 1 and 10
    // - Occasion is selected
    const isFormValid = () => {
        return (
            date !== "" &&
            time !== "" &&
            guests >= 1 &&
            guests <= 10 &&
            occasion !== ""
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            submitForm({ date, time, guests, occasion });
        }
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
            aria-label="Booking Form"
        >
            {/* Date Input Field */}
            <label htmlFor="res-date">Choose date</label>
            <input 
                type="date" 
                id="res-date" 
                value={date} 
                onChange={handleDateChange} 
                required // HTML5 Validation
            />

            {/* Time Select Field */}
            <label htmlFor="res-time">Choose time</label>
            <select 
                id="res-time" 
                value={time} 
                onChange={(e) => setTime(e.target.value)}
                required // HTML5 Validation
            >
                <option value="">Select a time</option>
                {availableTimes.map((availableTime) => (
                    <option key={availableTime} value={availableTime}>
                        {availableTime}
                    </option>
                ))}
            </select>

            {/* Guests Count Input Field */}
            <label htmlFor="guests">Number of guests</label>
            <input 
                type="number" 
                placeholder="1" 
                min="1"    // HTML5 Validation: Minimum boundary
                max="10"   // HTML5 Validation: Maximum boundary
                id="guests" 
                value={guests} 
                onChange={(e) => setGuests(parseInt(e.target.value) || 0)}
                required // HTML5 Validation
            />

            {/* Occasion Select Field */}
            <label htmlFor="occasion">Occasion</label>
            <select 
                id="occasion" 
                value={occasion} 
                onChange={(e) => setOccasion(e.target.value)}
                required // HTML5 Validation
            >
                <option value="">Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            {/* Submit Button - Disabled via React State validation until rules pass */}
            <input 
                type="submit" 
                value="Make Your Reservation" 
                disabled={!isFormValid()} 
                aria-label="On Click"
                style={{
                    backgroundColor: isFormValid() ? "#F4CE14" : "#CCCCCC",
                    cursor: isFormValid() ? "pointer" : "not-allowed"
                }}
            />
        </form>
    );
}

export default BookingForm;
