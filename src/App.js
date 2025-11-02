// src/App.js
import React, { useState, useMemo, useEffect } from "react";
import BookList from "./components/BookList.jsx";
import ChapterList from "./components/ChapterList.jsx";
import ChapterView from "./components/ChapterView.jsx";
import { Storage } from "aws-amplify";
import { get, set } from "idb-keyval";
import "./components/styles/App.css";

function App({ signOut, user }) {
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [verses, setVerses] = useState([]);
  const [bibleCache, setBibleCache] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedVersion, setSelectedVersion] = useState(() => {
    return localStorage.getItem("bibleVersion") || "KJV";
  });

  const bibleVersions = ["KJV", "ASV"];

  // Bible loading logic
  useEffect(() => {
    async function loadBible() {
      setLoading(true);
      setError(null);

      try {
        const cacheKey = `bible_${selectedVersion}`;

        // Memory cache
        if (bibleCache[selectedVersion]) {
          console.log(`Loaded ${selectedVersion} from memory`);
          setVerses(bibleCache[selectedVersion]);
          setLoading(false);
          return;
        }

        // IndexedDB cache
        const cachedBible = await get(cacheKey);
        if (cachedBible) {
          console.log(`Loaded ${selectedVersion} from IndexedDB`);
          setVerses(cachedBible);
          setBibleCache((prev) => ({ ...prev, [selectedVersion]: cachedBible }));
          setLoading(false);
          return;
        }

        // S3/CloudFront fetch
        console.log(`Fetching ${selectedVersion} from S3/CloudFront...`);
        const bibleUrl = await Storage.get(
          `bibles/${selectedVersion.toLowerCase()}.json`,
          { level: "public" }
        );

        const response = await fetch(bibleUrl, {
          headers: { Accept: "application/json" },
          cache: "force-cache",
        });
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        if (!Array.isArray(data))
          throw new Error("Invalid Bible JSON structure");

        await set(cacheKey, data);
        setBibleCache((prev) => ({ ...prev, [selectedVersion]: data }));
        setVerses(data);
        console.log(`Cached ${selectedVersion} in IndexedDB & memory`);
      } catch (err) {
        console.error("Error loading Bible:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadBible();
  }, [selectedVersion]);

  useEffect(() => {
    localStorage.setItem("bibleVersion", selectedVersion);
  }, [selectedVersion]);

  const bookOrder = [
    "Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth",
    "1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra",
    "Nehemiah","Esther","Job","Psalms","Proverbs","Ecclesiastes","Song of Solomon",
    "Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos",
    "Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah",
    "Malachi","Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians",
    "2 Corinthians","Galatians","Ephesians","Philippians","Colossians",
    "1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon",
    "Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"
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

  const handleBookSelect = (book) => setSelectedBook(book);
  const handleChapterSelect = (chapter) => setSelectedChapter(chapter);
  const handleBack = () => {
    if (selectedChapter) setSelectedChapter(null);
    else if (selectedBook) setSelectedBook(null);
  };
  const handleVersionChange = (e) => {
    setSelectedVersion(e.target.value);
    setSelectedBook(null);
    setSelectedChapter(null);
  };

  if (loading)
    return (
      <div className="app-container">
        <div className="content-wrapper">
          <h1 className="main-title">LightHouse</h1>
          <p className="error-message">Loading {selectedVersion} Bible...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="app-container">
        <div className="content-wrapper">
          <h1 className="main-title">LightHouse</h1>
          <p className="error-message">Error loading Bible: {error}</p>
        </div>
      </div>
    );

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <h1 className="main-title">LightHouse</h1>
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

        <div className={`book-lists ${selectedBook ? "fade-out" : "fade-in"}`}>
          <div className="testament-section">
            <h2 className="testament-title">Old Testament</h2>
            <BookList books={books.oldTestament} onSelect={setSelectedBook} />
          </div>
          <div className="testament-section">
            <h2 className="testament-title">New Testament</h2>
            <BookList books={books.newTestament} onSelect={setSelectedBook} />
          </div>
        </div>

        {selectedBook && (
          <div className="chapter-content">
            <button className="back-button" onClick={handleBack}>
              Back to {selectedChapter ? "Chapters" : "Books"}
            </button>
            {selectedChapter ? (
              <ChapterView book={selectedBook} chapter={selectedChapter} verses={verses} />
            ) : (
              <ChapterList
                book={selectedBook}
                verses={verses}
                onSelectChapter={handleChapterSelect}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;