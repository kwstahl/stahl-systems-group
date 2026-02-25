import { motion } from "motion/react";
import { useState } from "react";
import { Target, TrendingUp, Zap, Info } from "lucide-react";

const channels = [
  { name: "Your Store", traffic: 5000, conversion: 0.02, color: "indigo" },
  { name: "Amazon", traffic: 2000, conversion: 0.13, color: "orange" },
  { name: "TikTok Shop", traffic: 8000, conversion: 0.08, color: "pink" },
  { name: "Instagram Shop", traffic: 12000, conversion: 0.02, color: "purple" },
];

export function BreakEvenCalculator() {
  const [averageOrderValue, setAverageOrderValue] = useState("75");
  const [targetRevenue, setTargetRevenue] = useState("10000");

  const aov = parseFloat(averageOrderValue) || 75;
  const target = parseFloat(targetRevenue) || 10000;
  
  const salesNeeded = Math.ceil(target / aov);
  
  // Calculate per-channel breakdown
  const channelBreakdown = channels.map(channel => {
    const conversionsFromChannel = Math.floor(channel.traffic * channel.conversion);
    const revenueFromChannel = conversionsFromChannel * aov;
    return {
      ...channel,
      conversions: conversionsFromChannel,
      revenue: revenueFromChannel
    };
  });

  const totalRevenue = channelBreakdown.reduce((sum, ch) => sum + ch.revenue, 0);
  const totalConversions = channelBreakdown.reduce((sum, ch) => sum + ch.conversions, 0);
  
  const singleChannelTraffic = Math.ceil(salesNeeded / 0.02); // Assuming 2% conversion for single store
  const multiChannelTraffic = channels.reduce((sum, ch) => sum + ch.traffic, 0);
  
  const trafficMultiplier = (singleChannelTraffic / multiChannelTraffic).toFixed(1);

  return (
    <div className="border border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 to-[#0a0a1f] p-8 rounded-2xl backdrop-blur-sm">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Multi-Channel Revenue Calculator</h3>
            <p className="text-sm text-slate-500">See why selling everywhere is easier than selling in one place</p>
          </div>
        </div>
      </div>
      
      <div className="mb-8 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
        <div className="flex items-start gap-2">
          <Info className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-slate-300">
            <strong className="text-emerald-400">What this shows:</strong> When you sell on multiple channels, 
            you need WAY less traffic per channel to hit your revenue goals. We set this up for you.
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">
            Average Order Value ($)
          </label>
          <input
            type="number"
            value={averageOrderValue}
            onChange={(e) => setAverageOrderValue(e.target.value)}
            className="w-full bg-[#0a0a1f] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
            placeholder="75"
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
            placeholder="10000"
          />
        </div>
      </div>

      {/* Single Channel Reality */}
      <div className="mb-6 p-6 border border-slate-700 bg-[#0f0f1f] rounded-xl">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-slate-500"></div>
          <h4 className="font-bold text-slate-300">Single Channel (Your Store Only)</h4>
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
            <div className="font-bold text-xl text-white">2%</div>
          </div>
        </div>
        <div className="mt-3 text-xs text-slate-500">
          You need {singleChannelTraffic.toLocaleString()} visitors to your ONE store
        </div>
      </div>

      {/* Multi-Channel Reality */}
      <div className="mb-6 p-6 border border-emerald-500/50 bg-emerald-900/20 rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-emerald-400" />
            <h4 className="font-bold text-emerald-400">Multi-Channel (With Our System)</h4>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-emerald-400">${totalRevenue.toLocaleString()}</div>
            <div className="text-xs text-slate-400">Projected Revenue</div>
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
                <div>{(channel.conversion * 100).toFixed(1)}% conv.</div>
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
        className="p-6 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border border-emerald-500/50 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-start gap-3">
          <TrendingUp className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-emerald-400 mb-2">The Multi-Channel Advantage</h4>
            <p className="text-sm text-slate-300 mb-3">
              Instead of needing <strong>{singleChannelTraffic.toLocaleString()} visitors to one store</strong>, 
              you need <strong>{multiChannelTraffic.toLocaleString()} total visitors split across all channels</strong>. 
              {totalRevenue >= target && (
                <span className="text-emerald-400 font-semibold"> You'd actually exceed your goal by ${(totalRevenue - target).toLocaleString()}.</span>
              )}
            </p>
            <p className="text-xs text-slate-400">
              This is what we build. Multi-channel systems that make hitting your numbers easier, not harder.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="mt-6 text-center">
        <a href="/contact">
          <motion.button
            className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Build Your Multi-Channel System
          </motion.button>
        </a>
      </div>
    </div>
  );
}
