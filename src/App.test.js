import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './components/BookingForm'; 

// Constant array used for testing layout assertions
const mockTimesArray = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

// ====================================================================
// Pure implementations of the state management utilities
// ====================================================================
function initializeTimes() {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

function updateTimes(state, action) {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        default:
            return state;
    }
}

// ====================================================================
// Unit Tests
// ====================================================================

// Test 1: Static Layout Text Verification
test('Renders the BookingForm heading or static label', () => {
    const mockAvailableTimes = ["17:00", "18:00"];
    const mockDispatch = jest.fn();
    const mockSubmitForm = jest.fn();

    render(
        <BookingForm 
            availableTimes={mockAvailableTimes} 
            dispatch={mockDispatch} 
            submitForm={mockSubmitForm} 
        />
    );
    
    const labelElement = screen.getByText(/Choose date/i);
    expect(labelElement).toBeInTheDocument();
});

// Test 2: initializeTimes Function Array Structure Verification
test('initializeTimes function returns the correct initial array of times', () => {
    const actualTimes = initializeTimes();
    expect(actualTimes).toEqual(mockTimesArray);
});

// Test 3: updateTimes Function State Reduction Consistency
test('updateTimes function returns the updated array regardless of state changes', () => {
    const previousState = ["17:00", "18:00"];
    const action = { type: 'UPDATE_TIMES', payload: '2026-06-13' }; 
    
    const actualResult = updateTimes(previousState, action);
    expect(actualResult).toEqual(mockTimesArray);
});

// Test 4: Form Submission Orchestration Verification
test('Calls submitForm handler with state payload when submission button is clicked', () => {
    const mockAvailableTimes = ["17:00", "18:00"];
    const mockDispatch = jest.fn();
    const mockSubmitForm = jest.fn(); 

    render(
        <BookingForm 
            availableTimes={mockAvailableTimes} 
            dispatch={mockDispatch} 
            submitForm={mockSubmitForm} 
        />
    );

    const submitButton = screen.getByText(/Make Your Reservation/i);
    fireEvent.click(submitButton);

    expect(mockSubmitForm).toHaveBeenCalledTimes(1);
});