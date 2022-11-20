import './styles.css';
import data from './data';
import Post from './Post';
import { useTheme } from './ThemeContext';

// Task-1: Create a mechanism for toggling "light-theme" and "dark-theme" classes.
// After that, head over to ./Post.js

function App() {
  const { toggleTheme } = useTheme();
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
