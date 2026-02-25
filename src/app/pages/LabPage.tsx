import { motion } from "motion/react";
import { Sparkles, Star } from "lucide-react";
import { PageMeta } from "../components/PageMeta";
import { InventoryToRevenueCalculator } from "../components/lab/InventoryToRevenueCalculator";
import { MultiChannelCalculator } from "../components/lab/MultiChannelCalculator";
import { ChannelGrowthPredictor } from "../components/lab/ChannelGrowthPredictor";
import { ProfitScaleCalculator } from "../components/lab/ProfitScaleCalculator";

export function LabPage() {
  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 pb-20 overflow-x-hidden">
      <PageMeta 
        title="Revenue Calculators - The Lab"
        description="Free interactive calculators to project your multi-channel revenue. Calculate inventory turnover, profit margins, social selling potential, and scale projections."
      />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4 sm:mb-6"
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 text-indigo-400" />
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6">
            The <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Lab</span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-300 mb-3 sm:mb-4 max-w-3xl mx-auto px-4">
            Sell everywhere. Manage once.
          </p>

          <p className="text-base sm:text-xl text-slate-400 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            Interactive revenue calculators built with the same precision we use for real systems. 
            Play with the numbers. Watch revenue compound. See what happens when systems actually harmonize.
          </p>
        </motion.div>

        {/* Interactive Tools */}
        <div className="space-y-12">
          {/* Call Out Social Selling - MOST FUN */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl" />
            <div className="relative border-2 border-purple-500/50 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-4 border-b border-purple-500/30">
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-purple-400" />
                  <div>
                    <div className="font-bold text-purple-400">FOR INFLUENCERS & CREATORS</div>
                    <div className="text-sm text-slate-400">Turn your followers into revenue</div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <ChannelGrowthPredictor />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MultiChannelCalculator />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ProfitScaleCalculator />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <InventoryToRevenueCalculator />
          </motion.div>
        </div>

        {/* Fun Section */}
        <motion.div
          className="mt-20 border border-indigo-500/30 bg-gradient-to-br from-indigo-950/20 to-[#0a0a1f] p-12 rounded-2xl backdrop-blur-sm text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-6">Built Different</h2>
          <div className="max-w-2xl mx-auto space-y-4 text-slate-400 leading-relaxed">
            <p>
              These tools are built with the same precision we use for client systems. 
              Real formulas. Real data. Real insights.
            </p>
            <p>
              We believe in showing, not telling. These calculators prove we understand 
              the math behind revenue systems.
            </p>
            <p className="text-indigo-400 font-semibold">
              Try them. Break them. Then call us when you need the real thing.
            </p>
          </div>
        </motion.div>

        {/* Easter Egg */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.p
            className="text-slate-600 text-sm"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            Sell everywhere. Manage once.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}