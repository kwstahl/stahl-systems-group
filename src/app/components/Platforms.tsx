import { motion } from "motion/react";
import { ShoppingCart, Globe, Share2, Package } from "lucide-react";

const platforms = [
  {
    icon: ShoppingCart,
    title: "Core Platforms",
    items: ["Shopify", "WooCommerce", "BigCommerce", "Custom Solutions"],
    gradient: "from-blue-500 to-cyan-500",
    image: "ecommerce platforms"
  },
  {
    icon: Globe,
    title: "Marketplaces",
    items: ["Amazon", "Etsy", "eBay", "Walmart"],
    gradient: "from-purple-500 to-pink-500",
    image: "online marketplace"
  },
  {
    icon: Share2,
    title: "Social Commerce",
    items: ["TikTok Shop", "Instagram Shopping", "Facebook Shop", "Pinterest"],
    gradient: "from-emerald-500 to-teal-500",
    image: "social media shopping"
  },
  {
    icon: Package,
    title: "Distribution",
    items: ["Google Shopping", "Product feeds", "Multi-channel sync", "Direct-to-follower"],
    gradient: "from-orange-500 to-amber-500",
    image: "product distribution"
  }
];

export function Platforms() {
  return (
    <section className="px-6 py-32 bg-[#050510] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            We Connect <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Everything</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Sell everywhere. Manage once.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Card */}
                <div className="relative border border-slate-800 bg-[#0a0a1f] rounded-xl overflow-hidden h-full group-hover:border-indigo-500/50 transition-all">
                  {/* Icon Header */}
                  <div className="p-6">
                    <div className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br ${platform.gradient} rounded-lg mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{platform.title}</h3>
                    <ul className="space-y-2">
                      {platform.items.map((item, i) => (
                        <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                          <span className="text-indigo-400 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-10 rounded-xl blur-xl transition-opacity`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}