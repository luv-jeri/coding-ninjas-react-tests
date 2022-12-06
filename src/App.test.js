import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Counter from './Counter';
import React from 'react';

describe('App should render with cound 0 and buttons', () => {
  test('renders App', () => {
    render(<App />);
    const linkElement = screen.getByText(/0/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('renders Counter', () => {
    render(<Counter />);
    const linkElement = screen.getByText(/0/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('renders Counter buttons', () => {
    render(<Counter />);
    const resetButton = screen.getByText(/Reset/i);
    const plusButton = screen.getByText(/Plus/i);
    const minusButton = screen.getByText(/Minus/i);
    expect(resetButton).toBeInTheDocument();
    expect(plusButton).toBeInTheDocument();
    expect(minusButton).toBeInTheDocument();
  });
});

describe('Counter should increment, decrement and reset', () => {
  test('Counter should increment', () => {
    render(<Counter />);
    const plusButton = screen.getByText(/Plus/i);
    fireEvent.click(plusButton);
    const linkElement = screen.getByText(/1/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('Counter should decrement', () => {
    render(<Counter />);
    const minusButton = screen.getByText(/Minus/i);
    fireEvent.click(minusButton);
    const linkElement = screen.getByText(/-1/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('Counter should reset', () => {
    render(<Counter />);
    const resetButton = screen.getByText(/Reset/i);
    fireEvent.click(resetButton);
    const linkElement = screen.getByText(/0/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe('Should log the value of count on the console', () => {
  test('Counter should log the value of count on the console', () => {
    const spy = jest.spyOn(console, 'log');
    render(<Counter />);
    const plusButton = screen.getByText(/Plus/i);
    fireEvent.click(plusButton);
    expect(spy).toHaveBeenCalledWith(1);
  });
});

describe('Should have used useState and useEffect hooks', () => {
  test('Counter should have used useState and useEffect hooks', () => {
    const spy = jest.spyOn(React, 'useState');
    const spy2 = jest.spyOn(React, 'useEffect');
    render(<Counter />);
    expect(spy).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  });
});
