import { useEffect, useState } from 'react';

interface BlurTextAnimationProps {
  text: string;
  className?: string;
  delay?: number;
}

export const BlurTextAnimation = ({ text, className = "", delay = 0 }: BlurTextAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const startAnimation = () => {
      setIsVisible(false);
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    };

    const timer = setTimeout(() => {
      startAnimation();
      
      // Set up loop
      const loopInterval = setInterval(() => {
        startAnimation();
      }, 3000); // Loop every 3 seconds
      
      return () => clearInterval(loopInterval);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-1000 ${
        isVisible
          ? 'filter blur-0 opacity-100 transform translate-y-0'
          : 'filter blur-sm opacity-0 transform translate-y-4'
      } ${className}`}
    >
      {text}
    </div>
  );
};