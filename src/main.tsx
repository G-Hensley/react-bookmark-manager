import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BookmarkProvider } from './context/BookmarkContext';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <ThemeProvider>
      <BookmarkProvider>
        <App></App>
      </BookmarkProvider>
    </ThemeProvider>
);