import { render, screen } from '@testing-library/react';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import appReducer from './reducer';

const logger = ({ dispatch, getState }) => {
  return (next) => {
    return (action) => {
      console.log('Action Type', action.type);
      next(action);
    };
  };
};

const store = createStore(appReducer, applyMiddleware(logger));

test('renders learn react link', () => {
  render(<App store={store} />);
});

describe('calls console.log', () => {
  it('calls console.log when increase button is clicked', () => {
    const spy = jest.spyOn(console, 'log');
    render(<App store={store} />);
    const increaseButton = screen.getByText('+');
    increaseButton.click();
    expect(spy).toHaveBeenCalledWith('Action Type', 'ADD_COUNT');
  });

  it('calls console.log when decrease button is clicked', () => {
    const spy = jest.spyOn(console, 'log');
    render(<App store={store} />);
    const decreaseButton = screen.getByText('-');
    decreaseButton.click();
    expect(spy).toHaveBeenCalledWith('Action Type', 'SUBSTRACT_COUNT');
  });
});
