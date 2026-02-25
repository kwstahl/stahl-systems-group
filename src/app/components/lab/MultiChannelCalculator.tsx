import { motion } from "motion/react";
import { useState } from "react";
import { Target, TrendingUp, Zap, Info, HelpCircle } from "lucide-react";

const channels = [
  { name: "Your Store", baseTraffic: 5000, conversion: 0.02, color: "indigo", editable: true },
  { name: "Amazon", baseTraffic: 2000, conversion: 0.13, color: "orange", editable: false },
  { name: "TikTok Shop", baseTraffic: 8000, conversion: 0.08, color: "pink", editable: false },
  { name: "Instagram Shop", baseTraffic: 12000, conversion: 0.025, color: "purple", editable: false },
];

const trafficPresets = [
  { label: "Conservative", multiplier: 0.5, description: "Starting out" },
  { label: "Moderate", multiplier: 1.0, description: "Realistic growth" },
  { label: "Aggressive", multiplier: 1.5, description: "Strong marketing" },
  { label: "Viral", multiplier: 2.5, description: "Everything clicking" }
];

export function MultiChannelCalculator() {
  const [averageOrderValue, setAverageOrderValue] = useState("75");
  const [targetRevenue, setTargetRevenue] = useState("10000");
  const [storeConversion, setStoreConversion] = useState("2");
  const [trafficMultiplier, setTrafficMultiplier] = useState(1.0);
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  const aov = parseFloat(averageOrderValue) || 75;
  const target = parseFloat(targetRevenue) || 10000;
  const storeConv = parseFloat(storeConversion) / 100 || 0.02;
  
  const salesNeeded = Math.ceil(target / aov);
  
  // Calculate per-channel breakdown with traffic multiplier
  const channelBreakdown = channels.map(channel => {
    const adjustedTraffic = Math.floor(channel.baseTraffic * trafficMultiplier);
    const conversionRate = channel.name === "Your Store" ? storeConv : channel.conversion;
    const conversionsFromChannel = Math.floor(adjustedTraffic * conversionRate);
    const revenueFromChannel = conversionsFromChannel * aov;
    return {
      ...channel,
      traffic: adjustedTraffic,
      conversions: conversionsFromChannel,
      revenue: revenueFromChannel
    };
  });

  const totalRevenue = channelBreakdown.reduce((sum, ch) => sum + ch.revenue, 0);
  const totalConversions = channelBreakdown.reduce((sum, ch) => sum + ch.conversions, 0);
  const singleChannelTraffic = Math.ceil(salesNeeded / storeConv);
  const multiChannelTraffic = channelBreakdown.reduce((sum, ch) => sum + ch.traffic, 0);

  const revenueVsGoal = totalRevenue >= target;
  const revenuePercent = ((totalRevenue / target) * 100).toFixed(0);

  return (
    <div className="border border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 to-[#0a0a1f] p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-sm overflow-hidden">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex-shrink-0">
            <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Multi-Channel Revenue Simulator</h3>
            <p className="text-xs sm:text-sm text-slate-500">See how selling everywhere changes everything</p>
          </div>
        </div>
      </div>
      
      <div className="mb-6 p-3 sm:p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
        <div className="flex items-start gap-2">
          <Zap className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-300">
            <strong className="text-emerald-400">Play with the numbers.</strong> Adjust your goals, 
            traffic expectations, and see how multi-channel makes hitting your numbers way easier.
          </div>
        </div>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">
            Average Order Value ($)
          </label>
          <input
            type="number"
            value={averageOrderValue}
            onChange={(e) => setAverageOrderValue(e.target.value)}
            className="w-full bg-[#0a0a1f] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">
            Monthly Revenue Goal ($)
          </label>
          <input
            type="number"
            value={targetRevenue}
            onChange={(e) => setTargetRevenue(e.target.value)}
            className="w-full bg-[#0a0a1f] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>

        <div className="relative">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-400 mb-2">
            Your Store Conversion Rate (%)
            <div 
              className="relative"
              onMouseEnter={() => setShowTooltip("conversion")}
              onMouseLeave={() => setShowTooltip(null)}
            >
              <HelpCircle className="w-4 h-4 text-slate-500 cursor-help" />
              {showTooltip === "conversion" && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs z-50">
                  <div className="text-white font-semibold mb-1">Industry Averages:</div>
                  <div className="text-slate-400">
                    • Fashion: 1-2%<br/>
                    • Electronics: 2-3%<br/>
                    • Beauty: 2.5-3.5%<br/>
                    • Luxury: 0.5-1%
                  </div>
                </div>
              )}
            </div>
          </label>
          <input
            type="number"
            step="0.1"
            value={storeConversion}
            onChange={(e) => setStoreConversion(e.target.value)}
            className="w-full bg-[#0a0a1f] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>
      </div>

      {/* Traffic Presets */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-slate-400 mb-3">
          Traffic Scenario:
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {trafficPresets.map((preset, index) => (
            <motion.button
              key={index}
              onClick={() => setTrafficMultiplier(preset.multiplier)}
              className={`p-3 rounded-lg border-2 transition-all ${
                trafficMultiplier === preset.multiplier
                  ? 'border-emerald-500 bg-emerald-500/20'
                  : 'border-slate-800 bg-[#0f0f1f] hover:border-slate-700'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="font-semibold text-sm">{preset.label}</div>
              <div className="text-xs text-slate-500 mt-1">{preset.description}</div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Single Channel Reality */}
      <div className="mb-6 p-6 border border-slate-700 bg-[#0f0f1f] rounded-xl">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-slate-500"></div>
          <h4 className="font-bold text-slate-300">Single Channel (Your Store Only)</h4>
          <div 
            className="relative ml-auto"
            onMouseEnter={() => setShowTooltip("single")}
            onMouseLeave={() => setShowTooltip(null)}
          >
            <HelpCircle className="w-4 h-4 text-slate-500 cursor-help" />
            {showTooltip === "single" && (
              <div className="absolute bottom-full right-0 mb-2 w-72 bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs z-50">
                <div className="text-white font-semibold mb-1">How this is calculated:</div>
                <div className="text-slate-400">
                  Sales Needed = Revenue Goal ÷ AOV<br/>
                  Traffic Needed = Sales Needed ÷ Conversion Rate<br/><br/>
                  This is how much traffic you'd need to hit your goal selling ONLY through your store.
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <div className="text-slate-500 text-xs mb-1">Sales Needed</div>
            <div className="font-bold text-xl text-white">{salesNeeded}</div>
          </div>
          <div>
            <div className="text-slate-500 text-xs mb-1">Traffic Needed</div>
            <div className="font-bold text-xl text-white">{singleChannelTraffic.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-slate-500 text-xs mb-1">Conversion</div>
            <div className="font-bold text-xl text-white">{(storeConv * 100).toFixed(1)}%</div>
          </div>
        </div>
      </div>

      {/* Multi-Channel Reality */}
      <div className="mb-6 p-6 border border-emerald-500/50 bg-emerald-900/20 rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-emerald-400" />
            <h4 className="font-bold text-emerald-400">Multi-Channel (With Our System)</h4>
            <div 
              className="relative"
              onMouseEnter={() => setShowTooltip("multi")}
              onMouseLeave={() => setShowTooltip(null)}
            >
              <HelpCircle className="w-4 h-4 text-emerald-400 cursor-help" />
              {showTooltip === "multi" && (
                <div className="absolute bottom-full left-0 mb-2 w-72 bg-slate-900 border border-emerald-700 rounded-lg p-3 text-xs z-50">
                  <div className="text-emerald-400 font-semibold mb-1">Multi-Channel Magic:</div>
                  <div className="text-slate-300">
                    Each channel has different traffic patterns and conversion rates. Amazon converts 5-6x better than Instagram because buying intent is higher.<br/><br/>
                    The traffic scenario slider adjusts ALL channels proportionally based on your marketing strength.
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-emerald-400">${totalRevenue.toLocaleString()}</div>
            <div className="text-xs text-slate-400">{revenuePercent}% of goal</div>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          {channelBreakdown.map((channel, index) => (
            <motion.div
              key={index}
              className="p-4 bg-[#0f0f1f] rounded-lg border border-slate-800"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full bg-${channel.color}-400`}></div>
                  <span className="font-semibold text-sm">{channel.name}</span>
                </div>
                <span className="text-emerald-400 font-bold text-sm">
                  ${channel.revenue.toLocaleString()}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs text-slate-500">
                <div>{channel.traffic.toLocaleString()} visitors</div>
                <div>{channel.conversions} sales</div>
                <div>{((channel.name === "Your Store" ? storeConv : channel.conversion) * 100).toFixed(1)}% conv.</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-700">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-slate-500 mb-1">Total Traffic Needed</div>
              <div className="font-bold text-xl text-white">{multiChannelTraffic.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-slate-500 mb-1">Total Sales</div>
              <div className="font-bold text-xl text-white">{totalConversions}</div>
            </div>
          </div>
        </div>
      </div>

      {/* The Insight */}
      <motion.div
        className={`p-6 border rounded-xl ${
          revenueVsGoal 
            ? 'bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border-emerald-500/50' 
            : 'bg-gradient-to-r from-orange-600/20 to-amber-600/20 border-orange-500/50'
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-start gap-3">
          <TrendingUp className={`w-6 h-6 flex-shrink-0 mt-1 ${revenueVsGoal ? 'text-emerald-400' : 'text-orange-400'}`} />
          <div>
            <h4 className={`font-bold mb-2 ${revenueVsGoal ? 'text-emerald-400' : 'text-orange-400'}`}>
              {revenueVsGoal ? "You'd Exceed Your Goal! 🎉" : "Room to Grow"}
            </h4>
            <p className="text-sm text-slate-300 mb-3">
              {revenueVsGoal ? (
                <>With multi-channel, you'd hit <strong>${totalRevenue.toLocaleString()}/mo</strong> — that's <strong>${(totalRevenue - target).toLocaleString()} more</strong> than your ${target.toLocaleString()} goal. And you only need <strong>{multiChannelTraffic.toLocaleString()} total visitors</strong> split across channels vs <strong>{singleChannelTraffic.toLocaleString()} to one store</strong>.</>
              ) : (
                <>You'd hit <strong>${totalRevenue.toLocaleString()}/mo</strong> with this traffic level. Try adjusting to "Aggressive" or "Viral" scenarios to see what it takes to hit ${target.toLocaleString()}, or adjust your conversion rates.</>
              )}
            </p>
            <p className="text-xs text-slate-400">
              This is what we build. Systems that make your numbers achievable.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="mt-6 text-center">
        <a href="/contact">
          <motion.button
            className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Build My Multi-Channel System
          </motion.button>
        </a>
      </div>
    </div>
  );
}