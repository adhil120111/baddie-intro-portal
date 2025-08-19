import { Button } from '@/components/ui/button';
import { ParticleBackground } from './ParticleBackground';

interface LandingPageProps {
  onEnter: () => void;
}

export const LandingPage = ({ onEnter }: LandingPageProps) => {
  return (
    <div className="fixed inset-0 z-50 blur-background flex items-center justify-center">
      <ParticleBackground />
      
      {/* Add the uploaded image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="/lovable-uploads/0bf21891-516e-45f5-b239-074657cbd8dd.png" 
          alt="Background" 
          className="w-64 h-64 object-cover opacity-20"
        />
      </div>
      
      <div className="text-center z-10">
        <Button
          onClick={onEnter}
          size="lg"
          className="bg-transparent text-white border border-white/20 hover:bg-white/10 hover:border-white/40 text-lg px-8 py-4 transition-all duration-500 hover:scale-105 font-rajdhani flex items-center gap-3"
        >
          <span>click to enter</span>
          <img 
            src="/skull-icon.png" 
            alt="skull" 
            className="w-6 h-6"
          />
        </Button>
      </div>
    </div>
  );
};