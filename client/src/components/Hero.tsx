
import { Button } from "@/components/ui/button";
import { ArrowDown, Eye, Sparkles, Zap, Rocket, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { SoundEffects } from "@/utils/soundEffects";

const Hero = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
  
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

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Make Money While You Sleep
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Transform your business with AI-powered funnels, intelligent chatbots, and viral-ready content. 
          Get more leads, automate customer interactions, and scale your content—all while you focus on what you do best.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="px-8 py-6 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={scrollToForm}
            onMouseEnter={handleHover}
          >
            Get Started Now
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="px-8 py-6 text-lg border-2 border-purple-600 text-purple-600 hover:bg-purple-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={goToProjects}
            onMouseEnter={handleHover}
          >
            <Eye className="mr-2 h-5 w-5" />
            See our portfolio
          </Button>
        </div>
        
        <div className="mt-12 text-sm text-gray-500">
          ✨ 2-day delivery • 24/7 AI support • Results guaranteed
        </div>
      </div>
    </section>
  );
};

export default Hero;
