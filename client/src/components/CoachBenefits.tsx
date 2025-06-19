import { CheckCircle, Users, TrendingUp, Clock, DollarSign } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, PieChart, Pie, Cell } from "recharts";

const CoachBenefits = () => {
  const benefits = [
    {
      icon: Users,
      title: "More Quality Leads",
      description: "Attract high-value clients who are ready to invest in your coaching services through optimized funnels."
    },
    {
      icon: Clock,
      title: "24/7 Client Support",
      description: "Your AI chatbot handles client questions and books discovery calls even when you're sleeping."
    },
    {
      icon: TrendingUp,
      title: "Scale Without Burnout",
      description: "Automate repetitive tasks and focus on what you do best - transforming lives through coaching."
    },
    {
      icon: CheckCircle,
      title: "Higher Conversion Rates",
      description: "Professional funnels and viral content that convert prospects into paying clients consistently."
    }
  ];

  const revenueGrowthData = [
    { month: "Week 1", revenue: 15 },
    { month: "Week 2", revenue: 25 },
    { month: "Week 3", revenue: 40 },
    { month: "Week 4", revenue: 55 },
    { month: "Week 5", revenue: 65 },
    { month: "Week 6", revenue: 75 }
  ];

  const conversionData = [
    { name: "Website Visitors", value: 100, color: "#e2e8f0" },
    { name: "Engaged Prospects", value: 35, color: "#cbd5e1" },
    { name: "Discovery Calls", value: 12, color: "#a855f7" },
    { name: "Paying Clients", value: 4.5, color: "#ec4899" }
  ];

  const clientRevenueData = [
    { name: "Service Sales", value: 45, color: "#a855f7" },
    { name: "Course Sales", value: 30, color: "#ec4899" },
    { name: "Consulting", value: 15, color: "#06b6d4" },
    { name: "Affiliate", value: 10, color: "#10b981" }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-gray-800 mb-3 md:mb-4 lg:mb-6">
            How This{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Benefits You
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-4 md:mb-6 lg:mb-8 px-4">
            Transform your coaching business with these powerful advantages
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 md:p-4 lg:p-6 max-w-2xl mx-auto mb-6 md:mb-8 lg:mb-12 border border-purple-100">
            <p className="text-sm md:text-base lg:text-lg font-semibold text-purple-800 mb-2">🚀 Average Client Results</p>
            <p className="text-xs md:text-sm lg:text-base text-gray-700">Our coaching clients see an average of <span className="font-bold text-purple-600">75% revenue increase</span> within 2 months of implementation</p>
          </div>
        </div>

        {/* Revenue Growth Chart */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 shadow-xl border border-purple-100">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
              📈 Typical Revenue Growth Journey
            </h3>
            <div className="w-full">
              <div className="w-full h-64 md:h-80 lg:h-96">
                <ChartContainer 
                  config={{ revenue: { label: "Revenue Growth %", color: "#a855f7" } }}
                  className="w-full h-full"
                >
                  <LineChart data={revenueGrowthData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <ChartTooltip 
                      content={<ChartTooltipContent />}
                      formatter={(value) => [`${value}%`, "Revenue Growth"]}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#a855f7" 
                      strokeWidth={3}
                      dot={{ fill: "#a855f7", strokeWidth: 2, r: 5 }}
                    />
                  </LineChart>
                </ChartContainer>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-3 md:mt-4 italic text-xs md:text-sm lg:text-base">
              "This could be your growth story in just 2 months"
            </p>
          </div>
        </div>

        {/* Success Stories and Client Revenue */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 lg:mb-16">
          <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 shadow-xl border border-purple-100">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
              🎯 Client Conversion Funnel
            </h3>
            <div className="w-full flex justify-center">
              <div className="w-full max-w-sm h-48 md:h-64 lg:h-72">
                <ChartContainer 
                  config={{ visitors: { label: "Conversion Stage" } }}
                  className="w-full h-full"
                >
                  <PieChart>
                    <Pie
                      data={conversionData}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={80}
                      dataKey="value"
                    >
                      {conversionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip 
                      content={<ChartTooltipContent />}
                      formatter={(value, name, props) => {
                        const stageName = props.payload?.name || "Stage";
                        return [`${value}%`, stageName];
                      }}
                    />
                  </PieChart>
                </ChartContainer>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              {conversionData.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-xs md:text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded mr-2" style={{ backgroundColor: item.color }}></div>
                    <span className="text-xs md:text-sm">{item.name}</span>
                  </div>
                  <span className="font-semibold">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 shadow-xl border border-purple-100">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
              💰 $430,026 Total Made by Our Clients
            </h3>
            <div className="text-center mb-4">
              <div className="flex items-center justify-center mb-2">
                <DollarSign className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-green-600 mr-1" />
                <span className="text-xl md:text-2xl lg:text-3xl font-bold text-green-600">430k+</span>
              </div>
              <p className="text-xs md:text-sm lg:text-base text-gray-600 mb-4">Within 2 months • 88+ Success Stories</p>
            </div>
            <div className="w-full flex justify-center">
              <div className="w-full max-w-xs h-40 md:h-48 lg:h-56">
                <ChartContainer 
                  config={{ revenue: { label: "Revenue Distribution" } }}
                  className="w-full h-full"
                >
                  <PieChart>
                    <Pie
                      data={clientRevenueData}
                      cx="50%"
                      cy="50%"
                      innerRadius={20}
                      outerRadius={70}
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
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

export default CoachBenefits;
