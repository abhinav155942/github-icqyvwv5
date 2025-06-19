
import { DollarSign } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";

interface RevenueDataItem {
  name: string;
  value: number;
  color: string;
}

interface RevenueDistributionChartProps {
  data: RevenueDataItem[];
}

const RevenueDistributionChart = ({ data }: RevenueDistributionChartProps) => {
  return (
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
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={20}
                outerRadius={70}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip
                content={<ChartTooltipContent />}
                formatter={(value) => [`${value}%`, "Revenue Share"]}
              />
            </PieChart>
          </ChartContainer>
        </div>
      </div>
      <div className="mt-2 space-y-1">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between text-xs md:text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded mr-1 md:mr-2" style={{ backgroundColor: item.color }}></div>
              <span>{item.name}</span>
            </div>
            <span className="font-semibold">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueDistributionChart;
