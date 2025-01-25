import { useState, useEffect } from 'react';

export const useTypewriter = (text, speed = 50) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    setIsComplete(false);
    setDisplayedText('');

    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(prev => prev + text[index]);
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayedText, isComplete };
};

export const useKeyboardNav = (onNext, isComplete = true) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter' && isComplete) {
        onNext();
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [onNext, isComplete]);
};