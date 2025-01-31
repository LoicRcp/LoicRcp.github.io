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
    <div className="relative retro-terminal-container">
      <div className="font-mono text-green-500 whitespace-pre-wrap relative z-10">
        {displayedText}
        <span className="animate-blink">_</span>
      </div>
      {/* Add CRT overlay effects */}
      <div className="crt-overlay" />
      <div className="crt-glow" />
      
      {/* Existing prompt */}
      {isComplete && currentSection < sections.length - 1 && (
        <div className="mt-4 text-sm text-cyan-300 opacity-80 vintage-prompt">
          [Press Enter] ░▒▓ CONTINUE
        </div>
      )}
    </div>
  );
};

export default Terminal;