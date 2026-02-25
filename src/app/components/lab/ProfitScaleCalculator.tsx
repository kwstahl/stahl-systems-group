import { motion } from "motion/react";
import { useState } from "react";
import { Percent, TrendingUp, DollarSign, AlertCircle } from "lucide-react";

const productTypes = [
  { name: "Physical Products", avgMargin: 35, shippingCost: 8 },
  { name: "Digital Products", avgMargin: 85, shippingCost: 0 },
  { name: "Services", avgMargin: 70, shippingCost: 0 },
  { name: "Subscription", avgMargin: 60, shippingCost: 0 },
];

const volumeTiers = [
  { min: 0, max: 50, label: "1-50 orders/mo", platformFee: 3.5, paymentFee: 2.9 },
  { min: 50, max: 200, label: "50-200 orders/mo", platformFee: 2.5, paymentFee: 2.7 },
  { min: 200, max: 500, label: "200-500 orders/mo", platformFee: 2.0, paymentFee: 2.5 },
  { min: 500, max: 99999, label: "500+ orders/mo", platformFee: 1.5, paymentFee: 2.2 },
];

export function ProfitScaleCalculator() {
  const [productType, setProductType] = useState(0);
  const [monthlyOrders, setMonthlyOrders] = useState(100);
  const [averageOrderValue, setAverageOrderValue] = useState(75);
  const [cogs, setCogs] = useState(40);

  const product = productTypes[productType];
  const tier = volumeTiers.find(t => monthlyOrders >= t.min && monthlyOrders <= t.max) || volumeTiers[0];

  // Calculate everything
  const grossRevenue = monthlyOrders * averageOrderValue;
  const productCost = (cogs / 100) * grossRevenue;
  const shippingCosts = product.shippingCost * monthlyOrders;
  const platformFees = (tier.platformFee / 100) * grossRevenue;
  const paymentFees = (tier.paymentFee / 100) * grossRevenue + (monthlyOrders * 0.30);
  
  const totalCosts = productCost + shippingCosts + platformFees + paymentFees;
  const netProfit = grossRevenue - totalCosts;
  const profitMargin = (netProfit / grossRevenue) * 100;

  // Show what happens at next tier
  const nextTier = volumeTiers[Math.min(volumeTiers.indexOf(tier) + 1, volumeTiers.length - 1)];
  const isAtMaxTier = tier === nextTier;
  
  const nextTierOrders = isAtMaxTier ? monthlyOrders * 1.5 : nextTier.min;
  const nextTierRevenue = nextTierOrders * averageOrderValue;
  const nextTierPlatformFee = (nextTier.platformFee / 100) * nextTierRevenue;
  const nextTierPaymentFee = (nextTier.paymentFee / 100) * nextTierRevenue + (nextTierOrders * 0.30);
  const nextTierProductCost = (cogs / 100) * nextTierRevenue;
  const nextTierShipping = product.shippingCost * nextTierOrders;
  const nextTierTotalCosts = nextTierProductCost + nextTierShipping + nextTierPlatformFee + nextTierPaymentFee;
  const nextTierProfit = nextTierRevenue - nextTierTotalCosts;
  const profitIncrease = nextTierProfit - netProfit;

  return (
    <div className="border border-indigo-500/30 bg-gradient-to-br from-indigo-950/20 to-[#0a0a1f] p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-sm overflow-hidden">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex-shrink-0">
          <Percent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Profit Scale Calculator</h3>
          <p className="text-xs sm:text-sm text-slate-500">See how margins improve as you scale</p>
        </div>
      </div>

      <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-indigo-500/10 border border-indigo-500/30 rounded-lg">
        <p className="text-xs sm:text-sm text-slate-300">
          <strong className="text-indigo-400">Volume unlocks better fees.</strong> Multi-channel systems hit volume 
          tiers faster, which means better margins at lower revenue levels.
        </p>
      </div>

      {/* Product Type Selection */}
      <div className="mb-6 sm:mb-8">
        <h4 className="text-sm font-medium text-slate-400 mb-3">Product Type:</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {productTypes.map((type, index) => (
            <motion.button
              key={index}
              onClick={() => setProductType(index)}
              className={`p-4 rounded-lg border-2 transition-all ${
                productType === index
                  ? 'border-indigo-500 bg-indigo-500/20'
                  : 'border-slate-800 bg-[#0f0f1f] hover:border-slate-700'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="font-semibold text-sm">{type.name}</div>
              <div className="text-xs text-indigo-400 mt-1">{type.avgMargin}% avg margin</div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Sliders */}
      <div className="space-y-6 mb-8">
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-slate-400">Monthly Orders</label>
            <span className="text-2xl font-bold text-indigo-400">{monthlyOrders}</span>
          </div>
          <input
            type="range"
            min="10"
            max="1000"
            step="10"
            value={monthlyOrders}
            onChange={(e) => setMonthlyOrders(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
          <div className="text-xs text-indigo-400 mt-1">
            Current tier: {tier.label}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-slate-400">Average Order Value ($)</label>
            <span className="text-2xl font-bold text-indigo-400">{averageOrderValue}</span>
          </div>
          <input
            type="range"
            min="20"
            max="300"
            step="5"
            value={averageOrderValue}
            onChange={(e) => setAverageOrderValue(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-slate-400">Cost of Goods Sold (%)</label>
            <span className="text-2xl font-bold text-indigo-400">{cogs}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="70"
            step="5"
            value={cogs}
            onChange={(e) => setCogs(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
        </div>
      </div>

      {/* Current State */}
      <motion.div
        className="border border-indigo-500/50 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 p-6 rounded-xl mb-6"
        key={`${monthlyOrders}-${averageOrderValue}-${cogs}`}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <h4 className="text-lg font-bold mb-4">Current Numbers</h4>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <div className="text-slate-400 text-sm mb-2">Gross Revenue</div>
            <div className="text-3xl font-bold text-white">${grossRevenue.toLocaleString()}</div>
            <div className="text-xs text-slate-500 mt-1">{monthlyOrders} orders × ${averageOrderValue}</div>
          </div>
          <div>
            <div className="text-slate-400 text-sm mb-2">Net Profit</div>
            <div className="text-3xl font-bold text-emerald-400">${netProfit.toLocaleString()}</div>
            <div className="text-xs text-emerald-400 mt-1">{profitMargin.toFixed(1)}% margin</div>
          </div>
        </div>

        <div className="pt-4 border-t border-indigo-500/30">
          <h5 className="text-sm font-semibold text-slate-400 mb-3">Cost Breakdown:</h5>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">Product Costs ({cogs}%)</span>
              <span className="text-white font-semibold">${productCost.toLocaleString()}</span>
            </div>
            {product.shippingCost > 0 && (
              <div className="flex justify-between">
                <span className="text-slate-400">Shipping (${product.shippingCost}/order)</span>
                <span className="text-white font-semibold">${shippingCosts.toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-slate-400">Platform Fees ({tier.platformFee}%)</span>
              <span className="text-white font-semibold">${platformFees.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Payment Processing ({tier.paymentFee}%)</span>
              <span className="text-white font-semibold">${paymentFees.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scale Opportunity */}
      {!isAtMaxTier && (
        <motion.div
          className="p-6 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border border-emerald-500/50 rounded-xl mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-start gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-emerald-400 mb-2">Scale to Next Tier</h4>
              <p className="text-sm text-slate-300 mb-3">
                At <strong>{nextTierOrders} orders/mo</strong>, you'd unlock the <strong>{nextTier.label}</strong> tier
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-slate-400 text-xs mb-1">Revenue</div>
              <div className="text-xl font-bold text-white">${(nextTierRevenue / 1000).toFixed(0)}K</div>
            </div>
            <div>
              <div className="text-slate-400 text-xs mb-1">Profit</div>
              <div className="text-xl font-bold text-emerald-400">${(nextTierProfit / 1000).toFixed(0)}K</div>
            </div>
            <div>
              <div className="text-slate-400 text-xs mb-1">Profit Increase</div>
              <div className="text-xl font-bold text-emerald-400">+${(profitIncrease / 1000).toFixed(0)}K</div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Annual Numbers */}
      <div className="p-6 bg-slate-900/50 rounded-lg mb-6">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="w-5 h-5 text-indigo-400" />
          <h4 className="font-bold">Annual Projection</h4>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="text-slate-500 text-xs mb-1">Yearly Revenue</div>
            <div className="text-2xl font-bold text-white">${(grossRevenue * 12 / 1000).toFixed(0)}K</div>
          </div>
          <div>
            <div className="text-slate-500 text-xs mb-1">Yearly Profit</div>
            <div className="text-2xl font-bold text-emerald-400">${(netProfit * 12 / 1000).toFixed(0)}K</div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a href="/contact">
          <motion.button
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-lg font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Build My ${(netProfit * 12 / 1000).toFixed(0)}K Profit System
          </motion.button>
        </a>
      </div>
    </div>
  );
}