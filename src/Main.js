import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/HomePage';       // Fixed: Capitalized 'P' to match your disk
import BookingPage from './pages/BookingPage'; // Points to src/pages/BookingPage.js

// 1. Create the function that determines the initial times
export function initializeTimes() {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

// 2. Create the reducer function to handle updating the times array
export function updateTimes(state, action) {
    switch (action.type) {
        case 'UPDATE_TIMES':
            // For now, it returns the same static array regardless of the selected date.
            return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        default:
            return state;
    }
}

function Main() {
    // 3. Initialize the useReducer hook
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return (
        <Routes>
            {/* Main landing route */}
            <Route path="/" element={<Homepage />} />
            
            {/* Table booking route passing state and dispatch to the page wrapper */}
            <Route 
                path="/booking" 
                element={
                    <BookingPage 
                        availableTimes={availableTimes} 
                        dispatch={dispatch} 
                    />
                } 
            />
        </Routes>
    );
}

export default Main;
