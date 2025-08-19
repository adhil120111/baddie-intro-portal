import { Button } from '@/components/ui/button';
import { ParticleBackground } from './ParticleBackground';
import { TypewriterAnimation } from './TypewriterAnimation';
import skullBackground from '@/assets/skull-background.png';

interface LandingPageProps {
  onEnter: () => void;
}

export const LandingPage = ({ onEnter }: LandingPageProps) => {
  return (
    <div className="fixed inset-0 z-50 blur-background flex items-center justify-center">
      <ParticleBackground />
      
      {/* Skull background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src={skullBackground} 
          alt="Skull Background" 
          className="w-96 h-96 object-cover opacity-30"
        />
      </div>
      
      <div className="text-center z-10">
        <Button
          onClick={onEnter}
          size="lg"
          className="bg-transparent text-white border border-white/20 hover:bg-white/10 hover:border-white/40 text-lg px-8 py-4 transition-all duration-500 hover:scale-105 font-rajdhani flex items-center gap-3"
        >
          <TypewriterAnimation 
            text="click to enter" 
            delay={500}
            speed={150}
          />
          <img 
            src="/skull-icon.png" 
            alt="skull" 
            className="w-6 h-6"
          />
        </Button>
        
        {/* Copyright claims */}
        <div className="absolute bottom-4 left-4 text-xs text-white/60 font-rajdhani">
          <p>© 2024 ney000o. All rights reserved.</p>
          <p>Gaming content and assets used under fair use.</p>
        </div>
      </div>
    </div>
  );
};