import { Button } from '@/components/ui/button';
import { ParticleBackground } from './ParticleBackground';

interface LandingPageProps {
  onEnter: () => void;
}

export const LandingPage = ({ onEnter }: LandingPageProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-lg flex items-center justify-center">
      <ParticleBackground />
      <div className="text-center z-10">
        <Button
          onClick={onEnter}
          size="lg"
          className="bg-neon-pink/20 text-white border border-neon-pink/50 hover:bg-neon-pink/30 hover:border-neon-pink hover:shadow-neon-glow text-xl px-12 py-6 transition-all duration-500 hover:scale-105"
        >
          Click to Enter
        </Button>
      </div>
    </div>
  );
};