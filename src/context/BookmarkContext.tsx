import { createContext, useState, useEffect, ReactNode } from 'react';

// Define the shape of a bookmark
export interface Bookmark {
  id: number;
  title: string;
  url: string;
  category: string;
}

// Define the shape of the context value
interface BookmarkContextType {
  bookmarks: Bookmark[];
  addBookmark: (bookmark: Omit<Bookmark, 'id'>) => void;
  deleteBookmark: (id: number) => void;
}

// Create the context with a default value
export const BookmarkContext = createContext<BookmarkContextType>({
  bookmarks: [],
  addBookmark: () => {},
  deleteBookmark: () => {},
});

// Define the props for the provider component
interface BookmarkProviderProps {
  children: ReactNode;
}

// Create the provider component
export const BookmarkProvider = ({ children }: BookmarkProviderProps) => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  // Load bookmarks from localStorage on initial render
  useEffect(() => {
    try {
      const savedBookmarks = localStorage.getItem('bookmarks');
      if (savedBookmarks) {
        const parsedBookmarks = JSON.parse(savedBookmarks);
        if (Array.isArray(parsedBookmarks)) {
          setBookmarks(parsedBookmarks);
        }
      }
    } catch (error) {
      console.error('Failed to load bookmarks from localStorage:', error);
    }
  }, []);

  // Save bookmarks to localStorage whenever they change
  useEffect(() => {
    console.log('Saving bookmarks to localStorage:', bookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  // Function to add a new bookmark
  const addBookmark = (newBookmark: Omit<Bookmark, 'id'>) => {
    setBookmarks((prevBookmarks) => [
      ...prevBookmarks,
      { ...newBookmark, id: Date.now() }, // Add a unique ID
    ]);
  };

  // Function to delete a bookmark by ID
  const deleteBookmark = (id: number) => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.filter((bookmark) => bookmark.id !== id)
    );
  };

  // Value to be provided to consuming components
  const value = {
    bookmarks,
    addBookmark,
    deleteBookmark,
  };

  return (
    <BookmarkContext.Provider value={value}>
      {children}
    </BookmarkContext.Provider>
  );
};