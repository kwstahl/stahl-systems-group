import { motion } from "motion/react";
import { ShoppingBag, Globe, Settings } from "lucide-react";

const pillars = [
  {
    icon: ShoppingBag,
    title: "Build Your Store",
    gradient: "from-blue-500 to-cyan-500",
    items: [
      "Online stores as your revenue hub",
      "Shopify & WooCommerce setup",
      "Product & catalog setup",
      "Payments & shipping",
      "Booking & scheduling systems"
    ],
    explanation: "Your website becomes the dashboard for everything."
  },
  {
    icon: Globe,
    title: "Connect Every Channel",
    gradient: "from-purple-500 to-pink-500",
    items: [
      "Amazon",
      "TikTok Shop",
      "Instagram & Facebook Shop",
      "Google Shopping",
      "Pinterest & Etsy",
      "Email & SMS automation"
    ],
    explanation: "Your products shouldn't live in one place."
  },
  {
    icon: Settings,
    title: "Optimize & Protect",
    gradient: "from-indigo-500 to-purple-500",
    items: [
      "Checkout optimization",
      "Security & compliance",
      "Performance improvements",
      "Automation setup",
      "Ongoing support"
    ],
    explanation: "We optimize the systems so they work better for you."
  }
];

export function WhatWeDo() {
  return (
    <section className="px-6 py-32 bg-[#0a0a1f] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-500/5 to-transparent rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-5xl font-bold mb-6">
          What We <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Build</span>
        </h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Sell everywhere. Manage once. We build complete multi-channel infrastructure 
          where inventory, orders, fulfillment, and data flow seamlessly across every platform.
        </p>
      </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div 
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${pillar.gradient} opacity-0 group-hover:opacity-100 rounded-xl blur transition-opacity`}
                />
                
                <div className="relative border border-slate-800 bg-[#0f0f1f] p-8 rounded-xl hover:border-indigo-500/50 transition-all h-full flex flex-col">
                  <motion.div
                    className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${pillar.gradient} rounded-lg mb-6`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold mb-6">{pillar.title}</h3>
                  
                  <ul className="space-y-3 mb-6 flex-1">
                    {pillar.items.map((item, i) => (
                      <li 
                        key={i} 
                        className="text-slate-400 flex items-start gap-3"
                      >
                        <span className={`bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent mt-1 font-bold`}>→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className={`text-lg font-semibold bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent pt-6 border-t border-slate-800/50`}>
                    {pillar.explanation}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}