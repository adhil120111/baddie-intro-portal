import { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  isPlaying: boolean;
}

export const VideoBackground = ({ isPlaying }: VideoBackgroundProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      // Set volume and play audio on loop
      audioRef.current.volume = 0.7;
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(console.error);
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
            <source src="/qbackground.mp4" type="video/mp4" />
          </video>
          <audio
            ref={audioRef}
            preload="auto"
            loop
          >
            <source src="/soundtrack.mp3.mp3" type="audio/mpeg" />
          </audio>
        </>
      )}
      <div className="absolute inset-0 bg-black/40 z-10" />
    </div>
  );
};