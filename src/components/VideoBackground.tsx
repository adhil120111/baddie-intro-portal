import { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  isPlaying: boolean;
}

export const VideoBackground = ({ isPlaying }: VideoBackgroundProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      // Set volume and play audio for 23 seconds
      audioRef.current.volume = 0.7;
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(console.error);
      
      const timer = setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.pause();
        }
      }, 23000);

      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  return (
    <div className="fixed inset-0 z-0">
      {isPlaying && (
        <>
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            style={{ 
              transform: 'scale(1.1)',
              filter: 'brightness(0.6)',
            }}
          >
            <source src="/video/background.mp4" type="video/mp4" />
            <source src="/video/background.webm" type="video/webm" />
          </video>
          <audio
            ref={audioRef}
            preload="auto"
          >
            <source src="/audio/soundtrack.mp3" type="audio/mpeg" />
            <source src="/audio/soundtrack.wav" type="audio/wav" />
          </audio>
        </>
      )}
      <div className="absolute inset-0 bg-black/40 z-10" />
    </div>
  );
};