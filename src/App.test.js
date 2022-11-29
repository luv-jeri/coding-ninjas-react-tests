import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import countReducer from './reducer';
import * as redux from 'react-redux';

afterEach(() => {
  cleanup();
});

const store = createStore(countReducer);

describe('should render App component', () => {
  test('renders App component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const count = screen.getByText(/count/i);
    expect(count).toBeInTheDocument();

    const increment = screen.getByText('+');
    expect(increment).toBeInTheDocument();

    const decrement = screen.getByText('-');
    expect(decrement).toBeInTheDocument();
  });
});

describe('should change count', () => {
  test('should increment count', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const increment = screen.getByText('+');
    expect(increment).toBeInTheDocument();

    fireEvent.click(increment);
    const count = screen.getByText(/count/i);
    expect(count).toHaveTextContent('1');
  });

  test('should decrement count', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const decrement = screen.getByText('-');
    expect(decrement).toBeInTheDocument();

    fireEvent.click(decrement);
    const count = screen.getByText(/count/i);
    expect(count).toHaveTextContent('0');
  });
});

describe('should have called dispatch', () => {
  test('should have called dispatch', () => {
    const spyStore = jest.spyOn(store, 'dispatch');
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const increment = screen.getByText('+');
    expect(increment).toBeInTheDocument();

    fireEvent.click(increment);
    expect(spyStore).toHaveBeenCalledWith({ type: 'INCREMENT' });
  });
});
