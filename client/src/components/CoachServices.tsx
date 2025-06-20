
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

        {/* Sales Funnel Video Demo Section */}
        <div className="mt-16 md:mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
              <Video className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Sales Funnel Setup Demo
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              See how we create high-converting sales funnels that turn prospects into paying coaching clients
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="secondary" className="bg-purple-100 text-purple-800 px-4 py-2">
                <TrendingUp className="h-4 w-4 mr-2" />
                High Converting
              </Badge>
              <Badge variant="secondary" className="bg-pink-100 text-pink-800 px-4 py-2">
                <Bot className="h-4 w-4 mr-2" />
                AI Automated
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2">
                <Scissors className="h-4 w-4 mr-2" />
                Proven Strategy
              </Badge>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
                <CardTitle className="flex items-center text-xl">
                  <Play className="mr-3 h-6 w-6" />
                  Sales Funnel Strategy Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative bg-black aspect-video">
                  <video 
                    controls 
                    className="w-full h-full"
                    preload="metadata"
                    poster="/assets/videos/sales-funnel-poster.jpg"
                  >
                    <source src="./assets/videos/sales-funnel-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    What You'll Learn in This Demo:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-800">Landing Page Optimization</h5>
                        <p className="text-sm text-gray-600">Create pages that convert visitors into leads</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-800">Email Automation</h5>
                        <p className="text-sm text-gray-600">Nurture leads with automated sequences</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">3</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-800">Follow-up Systems</h5>
                        <p className="text-sm text-gray-600">Convert prospects into paying clients</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">4</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-800">Performance Tracking</h5>
                        <p className="text-sm text-gray-600">Monitor and optimize your funnel results</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
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
