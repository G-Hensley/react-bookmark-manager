import { useContext, useState } from 'react';
import { BookmarkContext } from '../context/BookmarkContext';
import BookmarkItem from './BookmarkItem';

const BookmarkList = () => {
  const { bookmarks } = useContext(BookmarkContext);
  const [filterCategory, setFilterCategory] = useState('');

  const filteredBookmarks = filterCategory
    ? bookmarks.filter((bookmark) => bookmark.category === filterCategory)
    : bookmarks;

  return (
    <div className='mt-4 flex flex-col gap-4'>
      <h2 className='text-xl font-bold text-center'>Bookmarks</h2>
      <label className='text-lg' htmlFor="filterCategory">Filter</label>
      <input
        name="filterCategory"
        className='border-2 border-emerald-200 focus:border-emerald-500 rounded-lg px-2 py-1 bg-gray-300 dark:bg-gray-700 dark:border-emerald-900 dark:focus:border-emerald-700'
        type="text"
        placeholder="Filter by category"
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      />
      <ul className='flex flex-col gap-4'>
        {filteredBookmarks.map((bookmark) => (
          <BookmarkItem key={bookmark.id} bookmark={bookmark} />
        ))}
      </ul>
    </div>
  );
};

export default BookmarkList;