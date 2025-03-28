import { useContext } from 'react';
import { BookmarkContext } from '../context/BookmarkContext';
import { Bookmark } from '../context/BookmarkContext';

interface BookmarkItemProps {
  bookmark: Bookmark;
}

const BookmarkItem = ({ bookmark }: BookmarkItemProps) => {
  const { deleteBookmark } = useContext(BookmarkContext);

  return (
    <li className='border-2 border-emerald-200 rounded-lg px-2 py-1 bg-emerald-100 shadow-md flex flex-col gap-4 dark:bg-emerald-900 dark:border-emerald-800'>
      <h3>{bookmark.title}</h3>
      <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
        {bookmark.url}
      </a>
      <p>Category: {bookmark.category}</p>
      <button
        className='mt-4 border-2 w-full border-emerald-200 hover:bg-emerald-200 dark:hover:bg-emerald-900 active:border-emerald-500 self-center rounded-lg px-2 py-1 bg-emerald-300 dark:bg-emerald-700 transition-all duration-100' 
        onClick={() => deleteBookmark(bookmark.id)}>
        Delete
      </button>
    </li>
  );
};

export default BookmarkItem;