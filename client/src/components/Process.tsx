
import { MessageSquare, Search, CheckCircle, Clock, Users, Zap } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Fill the form",
      description: "Share your business details, goals, and current challenges. The more we know, the better we can help you succeed.",
      duration: "2 minutes",
      action: "Quick & Easy"
    },
    {
      icon: Search,
      number: "02", 
      title: "We audit and send demo/funnel idea",
      description: "Our team analyzes your business and creates a custom strategy with demos and funnel concepts tailored to your niche.",
      duration: "24-48 hours",
      action: "Free Analysis"
    },
    {
      icon: CheckCircle,
      number: "03",
      title: "You approve, we build & deliver in 2 days",
      description: "Once you give the green light, we get to work and deliver your complete AI-powered system within 48 hours.",
      duration: "48 hours",
      action: "Lightning Fast"
    }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "48-Hour Delivery",
      description: "From approval to launch in just 2 days"
    },
    {
      icon: Users,
      title: "88+ Success Stories",
      description: "Proven track record across all industries"
    },
    {
      icon: Zap,
      title: "Zero Technical Skills Needed",
      description: "We handle everything, you focus on growth"
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
            How It{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Works
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            From initial contact to fully automated business system in just 3 simple steps
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 md:mb-12">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-center space-x-2 md:space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-3 md:px-6 py-2 md:py-3 shadow-lg">
                <item.icon className="h-4 w-4 md:h-5 md:w-5 text-purple-600" />
                <div className="text-left">
                  <div className="font-bold text-gray-800 text-xs md:text-sm">{item.title}</div>
                  <div className="text-gray-600 text-xs hidden md:block">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 transform translate-x-4 z-0"></div>
              )}
              
              <div className="relative z-10 text-center group">
                {/* Enhanced card design */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-purple-100">
                  <div className="mb-4 md:mb-6">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative">
                      <step.icon className="h-8 w-8 md:h-10 md:w-10 text-purple-600" />
                      {/* Pulse animation */}
                      <div className="absolute inset-0 rounded-full bg-purple-400 opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
                    </div>
                    
                    <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-3 md:mb-4">
                      {step.number}
                    </div>
                    
                    {/* Duration badge */}
                    <div className="inline-flex items-center px-2 md:px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs md:text-sm font-semibold mb-3 md:mb-4">
                      <Clock className="h-3 w-3 mr-1" />
                      {step.duration}
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">{step.description}</p>
                  
                  {/* Action badge */}
                  <div className="inline-block px-3 md:px-4 py-1 md:py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs md:text-sm font-semibold rounded-full">
                    {step.action}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional trust section */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-xl border border-purple-100">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
              🚀 Ready to Transform Your Business?
            </h3>
            <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
              Join hundreds of successful businesses who've already automated their growth
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-500 mr-1 md:mr-2" />
                No setup fees
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-500 mr-1 md:mr-2" />
                24/7 support included
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
