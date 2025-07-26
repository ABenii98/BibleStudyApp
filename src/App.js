import React, { useState, useMemo } from "react";
import kjvData from "./bibles/kjv.json";
import BookList from "./components/BookList";
import ChapterList from "./components/ChapterList";
import ChapterView from "./components/ChapterView";
import "./App.css";

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);

  // Extract unique book names from kjvData
  const books = useMemo(() => {
    return [...new Set(kjvData.map((v) => v.book_name))].sort();
  }, []);

  const handleBookSelect = (book) => {
    setSelectedBook(book);
    setSelectedChapter(null);
  };

  const handleChapterSelect = (chapter) => {
    setSelectedChapter(chapter);
  };

  return (
    <div className="app-container">
      <h1>Bible Study App</h1>
      {!selectedBook && (
        <BookList books={books} onSelect={handleBookSelect} />
      )}
      {selectedBook && !selectedChapter && (
        <ChapterList
          book={selectedBook}
          verses={kjvData}
          onSelectChapter={handleChapterSelect}
        />
      )}
      {selectedBook && selectedChapter && (
        <ChapterView
          book={selectedBook}
          chapter={selectedChapter}
          verses={kjvData}
        />
      )}
    </div>
  );
}

export default App;