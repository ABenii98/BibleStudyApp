import React from "react";

function BookList({ books, onSelect }) {
  return (
    <div className="book-list">
      <h2>Select a Book</h2>
      <div className="book-grid">
        {books.map((book) => (
          <button
            key={book}
            onClick={() => onSelect(book)}
            className="book-button"
          >
            {book}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BookList;