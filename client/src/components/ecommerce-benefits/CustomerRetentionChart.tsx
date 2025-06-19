
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

interface RetentionDataPoint {
  metric: string;
  rate: number;
}

interface CustomerRetentionChartProps {
  data: RetentionDataPoint[];
}

const CustomerRetentionChart = ({ data }: CustomerRetentionChartProps) => {
  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 shadow-xl border border-purple-100">
      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
        🔄 Customer Retention Rates
      </h3>
      <div className="w-full">
        <div className="w-full h-48 md:h-64 lg:h-80">
          <ChartContainer
            config={{
              rate: { label: "Retention Rate", color: "#10b981" }
            }}
            className="w-full h-full"
          >
            <BarChart data={data} layout="horizontal" margin={{ top: 10, right: 10, left: 80, bottom: 10 }}>
              <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 12 }} />
              <YAxis dataKey="metric" type="category" width={80} tick={{ fontSize: 11 }} />
              <ChartTooltip
                content={<ChartTooltipContent />}
                formatter={(value) => [`${value}%`, "Retention Rate"]}
              />
              <Bar dataKey="rate" fill="#10b981" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
      <div className="mt-3 md:mt-4 bg-green-50 p-3 md:p-4 rounded-lg">
        <p className="text-green-800 font-semibold text-center text-xs md:text-sm lg:text-base">
          78% of customers become repeat buyers!
        </p>
      </div>
    </div>
  );
};

export default CustomerRetentionChart;
