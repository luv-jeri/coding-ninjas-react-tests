import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import TodoItem from './TodoItem';
import todoData from './todoData';

describe('Should Render the all toto items', () => {
  test('Should render the todo items', () => {
    render(<App />);
    todoData.forEach((item) => {
      const todoItems = screen.getAllByText(item.text);
      expect(todoItems.length).toBeGreaterThanOrEqual(1);
    });
  });
});

describe('Should render the todo item with all props', () => {
  test('Should render the todo item', () => {
    const randomeTodoItem = todoData[Math.floor(Math.random() * todoData.length)];
    render(<TodoItem {...randomeTodoItem} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toBe(randomeTodoItem.completed);

    const label = screen.getByText(randomeTodoItem.text);
    expect(label).toBeInTheDocument();
  });
});

describe('Should check the todo item', () => {
  test('Should check the todo item', () => {
    const randomeTodoItem = todoData[Math.floor(Math.random() * todoData.length)];
    render(<TodoItem {...randomeTodoItem} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    const isChecked = checkbox.checked;
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(!isChecked);
  });
});
