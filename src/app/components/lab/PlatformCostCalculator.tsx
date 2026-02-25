import { motion } from "motion/react";
import { useState } from "react";
import { DollarSign, Percent, TrendingUp, Calculator } from "lucide-react";

const platforms = [
  { name: "Shopify", cost: 29, transaction: 2.9 },
  { name: "WooCommerce", cost: 0, transaction: 2.9, hosting: 25 },
  { name: "Squarespace", cost: 27, transaction: 3.0 },
  { name: "BigCommerce", cost: 29.95, transaction: 2.9 }
];

export function PlatformCostCalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState("10000");
  const [averageOrderValue, setAverageOrderValue] = useState("50");

  const calculate = (platform: typeof platforms[0]) => {
    const revenue = parseFloat(monthlyRevenue) || 0;
    const aov = parseFloat(averageOrderValue) || 1;
    const orders = revenue / aov;
    
    const platformCost = platform.cost;
    const hostingCost = platform.hosting || 0;
    const transactionFees = (revenue * platform.transaction) / 100;
    const paymentProcessing = (revenue * 2.9) / 100 + (orders * 0.30);
    
    const total = platformCost + hostingCost + transactionFees + paymentProcessing;
    const percentage = (total / revenue) * 100;
    
    return {
      platformCost,
      hostingCost,
      transactionFees,
      paymentProcessing,
      total,
      percentage
    };
  };

  return (
    <div className="border border-indigo-500/30 bg-gradient-to-br from-indigo-950/20 to-[#0a0a1f] p-8 rounded-2xl backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold">Platform Cost Calculator</h3>
      </div>
      
      <p className="text-slate-400 mb-6">
        See the real cost of running on different platforms
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">
            Monthly Revenue ($)
          </label>
          <input
            type="number"
            value={monthlyRevenue}
            onChange={(e) => setMonthlyRevenue(e.target.value)}
            className="w-full bg-[#0a0a1f] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
            placeholder="10000"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">
            Average Order Value ($)
          </label>
          <input
            type="number"
            value={averageOrderValue}
            onChange={(e) => setAverageOrderValue(e.target.value)}
            className="w-full bg-[#0a0a1f] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
            placeholder="50"
          />
        </div>
      </div>

      <div className="space-y-4">
        {platforms.map((platform, index) => {
          const costs = calculate(platform);
          return (
            <motion.div
              key={index}
              className="border border-slate-800 bg-[#0f0f1f] p-6 rounded-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold">{platform.name}</h4>
                <div className="text-right">
                  <div className="text-2xl font-bold text-indigo-400">
                    ${costs.total.toFixed(2)}
                  </div>
                  <div className="text-xs text-slate-500">
                    {costs.percentage.toFixed(2)}% of revenue
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="text-slate-400">
                  Platform: <span className="text-white">${costs.platformCost}</span>
                </div>
                {costs.hostingCost > 0 && (
                  <div className="text-slate-400">
                    Hosting: <span className="text-white">${costs.hostingCost}</span>
                  </div>
                )}
                <div className="text-slate-400">
                  Transaction: <span className="text-white">${costs.transactionFees.toFixed(2)}</span>
                </div>
                <div className="text-slate-400">
                  Processing: <span className="text-white">${costs.paymentProcessing.toFixed(2)}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-slate-900/50 rounded-lg text-sm text-slate-400">
        <strong className="text-white">Note:</strong> This doesn't include apps, plugins, or custom development. 
        Real costs are usually 2-3x higher.
      </div>
    </div>
  );
}
