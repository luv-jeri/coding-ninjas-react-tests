import './styles.css';
import data from './data';
import Post from './Post';
import { useState, useEffect } from 'react';

// Task-1: Create a mechanism for toggling "light-theme" and "dark-theme" classes.
// After that, head over to ./Post.js

function App() {
  const initialTheme = () => localStorage.getItem('CODING_NINJASA_PROJECT_THEME');
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () =>
    setTheme((theme) => {
      if (theme === 'light-theme') return 'dark-theme';
      if (theme === 'dark-theme') return 'light-theme';
      return 'dark-theme';
    });

  useEffect(() => {
    localStorage.setItem('CODING_NINJASA_PROJECT_THEME', theme);
    if (theme === 'dark-theme') {
      document.documentElement.classList.remove('light-theme');
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
      document.documentElement.classList.add('light-theme');
    }
  }, [theme]);

  return (
    <div className='App'>
      <div>
        <nav className='nav-bar'>
          <h1>Home</h1>
          <button className='btn' onClick={toggleTheme}>
            Toggle Theme
          </button>
          <br />
        </nav>
      </div>
      <div>
        {data.map((post) => {
          return <Post key={post.id} {...post} />;
        })}
      </div>
    </div>
  );
}

export default App;
