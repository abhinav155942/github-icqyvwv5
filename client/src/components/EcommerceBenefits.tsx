
import SalesGrowthChart from "./ecommerce-benefits/SalesGrowthChart";
import RevenueDistributionChart from "./ecommerce-benefits/RevenueDistributionChart";
import CustomerRetentionChart from "./ecommerce-benefits/CustomerRetentionChart";
import BenefitsList from "./ecommerce-benefits/BenefitsList";
import { benefitsData, salesGrowthData, revenueData, customerRetentionData } from "./ecommerce-benefits/data";

const EcommerceBenefits = () => {
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
            Supercharge your e-commerce business with these powerful advantages
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 max-w-2xl mx-auto mb-8 md:mb-12 border border-purple-100">
            <p className="text-base md:text-lg font-semibold text-purple-800 mb-2">🛍️ E-commerce Success Metrics</p>
            <p className="text-sm md:text-base text-gray-700">Our e-commerce clients see <span className="font-bold text-purple-600">75% revenue increase</span> and <span className="font-bold text-pink-600">67% higher AOV</span> within 2 months</p>
          </div>
        </div>

        {/* Sales Growth Chart */}
        <div className="mb-12 md:mb-16">
          <SalesGrowthChart data={salesGrowthData} />
        </div>

        {/* Revenue Distribution & Customer Retention */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          <RevenueDistributionChart data={revenueData} />
          <CustomerRetentionChart data={customerRetentionData} />
        </div>

        {/* Benefits List */}
        <BenefitsList benefits={benefitsData} />
      </div>
    </section>
  );
};

export default EcommerceBenefits;

