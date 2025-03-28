import { useState, useContext } from 'react';
import { BookmarkContext } from '../context/BookmarkContext';

const BookmarkForm = () => {
  const { addBookmark } = useContext(BookmarkContext);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !url || !category) return;

    addBookmark({ title, url, category });
    setTitle('');
    setUrl('');
    setCategory('');
  };

  return (
    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
      <label className='text-lg' htmlFor="title">Title</label>
      <input
        className='border-2 border-emerald-200 focus:border-emerald-500 rounded-lg px-2 py-1 bg-gray-300 dark:bg-gray-700 dark:border-emerald-900 dark:focus:border-emerald-700'
        name="title"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label className='text-lg' htmlFor="url">URL</label>
      <input
        className='border-2 border-emerald-200 focus:border-emerald-500 rounded-lg px-2 py-1 bg-gray-300 dark:bg-gray-700 dark:border-emerald-900 dark:focus:border-emerald-700'
        name="url"
        type="url"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <label className='text-lg' htmlFor="category">Category</label>
      <input
        className='border-2 border-emerald-200 focus:border-emerald-500 rounded-lg px-2 py-1 bg-gray-300 dark:bg-gray-700 dark:border-emerald-900 dark:focus:border-emerald-700'
        name="category"
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button className='self-center mt-4 border-2 border-emerald-200 hover:bg-emerald-200 dark:hover:bg-emerald-900 active:border-emerald-500 rounded-lg px-2 py-1 bg-emerald-300 dark:bg-emerald-700 transition-all duration-100' type="submit">Add Bookmark</button>
    </form>
  );
};

export default BookmarkForm;