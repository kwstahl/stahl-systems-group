import { motion } from "motion/react";
import { Brain, Target, Microscope, Code, TrendingUp } from "lucide-react";
import { PageMeta } from "../components/PageMeta";

export function AboutPage() {
  return (
    <div className="min-h-screen pt-24 px-6 pb-20 bg-[#F7F8FA]">
      <PageMeta 
        title="About Us - Systems-First Approach"
        description="We're not your typical agency. Technical infrastructure specialists with a systems-first, diagnostic approach to revenue infrastructure. Founded by a mathematician with government systems experience."
      />
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-[#111111]">
            About <span className="bg-gradient-to-r from-[#1E5BBF] to-[#2F6FD6] bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-[#666666]">
            We're not your typical agency. We're technical infrastructure specialists with a systems-first approach.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-[#111111]">Our Background</h2>
            <div className="text-[#666666] leading-relaxed space-y-4">
              <p>
                Founded by a mathematician with years of digital infrastructure experience, 
                we approach e-commerce differently. We build revenue systems that 
                connect businesses to every channel that makes them money: Amazon, TikTok Shop, Instagram, and beyond.
              </p>
              <p>
                For brands, that means multi-channel infrastructure that scales reliably. 
                For influencers and creators, that means systems that turn followers into customers—selling 
                directly from posts with low-inventory setups.
              </p>
              <p>
                We bring a diagnostic mindset to every project. Instead of 
                deploying templates and hoping for the best, we investigate what you actually need 
                and build solutions that work at scale.
              </p>
            </div>
          </motion.div>

          {/* Approach */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="border border-gray-200 bg-white p-8 rounded-xl shadow-sm">
              <Brain className="w-12 h-12 text-[#1E5BBF] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-[#111111]">Systems Thinking</h3>
              <p className="text-[#666666] text-sm leading-relaxed">
                We see the big picture. Every component needs to work together smoothly.
              </p>
            </div>

            <div className="border border-gray-200 bg-white p-8 rounded-xl shadow-sm">
              <Microscope className="w-12 h-12 text-[#2F6FD6] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-[#111111]">Deep Diagnostics</h3>
              <p className="text-[#666666] text-sm leading-relaxed">
                We find what's actually broken, not just what looks broken.
              </p>
            </div>

            <div className="border border-gray-200 bg-white p-8 rounded-xl shadow-sm">
              <Target className="w-12 h-12 text-[#1E5BBF] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-[#111111]">Clean Execution</h3>
              <p className="text-[#666666] text-sm leading-relaxed">
                Every integration matters. We build it right the first time.
              </p>
            </div>

            <div className="border border-gray-200 bg-white p-8 rounded-xl shadow-sm">
              <Code className="w-12 h-12 text-[#2F6FD6] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-[#111111]">True Partnership</h3>
              <p className="text-[#666666] text-sm leading-relaxed">
                We're not vendors. We're your technical infrastructure team.
              </p>
            </div>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            className="border border-[#2F6FD6]/20 bg-white p-12 rounded-2xl shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-[#111111]">Our Philosophy</h2>
            <div className="space-y-4 text-[#666666] leading-relaxed">
              <p>
                The technical layer between your business and your revenue channels 
                should be invisible when it works, and obvious when it doesn't.
              </p>
              <p>
                We don't do hype or bro-marketing energy. We do precision, investigation, and 
                partnership. We're the ones you call when things need to actually work.
              </p>
              <p className="text-[#1E5BBF] font-semibold text-center text-xl mt-6">
                Sell everywhere. Manage once.
              </p>
              <p className="text-xl text-[#666666] leading-relaxed mb-6">
                I'm Kevin Stahl. I built government databases and enterprise systems—data science, forensic analysis, 
                HR infrastructure. That same diagnostic precision now powers e-commerce revenue systems. 
                I connect products to every channel that matters, with the technical rigor most agencies can't deliver.
              </p>
              <p className="text-xl text-[#666666] leading-relaxed mb-6">
                Most businesses treat their sales channels like separate entities. Your Shopify store runs on one system, 
                Amazon on another, TikTok Shop somewhere else. Orders get missed. Inventory goes out of sync. Revenue leaks everywhere.
              </p>
              <p className="text-xl text-[#666666] leading-relaxed">
                <strong className="text-[#1E5BBF]">We connect it all.</strong> Your store, your channels, your data—working together like they should.
              </p>
            </div>
          </motion.div>

          {/* What We're Not */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-[#111111]">What We're Not</h2>
            <div className="text-[#666666] leading-relaxed space-y-3">
              <p>× We're not a template shop churning out identical stores</p>
              <p>× We're not promising overnight success or get-rich-quick schemes</p>
              <p>× We're not designers who dabble in code</p>
              <p>× We're not a offshore team you'll never hear from</p>
              <p className="text-emerald-400 font-semibold mt-4">
                ✓ We're technical infrastructure specialists who build systems that last
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}