// components/ChapterView.jsx
import React, { useState, useEffect } from "react";
import "./styles/ChapterView.css";
import { API, Auth } from "aws-amplify";

// === MUTATIONS ===
import {
  createHighlight,
  updateHighlight,
  deleteHighlight,
  createComment,
  deleteComment,   // ← NEW: for deleting comments
  createBookmark,
  deleteBookmark,
} from "../graphql/mutations";

// === QUERIES ===
import {
  listComments,
  highlightsByUserIdAndCreatedAt,
  bookmarksByUserIdAndCreatedAt,
} from "../graphql/queries";

const HIGHLIGHT_COLORS = [
  { name: "yellow", hex: "#FFF9A3" },
  { name: "pink",   hex: "#FFB6C1" },
  { name: "blue",   hex: "#A3D8FF" },
  { name: "green",  hex: "#A8E6A1" },
  { name: "orange", hex: "#FFD4A3" },
];

function ChapterView({ book, chapter, verses }) {
  const [userId, setUserId] = useState(null);
  const [highlights, setHighlights] = useState({});
  const [comments, setComments] = useState({});
  const [bookmarks, setBookmarks] = useState(new Map());
  const [modalVerse, setModalVerse] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [error, setError] = useState(null);

  /* -------------------------------------------------
   *  USER AUTH
   * ------------------------------------------------- */
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUserId(user.username);
      } catch (err) {
        setError("Please sign in.");
      }
    };
    fetchUser();
  }, []);

  /* -------------------------------------------------
   *  FETCH DATA
   * ------------------------------------------------- */
  useEffect(() => {
    if (!userId) return;
const fetchUserData = async () => {
  try {
    console.log("Fetching data for:", { userId, book, chapter });

    // HIGHLIGHTS
    const hRes = await API.graphql({
      query: highlightsByUserIdAndCreatedAt,
      variables: {
        userId,
        filter: { book: { eq: book }, chapter: { eq: chapter } },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    console.log("Highlights loaded:", hRes.data?.highlightsByUserIdAndCreatedAt?.items);

    // COMMENTS
    const cRes = await API.graphql({
      query: listComments,
      variables: {
        filter: {
          book: { eq: book },
          chapter: { eq: chapter },
          owner: { eq: userId },
        },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    console.log("Comments raw response:", cRes);

    // BOOKMARKS
    const bRes = await API.graphql({
      query: bookmarksByUserIdAndCreatedAt,
      variables: {
        userId,
        filter: { book: { eq: book }, chapter: { eq: chapter } },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    console.log("Bookmarks loaded:", bRes.data?.bookmarksByUserIdAndCreatedAt?.items);

    // Process data...
    const hMap = {};
    (hRes.data?.highlightsByUserIdAndCreatedAt?.items || []).forEach((h) => {
      hMap[h.verse] = { color: h.color, id: h.id, owner: h.owner };
    });
    setHighlights(hMap);

    const cMap = {};
    (cRes.data?.listComments?.items || []).forEach((c) => {
      const v = c.verse;
      if (!cMap[v]) cMap[v] = [];
      cMap[v].push(c);
    });
    setComments(cMap);

    const bMap = new Map();
    (bRes.data?.bookmarksByUserIdAndCreatedAt?.items || []).forEach((b) => {
      bMap.set(b.verse, b.id);
    });
    setBookmarks(bMap);

  } catch (err) {
    console.error("fetchUserData FAILED:", err);
    // Show detailed error
    setError(`Failed to load data: ${err.message || JSON.stringify(err)}`);
  }
};
    fetchUserData();
  }, [userId, book, chapter]);

  /* -------------------------------------------------
   *  OPEN MODAL
   * ------------------------------------------------- */
  const openModal = (verseNum) => {
    if (!userId) return setError("Sign in to edit.");
    setModalVerse(verseNum);
    setCommentText("");
  };

  /* -------------------------------------------------
   *  HIGHLIGHT
   * ------------------------------------------------- */
  const handleColor = async (verseNum, color) => {
    const existing = highlights[verseNum];
    try {
      if (existing && existing.color === color) {
        await API.graphql({
          query: deleteHighlight,
          variables: { input: { id: existing.id } },
          authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        setHighlights((p) => {
          const n = { ...p };
          delete n[verseNum];
          return n;
        });
      } else if (existing) {
        await API.graphql({
          query: updateHighlight,
          variables: { input: { id: existing.id, color } },
          authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        setHighlights((p) => ({
          ...p,
          [verseNum]: { ...p[verseNum], color },
        }));
      } else if (color) {
        const id = `${userId}#${book}#${chapter}#${verseNum}`;
        const res = await API.graphql({
          query: createHighlight,
          variables: {
            input: { id, userId, owner: userId, book, chapter, verse: verseNum, color },
          },
          authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        setHighlights((p) => ({
          ...p,
          [verseNum]: { color, id: res.data.createHighlight.id, owner: userId },
        }));
      }
    } catch (e) {
      console.error(e);
      setError("Highlight failed.");
    }
  };

  /* -------------------------------------------------
   *  SAVE COMMENT
   * ------------------------------------------------- */
  const saveComment = async (verseNum) => {
    if (!commentText.trim()) return;
    const verseKey = `${book}#${chapter}#${verseNum}`;
    const id = `${userId}#${verseKey}#${Date.now()}`;
    try {
      const res = await API.graphql({
        query: createComment,
        variables: {
          input: {
            id,
            userId,
            owner: userId,
            verseKey,
            book,
            chapter,
            verse: verseNum,
            body: commentText,
          },
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      setComments((p) => ({
        ...p,
        [verseNum]: [...(p[verseNum] || []), res.data.createComment],
      }));
      setCommentText("");
      setModalVerse(null);
    } catch (e) {
      console.error(e);
      setError("Comment failed.");
    }
  };

  /* -------------------------------------------------
   *  DELETE COMMENT ← NEW
   * ------------------------------------------------- */
  const handleDeleteComment = async (commentId, verseNum) => {
    try {
      await API.graphql({
        query: deleteComment,
        variables: { input: { id: commentId } },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      setComments((p) => ({
        ...p,
        [verseNum]: p[verseNum].filter((c) => c.id !== commentId),
      }));
    } catch (e) {
      console.error("Delete comment failed:", e);
      setError("Could not delete comment.");
    }
  };

  /* -------------------------------------------------
   *  BOOKMARK
   * ------------------------------------------------- */
  const toggleBookmark = async (verseNum) => {
    const has = bookmarks.has(verseNum);
    try {
      if (has) {
        await API.graphql({
          query: deleteBookmark,
          variables: { input: { id: bookmarks.get(verseNum) } },
          authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        setBookmarks((m) => {
          const n = new Map(m);
          n.delete(verseNum);
          return n;
        });
      } else {
        const id = `${userId}#${book}#${chapter}#${verseNum}`;
        const res = await API.graphql({
          query: createBookmark,
          variables: {
            input: { id, userId, owner: userId, book, chapter, verse: verseNum },
          },
          authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        setBookmarks((m) => new Map(m).set(verseNum, res.data.createBookmark.id));
      }
    } catch (e) {
      console.error(e);
      setError("Bookmark failed.");
    }
  };

  /* -------------------------------------------------
   *  RENDER
   * ------------------------------------------------- */
  const filteredVerses = (verses || [])
    .filter((v) => v.book_name === book && v.chapter === chapter)
    .sort((a, b) => a.verse - b.verse);

  return (
    <div className="chapter-view">
      {error && <div className="error-message">{error}</div>}

      <h2>{book} {chapter}</h2>

      <div className="verse-container">
        {filteredVerses.map((verse) => {
          const v = verse.verse;
          const hl = highlights[v];
          const verseComments = comments[v] || [];
          const isBookmarked = bookmarks.has(v);

          return (
            <div key={v} className="verse-wrapper">

              {/* VERSE */}
              <div
                onPointerDown={() => {
                  const timer = setTimeout(() => openModal(v), 500);
                  const up = () => clearTimeout(timer);
                  document.addEventListener("pointerup", up, { once: true });
                  document.addEventListener("pointerleave", up, { once: true });
                }}
              >
                <p
                  className={`verse ${hl ? "highlighted" : ""} ${verseComments.length ? "has-comment" : ""} ${isBookmarked ? "bookmarked" : ""}`}
                  style={hl ? { backgroundColor: HIGHLIGHT_COLORS.find(c => c.name === hl.color)?.hex || "#FFF9A3" } : {}}
                  onClick={() => openModal(v)}
                >
                  <sup className="verse-number">{v}</sup> {verse.text}
                  {isBookmarked && <span className="bookmark-icon"></span>}
                </p>
              </div>

              {/* RENDERED COMMENTS WITH DELETE */}
              {verseComments.length > 0 && (
                <div className="comment-container">
                  {verseComments.map((c) => (
                    <div key={c.id} className="comment-item">
                      <div className="comment-text">{c.body}</div>
                      <button
                        className="delete-comment-btn"
                        onClick={() => handleDeleteComment(c.id, v)}
                        title="Delete comment"
                      >
                        
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* UNIFIED MODAL */}
              {modalVerse === v && (
                <div className="action-modal" onClick={(e) => e.stopPropagation()}>
                  <div
                    className={`bookmark-toggle ${isBookmarked ? "Bookmark" : ""}`}
                    onClick={() => toggleBookmark(v)}
                  />

                  <div className="color-section">
                    {HIGHLIGHT_COLORS.map((c) => (
                      <div
                        key={c.name}
                        className="color-swatch"
                        style={{ backgroundColor: c.hex }}
                        onClick={() => handleColor(v, c.name)}
                      />
                    ))}
                    {hl && (
                      <div className="color-swatch remove" onClick={() => handleColor(v, null)}>
                        Remove
                      </div>
                    )}
                  </div>

                  <div className="comment-section">
                    <textarea
                      placeholder="Add a note..."
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                    />
                    <div className="modal-actions">
                      <button className="save" onClick={() => saveComment(v)}>Save</button>
                      <button className="cancel" onClick={() => setModalVerse(null)}>Cancel</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChapterView;