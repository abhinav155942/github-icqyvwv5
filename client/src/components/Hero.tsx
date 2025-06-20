
import { Button } from "@/components/ui/button";
import { ArrowDown, Eye, Sparkles, Zap, Rocket, Star, Edit3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { SoundEffects } from "@/utils/soundEffects";

const Hero = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
  const [lineAnimation, setLineAnimation] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    SoundEffects.playAppLoad();
    
    // Generate random sparkles
    const newSparkles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setSparkles(newSparkles);

    // Start line animation after component loads
    setTimeout(() => {
      setLineAnimation(true);
    }, 1000);
  }, []);
  
  const scrollToForm = () => {
    SoundEffects.playClick();
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToProjects = () => {
    SoundEffects.playClick();
    navigate('/projects');
  };

  const handleHover = () => {
    SoundEffects.playHover();
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 px-4 relative overflow-hidden">
      {/* Floating geometric shapes - keeping the animations you liked */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-32 w-18 h-18 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-lg opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-8 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-purple-800">
            Let
          </span>{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-purple-800 text-[63px]">
              AI handle it. 
            </span>
            {/* Animated underline with pen */}
            <div className="absolute -bottom-2 left-0 w-full h-1 overflow-hidden">
              <svg 
                className="absolute bottom-0 left-0 w-full h-8" 
                viewBox="0 0 400 20"
                fill="none"
              >
                <path
                  d="M10 15 Q100 5 200 12 T390 8"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  className={`${lineAnimation ? 'animate-draw-line' : ''}`}
                  style={{
                    strokeDasharray: 400,
                    strokeDashoffset: lineAnimation ? 0 : 400,
                    transition: 'stroke-dashoffset 2s ease-in-out'
                  }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#7c3aed" />
                  </linearGradient>
                </defs>
              </svg>
              {/* Animated pen icon */}
              <Edit3 
                className={`absolute h-4 w-4 text-purple-600 transition-all duration-2000 ${
                  lineAnimation ? 'right-2 bottom-1' : 'left-2 bottom-1'
                }`}
                style={{
                  transform: lineAnimation ? 'translateX(0) rotate(-10deg)' : 'translateX(0) rotate(-10deg)',
                  transition: 'right 2s ease-in-out'
                }}
              />
            </div>
          </span>
        </h1>
        
        <div className="mb-6 text-lg md:text-xl text-gray-600 font-medium">
          3+ years | 200+ Brands | 40+ Crore Revenue Generated
        </div>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed font-medium">
          A dedicated team of AI specialists, delivering remarkable automation solutions to entrepreneurs worldwide!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="px-12 py-4 text-lg bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
            onClick={scrollToForm}
            onMouseEnter={handleHover}
          >
            Book a Strategy Call
          </Button>
        </div>
        
        <div className="mt-16 text-lg text-gray-700 font-medium">
          Our Performance Marketing Services are Certified by
        </div>
      </div>
    </section>
  );
};

export default Hero;
