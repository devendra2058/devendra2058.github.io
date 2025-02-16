import React, { useState, useEffect } from 'react';
import { Camera } from 'lucide-react';

function SplashScreen() {
  const [text, setText] = useState('');
  const fullText = 'SAZARCREATION';
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Show logo first
    setTimeout(() => {
      setShowLogo(true);
    }, 500);

    // Then start typing animation
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
      <div className={`transform transition-all duration-1000 ${showLogo ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
        <Camera className="h-24 w-24 text-red-600 mb-4" />
      </div>
      <div className="h-8">
        <span className="text-red-600 text-3xl font-bold tracking-wider">
          {text}
          <span className="animate-pulse">|</span>
        </span>
      </div>
    </div>
  );
}

export default SplashScreen;