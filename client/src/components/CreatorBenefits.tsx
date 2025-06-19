import { CheckCircle, Eye, TrendingUp, DollarSign } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, PieChart, Pie, Cell, AreaChart, Area } from "recharts"; // Removed ResponsiveContainer

const CreatorBenefits = () => {
  const benefits = [
    {
      icon: Eye,
      title: "Massive Reach Growth",
      description: "Turn your long-form content into viral clips that reach millions and grow your audience exponentially."
    },
    {
      icon: DollarSign,
      title: "Multiple Revenue Streams",
      description: "Convert your audience into paying customers with automated funnels and product promotions."
    },
    {
      icon: TrendingUp,
      title: "Consistent Viral Content",
      description: "Never run out of content ideas with AI-powered clip creation and trending hook optimization."
    },
    {
      icon: CheckCircle,
      title: "Engaged Community",
      description: "Keep your audience engaged 24/7 with AI assistants that answer questions and build relationships."
    }
  ];

  const audienceGrowthData = [
    { month: "Month 1", followers: 10, views: 15 },
    { month: "Month 2", followers: 25, views: 35 },
    { month: "Month 3", followers: 50, views: 60 },
    { month: "Month 4", followers: 75, views: 80 },
    { month: "Month 5", followers: 90, views: 95 },
    { month: "Month 6", followers: 100, views: 100 }
  ];

  const contentPerformanceData = [
    { name: "Short-Form Clips", engagement: 85, color: "#a855f7" },
    { name: "Long-Form Content", engagement: 45, color: "#ec4899" },
    { name: "Live Streams", engagement: 62, color: "#06b6d4" },
    { name: "Story Content", engagement: 38, color: "#10b981" }
  ];

  const revenueStreamsData = [
    { source: "Sponsorships", amount: 35 },
    { source: "Course Sales", amount: 25 },
    { source: "Memberships", amount: 20 },
    { source: "Merchandise", amount: 12 },
    { source: "Affiliate", amount: 8 }
  ];

  const clientRevenueData = [
    { name: "Sponsorships", value: 35, color: "#a855f7" },
    { name: "Course Sales", value: 25, color: "#ec4899" },
    { name: "Memberships", value: 20, color: "#06b6d4" },
    { name: "Other", value: 20, color: "#10b981" } // Assuming 'Other' combines Merchandise and Affiliate for simplicity for this pie chart
  ];


  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
            How This{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Benefits You
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            Amplify your content creation and monetization potential
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 max-w-2xl mx-auto mb-8 md:mb-12 border border-purple-100">
            <p className="text-base md:text-lg font-semibold text-purple-800 mb-2">🎬 Creator Success Stats</p>
            <p className="text-sm md:text-base text-gray-700">Our creators achieve <span className="font-bold text-purple-600">75% faster growth</span> and <span className="font-bold text-pink-600">400% more engagement</span> within 2 months</p>
          </div>
        </div>

        {/* Audience Growth Chart (AreaChart) */}
        <div className="mb-12 md:mb-16">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-purple-100">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
              🚀 Growth Progress Over Time
            </h3>
            <div className="w-full flex justify-center">
              <div className="w-full max-w-4xl h-64 md:h-80">
                <ChartContainer config={{ 
                  followers: { label: "Audience Growth", color: "#a855f7" },
                  views: { label: "Content Reach", color: "#ec4899" }
                }}>
                  <AreaChart data={audienceGrowthData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip 
                      content={<ChartTooltipContent />}
                      formatter={(value, name) => [
                        `${Number(value)}%`,
                        name === "followers" ? "Audience Growth" : "Content Reach"
                      ]}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="views" 
                      stackId="1" // Stacking areas might not be ideal if they represent different scales/units. Ensure this is intended.
                      stroke="var(--color-views)" 
                      fill="var(--color-views)"
                      fillOpacity={0.3}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="followers" 
                      stackId="2" // Separate stackId if not meant to be stacked on 'views'
                      stroke="var(--color-followers)" 
                      fill="var(--color-followers)"
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ChartContainer>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-4 italic text-sm md:text-base">
              "Track your growth progress month by month"
            </p>
          </div>
        </div>

        {/* Revenue Distribution & Content Engagement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-purple-100">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
              💰 $430,026 Total Made by Our Clients
            </h3>
            <div className="text-center mb-4">
              <div className="flex items-center justify-center mb-2">
                <DollarSign className="h-5 w-5 md:h-6 md:w-6 text-green-600 mr-1" />
                <span className="text-2xl md:text-3xl font-bold text-green-600">430k+</span>
              </div>
              <p className="text-sm md:text-base text-gray-600 mb-4">Within 2 months • 88+ Success Stories</p>
            </div>
            <div className="w-full flex justify-center">
              <div className="w-full max-w-xs h-32 md:h-48">
                <ChartContainer config={{ revenue: { label: "Revenue Distribution" } }}>
                  <PieChart>
                    <Pie
                      data={clientRevenueData}
                      cx="50%"
                      cy="50%"
                      innerRadius={20}
                      outerRadius={60}
                      dataKey="value"
                    >
                      {clientRevenueData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip 
                      content={<ChartTooltipContent />}
                      formatter={(value, name, props) => {
                        const sourceName = props.payload?.name || "Source";
                        return [`${value}%`, sourceName];
                      }}
                    />
                  </PieChart>
                </ChartContainer>
              </div>
            </div>
            <div className="mt-2 space-y-1">
              {clientRevenueData.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-xs">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded mr-1" style={{ backgroundColor: item.color }}></div>
                    <span className="text-xs">{item.name}</span>
                  </div>
                  <span className="font-semibold text-xs">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-purple-100">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
              📊 Content Engagement Rates
            </h3>
            <div className="w-full flex justify-center">
              <div className="w-full max-w-md h-32 md:h-48">
                <ChartContainer config={{ performance: { label: "Engagement Rate" } }}>
                  <PieChart>
                    <Pie
                      data={contentPerformanceData}
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      dataKey="engagement"
                    >
                      {contentPerformanceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip 
                      content={<ChartTooltipContent />}
                      formatter={(value, name, props) => {
                        const contentName = props.payload?.name || "Content Type";
                        return [`${value}%`, contentName];
                      }}
                    />
                  </PieChart>
                </ChartContainer>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              {contentPerformanceData.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-xs md:text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded mr-2" style={{ backgroundColor: item.color }}></div>
                    <span className="text-xs md:text-sm">{item.name}</span>
                  </div>
                  <span className="font-semibold">{item.engagement}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3 md:space-x-4 p-4 md:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <benefit.icon className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorBenefits;
