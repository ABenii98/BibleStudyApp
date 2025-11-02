import React, { useState, useEffect } from "react";
import "./styles/ChapterView.css";
import { API, Auth } from "aws-amplify";

// === MUTATIONS ===
import {
  createHighlight,
  updateHighlight,
  deleteHighlight,
  createComment,
  deleteComment,
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

    const openModal = (verseNum) => {
    setModalVerse(verseNum);
    setCommentText(""); // Reset comment text when opening modal
  };

  const closeModal = () => {
    setModalVerse(null);
    setCommentText(""); // Reset comment text when closing
  };
  // Get verse text helper
  const getVerseText = (verseNum) => {
    return verses.find(v => v.verse === verseNum)?.text || "";
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUserId(user.username);
      } catch (err) {
        setError("Please sign in to make annotations.");
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    if (!userId || !book || !chapter) return;

    const fetchUserData = async () => {
      try {
        console.log("Fetching data for:", { userId, book, chapter });

        // Fetch highlights
        const hRes = await API.graphql({
          query: highlightsByUserIdAndCreatedAt,
          variables: {
            userId,
            filter: { book: { eq: book }, chapter: { eq: chapter } },
          },
          authMode: "AMAZON_COGNITO_USER_POOLS",
        });

        // Fetch comments
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

        // Fetch bookmarks
        const bRes = await API.graphql({
          query: bookmarksByUserIdAndCreatedAt,
          variables: {
            userId,
            filter: { book: { eq: book }, chapter: { eq: chapter } },
          },
          authMode: "AMAZON_COGNITO_USER_POOLS",
        });

        // Process highlights
        const hMap = {};
        (hRes.data?.highlightsByUserIdAndCreatedAt?.items || []).forEach((h) => {
          hMap[h.verse] = { color: h.color, id: h.id, owner: h.owner };
        });
        setHighlights(hMap);

        // Process comments
        const cMap = {};
        (cRes.data?.listComments?.items || []).forEach((c) => {
          const v = c.verse;
          if (!cMap[v]) cMap[v] = [];
          cMap[v].push(c);
        });
        setComments(cMap);

        // Process bookmarks
        const bMap = new Map();
        (bRes.data?.bookmarksByUserIdAndCreatedAt?.items || []).forEach((b) => {
          bMap.set(b.verse, b.id);
        });
        setBookmarks(bMap);

      } catch (err) {
        console.error("Data fetch failed:", err);
        if (err.errors) {
          console.error("GraphQL Errors:", err.errors);
        }
        setError("Failed to load annotations");
      }
    };

    fetchUserData();
  }, [userId, book, chapter]);

  const handleColor = async (verseNum, color) => {
    if (!userId) return setError("Please sign in to highlight verses.");
    
    const existing = highlights[verseNum];
    const verseText = getVerseText(verseNum);
    
    try {
      if (existing && existing.color === color) {
        // Delete highlight
        await API.graphql({
          query: deleteHighlight,
          variables: { input: { id: existing.id } },
          authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        setHighlights(prev => {
          const next = { ...prev };
          delete next[verseNum];
          return next;
        });
      } else if (existing) {
        // Update highlight
        const response = await API.graphql({
          query: updateHighlight,
          variables: { 
            input: { 
              id: existing.id,
              color,
              text: verseText
            } 
          },
          authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        if (response.errors) throw response;
        setHighlights(prev => ({
          ...prev,
          [verseNum]: { ...prev[verseNum], color },
        }));
      } else {
        // Create new highlight
        const response = await API.graphql({
          query: createHighlight,
          variables: {
            input: {
              userId,
              owner: userId,
              book,
              chapter,
              verse: verseNum,
              color,
              text: verseText
            },
          },
          authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        if (response.errors) throw response;
        setHighlights(prev => ({
          ...prev,
          [verseNum]: { 
            color, 
            id: response.data.createHighlight.id,
            owner: userId 
          },
        }));
      }
   } catch (err) {
  console.error("Highlight operation failed:", err);
  if (err.errors) {
    // Add detailed error logging
    err.errors.forEach((e, i) => {
      console.error(`GraphQL Error ${i + 1}:`, {
        message: e.message,
        path: e.path,
        locations: e.locations
      });
    });
  }
  setError(err.errors?.[0]?.message || "Failed to update highlight");
}
  };

  const saveComment = async (verseNum) => {
    if (!userId) {
      setError("Please sign in to add comments.");
      return false;
    }
    if (!commentText.trim()) {
      setError("Comment cannot be empty.");
      return false;
    }

    setError(null);

    const verseText = getVerseText(verseNum);
    const verseKey = `${book}#${chapter}#${verseNum}`;

    try {
      const response = await API.graphql({
        query: createComment,
        variables: {
          input: {
            userId,
            owner: userId,
            verseKey,
            book,
            chapter,
            verse: verseNum,
            body: commentText,
            text: verseText,
          },
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });

      // GraphQL-level errors (some clients put errors on the top-level response)
      if (response.errors && response.errors.length) {
        console.error("GraphQL errors returned:", response.errors);
        const msg = response.errors[0]?.message || "Failed to save comment";
        setError(msg);
        return false;
      }

      const created = response?.data?.createComment;
      if (!created) {
        // Unexpected shape
        console.error("Unexpected createComment response:", response);
        setError("Failed to save comment (unexpected response).");
        return false;
      }

      setComments((prev) => ({
        ...prev,
        [verseNum]: [...(prev[verseNum] || []), created],
      }));
      setCommentText("");
      setModalVerse(null);
      return true;
    } catch (err) {
      // Network / client errors
      console.error("Comment creation failed:", err);

      // Amplify GraphQL errors are sometimes nested
      if (err?.errors && err.errors.length) {
        console.error("Nested GraphQL errors:", err.errors);
        setError(err.errors[0]?.message || "Failed to save comment");
      } else if (err?.message) {
        // Common cases: NotAuthorizedException, NetworkError, etc.
        if (err.message.includes("NotAuthorized") || err.message.includes("Unauthorized")) {
          setError("Please sign in to add comments.");
        } else {
          setError(err.message);
        }
      } else {
        setError("Failed to save comment");
      }

      return false;
    }
  };

  const handleDeleteComment = async (commentId, verseNum) => {
    try {
      await API.graphql({
        query: deleteComment,
        variables: { input: { id: commentId } },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      setComments(prev => ({
        ...prev,
        [verseNum]: prev[verseNum].filter(c => c.id !== commentId),
      }));
    } catch (err) {
      console.error("Comment deletion failed:", err);
      setError("Could not delete comment");
    }
  };

  const toggleBookmark = async (verseNum) => {
    if (!userId) return setError("Please sign in to bookmark verses.");
    
    const verseText = getVerseText(verseNum);
    const has = bookmarks.has(verseNum);
    
    try {
      if (has) {
        await API.graphql({
          query: deleteBookmark,
          variables: { input: { id: bookmarks.get(verseNum) } },
          authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        setBookmarks(prev => {
          const next = new Map(prev);
          next.delete(verseNum);
          return next;
        });
      } else {
        const response = await API.graphql({
          query: createBookmark,
          variables: {
            input: {
              userId,
              owner: userId,
              book,
              chapter,
              verse: verseNum,
              text: verseText
            },
          },
          authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        if (response.errors) throw response;
        setBookmarks(prev => new Map(prev).set(verseNum, response.data.createBookmark.id));
      }
    } catch (err) {
  console.error("Bookmark operation failed:", err);
  if (err.errors) {
    err.errors.forEach((e, i) => {
      console.error(`GraphQL Error ${i + 1}:`, {
        message: e.message,
        path: e.path,
        locations: e.locations
      });
    });
  }
  setError(err.errors?.[0]?.message || "Failed to update bookmark");
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