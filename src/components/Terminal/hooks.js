import { useState, useEffect } from 'react';

export const useTypewriter = (text, speed = 50) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  // Fonction pour calculer les délais mécaniques
  const getDelay = (index) => {
      const baseSpeed = speed;
      
      // Délai plus long après un point
      if (index > 0 && text[index-1] === '.' && Math.random() < 0.3) {
          return baseSpeed * 8;
      }
      
      // Variation naturelle de la vitesse (±20%)
      return baseSpeed + (Math.random() * speed * 0.2);
  };

  useEffect(() => {
      let index = 0;
      let timeout;
      setIsComplete(false);
      setDisplayedText('');

      const typeNext = () => {
          if (index < text.length) {
              setDisplayedText(prev => prev + text[index]);
              index++;
              timeout = setTimeout(typeNext, getDelay(index));
          } else {
              setIsComplete(true);
          }
      };

      typeNext();
      return () => clearTimeout(timeout);
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