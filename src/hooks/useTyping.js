import { useEffect, useState } from "react";

/**
 * Efek mengetik & menghapus bergantian antar kata, dengan cursor berkedip.
 * @param {string[]} words
 */
export function useTyping(words, { typingSpeed = 110, deletingSpeed = 55, pause = 2800 } = {}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hideCursor, setHideCursor] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && text === currentWord) {
      setHideCursor(true);
      timeout = setTimeout(() => {
        setHideCursor(false);
        setIsDeleting(true);
      }, pause);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            isDeleting ? currentWord.substring(0, prev.length - 1) : currentWord.substring(0, prev.length + 1)
          );
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return { text, hideCursor };
}
