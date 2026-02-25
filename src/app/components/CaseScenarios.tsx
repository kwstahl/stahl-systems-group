import { motion } from "motion/react";
import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

const scenarios = [
  {
    problem: {
      title: "Infrastructure Leak",
      points: [
        "Single sales channel limiting growth",
        "Manual processes causing errors and delays",
        "Checkout abandonment at 73%",
        "No visibility into customer journey",
        "Data scattered across disconnected tools"
      ]
    },
    solution: {
      title: "Systems Diagnosis & Rebuild",
      points: [
        "Multi-channel sync across 5 platforms",
        "Automated workflows eliminating manual work",
        "Checkout optimization: abandonment down to 41%",
        "Full customer journey tracking and analytics",
        "Unified data system with clean architecture"
      ]
    }
  },
  {
    problem: {
      title: "Marketing Without Foundation",
      points: [
        "Running campaigns with broken tracking",
        "Unable to identify what's actually converting",
        "Security vulnerabilities in checkout flow",
        "Scaling attempts causing system failures",
        "No reliable data for decision-making"
      ]
    },
    solution: {
      title: "Foundation-First Reconstruction",
      points: [
        "100% tracking accuracy across all channels",
        "Complete conversion path visibility",
        "Security audit and compliance hardening",
        "Scalable infrastructure tested under load",
        "Real-time analytics for confident decisions"
      ]
    }
  }
];

export function CaseScenarios() {
  return (
    <section className="px-6 py-32 bg-[#050510] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Problem
            </span>
            {" → "}
            <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              Solution
            </span>
          </h2>
          <p className="text-xl text-slate-400">
            We analyze what's broken. We secure what matters. We scale what works.
          </p>
        </motion.div>
        
        <div className="space-y-16">
          {scenarios.map((scenario, index) => (
            <motion.div 
              key={index}
              className="grid lg:grid-cols-[1fr,auto,1fr] gap-8 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Problem */}
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
                    <h3 className="text-2xl font-bold text-red-400">The Problem</h3>
                  </div>
                  <h4 className="text-xl text-slate-300 mb-6 font-semibold">{scenario.problem.title}</h4>
                  <ul className="space-y-3">
                    {scenario.problem.points.map((point, i) => (
                      <motion.li 
                        key={i} 
                        className="text-slate-400 flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <span className="text-red-500/70 mt-1 text-lg">×</span>
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
              
              {/* Solution */}
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
                    <h3 className="text-2xl font-bold text-emerald-400">Our Solution</h3>
                  </div>
                  <h4 className="text-xl text-white mb-6 font-semibold">{scenario.solution.title}</h4>
                  <ul className="space-y-3">
                    {scenario.solution.points.map((point, i) => (
                      <motion.li 
                        key={i} 
                        className="text-slate-300 flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <span className="text-emerald-400 mt-1">✓</span>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-slate-400 text-lg mb-2">
            The difference? <span className="text-indigo-400 font-semibold">Systems thinking.</span> Investigation. Precision.
          </p>
          <p className="text-slate-500">
            We treat your business like our own.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
