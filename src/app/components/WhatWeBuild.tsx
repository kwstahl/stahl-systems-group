import { motion } from "motion/react";
import { Database, ShoppingCart, Code2, Shield } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Database,
    title: "Revenue Infrastructure",
    color: "from-blue-500 to-cyan-500",
    tagline: "The foundation layer",
    items: [
      "Online stores as your revenue hub",
      "E-commerce systems (Shopify, WooCommerce)",
      "Funnel architecture & conversion paths",
      "Checkout optimization & recovery",
      "Platform integrations & data flow",
      "Tracking & pixel infrastructure",
      "CRM integration & automation"
    ]
  },
  {
    icon: ShoppingCart,
    title: "Multi-Channel Commerce",
    color: "from-purple-500 to-pink-500",
    tagline: "Expansion across platforms",
    items: [
      "TikTok Shop integration",
      "Instagram & Facebook Shop",
      "Amazon marketplace sync",
      "Google Shopping feeds",
      "Email & SMS automation",
      "Inventory synchronization"
    ]
  },
  {
    icon: Code2,
    title: "Custom Development",
    color: "from-indigo-500 to-purple-500",
    tagline: "Built for your business",
    items: [
      "React / Next.js applications",
      "Premium landing pages",
      "Interactive experiences",
      "API integrations",
      "Custom functionality",
      "Performance optimization"
    ]
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    color: "from-violet-500 to-purple-500",
    tagline: "Non-negotiable standards",
    items: [
      "Security audits & hardening",
      "Compliance configuration",
      "Data protection infrastructure",
      "Clean code architecture",
      "Hosting & backup systems",
      "Monitoring & maintenance"
    ]
  }
];

export function WhatWeBuild() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="px-6 py-32 bg-[#0a0a1f] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-500/5 to-transparent rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            What We Build
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            APIs. OAuth flows. Webhooks. SKU sync. Inventory feeds. Order routing.
          </p>
          <p className="text-xl text-white max-w-3xl leading-relaxed">
            But more importantly: <span className="text-indigo-400">we build the systems behind them.</span>
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <motion.div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-xl blur transition-opacity`}
                  animate={{
                    opacity: hoveredIndex === index ? [0.5, 0.8, 0.5] : 0
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <div className="relative border border-slate-800 bg-[#0f0f1f] p-8 rounded-xl hover:border-indigo-500/50 transition-all">
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div
                      className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br ${service.color} rounded-lg`}
                      animate={{ rotate: hoveredIndex === index ? 360 : 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                      <p className="text-sm text-slate-500 uppercase tracking-wider">{service.tagline}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <motion.li 
                        key={i} 
                        className="text-slate-400 flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * i }}
                      >
                        <span className="text-indigo-400 mt-1 font-bold">→</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}