import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Form from '../components/Form';
import '@testing-library/jest-dom';



test('updates input fields correctly', () => {
    render(<Form />);
    const inputs = screen.getAllByPlaceholderText('Enter URL');
  
    fireEvent.change(inputs[0], { target: { value: 'https://example.com' } });
    fireEvent.change(inputs[1], { target: { value: 'https://test.com' } });
    fireEvent.change(inputs[2], { target: { value: 'https://another.com' } });
  
    expect(inputs[0].value).toBe('https://example.com');
    expect(inputs[1].value).toBe('https://test.com');
    expect(inputs[2].value).toBe('https://another.com');
  });
  
  test('submit button is disabled when at least one field is empty', () => {
    render(<Form />);
    
    const inputs = screen.getAllByPlaceholderText('Enter URL');
    const submitButton = screen.getByText('Submit');
    
    // Initially all fields are empty, so the button should be disabled
    expect(submitButton).toBeDisabled();
    
    // If at least one field is filled, the button should remain disabled
    fireEvent.change(inputs[0], { target: { value: 'https://example.com' } });
    expect(submitButton).toBeDisabled();
    
    // Fill all fields, the button should be enabled
    fireEvent.change(inputs[1], { target: { value: 'https://test.com' } });
    fireEvent.change(inputs[2], { target: { value: 'https://another.com' } });
    expect(submitButton).toBeEnabled();
  });
  