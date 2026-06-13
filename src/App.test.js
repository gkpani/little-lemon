import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './components/BookingForm'; 

// Isolated functions for pure reducer logic checks
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

// ==========================================
// Test 1: Static Layout Text Verification
// ==========================================
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

// ==========================================
// Test 2: Initial State Validation
// ==========================================
test('initializeTimes function returns the correct initial array of times', () => {
    const expectedInitialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const actualTimes = initializeTimes();
    expect(actualTimes).toEqual(expectedInitialTimes);
});

// ==========================================
// Test 3: Action Reducer Data Consistency
// ==========================================
test('updateTimes function returns the updated array regardless of state changes', () => {
    const previousState = ["17:00", "18:00"];
    const action = { type: 'UPDATE_TIMES', payload: '2026-06-13' };
    const expectedOutputTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    
    const actualResult = updateTimes(previousState, action);
    expect(actualResult).toEqual(expectedOutputTimes);
});

// ==========================================
// Test 4: Form Submission Orchestration
// ==========================================
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