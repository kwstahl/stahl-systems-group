import { motion } from "motion/react";
import { useState } from "react";
import { Rocket, DollarSign, TrendingUp, Sparkles } from "lucide-react";

const launchScenarios = [
  {
    title: "Boutique Brand",
    icon: Sparkles,
    products: 25,
    channels: 3,
    setup: "6-8 weeks",
    investment: "5-10K",
    yearOneRevenue: "150-300K",
    color: "purple",
    description: "Start lean, scale smart"
  },
  {
    title: "Influencer Store",
    icon: TrendingUp,
    products: 10,
    channels: 4,
    setup: "4-6 weeks",
    investment: "3-7K",
    yearOneRevenue: "100-250K",
    color: "pink",
    description: "Monetize your following"
  },
  {
    title: "Established Brand",
    icon: Rocket,
    products: 100,
    channels: 5,
    setup: "8-12 weeks",
    investment: "15-30K",
    yearOneRevenue: "500K-1M+",
    color: "indigo",
    description: "Multi-channel dominance"
  }
];

export function LaunchProjector() {
  const [selectedScenario, setSelectedScenario] = useState(0);
  const [monthlyMarketing, setMonthlyMarketing] = useState("2000");
  
  const scenario = launchScenarios[selectedScenario];
  const marketing = parseFloat(monthlyMarketing) || 2000;
  
  // Calculate projections
  const revenueRange = scenario.yearOneRevenue.split('-');
  const minRevenue = parseInt(revenueRange[0].replace(/[^0-9]/g, '')) * 1000;
  const maxRevenue = parseInt(revenueRange[1].replace(/[^0-9]/g, '')) * 1000;
  const avgRevenue = (minRevenue + maxRevenue) / 2;
  
  const monthlyAvg = avgRevenue / 12;
  const roiMultiplier = (avgRevenue / (parseInt(scenario.investment.split('-')[1].replace('K', '')) * 1000 + (marketing * 12))).toFixed(1);

  return (
    <div className="border border-indigo-500/30 bg-gradient-to-br from-indigo-950/20 to-[#0a0a1f] p-8 rounded-2xl backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg">
          <Rocket className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Launch Projector</h3>
          <p className="text-sm text-slate-500">See what's possible in your first year</p>
        </div>
      </div>
      
      <div className="mb-8 p-4 bg-indigo-500/10 border border-indigo-500/30 rounded-lg">
        <p className="text-sm text-slate-300">
          <strong className="text-indigo-400">Pick your scenario.</strong> See the timeline, investment, 
          and realistic first-year revenue. These are based on real client outcomes.
        </p>
      </div>

      {/* Scenario Selection */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {launchScenarios.map((s, index) => {
          const Icon = s.icon;
          const isSelected = selectedScenario === index;
          return (
            <motion.button
              key={index}
              onClick={() => setSelectedScenario(index)}
              className={`p-6 rounded-xl border-2 transition-all text-left ${
                isSelected
                  ? `border-${s.color}-500 bg-${s.color}-500/20`
                  : 'border-slate-800 bg-[#0f0f1f] hover:border-slate-700'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon className={`w-8 h-8 mb-3 ${isSelected ? `text-${s.color}-400` : 'text-slate-500'}`} />
              <div className="font-bold text-lg mb-1">{s.title}</div>
              <div className="text-xs text-slate-500">{s.description}</div>
            </motion.button>
          );
        })}
      </div>

      {/* Marketing Input */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-slate-400 mb-2">
          Monthly Marketing Budget ($)
        </label>
        <input
          type="number"
          value={monthlyMarketing}
          onChange={(e) => setMonthlyMarketing(e.target.value)}
          className="w-full bg-[#0a0a1f] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
          placeholder="2000"
        />
      </div>

      {/* Projection */}
      <motion.div
        className="space-y-6"
        key={selectedScenario}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Overview */}
        <div className={`border border-${scenario.color}-500/50 bg-${scenario.color}-900/20 p-6 rounded-xl`}>
          <h4 className="text-xl font-bold mb-6">Your Launch Plan</h4>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div>
              <div className="text-slate-500 text-xs mb-1">Products</div>
              <div className="text-2xl font-bold text-white">{scenario.products}</div>
            </div>
            <div>
              <div className="text-slate-500 text-xs mb-1">Channels</div>
              <div className="text-2xl font-bold text-white">{scenario.channels}</div>
            </div>
            <div>
              <div className="text-slate-500 text-xs mb-1">Timeline</div>
              <div className="text-2xl font-bold text-white">{scenario.setup}</div>
            </div>
            <div>
              <div className="text-slate-500 text-xs mb-1">Setup Cost</div>
              <div className="text-2xl font-bold text-white">${scenario.investment}</div>
            </div>
          </div>

          <div className={`pt-6 border-t border-${scenario.color}-500/30`}>
            <div className="text-slate-400 text-sm mb-2">Projected Year 1 Revenue</div>
            <div className={`text-5xl font-bold text-${scenario.color}-400 mb-2`}>
              ${scenario.yearOneRevenue}
            </div>
            <div className="text-slate-500 text-sm">
              ≈ ${(monthlyAvg / 1000).toFixed(0)}K per month average
            </div>
          </div>
        </div>

        {/* ROI Breakdown */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-slate-800 bg-[#0f0f1f] p-6 rounded-xl">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="w-5 h-5 text-emerald-400" />
              <h5 className="font-bold">Total Investment (Year 1)</h5>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Setup & Development</span>
                <span className="text-white font-semibold">${scenario.investment}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Marketing (12 months)</span>
                <span className="text-white font-semibold">${(marketing * 12 / 1000).toFixed(0)}K</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-800">
                <span className="text-white font-semibold">Total</span>
                <span className="text-white font-bold">
                  ${((parseInt(scenario.investment.split('-')[1].replace('K', '')) * 1000 + (marketing * 12)) / 1000).toFixed(0)}K
                </span>
              </div>
            </div>
          </div>

          <div className="border border-emerald-500/50 bg-emerald-900/20 p-6 rounded-xl">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <h5 className="font-bold">Projected ROI</h5>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">
                {roiMultiplier}x
              </div>
              <div className="text-sm text-slate-400">
                Return on investment by end of year 1
              </div>
            </div>
          </div>
        </div>

        {/* Reality Check */}
        <div className="p-4 bg-slate-900/50 rounded-lg text-sm text-slate-400">
          <strong className="text-white">Reality check:</strong> These projections assume consistent effort, 
          quality products, and decent market fit. We build the infrastructure—you bring the hustle.
        </div>
      </motion.div>

      <div className="mt-6 text-center">
        <a href="/contact">
          <motion.button
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Build This
          </motion.button>
        </a>
      </div>
    </div>
  );
}
