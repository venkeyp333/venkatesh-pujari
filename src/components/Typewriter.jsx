import React, { useEffect, useState } from 'react';

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(''); // Reset the displayed text whenever text prop changes
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust typing speed here

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayedText}</span>;
};

export default Typewriter;
