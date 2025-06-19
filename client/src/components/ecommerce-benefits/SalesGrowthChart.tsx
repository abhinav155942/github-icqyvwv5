
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis } from "recharts";

interface SalesDataPoint {
  month: string;
  revenue: number;
  aov: number;
}

interface SalesGrowthChartProps {
  data: SalesDataPoint[];
}

const SalesGrowthChart = ({ data }: SalesGrowthChartProps) => {
  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 shadow-xl border border-purple-100">
      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
        💹 Revenue & AOV Growth Trajectory
      </h3>
      <div className="w-full">
        <div className="w-full h-64 md:h-80 lg:h-96">
          <ChartContainer
            config={{
              revenue: { label: "Monthly Revenue", color: "#a855f7" },
              aov: { label: "Average Order Value", color: "#ec4899" }
            }}
            className="w-full h-full"
          >
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis yAxisId="revenue" orientation="left" tick={{ fontSize: 12 }} />
              <YAxis yAxisId="aov" orientation="right" tick={{ fontSize: 12 }} />
              <ChartTooltip
                content={<ChartTooltipContent />}
                formatter={(value, name) => [
                  typeof value === 'number' ? value.toLocaleString() : String(value), 
                  name === "revenue" ? "Monthly Revenue" : "Average Order Value"
                ]}
              />
              <Line
                yAxisId="revenue"
                type="monotone"
                dataKey="revenue"
                stroke="#a855f7"
                strokeWidth={3}
                dot={{ fill: "#a855f7", strokeWidth: 2, r: 4 }}
              />
              <Line
                yAxisId="aov"
                type="monotone"
                dataKey="aov"
                stroke="#ec4899"
                strokeWidth={3}
                strokeDasharray="5 5"
                dot={{ fill: "#ec4899", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ChartContainer>
        </div>
      </div>
      <p className="text-center text-gray-600 mt-3 md:mt-4 italic text-xs md:text-sm lg:text-base">
        "Double your AOV while scaling revenue to 6-figures"
      </p>
    </div>
  );
};

export default SalesGrowthChart;
