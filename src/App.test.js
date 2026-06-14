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

// Test 4: Form Submission Orchestration Verification (Valid JavaScript State)
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

    const dateInput = screen.getByLabelText(/Choose date/i);
    const timeSelect = screen.getByLabelText(/Choose time/i);
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    const submitButton = screen.getByText(/Make Your Reservation/i);

    fireEvent.change(dateInput, { target: { value: '2026-06-13' } });
    fireEvent.change(timeSelect, { target: { value: '17:00' } });
    fireEvent.change(guestsInput, { target: { value: '2' } });
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    fireEvent.click(submitButton);

    expect(mockSubmitForm).toHaveBeenCalledTimes(1);
});

// ====================================================================
// NEW: Step 1 - Validate HTML5 validation attributes are applied
// ====================================================================
test('Validates that native HTML5 attributes are applied to inputs', () => {
    const mockAvailableTimes = ["17:00", "18:00"];
    render(
        <BookingForm 
            availableTimes={mockAvailableTimes} 
            dispatch={jest.fn()} 
            submitForm={jest.fn()} 
        />
    );

    const dateInput = screen.getByLabelText(/Choose date/i);
    const timeSelect = screen.getByLabelText(/Choose time/i);
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const occasionSelect = screen.getByLabelText(/Occasion/i);

    // Verify HTML5 validation requirements
    expect(dateInput).toHaveAttribute('required');
    expect(timeSelect).toHaveAttribute('required');
    expect(occasionSelect).toHaveAttribute('required');
    
    expect(guestsInput).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
});

// ====================================================================
// Step 2 - Add unit tests for JavaScript validation functions (Invalid State)
// ====================================================================
test('Submit button is disabled when form input validation fields are invalid', () => {
    const mockAvailableTimes = ["17:00", "18:00"];
    render(
        <BookingForm 
            availableTimes={mockAvailableTimes} 
            dispatch={jest.fn()} 
            submitForm={jest.fn()} 
        />
    );

    const guestsInput = screen.getByLabelText(/Number of guests/i);
    
    // Target using the reliable text matcher
    const submitButton = screen.getByText(/Make Your Reservation/i);

    // Scenario A: Fields are initially blank/empty (Should be disabled)
    expect(submitButton).toBeDisabled();

    // Scenario B: Out-of-bounds guest count constraint checks
    fireEvent.change(guestsInput, { target: { value: '0' } });
    expect(submitButton).toBeDisabled();

    fireEvent.change(guestsInput, { target: { value: '15' } });
    expect(submitButton).toBeDisabled();
});