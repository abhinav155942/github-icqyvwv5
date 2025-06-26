
import { Bot, TrendingDown, Video, Star, Zap, Target, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { SoundEffects } from "@/utils/soundEffects";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: TrendingDown,
      title: "Sales Funnel Setup",
      description: "Complete lead magnet funnels with high-converting landing pages and automated email sequences that nurture prospects into paying clients.",
      features: ["Lead magnet pages", "Email automation", "Landing page optimization", "A/B tested templates"],
      color: "from-purple-500 to-indigo-600",
      bgGradient: "from-purple-50 to-indigo-50"
    },
    {
      icon: Bot,
      title: "AI Chatbot Integration",
      description: "RAG-powered chatbots trained on your content that provide 24/7 customer support and lead qualification while you sleep.",
      features: ["Trained on your content", "24/7 availability", "Lead qualification", "Seamless integration"],
      color: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50"
    },
    {
      icon: Video,
      title: "Short-Form Video Clipping",
      description: "Transform your long-form content into viral-ready short clips with hooks, subtitles, and optimized formatting for all platforms.",
      features: ["Hook-based editing", "Auto subtitles", "Multi-platform formats", "Viral optimization"],
      color: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-50 to-blue-50"
    }
  ];

  const handleCardHover = (index: number) => {
    setHoveredCard(index);
    SoundEffects.playHover();
  };

  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-slide-in-up">
          <div className="flex justify-center mb-6">
            <Target className="w-16 h-16 text-yellow-400 animate-pulse-glow" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">What I Do For </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient">
              Online Coaches
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Three core services that transform your coaching business and automate your client acquisition
          </p>
          
          {/* Floating sparkles */}
          <Star className="absolute top-10 left-1/4 w-6 h-6 text-yellow-400 animate-sparkle hidden md:block" />
          <Star className="absolute top-20 right-1/3 w-4 h-4 text-pink-400 animate-sparkle hidden md:block" style={{ animationDelay: '1s' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden border-0 shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 cursor-pointer animate-slide-in-up hover-lift glass-effect ${hoveredCard === index ? 'animate-pulse-glow' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Animated border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl`}></div>
              
              <CardContent className="relative p-4 sm:p-6 md:p-8 lg:p-10">
                <div className="mb-8">
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-pulse-glow`}>
                    <service.icon className="h-10 w-10 text-white group-hover:animate-bounce" />
                    
                    {/* Sparkle effect on icon */}
                    <Star className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-sparkle opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-pink-400 transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-8 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                
                <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center text-gray-300 group-hover:text-white transition-all duration-300 animate-slide-in-up"
                      style={{ animationDelay: `${(index * 0.2) + (featureIndex * 0.1)}s` }}
                    >
                      <CheckCircle className={`w-5 h-5 bg-gradient-to-r ${service.color} rounded-full mr-4 group-hover:animate-bounce`} style={{ animationDelay: `${featureIndex * 0.1}s` }} />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16 animate-slide-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-xl text-gray-300 mb-4">
            Ready to transform your coaching business?
          </p>
          <Zap className="w-8 h-8 text-yellow-400 mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Services;
