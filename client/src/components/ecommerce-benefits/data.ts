
import { CheckCircle, ShoppingCart, TrendingUp, Users } from "lucide-react";

export const benefitsData = [
  {
    icon: ShoppingCart,
    title: "Higher Sales Conversions",
    description: "Optimize your product funnels with upsells and abandoned cart recovery to maximize every visitor."
  },
  {
    icon: Users,
    title: "Better Customer Experience",
    description: "AI assistants help customers find products, answer questions, and guide them through purchases seamlessly."
  },
  {
    icon: TrendingUp,
    title: "Increased Average Order Value",
    description: "Strategic upsells, cross-sells, and product recommendations boost your revenue per customer."
  },
  {
    icon: CheckCircle,
    title: "Automated Marketing",
    description: "Set up once and watch your email sequences, retargeting, and social media ads work around the clock."
  }
];

export const salesGrowthData = [
  { month: "Month 1", revenue: 15, aov: 25 },
  { month: "Month 2", revenue: 28, aov: 35 },
  { month: "Month 3", revenue: 45, aov: 50 },
  { month: "Month 4", revenue: 68, aov: 65 },
  { month: "Month 5", revenue: 85, aov: 78 },
  { month: "Month 6", revenue: 100, aov: 90 }
];

export const revenueData = [
  { name: "Product Sales", value: 60, color: "#a855f7" },
  { name: "Upsells", value: 25, color: "#ec4899" },
  { name: "Cross-sells", value: 10, color: "#06b6d4" },
  { name: "Subscriptions", value: 5, color: "#10b981" }
];

export const customerRetentionData = [
  { metric: "First Purchase", rate: 100 },
  { metric: "Second Purchase", rate: 35 },
  { metric: "Third Purchase", rate: 65 },
  { metric: "Loyal Customer", rate: 78 }
];

// Note: conversionFunnelData was present in the original file but not used in any charts.
// If it's needed for a future chart, it can be added here or its own component.
// For now, I'm omitting it as it's unused.
/*
export const conversionFunnelData = [
  { name: "Website Visitors", value: 100, color: "#e2e8f0" },
  { name: "Product Views", value: 45, color: "#cbd5e1" },
  { name: "Add to Cart", value: 18, color: "#a855f7" },
  { name: "Checkout Started", value: 9, color: "#ec4899" },
  { name: "Purchases", value: 5.4, color: "#10b981" }
];
*/

