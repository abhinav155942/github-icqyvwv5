import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MessageSquare, TrendingUp, Video, Bot, Zap, Play, History, X, Target, Users, DollarSign, BarChart3, ShoppingCart, Mail, Globe, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Preview = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="flex items-center border-purple-200 text-purple-600 hover:bg-purple-50"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Preview Our Work
              </span>
            </h1>
            <div></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            See What We Can Build For You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a sneak peek at our AI-powered solutions in action
          </p>
        </div>

        {/* Preview Sections */}
        <div className="space-y-24">
          {/* Sales Funnel Setup */}
          <section>
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-6">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                AI-Powered Sales Funnel
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                Convert visitors into customers with intelligent, data-driven sales funnels
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 px-4 py-2">
                  <Target className="h-4 w-4 mr-2" />
                  85% Conversion Rate
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2">
                  <Users className="h-4 w-4 mr-2" />
                  10K+ Leads Generated
                </Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800 px-4 py-2 text-[13px]">
                  <DollarSign className="h-4 w-4 mr-2" />
                  $134k+ Revenue
                </Badge>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-12">
              <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6">
                  <CardTitle className="flex items-center text-xl">
                    <BarChart3 className="mr-3 h-6 w-6" />
                    Funnel Performance Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg">
                      <span className="font-medium text-gray-700">Landing Page Views</span>
                      <span className="text-2xl font-bold text-emerald-600">12,547</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                      <span className="font-medium text-gray-700">Email Captures</span>
                      <span className="text-2xl font-bold text-blue-600">8,932</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                      <span className="font-medium text-gray-700">Sales Conversions</span>
                      <span className="text-2xl font-bold text-purple-600">2,156</span>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="text-center">
                        <span className="text-3xl font-bold text-emerald-600">71.2%</span>
                        <p className="text-gray-600">Overall Conversion Rate</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6">
                  <CardTitle className="flex items-center text-xl">
                    <Globe className="mr-3 h-6 w-6" />
                    Funnel Flow Preview
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Landing Page</h4>
                        <p className="text-sm text-gray-600">Capture attention & interest</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Lead Magnet</h4>
                        <p className="text-sm text-gray-600">Email capture with value offer</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg">
                      <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Nurture Sequence</h4>
                        <p className="text-sm text-gray-600">Automated email follow-up</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Sales Page</h4>
                        <p className="text-sm text-gray-600">Convert to paying customer</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* RAG Agent Interface */}
          <section>
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
                <Bot className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                AI Business Assistant
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                Intelligent chatbots that understand your business and provide personalized customer support 24/7
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <Badge variant="secondary" className="bg-purple-100 text-purple-800 px-4 py-2">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  99.9% Uptime
                </Badge>
                <Badge variant="secondary" className="bg-pink-100 text-pink-800 px-4 py-2">
                  <Zap className="h-4 w-4 mr-2" />
                  Instant Responses
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2">
                  <Users className="h-4 w-4 mr-2" />
                  50+ Languages
                </Badge>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm rounded-2xl">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-2xl p-6">
                  <div className="flex items-center justify-between">
                      <div className="flex items-center">
                          <MessageSquare className="mr-3 h-6 w-6" />
                          <CardTitle className="text-xl">AI Assistant Demo</CardTitle>
                      </div>
                      <div className="flex items-center space-x-1">
                          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 h-8 w-8 transform transition-transform hover:scale-110">
                              <History className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 h-8 w-8 transform transition-transform hover:scale-110">
                              <X className="h-4 w-4" />
                          </Button>
                      </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="bg-white/30 rounded-b-2xl flex flex-col h-96">
                    <div className="flex-1 space-y-4 overflow-y-auto p-6">
                      <div className="flex justify-start">
                        <div className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-xl p-4 shadow-lg max-w-sm">
                          <p className="text-sm font-medium">Hi! I'm your AI business assistant. How can I help you today?</p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-4 shadow-lg max-w-sm">
                          <p className="text-sm">What's my customer retention rate this month?</p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-xl p-4 shadow-lg max-w-sm">
                          <p className="text-sm whitespace-pre-wrap break-words">Your customer retention rate this month is 89.2%, which is 12% higher than last month! Would you like me to show you the detailed analytics or suggest strategies to maintain this growth?</p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-4 shadow-lg max-w-sm">
                          <p className="text-sm">Show me the analytics</p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-xl p-4 shadow-lg max-w-sm">
                          <p className="text-sm">📊 Customer Analytics:<br/>• New customers: 247<br/>• Returning: 1,893<br/>• Churn rate: 10.8%<br/>• LTV increased by 23%</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t p-4">
                      <div className="flex items-center space-x-2">
                        <input 
                          type="text" 
                          placeholder="Ask about your business metrics..." 
                          className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                          disabled
                        />
                        <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 transform transition-transform hover:scale-105" disabled>
                          Send
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm rounded-2xl">
                <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6">
                  <CardTitle className="flex items-center text-xl">
                    <Smartphone className="mr-3 h-6 w-6" />
                    Multi-Platform Integration
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg text-center">
                        <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <h4 className="font-semibold text-gray-800 text-sm">Website</h4>
                        <p className="text-xs text-gray-600">Embedded chat</p>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg text-center">
                        <MessageSquare className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <h4 className="font-semibold text-gray-800 text-sm">WhatsApp</h4>
                        <p className="text-xs text-gray-600">Business API</p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg text-center">
                        <Mail className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                        <h4 className="font-semibold text-gray-800 text-sm">Email</h4>
                        <p className="text-xs text-gray-600">Auto-responses</p>
                      </div>
                      <div className="p-4 bg-pink-50 rounded-lg text-center">
                        <ShoppingCart className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                        <h4 className="font-semibold text-gray-800 text-sm">E-commerce</h4>
                        <p className="text-xs text-gray-600">Order support</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center">
                          <Zap className="h-4 w-4 text-emerald-500 mr-2" />
                          Real-time business data access
                        </li>
                        <li className="flex items-center">
                          <Users className="h-4 w-4 text-blue-500 mr-2" />
                          Customer history integration
                        </li>
                        <li className="flex items-center">
                          <BarChart3 className="h-4 w-4 text-purple-500 mr-2" />
                          Advanced analytics reporting
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Strategic Content Insights */}
          <section>
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-full mb-6">
                <Video className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                SEO optimized short form video
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                (Demo) this is a sample video shows how your video clips would look like.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <Badge variant="secondary" className="bg-red-100 text-red-800 px-4 py-2">
                  <Video className="h-4 w-4 mr-2" />
                  Strategic Insights
                </Badge>
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 px-4 py-2">
                  <Target className="h-4 w-4 mr-2" />
                  Focus Techniques
                </Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800 px-4 py-2">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Productivity Tips
                </Badge>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-red-500 to-orange-600 text-white p-6">
                  <CardTitle className="flex items-center text-xl">
                    <Play className="mr-3 h-6 w-6" />
                    David Goggins' Strategy To Avoid Phone Addiction
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative bg-black aspect-video">
                    <video 
                      controls 
                      className="w-full h-full"
                      preload="metadata"
                    >
                      <source src="/src/assets/videos/phone-addiction-strategy.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">
                      Key Takeaways from this Strategy Session:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">1</span>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-800">Mental Discipline</h5>
                          <p className="text-sm text-gray-600">Build unbreakable focus through intentional practice</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">2</span>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-800">Digital Boundaries</h5>
                          <p className="text-sm text-gray-600">Create systems that protect your productivity</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">3</span>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-800">Strategic Mindset</h5>
                          <p className="text-sm text-gray-600">Apply military-grade focus to business growth</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">4</span>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-800">Accountability Systems</h5>
                          <p className="text-sm text-gray-600">Implement checks that keep you on track</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white saturate-150">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Let's create something amazing for your business
          </p>
          <Button 
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 hover:-translate-y-0.5"
            onClick={() => navigate('/#contact-form')}
          >
            <Zap className="mr-2 h-5 w-5" />
            Get Your Custom Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
