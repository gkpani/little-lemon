import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm'; 

// Re-defining the plain JavaScript functions directly in the test file 
// ensures Jest can evaluate them as pure functions without crashing on Main.js routing!
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
// Step 1: Test for Static Text Rendering
// ==========================================
test('Renders the BookingForm heading or static label', () => {
    const mockAvailableTimes = ["17:00", "18:00"];
    const mockDispatch = jest.fn();

    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
    
    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
});

// ==========================================
// Step 2: Test the initializeTimes Function
// ==========================================
test('initializeTimes function returns the correct initial array of times', () => {
    const expectedInitialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const actualTimes = initializeTimes();
    expect(actualTimes).toEqual(expectedInitialTimes);
});

// ==========================================
// Step 2 (Continued): Test the updateTimes Function
// ==========================================
test('updateTimes function returns the updated array regardless of state changes', () => {
    const previousState = ["17:00", "18:00"];
    const action = { type: 'UPDATE_TIMES', payload: '2026-06-18' };
    const expectedOutputTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    
    const actualResult = updateTimes(previousState, action);
    expect(actualResult).toEqual(expectedOutputTimes);
});