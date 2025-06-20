
import { TrendingUp, Bot, Scissors, Play, Video } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CoachServices = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Sales Funnel Setup",
      description: "High-converting landing pages, email sequences, and automated follow-ups that turn prospects into paying coaching clients.",
      cost: 300
    },
    {
      icon: Bot,
      title: "AI Coach Assistant",
      description: "Intelligent chatbots that answer client questions, book discovery calls, and nurture leads 24/7 while you focus on coaching.",
      cost: 300
    },
    {
      icon: Scissors,
      title: "Viral Content Clips",
      description: "Transform your coaching sessions into engaging short-form content that attracts ideal clients across all platforms.",
      cost: 300
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
            Here's How We Can{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Help
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Scale your coaching business with AI-powered automation and viral content creation
          </p>
        </div>

        {/* Free Gift Video Section */}
        <div className="mt-12 mb-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                🎁 Free Bonus Gift: Watch How We Build High-Converting Funnels In Minutes
              </span>
            </h3>
          </div>
          
          <div className="relative">
            {/* FREE GIFT Badge */}
            <div className="absolute -top-3 -right-3 z-10 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12">
              FREE GIFT
            </div>
            
            {/* Video Container */}
            <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 p-6 rounded-xl shadow-2xl">
              <div className="relative bg-black rounded-xl overflow-hidden shadow-lg aspect-video">
                <video 
                  controls 
                  className="w-full h-full"
                  preload="metadata"
                  poster="/assets/videos/funnel-poster.jpg"
                >
                  <source src="./assets/videos/free-gift-funnel-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* Video Description */}
              <div className="mt-6 text-center">
                <div className="flex flex-wrap justify-center gap-3 mb-4">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800 px-4 py-2">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Proven Strategy
                  </Badge>
                  <Badge variant="secondary" className="bg-pink-100 text-pink-800 px-4 py-2">
                    <Bot className="h-4 w-4 mr-2" />
                    Step-by-Step Guide
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2">
                    <Scissors className="h-4 w-4 mr-2" />
                    Real Results
                  </Badge>
                </div>
                <p className="text-gray-600 text-lg">
                  See exactly how we create sales funnels that convert prospects into paying clients - completely free!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center group relative">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <service.icon className="h-8 w-8 md:h-10 md:w-10 text-purple-600" />
              </div>
              
              {/* Cost indicator */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                <span className="line-through opacity-70">${service.cost}</span>
                <span className="ml-1">$0</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 px-2">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed px-4 text-sm md:text-base">{service.description}</p>
              
              <div className="mt-4 text-sm text-gray-500 italic">
                First demo: <span className="text-green-600 font-semibold">FREE</span>
              </div>
            </div>
          ))}
        </div>



        <div className="mt-8 md:mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 md:p-6 max-w-2xl mx-auto border border-purple-100">
            <p className="text-sm md:text-base text-gray-700">
              <span className="font-bold text-purple-600">Special:</span> Get your demo for FREE! 
              Regular pricing applies after demo approval.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachServices;
