"use client";

import { useEffect, useMemo, useState } from "react";
import posts from "@/lib/posts";
import PostCard from "./PostCard";
import styles from "./SearchIcon.module.css";

export default function SearchIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.classList.add("no-scroll");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const filteredPosts = useMemo(() => {
    if (!query.trim()) {
      return [];
    }

    const normalizedQuery = query.toLowerCase();

    return posts.filter((post) => {
      const haystack = [post.title, post.description, ...(post.tags ?? [])]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [query]);

  return (
    <div className={styles.root}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-label="Search posts"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </button>

      {isOpen ? (
        <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Search posts">
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <div>
                <h2 className={styles.panelTitle}>Search the archive</h2>
                <p className={styles.panelIntro}>
                  Titles and tags are searchable. Press <kbd>Esc</kbd> to close.
                </p>
              </div>
              <button type="button" className={styles.close} onClick={() => setIsOpen(false)}>
                Close
              </button>
            </div>

            <label className="sr-only" htmlFor="post-search">
              Search posts
            </label>
            <input
              id="post-search"
              type="text"
              className={styles.input}
              placeholder="Search posts, topics, or tools"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              autoFocus
            />

            <div className={styles.results}>
              {filteredPosts.map((post) => (
                <PostCard key={post.id} post={post} compact variant="search" />
              ))}
            </div>

            {query && filteredPosts.length === 0 ? (
              <p className={styles.empty}>No posts matched your search.</p>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
