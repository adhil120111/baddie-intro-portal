import { useEffect, useState } from 'react';

interface TypewriterAnimationProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export const TypewriterAnimation = ({ 
  text, 
  className = "", 
  delay = 0, 
  speed = 100 
}: TypewriterAnimationProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const startAnimation = () => {
      setDisplayText('');
      setCurrentIndex(0);
      
      const typeInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex < text.length) {
            setDisplayText(text.slice(0, prevIndex + 1));
            return prevIndex + 1;
          } else {
            clearInterval(typeInterval);
            // Wait a bit then restart
            setTimeout(() => {
              startAnimation();
            }, 2000);
            return prevIndex;
          }
        });
      }, speed);

      return () => clearInterval(typeInterval);
    };

    const timer = setTimeout(() => {
      startAnimation();
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay, speed]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};