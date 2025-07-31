import React from "react";
import "./styles/ChapterView.css"

function ChapterView({ book, chapter, verses }) {
  const filteredVerses = verses
    .filter((entry) => entry.book_name === book && entry.chapter === chapter)
    .sort((a, b) => a.verse - b.verse);

  return (
    <div className="chapter-view">
      <h2>
        {book} Chapter {chapter}
      </h2>
      <div className="verse-container">
        {filteredVerses.map((verse) => (
          <p key={`${verse.chapter}-${verse.verse}`} className="verse">
            <sup className="verse-number">{verse.verse}.</sup> {verse.text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ChapterView;