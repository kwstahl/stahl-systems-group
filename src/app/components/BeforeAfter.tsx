import { motion } from "motion/react";
import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

export function BeforeAfter() {
  return (
    <section className="px-6 py-32 bg-[#0a0a1f] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Before
            </span>
            {" → "}
            <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              After
            </span>
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid lg:grid-cols-[1fr,auto,1fr] gap-8 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Before */}
          <motion.div 
            className="relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-30 rounded-xl blur-lg transition-opacity"
            />
            <div className="relative border border-red-900/50 bg-gradient-to-br from-red-950/20 to-[#0a0a1f] p-8 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <AlertCircle className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-red-400">Messy System</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Selling on one platform only",
                  "Manual fulfillment and errors",
                  "Checkout abandonment",
                  "No visibility into performance",
                  "Disconnected tools"
                ].map((point, i) => (
                  <motion.li 
                    key={i} 
                    className="text-slate-400 flex items-start gap-3 text-lg"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <span className="text-red-500/70 mt-1 text-xl">×</span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* Arrow */}
          <div className="hidden lg:flex justify-center">
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowRight className="w-12 h-12 text-indigo-500" />
            </motion.div>
          </div>
          
          {/* After */}
          <motion.div 
            className="relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-emerald-500 opacity-0 group-hover:opacity-30 rounded-xl blur-lg transition-opacity"
            />
            <div className="relative border border-indigo-500/50 bg-gradient-to-br from-indigo-950/20 to-[#0f0f1f] p-8 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-500/20 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-400">Clean System</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Multi-channel distribution",
                  "Automated order routing",
                  "Optimized checkout",
                  "Complete tracking visibility",
                  "Unified, secure infrastructure"
                ].map((point, i) => (
                  <motion.li 
                    key={i} 
                    className="text-slate-300 flex items-start gap-3 text-lg"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <span className="text-emerald-400 mt-1 text-xl">✓</span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-slate-400 text-xl">
            The difference?<br />
            <span className="text-indigo-400 font-semibold text-2xl">Structure.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
