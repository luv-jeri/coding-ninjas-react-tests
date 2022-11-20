import { createContext, useContext, useState, useLayoutEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const initialTheme = () => localStorage.getItem('THEME');
 
  const [theme, setTheme] = useState(initialTheme);
  const toggleTheme = () => setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
 
  useLayoutEffect(() => {
    localStorage.setItem('CODING_NINJASA_PROJECT_THEME', theme);
    if (theme === 'light') {
      document.documentElement.classList.remove('dark-theme');
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
      document.documentElement.classList.add('dark-theme');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
export { ThemeProvider, useTheme };
