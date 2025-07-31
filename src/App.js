import React, { useState, useMemo, useEffect } from "react";
import BookList from "./components/BookList.jsx";
import ChapterList from "./components/ChapterList.jsx";
import ChapterView from "./components/ChapterView.jsx";
import { Authenticator } from "@aws-amplify/ui-react";
import "./components/styles/App.css";

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("/bibles/kjv.json", {
      headers: { Accept: "application/json" },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error("Invalid JSON structure");
        setVerses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const bookOrder = [
    "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", // ... (rest of the list)
  ];

  const books = useMemo(() => {
    if (!verses.length) return { oldTestament: [], newTestament: [] };
    const allBooks = [...new Set(verses.map((v) => v.book_name))];
    const sortedBooks = bookOrder.filter((book) => allBooks.includes(book));
    return {
      oldTestament: sortedBooks.slice(0, 39),
      newTestament: sortedBooks.slice(39),
    };
  }, [verses]);

  const handleBookSelect = (book) => {
    setSelectedBook(book);
    setSelectedChapter(null);
  };

  const handleChapterSelect = (chapter) => {
    setSelectedChapter(chapter);
  };

  const handleBack = () => {
    if (selectedChapter) setSelectedChapter(null);
    else if (selectedBook) setSelectedBook(null);
  };

  if (loading) {
    return (
      <div className="app-container">
        <div className="content-wrapper">
          <h1 className="main-title">Holy Bible</h1>
          <p className="error-message">Loading Bible data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-container">
        <div className="content-wrapper">
          <h1 className="main-title">Holy Bible</h1>
          <p className="error-message">Error loading Bible data: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="app-container">
          <div className="content-wrapper">
            <h1 className="main-title">Holy Bible</h1>
            {books.oldTestament.length === 0 && books.newTestament.length === 0 && (
              <p className="error-message">No Bible data available.</p>
            )}
            <div className={`book-lists ${selectedBook ? 'fade-out' : 'fade-in'}`}>
              <div className="testament-section">
                <h2 className="testament-title">Old Testament</h2>
                <BookList books={books.oldTestament} onSelect={handleBookSelect} />
              </div>
              <div className="testament-section">
                <h2 className="testament-title">New Testament</h2>
                <BookList books={books.newTestament} onSelect={handleBookSelect} />
              </div>
            </div>
            {selectedBook && (
              <div className={`chapter-content ${selectedBook ? 'fade-in' : 'fade-out'}`}>
                <button className="back-button" onClick={handleBack}>
                  Back to {selectedChapter ? 'Chapters' : 'Books'}
                </button>
                {selectedChapter ? (
                  <ChapterView book={selectedBook} chapter={selectedChapter} verses={verses} />
                ) : (
                  <ChapterList book={selectedBook} verses={verses} onSelectChapter={handleChapterSelect} />
                )}
              </div>
            )}
            <button onClick={signOut}>Sign out</button>
          </div>
        </div>
      )}
    </Authenticator>
  );
}

export default App;