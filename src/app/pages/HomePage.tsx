import { WhatWeDo } from "../components/WhatWeDo";
import { Platforms } from "../components/Platforms";
import { WhoThisIsFor } from "../components/WhoThisIsFor";
import { HowItWorks } from "../components/HowItWorks";
import { Packages } from "../components/Packages";
import { Hero } from "../components/Hero";
import { PageMeta } from "../components/PageMeta";
import { motion } from "motion/react";
import { DollarSign, Package, Percent, TrendingUp, ArrowRight } from "lucide-react";

export function HomePage() {
  return (
    <>
      <PageMeta 
        title="Multi-Channel E-Commerce Revenue Systems"
        description="We build revenue systems that connect your business to every sales channel—Amazon, TikTok Shop, Instagram, Walmart, and beyond. Sell everywhere. Manage once."
      />
      <Hero />
      <WhatWeDo />
      <Platforms />
      <WhoThisIsFor />
      <HowItWorks />
      <Packages />

      {/* Lab Calculators Showcase - Revenue Porn Section */}
      <motion.div
        className="mb-32"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="text-center mb-12">
          <motion.div
            className="inline-block mb-4"
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <DollarSign className="w-12 h-12 text-emerald-400" />
          </motion.div>
          <h2 className="text-5xl font-bold mb-4">
            See What's <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Possible</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Play with real numbers. Watch revenue compound. Get excited about what your business could do.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Calculator 1 */}
          <motion.a
            href="/lab"
            className="group border border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 to-[#0a0a1f] p-8 rounded-2xl backdrop-blur-sm hover:border-emerald-500/60 transition-all hover:shadow-xl hover:shadow-emerald-500/20"
            whileHover={{ scale: 1.02, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg mb-4 group-hover:scale-110 transition-transform">
              <Package className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
              Inventory → Revenue
            </h3>
            <p className="text-slate-400 mb-4">
              See how fast you can turn your products into profit across multiple channels.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold group-hover:gap-3 transition-all">
              <span>Calculate Now</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </motion.a>

          {/* Calculator 2 */}
          <motion.a
            href="/lab"
            className="group border border-indigo-500/30 bg-gradient-to-br from-indigo-950/20 to-[#0a0a1f] p-8 rounded-2xl backdrop-blur-sm hover:border-indigo-500/60 transition-all hover:shadow-xl hover:shadow-indigo-500/20"
            whileHover={{ scale: 1.02, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg mb-4 group-hover:scale-110 transition-transform">
              <Percent className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">
              Profit at Scale
            </h3>
            <p className="text-slate-400 mb-4">
              Watch how margins improve as you hit volume tiers. Multi-channel gets you there faster.
            </p>
            <div className="flex items-center gap-2 text-indigo-400 font-semibold group-hover:gap-3 transition-all">
              <span>Run the Numbers</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </motion.a>

          {/* Calculator 3 */}
          <motion.a
            href="/lab"
            className="group border border-purple-500/30 bg-gradient-to-br from-purple-950/20 to-[#0a0a1f] p-8 rounded-2xl backdrop-blur-sm hover:border-purple-500/60 transition-all hover:shadow-xl hover:shadow-purple-500/20"
            whileHover={{ scale: 1.02, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
              Social Selling
            </h3>
            <p className="text-slate-400 mb-4">
              For influencers: Turn your followers directly into revenue with TikTok & Instagram Shop.
            </p>
            <div className="flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-3 transition-all">
              <span>See Your Potential</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </motion.a>
        </div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <p className="text-sm text-slate-500">
            Interactive calculators built with the same precision we use for real client systems
          </p>
        </motion.div>
      </motion.div>

      {/* Final CTA */}
      <motion.div
        className="text-center border border-indigo-500/30 bg-gradient-to-br from-indigo-950/20 to-purple-950/20 p-16 rounded-3xl backdrop-blur-sm relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        {/* Background gradient effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            background: "radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.4) 0%, transparent 50%)"
          }} />
          <motion.div 
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)"
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative z-10">
          <h2 className="text-5xl font-bold mb-6">
            Ready to <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Scale</span> Your Revenue?
          </h2>
          <p className="text-xl text-slate-300 mb-3 max-w-2xl mx-auto font-light">
            Sell everywhere. Manage once.
          </p>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Let's connect your products to every channel that makes you money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact">
              <motion.button
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-5 rounded-lg font-semibold text-xl hover:shadow-2xl hover:shadow-indigo-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start the Conversation
              </motion.button>
            </a>
            <a href="/lab">
              <motion.button
                className="border border-indigo-500/50 text-indigo-400 px-12 py-5 rounded-lg font-semibold text-xl hover:bg-indigo-500/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Play with the Numbers First
              </motion.button>
            </a>
          </div>
          <p className="text-sm text-slate-500 mt-6">
            Or email <a href="mailto:kevin@stahlsystemsgroup.com" className="text-indigo-400 hover:text-indigo-300">kevin@stahlsystemsgroup.com</a> · 
            Call <a href="tel:9568788083" className="text-indigo-400 hover:text-indigo-300">(956) 878-8083</a>
          </p>
        </div>
      </motion.div>
    </>
  );
}