import { useState } from 'react';
import { LandingPage } from '@/components/LandingPage';
import { VideoBackground } from '@/components/VideoBackground';
import { ParticleBackground } from '@/components/ParticleBackground';
import { TypewriterAnimation } from '@/components/TypewriterAnimation';
import { SocialLinks } from '@/components/SocialLinks';
import TextType from '@/components/TextType';

const Index = () => {
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = () => {
    setHasEntered(true);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <VideoBackground isPlaying={hasEntered} />
      <ParticleBackground />
      
      {!hasEntered && <LandingPage onEnter={handleEnter} />}
      
      {hasEntered && (
        <div className="relative z-20 min-h-screen flex flex-col items-center justify-center text-center px-4">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white glow-text-red font-orbitron">
              <TypewriterAnimation text="ney0000o" delay={500} speed={200} />
            </h1>
            
            <div className="text-xl md:text-2xl mb-8">
              <TextType 
                text="gaming since 2014"
                className="font-rajdhani font-semibold text-white glow-text-white"
                typingSpeed={100}
                pauseDuration={3000}
                loop={true}
                showCursor={true}
                cursorCharacter="|"
              />
            </div>
          </div>
          
          <SocialLinks />
        </div>
      )}
    </div>
  );
};

export default Index;
