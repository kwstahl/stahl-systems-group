import { motion } from "motion/react";
import { Star, TrendingUp, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function InfluencerCallout() {
  return (
    <section className="px-6 py-20 bg-gradient-to-br from-emerald-950/30 via-[#0a0a1f] to-teal-950/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 30% 50%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)"
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

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="border border-emerald-500/40 bg-gradient-to-br from-emerald-950/40 to-teal-950/40 p-12 md:p-16 rounded-3xl backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6 justify-center">
            <motion.div
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-8 h-8 text-emerald-400 fill-emerald-400" />
            </motion.div>
            <span className="text-emerald-400 font-bold text-sm tracking-wider uppercase">For Influencers & Creators</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            Turn Your Following Into{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Direct Revenue
            </span>
          </h2>

          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto text-center leading-relaxed">
            You've built the audience. We build the infrastructure to sell directly from your posts—
            <span className="text-emerald-400 font-semibold"> TikTok Shop, Instagram Shop, dropshipping setups with zero inventory risk.</span>
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              className="text-center p-6 bg-[#0a0a1f]/50 rounded-xl border border-emerald-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg mb-4 mx-auto">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Direct-to-Follower Sales</h3>
              <p className="text-slate-400">Sell from your posts. No middleman. Your brand, your profit.</p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-[#0a0a1f]/50 rounded-xl border border-emerald-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg mb-4 mx-auto">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Zero Inventory Risk</h3>
              <p className="text-slate-400">Dropshipping infrastructure. Test products without buying stock.</p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-[#0a0a1f]/50 rounded-xl border border-emerald-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg mb-4 mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Automated Fulfillment</h3>
              <p className="text-slate-400">You create content. We handle the tech. Orders flow automatically.</p>
            </motion.div>
          </div>

          <div className="text-center">
            <Link to="/products">
              <motion.button
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-5 rounded-lg font-semibold text-lg inline-flex items-center gap-2 shadow-xl shadow-emerald-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See the Influencer Package
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <p className="text-slate-500 mt-4 text-sm">
              1-3 week setup · TikTok Shop + Instagram Shop + Dropshipping
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
