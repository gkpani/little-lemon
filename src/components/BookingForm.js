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

    // 1. Define error state blocks
    const [errors, setErrors] = useState({
        date: "",
        guests: ""
    });

    // 2. Validate field inputs on blur or change
    const handleGuestChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setGuests(value);

        if (value < 1 || value > 10) {
            setErrors(prev => ({
                ...prev,
                guests: "Party size must be between 1 and 10 guests for online reservations."
            }));
        } else {
            setErrors(prev => ({ ...prev, guests: "" }));
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

        // Validate the guest range using whatever your state variable is named (e.g., guests)
        if (guests < 1 || guests > 10) {
            return; 
        }

        // Create the object right here so the compiler knows what 'formData' is
        const formData = {
            date,
            time,
            guests, // or guestCount, matching your state
            occasion
        };

        // Call submitForm directly because it's destructured! No 'props.' needed.
        submitForm(formData); 
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

        <div className="form-group">
            <label htmlFor="guests">Number of Guests</label>
            <input
                id="guests"
                type="number"
                value={guests}
                onChange={handleGuestChange}
                min="1"
                max="10"
                required
                aria-invalid={errors.guests ? "true" : "false"}
                aria-describedby="guests-error"
                className={errors.guests ? "input-field error-border" : "input-field"}
            />
            {/* Plain language message rendered safely when state exists */}
            {errors.guests && (
                <p id="guests-error" className="error-message" role="alert">
                    {errors.guests}
                </p>
            )}
        </div>
            {/* Add this block right below your guest input tag to satisfy Heuristics 5 & 9 */}
            {guests > 10 && (
                <p 
                    style={{ color: "#FF4D4D", fontSize: "14px", marginTop: "5px" }} role="alert" >
                    * Online booking is limited to 10 guests. For larger parties, please contact us at (555) 123-4567.
                </p>
            )}


            
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
