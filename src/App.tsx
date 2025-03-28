import BookmarkForm from './components/BookmarkForm';
import BookmarkList from './components/BookmarkList';
import ThemeToggle from './components/ThemeToggle';
import { useContext, useEffect } from 'react';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { isDarkTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkTheme]);

  return (
    <div className='flex flex-col gap-4 items-center border-2 border-emerald-500 dark:border-emerald-800 dark:text-white bg-gray-400 dark:bg-gray-900 rounded-lg px-12 py-4 w-fit mx-auto shadow-xl'>
      <h1 className='text-4xl font-bold text-center mb-4 font-mono'>Bookmark Manager</h1>
      <ThemeToggle />
      <BookmarkForm />
      <BookmarkList />
    </div>
  );
}

export default App;