import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/HomePage';       
import BookingPage from './pages/BookingPage'; 

// 1. Updated: Use fetchAPI to get actual times for today's date
export function initializeTimes() {
    const today = new Date();
    // window.fetchAPI is used because the script is loaded globally via index.html
    return window.fetchAPI ? window.fetchAPI(today) : ["17:00", "18:00", "19:00", "20:00"];
}

// 2. Updated: Fetch new times whenever the user changes the date
export function updateTimes(state, action) {
    switch (action.type) {
        case 'UPDATE_TIMES':
            // action.payload must be a Date object or string parsed by fetchAPI
            const selectedDate = new Date(action.payload);
            return window.fetchAPI ? window.fetchAPI(selectedDate) : state;
        default:
            return state;
    }
}

function Main() {
    // The useReducer setup remains identical, but now handles dynamic API arrays
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
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