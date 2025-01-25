import React, { useState, useCallback } from 'react';
import { useTypewriter, useKeyboardNav } from './hooks';
import { sections } from './sections';

const Terminal = ({ onSectionComplete }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const { displayedText, isComplete } = useTypewriter(sections[currentSection]);

  const nextSection = useCallback(() => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(prev => prev + 1);
      onSectionComplete?.(currentSection);
    }
  }, [currentSection, onSectionComplete]);

  useKeyboardNav(nextSection, isComplete);

  return (
    <div className="absolute left-0 top-0 w-1/2 h-full bg-transparent p-8">
      <div className="font-mono text-green-500 whitespace-pre-wrap">
        {displayedText}
        <span className="animate-pulse">_</span>
      </div>
      {isComplete && currentSection < sections.length - 1 && (
        <div className="mt-4 text-sm text-gray-500">
          Press Enter to continue...
        </div>
      )}
    </div>
  );
};

export default Terminal;