import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component should render with correct UI', () => {
  it('should render the component', () => {
    render(<App />);
    expect(screen.getByText('0')).toBeInTheDocument();
    const addButton = screen.getByText('Add 2');
    expect(addButton).toBeInTheDocument();

    const squareButton = screen.getByText('Square');
    expect(squareButton).toBeInTheDocument();

    const doubleButton = screen.getByText('Double');
    expect(doubleButton).toBeInTheDocument();

    const divideButton = screen.getByText('Divide by 2');
    expect(divideButton).toBeInTheDocument();

    const subractButton = screen.getByText('Subract 2');
    expect(subractButton).toBeInTheDocument();
  });
});

describe('Button should have the proper functions', () => {
  it('should add 2 to the number', () => {
    render(<App />);
    const addButton = screen.getByText('Add 2');
    fireEvent.click(addButton);
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('should square the number', () => {
    render(<App />);
    const squareButton = screen.getByText('Square');
    fireEvent.click(squareButton);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('should double the number', () => {
    render(<App />);
    const doubleButton = screen.getByText('Double');
    fireEvent.click(doubleButton);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('should divide the number by 2', () => {
    render(<App />);
    const divideButton = screen.getByText('Divide by 2');
    fireEvent.click(divideButton);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('should subract 2 from the number', () => {
    render(<App />);
    const subractButton = screen.getByText('Subract 2');
    fireEvent.click(subractButton);
    expect(screen.getByText('-2')).toBeInTheDocument();
  });
});

describe('Should perform calculation', () => {
  it('should add 2, square, double, divide by 2, and subract 2 from the number', () => {
    render(<App />);
    const addButton = screen.getByText('Add 2');
    fireEvent.click(addButton);
    expect(screen.getByText('2')).toBeInTheDocument();

    const squareButton = screen.getByText('Square');
    fireEvent.click(squareButton);
    expect(screen.getByText('4')).toBeInTheDocument();

    const doubleButton = screen.getByText('Double');
    fireEvent.click(doubleButton);
    expect(screen.getByText('8')).toBeInTheDocument();

    const divideButton = screen.getByText('Divide by 2');
    fireEvent.click(divideButton);
    expect(screen.getByText('4')).toBeInTheDocument();

    const subractButton = screen.getByText('Subract 2');
    fireEvent.click(subractButton);
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('should square , add 2 , double , add 2 , double ,  divide by 2', () => {
    render(<App />);
    const squareButton = screen.getByText('Square');
    fireEvent.click(squareButton);
    expect(screen.getByText('0')).toBeInTheDocument();

    const addButton = screen.getByText('Add 2');
    fireEvent.click(addButton);
    expect(screen.getByText('2')).toBeInTheDocument();

    const doubleButton = screen.getByText('Double');
    fireEvent.click(doubleButton);
    expect(screen.getByText('4')).toBeInTheDocument();

    const addButton2 = screen.getByText('Add 2');
    fireEvent.click(addButton2);
    expect(screen.getByText('6')).toBeInTheDocument();

    const doubleButton2 = screen.getByText('Double');
    fireEvent.click(doubleButton2);
    expect(screen.getByText('12')).toBeInTheDocument();

    const divideButton = screen.getByText('Divide by 2');
    fireEvent.click(divideButton);
    expect(screen.getByText('6')).toBeInTheDocument();
  });
});
