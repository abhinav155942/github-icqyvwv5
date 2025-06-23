
import { TrendingUp, Bot, Scissors, Play, Video } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CoachServices = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Sales Funnel Setup",
      description: "High-converting landing pages, email sequences, and automated follow-ups that turn prospects into paying coaching clients.",
      details: {
        quantity: "5-7 pages funnel + 10 email sequences",
        benefits: ["3x higher conversion rate", "24/7 automated lead nurturing", "Professional design"],
        howItWorks: "We build custom funnels with landing pages, opt-in forms, and email automation"
      },
      cost: 300
    },
    {
      icon: Bot,
      title: "AI Coach Assistant",
      description: "Intelligent chatbots that answer client questions, book discovery calls, and nurture leads 24/7 while you focus on coaching.",
      details: {
        quantity: "Custom AI chatbot + integration",
        benefits: ["Save 10+ hours weekly", "Never miss a lead", "Instant responses"],
        howItWorks: "AI-powered chatbot trained on your coaching methods and FAQ responses"
      },
      cost: 300
    },
    {
      icon: Scissors,
      title: "Viral Content Clips",
      description: "Transform your coaching sessions into engaging short-form content that attracts ideal clients across all platforms.",
      details: {
        quantity: "20-30 clips per month",
        benefits: ["10x more reach", "Professional editing", "Platform optimization"],
        howItWorks: "We edit your content into engaging 15-60 second clips for TikTok, Instagram, YouTube"
      },
      cost: 300
    },
    {
      icon: Video,
      title: "Website Creation",
      description: "Professional, mobile-responsive websites designed to showcase your coaching services and convert visitors into clients.",
      details: {
        quantity: "5-page website + mobile optimization",
        benefits: ["Professional credibility", "Mobile-responsive", "SEO optimized"],
        howItWorks: "Custom website design with your branding, testimonials, and booking system"
      },
      cost: 300
    }
  ];

  return (
    <section className="services-section py-12 md:py-20 px-4 bg-white" data-onboarding="services">
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
          {services.slice(0, 3).map((service, index) => (
            <div key={index} className="text-center group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <service.icon className="h-8 w-8 md:h-10 md:w-10 text-purple-600" />
              </div>
              
              {/* Cost indicator */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                <span className="line-through opacity-70">${service.cost}</span>
                <span className="ml-1">$0</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 px-2">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed px-4 text-sm md:text-base mb-4">{service.description}</p>
              
              {/* Service Details */}
              <div className="text-left space-y-3 mb-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-1">What You Get:</h4>
                  <p className="text-sm text-gray-600">{service.details.quantity}</p>
                </div>
                
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-1">Benefits:</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    {service.details.benefits.map((benefit, i) => (
                      <li key={i}>✓ {benefit}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-1">How It Works:</h4>
                  <p className="text-sm text-blue-700">{service.details.howItWorks}</p>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-gray-500 italic">
                First demo: <span className="text-green-600 font-semibold">FREE</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 mb-16 max-w-4xl mx-auto">
          <img 
            src="./assets/images/smm_1750682392318.avif"
            alt="Social Media Marketing Demo"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.slice(3).map((service, index) => (
            <div key={index + 3} className="text-center group relative">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <service.icon className="h-8 w-8 md:h-10 md:w-10 text-purple-600" />
              </div>
              
              {/* Cost indicator */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                <span className="line-through opacity-70">${service.cost}</span>
                <span className="ml-1">$0</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 px-2">{service.title}</h3>
              <p className="text-gray-600 px-4 md:text-base text-[20px]">{service.description}</p>
              
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
