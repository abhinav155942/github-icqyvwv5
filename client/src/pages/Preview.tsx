import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MessageSquare, TrendingUp, Video, Bot, Zap, Play, History, X, Target, Users, DollarSign, BarChart3, ShoppingCart, Mail, Globe, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import GrowthCharts from "@/components/GrowthCharts";

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
            AI Solutions Built for Coaches & Consultants
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our automation transforms your coaching business into a client-acquisition machine with zero effort
          </p>
        </div>

        {/* Growth Charts Section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Real Growth Results
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Actual performance data from our coaching clients who implemented our automation systems
            </p>
          </div>
          <GrowthCharts />
        </section>

        {/* Preview Sections */}
        <div className="space-y-24">
          {/* Sales Funnel Setup */}
          <section>
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-6">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Coaching Client Acquisition Funnel
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                Turn prospects into high-paying coaching clients with 100% automated follow-up sequences
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 px-4 py-2">
                  <Target className="h-4 w-4 mr-2" />
                  73% Client Conversion
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2">
                  <Users className="h-4 w-4 mr-2" />
                  2,400+ Coaching Leads
                </Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800 px-4 py-2 text-[13px]">
                  <DollarSign className="h-4 w-4 mr-2" />
                  $89k+ Coach Revenue
                </Badge>
              </div>
            </div>

            {/* Automation Workflow */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-center text-gray-800 mb-8">Zero-Effort Client Acquisition Process</h4>
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white mb-8">
                <div className="grid md:grid-cols-5 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">1</span>
                    </div>
                    <h5 className="font-semibold mb-2">Prospect Visits</h5>
                    <p className="text-sm text-white/90">Client interested in coaching finds your funnel</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">2</span>
                    </div>
                    <h5 className="font-semibold mb-2">Details Captured</h5>
                    <p className="text-sm text-white/90">Name, email & phone automatically collected & stored</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">3</span>
                    </div>
                    <h5 className="font-semibold mb-2">Instant Email</h5>
                    <p className="text-sm text-white/90">Welcome email sent automatically from your brand</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">4</span>
                    </div>
                    <h5 className="font-semibold mb-2">5 Follow-Ups</h5>
                    <p className="text-sm text-white/90">Emails sent every 2 days with value & booking links</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">5</span>
                    </div>
                    <h5 className="font-semibold mb-2">Client Converts</h5>
                    <p className="text-sm text-white/90">Prospect books discovery call & becomes paying client</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-12">
              <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6">
                  <CardTitle className="flex items-center text-xl">
                    <BarChart3 className="mr-3 h-6 w-6" />
                    Coaching Results Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg">
                      <span className="font-medium text-gray-700">Discovery Call Requests</span>
                      <span className="text-2xl font-bold text-emerald-600">847</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                      <span className="font-medium text-gray-700">Qualified Coaching Leads</span>
                      <span className="text-2xl font-bold text-blue-600">623</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                      <span className="font-medium text-gray-700">Paying Coaching Clients</span>
                      <span className="text-2xl font-bold text-purple-600">184</span>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="text-center">
                        <span className="text-3xl font-bold text-emerald-600">29.5%</span>
                        <p className="text-gray-600">Lead to Client Conversion</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6">
                  <CardTitle className="flex items-center text-xl">
                    <Mail className="mr-3 h-6 w-6" />
                    Email Sequence Preview
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">0</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Welcome Email</h4>
                        <p className="text-sm text-gray-600">Instant delivery + coaching framework PDF</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Value Email</h4>
                        <p className="text-sm text-gray-600">Day 2: Transformation case study</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg">
                      <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Discovery Call</h4>
                        <p className="text-sm text-gray-600">Day 4: Book free strategy session</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">10</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Final Follow-up</h4>
                        <p className="text-sm text-gray-600">Day 10: Last chance to connect</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* AI Coach Assistant */}
          <section>
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
                <Bot className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                AI Coach Assistant
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                Smart chatbot trained on your coaching methodology to qualify leads and answer client questions 24/7
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <Badge variant="secondary" className="bg-purple-100 text-purple-800 px-4 py-2">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  24/7 Lead Qualification
                </Badge>
                <Badge variant="secondary" className="bg-pink-100 text-pink-800 px-4 py-2">
                  <Zap className="h-4 w-4 mr-2" />
                  Instant Client Support
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2">
                  <Users className="h-4 w-4 mr-2" />
                  92% Lead Qualification
                </Badge>
              </div>
            </div>

            {/* How AI Coach Assistant Works */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-center text-gray-800 mb-8">How Your AI Coach Works for You</h4>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-8">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="h-8 w-8" />
                    </div>
                    <h5 className="font-semibold mb-2">Visitor Arrives</h5>
                    <p className="text-sm text-white/90">Potential client visits your website or social media</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Bot className="h-8 w-8" />
                    </div>
                    <h5 className="font-semibold mb-2">AI Engages</h5>
                    <p className="text-sm text-white/90">Chatbot starts conversation about their coaching needs</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8" />
                    </div>
                    <h5 className="font-semibold mb-2">Qualifies Lead</h5>
                    <p className="text-sm text-white/90">Asks qualifying questions & assesses coaching fit</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-8 w-8" />
                    </div>
                    <h5 className="font-semibold mb-2">Books Call</h5>
                    <p className="text-sm text-white/90">Schedules discovery call directly in your calendar</p>
                  </div>
                </div>
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
                          <p className="text-sm font-medium">Hi! I'm here to help you explore life coaching. What specific area would you like to transform?</p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-4 shadow-lg max-w-sm">
                          <p className="text-sm">I'm struggling with work-life balance and feeling overwhelmed</p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-xl p-4 shadow-lg max-w-sm">
                          <p className="text-sm whitespace-pre-wrap break-words">That's very common for high-achievers. Our coaching program helps executives create sustainable balance systems. Can you tell me about your current work schedule and what "overwhelmed" looks like for you?</p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-4 shadow-lg max-w-sm">
                          <p className="text-sm">I work 60+ hours and never have time for family</p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-xl p-4 shadow-lg max-w-sm">
                          <p className="text-sm">I understand. You sound like a perfect fit for our Executive Balance Program. Would you like to book a free 30-minute strategy session to create your personalized plan?</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t p-4">
                      <div className="flex items-center space-x-2">
                        <input 
                          type="text" 
                          placeholder="Tell me about your goals..." 
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
                        <p className="text-xs text-gray-600">Client portal chat</p>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg text-center">
                        <MessageSquare className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <h4 className="font-semibold text-gray-800 text-sm">WhatsApp</h4>
                        <p className="text-xs text-gray-600">Client check-ins</p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg text-center">
                        <Mail className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                        <h4 className="font-semibold text-gray-800 text-sm">Email</h4>
                        <p className="text-xs text-gray-600">Session reminders</p>
                      </div>
                      <div className="p-4 bg-pink-50 rounded-lg text-center">
                        <Users className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                        <h4 className="font-semibold text-gray-800 text-sm">Social Media</h4>
                        <p className="text-xs text-gray-600">Lead generation</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <h4 className="font-semibold text-gray-800 mb-3">Coaching-Specific Features:</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center">
                          <Zap className="h-4 w-4 text-emerald-500 mr-2" />
                          Goal tracking & accountability
                        </li>
                        <li className="flex items-center">
                          <Users className="h-4 w-4 text-blue-500 mr-2" />
                          Session booking automation
                        </li>
                        <li className="flex items-center">
                          <BarChart3 className="h-4 w-4 text-purple-500 mr-2" />
                          Client success tracking
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Viral Content Clips */}
          <section>
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-full mb-6">
                <Video className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Viral Content Clips for Coaches
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                Transform your coaching wisdom into viral short-form videos that attract ideal clients automatically
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <Badge variant="secondary" className="bg-red-100 text-red-800 px-4 py-2">
                  <Video className="h-4 w-4 mr-2" />
                  15-60 Second Clips
                </Badge>
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 px-4 py-2">
                  <Target className="h-4 w-4 mr-2" />
                  2.3M+ Views Generated
                </Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800 px-4 py-2">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  467% Engagement Boost
                </Badge>
              </div>
            </div>

            {/* Content Creation Workflow */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-center text-gray-800 mb-8">Automated Content Creation Process</h4>
              <div className="bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl p-8 text-white mb-8">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Video className="h-8 w-8" />
                    </div>
                    <h5 className="font-semibold mb-2">Upload Session</h5>
                    <p className="text-sm text-white/90">Send us your coaching session recording or live stream</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Bot className="h-8 w-8" />
                    </div>
                    <h5 className="font-semibold mb-2">AI Editing</h5>
                    <p className="text-sm text-white/90">Our AI identifies viral moments and creates optimized clips</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8" />
                    </div>
                    <h5 className="font-semibold mb-2">Hook Creation</h5>
                    <p className="text-sm text-white/90">Adds compelling hooks and captions that stop the scroll</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8" />
                    </div>
                    <h5 className="font-semibold mb-2">Auto-Post</h5>
                    <p className="text-sm text-white/90">Scheduled across all platforms to maximize reach</p>
                  </div>
                </div>
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
                      <source src="./assets/videos/phone-addiction-strategy.mp4" type="video/mp4" />
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

          {/* Professional Coach Website */}
          <section>
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mb-6">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Professional Coach Website
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                Complete coaching website with booking system, client portal, and conversion optimization
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2">
                  <Globe className="h-4 w-4 mr-2" />
                  Mobile Responsive
                </Badge>
                <Badge variant="secondary" className="bg-cyan-100 text-cyan-800 px-4 py-2">
                  <Users className="h-4 w-4 mr-2" />
                  Client Portal Included
                </Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800 px-4 py-2">
                  <Target className="h-4 w-4 mr-2" />
                  89% Booking Rate
                </Badge>
              </div>
            </div>

            {/* Website Creation Workflow */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-center text-gray-800 mb-8">Complete Website Setup Process</h4>
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-8 text-white mb-8">
                <div className="grid md:grid-cols-5 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">1</span>
                    </div>
                    <h5 className="font-semibold mb-2">Content Audit</h5>
                    <p className="text-sm text-white/90">We analyze your coaching niche and ideal client</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">2</span>
                    </div>
                    <h5 className="font-semibold mb-2">Design & Build</h5>
                    <p className="text-sm text-white/90">Custom design with booking calendar integration</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">3</span>
                    </div>
                    <h5 className="font-semibold mb-2">SEO Setup</h5>
                    <p className="text-sm text-white/90">Optimized for local coaching searches</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">4</span>
                    </div>
                    <h5 className="font-semibold mb-2">Client Portal</h5>
                    <p className="text-sm text-white/90">Secure area for resources and progress tracking</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">5</span>
                    </div>
                    <h5 className="font-semibold mb-2">Launch & Support</h5>
                    <p className="text-sm text-white/90">Go live with ongoing maintenance included</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-12">
              <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-6">
                  <CardTitle className="flex items-center text-xl">
                    <Globe className="mr-3 h-6 w-6" />
                    Website Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">About & Services</h4>
                        <p className="text-sm text-gray-600">Professional coaching bio and service descriptions</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-lg">
                      <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Client Testimonials</h4>
                        <p className="text-sm text-gray-600">Success stories and transformation highlights</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Contact & Booking</h4>
                        <p className="text-sm text-gray-600">Direct calendar integration for session booking</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-6">
                  <CardTitle className="flex items-center text-xl">
                    <Smartphone className="mr-3 h-6 w-6" />
                    Client Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">What Clients Experience:</h4>
                      <div className="space-y-3 text-sm text-gray-600">
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Easy 2-click booking process</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Automated appointment confirmations</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>Access to coaching resources 24/7</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span>Progress tracking dashboard</span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t text-center">
                      <span className="text-2xl font-bold text-blue-600">47%</span>
                      <p className="text-gray-600 text-sm">Increase in client bookings vs. basic websites</p>
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
