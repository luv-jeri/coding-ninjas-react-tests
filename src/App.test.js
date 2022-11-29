import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import App from './App';
import store from './store';

afterEach(cleanup);

const spy = jest.spyOn(console, 'log');

describe('Should increase count', () => {
  it('Should increase count when increase button is clicked', () => {
    render(<App store={store} />);

    const increaseButton = screen.getByText('+');
    expect(increaseButton).toBeInTheDocument();

    const count = screen.getByText(/count/i);
    expect(count).toBeInTheDocument();

    fireEvent.click(increaseButton);
    expect(count.textContent).toBe('Count: 1');
  });
});

describe('Should log actions', () => {
  it('calls console.log when increase button is clicked', () => {
    render(<App store={store} />);

    const increaseButton = screen.getByText('+');
    expect(increaseButton).toBeInTheDocument();

    fireEvent.click(increaseButton);
    expect(spy).toHaveBeenCalledWith('ADD_COUNT');
  });

  it('calls console.log when decrease button is clicked', () => {
    render(<App store={store} />);
    
    const decreaseButton = screen.getByText('-');
    expect(decreaseButton).toBeInTheDocument();

    fireEvent.click(decreaseButton);
    expect(spy).toHaveBeenCalledWith('SUBSTRACT_COUNT');
  });
});

describe('Should not decrease count', () => {
  it('Should not decrease count when decrease button is clicked', () => {
    render(<App store={store} />);

    const decreaseButton = screen.getByText('-');
    const count = screen.getByText(/count/i);
    count.textContent = 'Count: 0';

    fireEvent.click(decreaseButton);
    fireEvent.click(decreaseButton);

    expect(count.textContent).toBe('Count: 0');
  });
});
