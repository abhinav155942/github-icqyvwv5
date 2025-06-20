
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
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 md:mb-8 leading-tight px-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-purple-800 text-[59px]">
            Let
          </span>{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-purple-800 sm:text-4xl md:text-[56px] lg:text-[63px] text-[63px]">
              AI handle it. 
            </span>
            {/* Animated underline with pen */}
            <div className="absolute -bottom-4 left-0 w-full h-8 overflow-visible">
              <svg 
                className="absolute bottom-0 left-0 w-full h-8" 
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M5 12 Q25 8 50 10 Q75 12 95 9"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  style={{
                    strokeDasharray: '100',
                    strokeDashoffset: lineAnimation ? '0' : '100',
                    transition: 'stroke-dashoffset 2.5s ease-in-out 0.5s'
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
                className="absolute h-5 w-5 text-purple-600"
                style={{
                  left: lineAnimation ? '95%' : '0%',
                  bottom: '4px',
                  transform: 'rotate(-15deg)',
                  transition: 'left 2.5s ease-in-out 0.5s'
                }}
              />
            </div>
          </span>
        </h1>
        
        <div className="mb-6 text-lg md:text-xl text-gray-600 font-medium bg-[#708bff1c]">
          3× growth | 88+ Brands | $430k+ Revenue Generated
        </div>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed font-medium px-4">
          A dedicated team of AI specialists, delivering remarkable automation solutions to entrepreneurs worldwide!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <Button 
            size="lg" 
            className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
            onClick={scrollToForm}
            onMouseEnter={handleHover}
          >
            Get your free Demo
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
            onClick={goToProjects}
            onMouseEnter={handleHover}
          >
            View Portfolio
          </Button>
        </div>
        
        <div className="mt-16 text-lg text-gray-700 font-medium">
          Our AI services are mostly automated
        </div>
      </div>
    </section>
  );
};

export default Hero;
