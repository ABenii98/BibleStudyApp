import React, { useState, useMemo, useEffect } from "react";
import BookList from "./components/BookList.jsx";
import ChapterList from "./components/ChapterList.jsx";
import ChapterView from "./components/ChapterView.jsx";
import { Authenticator } from "@aws-amplify/ui-react";
import { Storage } from "aws-amplify";
import "./components/styles/App.css";
import "./components/styles/Auth.css";
import { Amplify } from "aws-amplify";
import awsmobile from "./aws-exports.js";

// Configure Amplify for auth and S3 access
Amplify.configure(awsmobile);

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for Bible version, persisted in localStorage
  const [selectedVersion, setSelectedVersion] = useState(() => {
    return localStorage.getItem('bibleVersion') || 'KJV';
  });

  // Public domain Bible versions
  const bibleVersions = ['KJV', 'ASV'];

  useEffect(() => {
    setLoading(true);
    async function fetchBible() {
      try {
        // Use Storage.get for robust S3 access
        const bibleUrl = await Storage.get(`bibles/${selectedVersion.toLowerCase()}.json`, { level: 'public' });
        const res = await fetch(bibleUrl, { headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const data = await res.json();
        if (!Array.isArray(data)) throw new Error("Invalid JSON structure");
        setVerses(data);
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      }
    }
    fetchBible();
  }, [selectedVersion]);

  // Persist version to localStorage
  useEffect(() => {
    localStorage.setItem('bibleVersion', selectedVersion);
  }, [selectedVersion]);

  const bookOrder = [
    // Old Testament (39 books)
    "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy",
    "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel",
    "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles",
    "Ezra", "Nehemiah", "Esther", "Job", "Psalms",
    "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah",
    "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea",
    "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum",
    "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi",
    // New Testament (27 books)
    "Matthew", "Mark", "Luke", "John", "Acts",
    "Romans", "1 Corinthians", "2 Corinthians", "Galatians",
    "Ephesians", "Philippians", "Colossians", "1 Thessalonians",
    "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus",
    "Philemon", "Hebrews", "James", "1 Peter", "2 Peter",
    "1 John", "2 John", "3 John", "Jude", "Revelation"
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

  const handleVersionChange = (e) => {
    setSelectedVersion(e.target.value);
    setSelectedBook(null);
    setSelectedChapter(null);
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
            <div className="version-selector">
              <label htmlFor="bible-version">Version: </label>
              <select
                id="bible-version"
                value={selectedVersion}
                onChange={handleVersionChange}
              >
                {bibleVersions.map((version) => (
                  <option key={version} value={version}>
                    {version}
                  </option>
                ))}
              </select>
            </div>
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
            <button className="sign-out-button" onClick={signOut}>Sign out</button>
          </div>
        </div>
      )}
    </Authenticator>
  );
}

export default App;