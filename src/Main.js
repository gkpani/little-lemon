import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Step UP one folder level (..) to find the pages directory
import HomePage from './pages/HomePage'; 
import BookingPage from './pages/BookingPage'; 

// Look inside the CURRENT folder (.) to find your sibling components
import ConfirmedBooking from './pages/ConfirmedBooking'; 
import UnderConstruction from './components/UnderConstruction'; 

function Main() {
    return (
        <main>
            <Routes>
                {/* 🏠 Homepage Route */}
                <Route path="/" element={<HomePage />} />
                
                {/* 📅 Booking & Confirmation Routes */}
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
                
                {/* 🚧 In-Progress Placeholder Routes */}
                <Route path="/about" element={<UnderConstruction pageName="About Us" />} />
                <Route path="/menu" element={<UnderConstruction pageName="Our Menu" />} />
                <Route path="/order-online" element={<UnderConstruction pageName="Online Ordering" />} />
                <Route path="/login" element={<UnderConstruction pageName="Customer Login" />} />
            </Routes>
        </main>
    );
}

export default Main;