import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "library:bookmarks";

type BookmarkMap = Record<string, string>;

const read = (): BookmarkMap => {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as BookmarkMap) : {};
  } catch {
    return {};
  }
};

const write = (map: BookmarkMap) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
    window.dispatchEvent(new CustomEvent("library-bookmarks-changed"));
  } catch {
    /* ignore */
  }
};

export function useBookmark(moduleId: string | undefined) {
  const [bookmarkedId, setBookmarkedId] = useState<string | null>(() => {
    if (!moduleId) return null;
    return read()[moduleId] ?? null;
  });

  useEffect(() => {
    if (!moduleId) return;
    const sync = () => setBookmarkedId(read()[moduleId] ?? null);
    sync();
    window.addEventListener("library-bookmarks-changed", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("library-bookmarks-changed", sync);
      window.removeEventListener("storage", sync);
    };
  }, [moduleId]);

  const toggle = useCallback(
    (sectionId: string) => {
      if (!moduleId) return;
      const map = read();
      if (map[moduleId] === sectionId) {
        delete map[moduleId];
      } else {
        map[moduleId] = sectionId;
      }
      write(map);
    },
    [moduleId],
  );

  const isBookmarked = useCallback(
    (sectionId: string) => bookmarkedId === sectionId,
    [bookmarkedId],
  );

  return { bookmarkedId, toggle, isBookmarked };
}
