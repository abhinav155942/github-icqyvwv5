
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

        <div className="mt-12 mb-16 max-w-4xl mx-auto">
          <img 
            src="./assets/images/funnel-demo.avif"
            alt="Funnel Demo"
            className="w-full rounded-lg shadow-lg"
          />
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
