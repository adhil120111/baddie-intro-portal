import { useEffect, useState } from 'react';

interface SplitTextAnimationProps {
  text: string;
  className?: string;
  delay?: number;
}

export const SplitTextAnimation = ({ text, className = "", delay = 0 }: SplitTextAnimationProps) => {
  const [animatedLetters, setAnimatedLetters] = useState<boolean[]>([]);

  useEffect(() => {
    const startAnimation = () => {
      // Reset all letters first
      setAnimatedLetters([]);
      
      setTimeout(() => {
        text.split('').forEach((_, index) => {
          setTimeout(() => {
            setAnimatedLetters(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }, index * 100);
        });
      }, 500);
    };

    const timer = setTimeout(() => {
      startAnimation();
      
      // Set up loop
      const loopInterval = setInterval(() => {
        startAnimation();
      }, text.length * 100 + 2000); // Wait for animation to complete + 2s pause
      
      return () => clearInterval(loopInterval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <div className={`inline-block ${className}`}>
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-500 ${
            animatedLetters[index]
              ? 'transform translate-y-0 opacity-100'
              : 'transform translate-y-8 opacity-0'
          }`}
          style={{
            transitionDelay: `${index * 50}ms`,
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </div>
  );
};