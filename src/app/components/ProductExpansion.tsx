import { motion } from "motion/react";
import { Package, Truck, Zap, ShoppingCart, DollarSign, Globe } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Supplier integrations"
  },
  {
    icon: Zap,
    title: "Automated order routing"
  },
  {
    icon: ShoppingCart,
    title: "Real-time product syncing"
  },
  {
    icon: Package,
    title: "Shipping logic configuration"
  },
  {
    icon: DollarSign,
    title: "Margin-aware payment flows"
  },
  {
    icon: Globe,
    title: "Multi-platform distribution"
  }
];

export function ProductExpansion() {
  return (
    <section className="px-6 py-32 bg-[#050510] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Product Expansion<br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              & Distribution
            </span>
          </h2>
          <p className="text-2xl text-slate-300 mb-4">
            Add Products Without Adding Chaos
          </p>
        </motion.div>
        
        <motion.div
          className="max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xl text-slate-400 mb-3 text-center">
            Already have a boutique, brand, or audience?
          </p>
          <p className="text-xl text-white text-center">
            Want to expand into physical products without building a warehouse?
          </p>
        </motion.div>

        <motion.div
          className="border border-purple-500/30 bg-gradient-to-br from-purple-950/20 to-[#0a0a1f] p-12 rounded-2xl backdrop-blur-sm mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-10 text-center">We Build:</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-slate-300">{feature.title}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="text-center space-y-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-xl text-slate-300">
            You focus on brand and growth.
          </p>
          <p className="text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
            We build the system that fulfills it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
