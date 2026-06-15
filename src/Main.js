import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; // Added useNavigate
import Homepage from './pages/HomePage';       
import BookingPage from './pages/BookingPage'; 
import ConfirmedBooking from './pages/ConfirmedBooking'; // Added Import
import UnderConstruction from './components/UnderConstruction';


export function initializeTimes() {
    const today = new Date();
    return window.fetchAPI ? window.fetchAPI(today) : ["17:00", "18:00", "19:00", "20:00"];
}

export function updateTimes(state, action) {
    switch (action.type) {
        case 'UPDATE_TIMES':
            const selectedDate = new Date(action.payload);
            return window.fetchAPI ? window.fetchAPI(selectedDate) : state;
        default:
            return state;
    }
}

function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const navigate = useNavigate(); // Initialize navigation controller hook

    // New API submission orchestration function
    function submitForm(formData) {
        if (window.submitAPI) {
            const isSuccess = window.submitAPI(formData);
            if (isSuccess) {
                navigate('/confirmed'); // Navigates via code to confirmation route
            }
            return isSuccess;
        } else {
            // Local sandbox fallback environment handling
            console.warn("Global API target missing. Running client routing simulation.");
            navigate('/confirmed');
            return true;
        }
    }

    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route 
                path="/booking" 
                element={
                    <BookingPage 
                        availableTimes={availableTimes} 
                        dispatch={dispatch} 
                        submitForm={submitForm} // Passing down the submission function
                    />
                } 
            />
            {/* Step 1 Route Target Confirmation Entry */}
            <Route path="/confirmed" element={<ConfirmedBooking />} />
            <Route path="/about" element={<UnderConstruction pageName="About Us" />} />
            <Route path="/menu" element={<UnderConstruction pageName="Our Menu" />} />
            <Route path="/order-online" element={<UnderConstruction pageName="Online Ordering" />} />
            <Route path="/login" element={<UnderConstruction pageName="Customer Login" />} />
        </Routes>
    );
}

export default Main;