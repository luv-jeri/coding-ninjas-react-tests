import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Post from './Post';
import { ThemeProvider } from './ThemeContext';

const renderApp = () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

const getCurrentTheme = () => {
  const lightTheme = document.documentElement.classList.contains('light-theme');
  const darkTheme = document.documentElement.classList.contains('dark-theme');

  if (lightTheme) return 'light-theme';

  if (darkTheme) return 'dark-theme';

  return 'light-theme';
};

describe('Should change the Dark/Light mode', () => {
  test(`Should change to 'dark-theme'`, () => {
    renderApp();
    const button = screen.getByText('Toggle Theme');

    const currentTheme = getCurrentTheme();

    const expectedTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';

    fireEvent.click(button);

    let theme =
      document.body.classList.contains(expectedTheme) ||
      document.documentElement.classList.contains(expectedTheme);

    expect(theme).toBe(true);
  });

  test(`Should change back to original theme`, () => {
    renderApp();
    const button = screen.getByText('Toggle Theme');

    const currentTheme = getCurrentTheme();

    console.log('currentTheme', currentTheme);

    const expectedTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';

    console.log('expectedTheme', expectedTheme);

    fireEvent.click(button);

    let theme =
      document.body.classList.contains(expectedTheme) ||
      document.documentElement.classList.contains(expectedTheme);

    expect(theme).toBe(true);
  });
});

describe('Should be able to like and unlike a post', () => {
  const data = {
    id: 1,
    title: 'Post 1',
    date: '29-08-21',
    length: 11,
    content: `This is post 1 and it contains ...`,
    liked: false,
  };

  test('Should be able to like a post', () => {
    render(
      <ThemeProvider>
        <Post {...data} />
      </ThemeProvider>
    );

    let button = screen.getByRole('button', { name: 'Like' });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    const likedButton = screen.getByRole('button', { name: 'Liked' });
    expect(likedButton).toBeInTheDocument();
    expect(likedButton.classList.contains('liked-btn')).toBe(true);

    button = screen.queryByRole('button', { name: 'Like' });
    expect(button).not.toBeInTheDocument();
    expect(likedButton.classList.contains('like-btn')).toBe(false);
  });
});
