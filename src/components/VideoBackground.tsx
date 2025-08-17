import { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  isPlaying: boolean;
}

export const VideoBackground = ({ isPlaying }: VideoBackgroundProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      // Set volume and play audio on loop
      audioRef.current.volume = 0.7;
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(console.error);
    }

    if (isPlaying && videoRef.current) {
      // Ensure video plays and loops continuously
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(console.error);
    }
  }, [isPlaying]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Add event listeners to ensure continuous playback
      const handleEnded = () => {
        video.currentTime = 0;
        video.play().catch(console.error);
      };

      const handlePause = () => {
        if (isPlaying) {
          video.play().catch(console.error);
        }
      };

      video.addEventListener('ended', handleEnded);
      video.addEventListener('pause', handlePause);

      return () => {
        video.removeEventListener('ended', handleEnded);
        video.removeEventListener('pause', handlePause);
      };
    }
  }, [isPlaying]);
  return (
    <div className="fixed inset-0 z-0">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{ 
          transform: 'scale(1.1)',
          filter: 'brightness(0.6)',
          display: isPlaying ? 'block' : 'none'
        }}
      >
        <source src="/qbackground.mp4" type="video/mp4" />
      </video>
      {isPlaying && (
        <audio
          ref={audioRef}
          preload="auto"
          loop
        >
          <source src="/soundtrack.mp3.mp3" type="audio/mpeg" />
        </audio>
      )}
      <div className="absolute inset-0 bg-black/40 z-10" />
    </div>
  );
};