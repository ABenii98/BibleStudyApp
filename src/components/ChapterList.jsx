import React from "react";

function ChapterList({ book, verses, onSelectChapter }) {
  // Get unique chapters for the selected book
  const chapters = [
    ...new Set(
      verses
        .filter((entry) => entry.book_name === book)
        .map((entry) => entry.chapter)
    ),
  ].sort((a, b) => a - b);

  return (
    <div className="chapter-list">
      <h2>Select a Chapter in {book}</h2>
      <div className="chapter-grid">
        {chapters.map((chapter) => (
          <button
            key={chapter}
            onClick={() => onSelectChapter(chapter)}
            className="chapter-button"
          >
            Chapter {chapter}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ChapterList;