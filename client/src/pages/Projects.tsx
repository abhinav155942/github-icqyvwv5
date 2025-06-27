
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ArrowLeft, ExternalLink, Users, TrendingUp, ShoppingCart, Video, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis } from "recharts";
import ThreePieCharts from "@/components/ThreePieCharts";
import ReviewsSection from "@/components/ReviewsSection";
import { SoundEffects } from "@/utils/soundEffects";

const Projects = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<string>("");
  const [chartsLoaded, setChartsLoaded] = useState(false);

  useEffect(() => {
    const savedUserType = localStorage.getItem('userType') || "";
    setUserType(savedUserType);
  }, []);

  useEffect(() => {
    // Trigger chart animation sounds when charts are loaded
    if (userType && !chartsLoaded) {
      const timer = setTimeout(() => {
        SoundEffects.playChartAnimation(4); // 4 data points for pie chart
        setChartsLoaded(true);
      }, 500); // Delay to allow chart rendering
      
      return () => clearTimeout(timer);
    }
  }, [userType, chartsLoaded]);

  const coachProjects = [
    {
      title: "Life Coach Sarah - Complete Business Automation",
      description: "AI-powered sales funnel with automated email sequences, chatbot for client screening, and viral content creation system.",
      services: ["Sales Funnel", "AI Chatbot", "Content Creation"],
      results: "75% increase in leads, 80% automation of client onboarding",
      image: "🧘‍♀️",
      link: "#"
    },
    {
      title: "Business Coach Mike - Revenue Generation System",
      description: "Multi-step funnel with webinar automation, AI assistant for lead qualification, and social media content pipeline.",
      services: ["Sales Funnel", "AI Assistant", "Viral Content"],
      results: "85% revenue growth in 2 months",
      image: "💼",
      link: "#"
    }
  ];

  const creatorProjects = [
    {
      title: "YouTube Creator Emma - Content & Monetization",
      description: "Automated content repurposing system, subscriber funnel, and AI-powered engagement bot for community management.",
      services: ["Creator Funnel", "AI Bot", "Content System"],
      results: "90% subscriber growth, 5x monetization",
      image: "🎥",
      link: "#"
    },
    {
      title: "Podcast Host Alex - Audience Building",
      description: "Lead magnet funnels, automated episode promotion system, and AI assistant for listener engagement.",
      services: ["Funnel Setup", "AI Assistant", "Viral Clips"],
      results: "110% email list growth, 10x engagement",
      image: "🎙️",
      link: "#"
    }
  ];

  const ecommerceProjects = [
    {
      title: "Fashion Brand Luna - Sales Optimization",
      description: "Product funnel with upsells, customer service chatbot, and automated product video ads creation system.",
      services: ["E-commerce Funnel", "AI Sales Bot", "Product Videos"],
      results: "95% conversion rate, 60% cart abandonment reduction",
      image: "👗",
      link: "#"
    },
    {
      title: "Electronics Store TechHub - Customer Experience",
      description: "Multi-product funnels, AI support assistant, and automated product demonstration videos.",
      services: ["Product Funnels", "Support Bot", "Demo Videos"],
      results: "75% sales increase, 90% faster support",
      image: "📱",
      link: "#"
    }
  ];

  const chartData = {
    coach: {
      performance: [
        { name: "Lead Generation", value: 85, color: "#a855f7" },
        { name: "Client Conversion", value: 75, color: "#ec4899" },
        { name: "Revenue Growth", value: 80, color: "#06b6d4" },
        { name: "Automation Level", value: 90, color: "#10b981" }
      ],
      growth: [
        { month: "Before", value: 25 },
        { month: "Month 1", value: 45 },
        { month: "Month 2", value: 75 },
        { month: "Month 3", value: 95 }
      ]
    },
    creator: {
      performance: [
        { name: "Audience Growth", value: 90, color: "#a855f7" },
        { name: "Engagement Rate", value: 85, color: "#ec4899" },
        { name: "Monetization", value: 70, color: "#06b6d4" },
        { name: "Content Output", value: 95, color: "#10b981" }
      ],
      growth: [
        { month: "Before", value: 20 },
        { month: "Month 1", value: 50 },
        { month: "Month 2", value: 80 },
        { month: "Month 3", value: 100 }
      ]
    },
    ecommerce: {
      performance: [
        { name: "Conversion Rate", value: 85, color: "#a855f7" },
        { name: "Customer Support", value: 90, color: "#ec4899" },
        { name: "Sales Volume", value: 75, color: "#06b6d4" },
        { name: "User Experience", value: 80, color: "#10b981" }
      ],
      growth: [
        { month: "Before", value: 30 },
        { month: "Month 1", value: 55 },
        { month: "Month 2", value: 75 },
        { month: "Month 3", value: 90 }
      ]
    }
  };

  const ProjectCard = ({ project, icon: Icon }: any) => (
    <Card className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm border border-purple-200">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl">{project.image}</div>
          <Icon className="h-8 w-8 text-purple-600" />
        </div>
        <CardTitle className="text-xl text-gray-800">{project.title}</CardTitle>
        <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-2">Services Included:</p>
            <div className="flex flex-wrap gap-2">
              {project.services.map((service: string, index: number) => (
                <Badge key={index} variant="outline" className="border-purple-200 text-purple-700">
                  {service}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="text-sm font-semibold text-green-800 mb-1">Results:</p>
            <p className="text-sm text-green-700">{project.results}</p>
          </div>
          
          <Button 
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            onClick={() => window.open(project.link, '_blank')}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View Project Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderNicheSection = () => {
    switch(userType) {
      case "coach":
        return (
          <section className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Coaching & Consulting Success Stories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Empowering coaches and consultants with automated systems that generate leads and nurture clients.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {coachProjects.map((project, index) => (
                <ProjectCard key={index} project={project} icon={Users} />
              ))}
            </div>
          </section>
        );
      case "creator":
        return (
          <section className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                <Video className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Content Creator Success Stories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Helping creators build audiences, monetize content, and automate engagement across platforms.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {creatorProjects.map((project, index) => (
                <ProjectCard key={index} project={project} icon={Video} />
              ))}
            </div>
          </section>
        );
      case "ecommerce":
        return (
          <section className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">E-commerce Success Stories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Boosting online stores with optimized funnels, AI customer support, and automated marketing.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {ecommerceProjects.map((project, index) => (
                <ProjectCard key={index} project={project} icon={ShoppingCart} />
              ))}
            </div>
          </section>
        );
      default:
        return (
          <>
            <section className="mb-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Coaching & Consulting</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Empowering coaches and consultants with automated systems that generate leads and nurture clients.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {coachProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} icon={Users} />
                ))}
              </div>
            </section>

            <section className="mb-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Content Creators</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Helping creators build audiences, monetize content, and automate engagement across platforms.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {creatorProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} icon={Video} />
                ))}
              </div>
            </section>

            <section className="mb-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  <ShoppingCart className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">E-commerce</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Boosting online stores with optimized funnels, AI customer support, and automated marketing.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {ecommerceProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} icon={ShoppingCart} />
                ))}
              </div>
            </section>
          </>
        );
    }
  };

  const renderCharts = () => {
    const data = chartData[userType as keyof typeof chartData] || chartData.coach;
    
    return (
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-2xl p-6 shadow-xl border border-purple-100">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
            📊 Performance Metrics
          </h3>
          <div className="w-full h-64">
            <ChartContainer
              config={{
                leadGeneration: { label: "Lead Generation", color: "#a855f7" },
                clientConversion: { label: "Client Conversion", color: "#ec4899" },
                revenueGrowth: { label: "Revenue Growth", color: "#06b6d4" },
                automationLevel: { label: "Automation Level", color: "#10b981" }
              }}
            >
              <PieChart>
                <Pie
                  data={data.performance}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  onMouseEnter={() => SoundEffects.playChartTick()}
                  animationBegin={0}
                  animationDuration={800}
                >
                  {data.performance.map((entry: any, index: number) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color}
                      onMouseEnter={() => SoundEffects.playHover()}
                    />
                  ))}
                </Pie>
                <ChartTooltip 
                  content={<ChartTooltipContent />}
                  formatter={(value: any, name: string, props: any) => {
                    const metricName = props.payload?.name || "Metric";
                    return [`${value}%`, metricName];
                  }}
                />
              </PieChart>
            </ChartContainer>
          </div>
          <div className="mt-4 space-y-2">
            {data.performance.map((item: any, index: number) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded mr-2" style={{ backgroundColor: item.color }}></div>
                  <span>{item.name}</span>
                </div>
                <span className="font-semibold">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-xl border border-purple-100">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
            📈 Growth Timeline
          </h3>
          <div className="w-full h-64">
            <ChartContainer
              config={{
                value: { label: "Growth", color: "#a855f7" }
              }}
            >
              <BarChart 
                data={data.growth} 
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                onMouseMove={() => SoundEffects.playChartTick()}
              >
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip 
                  content={<ChartTooltipContent />}
                  formatter={(value: any) => [`${value}%`, "Growth"]}
                />
                <Bar 
                  dataKey="value" 
                  fill="#a855f7" 
                  radius={[4, 4, 0, 0]}
                  animationBegin={100}
                  animationDuration={1000}
                  onAnimationEnd={() => SoundEffects.playChartComplete()}
                />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-purple-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="text-purple-600 hover:bg-purple-50"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            <h1 className="text-2xl font-bold text-gray-800">Preview Our Portfolio</h1>
            <div></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Our Portfolio
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our AI solutions and see what our customers have to say about their experience.
          </p>
        </div>

        {/* Charts Section */}
        {userType && renderCharts()}

        {/* Reviews Section */}
        <ReviewsSection />

        {/* Analytics Dashboard Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Business Analytics Dashboard
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive breakdown of our coaching services, revenue streams, and client success metrics
            </p>
          </div>
          <ThreePieCharts />
        </section>

        {/* CTA Section */}
        <div className="text-center bg-white/60 rounded-3xl p-12 border border-purple-200">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us create a custom AI solution that transforms your business just like these amazing results.
          </p>
          <Button 
            size="lg"
            className="px-8 py-6 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => navigate('/')}
          >
            <Zap className="mr-2 h-5 w-5" />
            Get Your Custom Solution
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
