import { useState } from 'react';
import { LandingPage } from '@/components/LandingPage';
import { VideoBackground } from '@/components/VideoBackground';
import { ParticleBackground } from '@/components/ParticleBackground';
import { SplitTextAnimation } from '@/components/SplitTextAnimation';
import { BlurTextAnimation } from '@/components/BlurTextAnimation';
import { SocialLinks } from '@/components/SocialLinks';

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
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-neon-pink glow-text">
              <SplitTextAnimation text="ney000o" delay={500} />
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-300 space-y-2 mb-8">
              <BlurTextAnimation 
                text="gaming as passion" 
                className="block"
                delay={2000}
              />
              <BlurTextAnimation 
                text="developer as a reason" 
                className="block"
                delay={2500}
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
