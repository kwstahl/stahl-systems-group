import { motion } from "motion/react";
import { useState } from "react";
import { TrendingUp, Zap, DollarSign, ArrowUp } from "lucide-react";

const channelOptions = [
  { name: "Your Store", baseRevenue: 8000, checked: true, locked: true },
  { name: "Amazon", baseRevenue: 15000, checked: false, locked: false },
  { name: "TikTok Shop", baseRevenue: 12000, checked: false, locked: false },
  { name: "Instagram Shop", baseRevenue: 6000, checked: false, locked: false },
  { name: "Walmart", baseRevenue: 10000, checked: false, locked: false },
  { name: "eBay", baseRevenue: 7000, checked: false, locked: false },
];

export function RevenueScaleSimulator() {
  const [monthlyGrowth, setMonthlyGrowth] = useState(15);
  const [averageMargin, setAverageMargin] = useState(35);
  const [selectedChannels, setSelectedChannels] = useState<string[]>(["Your Store"]);

  const toggleChannel = (name: string) => {
    const channel = channelOptions.find(c => c.name === name);
    if (channel?.locked) return;
    
    if (selectedChannels.includes(name)) {
      setSelectedChannels(selectedChannels.filter(c => c !== name));
    } else {
      setSelectedChannels([...selectedChannels, name]);
    }
  };

  // Calculate current month revenue
  const monthOneRevenue = channelOptions
    .filter(c => selectedChannels.includes(c.name))
    .reduce((sum, c) => sum + c.baseRevenue, 0);

  // Project 12 months with growth
  const monthlyRevenues = Array.from({ length: 12 }, (_, i) => {
    return Math.round(monthOneRevenue * Math.pow(1 + monthlyGrowth / 100, i));
  });

  const month12Revenue = monthlyRevenues[11];
  const yearTotal = monthlyRevenues.reduce((sum, r) => sum + r, 0);
  const yearProfit = Math.round(yearTotal * (averageMargin / 100));
  const growthMultiple = (month12Revenue / monthOneRevenue).toFixed(1);

  // Calculate what happens if they add one more channel
  const nextChannel = channelOptions.find(c => !selectedChannels.includes(c.name));
  const potentialIncrease = nextChannel ? nextChannel.baseRevenue : 0;
  const potentialMonth12 = Math.round((monthOneRevenue + potentialIncrease) * Math.pow(1 + monthlyGrowth / 100, 11));

  return (
    <div className="border border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 to-[#0a0a1f] p-8 rounded-2xl backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg">
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Revenue Scale Simulator</h3>
          <p className="text-sm text-slate-500">Watch your revenue compound across channels</p>
        </div>
      </div>

      <div className="mb-8 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
        <p className="text-sm text-slate-300">
          <strong className="text-emerald-400">Add channels. Adjust growth. Watch the money stack.</strong> These numbers 
          are conservative—based on our clients averaging 10-20% monthly growth in year one.
        </p>
      </div>

      {/* Channel Selection */}
      <div className="mb-8">
        <h4 className="text-sm font-medium text-slate-400 mb-3">Select Your Sales Channels:</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {channelOptions.map((channel, index) => {
            const isSelected = selectedChannels.includes(channel.name);
            return (
              <motion.button
                key={index}
                onClick={() => toggleChannel(channel.name)}
                disabled={channel.locked}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  isSelected
                    ? 'border-emerald-500 bg-emerald-500/20'
                    : 'border-slate-800 bg-[#0f0f1f] hover:border-slate-700'
                } ${channel.locked ? 'opacity-70' : ''}`}
                whileHover={channel.locked ? {} : { scale: 1.02 }}
                whileTap={channel.locked ? {} : { scale: 0.98 }}
              >
                <div className="font-semibold text-sm mb-1">{channel.name}</div>
                <div className="text-xs text-emerald-400">
                  +${(channel.baseRevenue / 1000).toFixed(0)}K/mo base
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Sliders */}
      <div className="space-y-6 mb-8">
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-slate-400">
              Monthly Growth Rate
            </label>
            <span className="text-2xl font-bold text-emerald-400">{monthlyGrowth}%</span>
          </div>
          <input
            type="range"
            min="5"
            max="30"
            step="1"
            value={monthlyGrowth}
            onChange={(e) => setMonthlyGrowth(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
          <div className="flex justify-between text-xs text-slate-600 mt-1">
            <span>Conservative (5%)</span>
            <span>Aggressive (30%)</span>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-slate-400">
              Average Profit Margin
            </label>
            <span className="text-2xl font-bold text-emerald-400">{averageMargin}%</span>
          </div>
          <input
            type="range"
            min="15"
            max="60"
            step="5"
            value={averageMargin}
            onChange={(e) => setAverageMargin(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
          <div className="flex justify-between text-xs text-slate-600 mt-1">
            <span>Low Margin (15%)</span>
            <span>High Margin (60%)</span>
          </div>
        </div>
      </div>

      {/* Big Money Numbers */}
      <motion.div
        className="border border-emerald-500/50 bg-gradient-to-br from-emerald-900/30 to-teal-900/30 p-8 rounded-xl mb-6"
        key={`${selectedChannels.length}-${monthlyGrowth}-${averageMargin}`}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div className="text-center">
            <div className="text-slate-400 text-sm mb-2">Month 1 Revenue</div>
            <motion.div 
              className="text-4xl font-bold text-white"
              key={monthOneRevenue}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
            >
              ${monthOneRevenue.toLocaleString()}
            </motion.div>
          </div>
          <div className="text-center">
            <div className="text-slate-400 text-sm mb-2">Month 12 Revenue</div>
            <motion.div 
              className="text-4xl font-bold text-emerald-400"
              key={month12Revenue}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
            >
              ${month12Revenue.toLocaleString()}
            </motion.div>
            <div className="text-xs text-emerald-400 mt-1">
              {growthMultiple}x growth
            </div>
          </div>
          <div className="text-center">
            <div className="text-slate-400 text-sm mb-2">Year 1 Total</div>
            <motion.div 
              className="text-4xl font-bold text-white"
              key={yearTotal}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
            >
              ${yearTotal.toLocaleString()}
            </motion.div>
          </div>
        </div>

        <div className="pt-6 border-t border-emerald-500/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-emerald-400" />
              <span className="text-slate-400">Your Profit (Year 1)</span>
            </div>
            <motion.div 
              className="text-5xl font-bold text-emerald-400"
              key={yearProfit}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
            >
              ${yearProfit.toLocaleString()}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Growth Chart Visual */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-slate-400 mb-3">Monthly Revenue Growth</h4>
        <div className="flex items-end gap-1 h-32">
          {monthlyRevenues.map((revenue, index) => {
            const heightPercent = (revenue / month12Revenue) * 100;
            return (
              <motion.div
                key={index}
                className="flex-1 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t"
                initial={{ height: 0 }}
                animate={{ height: `${heightPercent}%` }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                title={`Month ${index + 1}: $${revenue.toLocaleString()}`}
              />
            );
          })}
        </div>
        <div className="flex justify-between text-xs text-slate-600 mt-2">
          <span>Month 1</span>
          <span>Month 12</span>
        </div>
      </div>

      {/* Next Channel Opportunity */}
      {nextChannel && (
        <motion.div
          className="p-4 bg-gradient-to-r from-orange-600/20 to-amber-600/20 border border-orange-500/50 rounded-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <div className="font-bold text-orange-400 mb-1">Add {nextChannel.name}</div>
                <div className="text-sm text-slate-300">
                  Your Month 12 revenue would jump to <strong className="text-orange-400">${potentialMonth12.toLocaleString()}</strong>
                  <span className="text-orange-400 font-semibold"> (+${(potentialMonth12 - month12Revenue).toLocaleString()})</span>
                </div>
              </div>
            </div>
            <ArrowUp className="w-6 h-6 text-orange-400 flex-shrink-0" />
          </div>
        </motion.div>
      )}

      <div className="mt-8 text-center">
        <a href="/contact">
          <motion.button
            className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-4 rounded-lg font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Build My ${(month12Revenue / 1000).toFixed(0)}K/Month System
          </motion.button>
        </a>
        <p className="text-xs text-slate-500 mt-3">
          These projections assume proper infrastructure and consistent effort
        </p>
      </div>
    </div>
  );
}
