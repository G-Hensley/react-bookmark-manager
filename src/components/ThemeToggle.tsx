import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className='self-center border-2 border-emerald-200 hover:bg-emerald-200 dark:hover:bg-emerald-900 active:border-emerald-500 rounded-lg px-2 py-1 bg-emerald-300 dark:bg-emerald-700 transition-all duration-100'
      onClick={toggleTheme}>
      Switch to {isDarkTheme ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ThemeToggle;