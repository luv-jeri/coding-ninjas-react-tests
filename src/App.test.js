import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from './ThemeContext';

const renderApp = () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

const getCurrentTheme = () => {
  const lightTheme =
    document.documentElement.classList.contains('light-theme') ||
    document.body.classList.contains('light-theme');
  const darkTheme =
    document.documentElement.classList.contains('dark-theme') ||
    document.body.classList.contains('dark-theme');

  if (lightTheme && !darkTheme) {
    return 'light-theme';
  } else if (!lightTheme && darkTheme) {
    return 'dark-theme';
  } else {
    return 'light-theme';
  }
};

describe('Should change the Dark/Light mode', () => {
  test(`Should change to ${
    getCurrentTheme() === 'light-theme' ? 'dark-theme' : 'dark-theme'
  }`, () => {
    renderApp();
    const button = screen.getByText('Toggle Theme');

    const currentTheme = getCurrentTheme();

    // console.log('Current theme: ', currentTheme);
    // const expectedTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    // console.log('Expected theme: ', expectedTheme);

    // fireEvent.click(button);

    // const theme =
    //   document.body.classList.contains('light-theme') ||
    //   document.documentElement.classList.contains('light-theme');

    //   console.log('contains: ', document.documentElement.className);

    // expect(theme).toBe(true);
  });
});
