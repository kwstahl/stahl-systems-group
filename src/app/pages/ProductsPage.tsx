import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { PageMeta } from "../components/PageMeta";

const products = [
  {
    icon: Check,
    title: "Store Launch",
    gradient: "from-blue-500 to-cyan-500",
    description: "Complete online store setup from scratch",
    features: [
      "Shopify or WooCommerce installation",
      "Theme customization & branding",
      "Product catalog setup",
      "Payment gateway integration",
      "Shipping configuration",
      "Basic SEO setup"
    ],
    timeline: "2-4 weeks",
    startingAt: "Custom Quote"
  },
  {
    icon: Check,
    title: "Channel Expansion",
    gradient: "from-purple-500 to-pink-500",
    description: "Connect your store to multiple sales channels",
    features: [
      "Amazon integration",
      "TikTok Shop setup",
      "Instagram & Facebook Shop",
      "Google Shopping feed",
      "Pinterest & Etsy connections",
      "Multi-channel inventory sync"
    ],
    timeline: "1-3 weeks",
    startingAt: "Custom Quote"
  },
  {
    icon: Check,
    title: "Ongoing Support",
    gradient: "from-orange-500 to-red-500",
    description: "We stay on your team and manage your tech",
    features: [
      "Monthly maintenance & updates",
      "Priority support access",
      "Performance monitoring",
      "New feature implementation",
      "Emergency troubleshooting",
      "Strategic tech guidance"
    ],
    timeline: "Monthly Retainer",
    startingAt: "Custom Quote",
    popular: true
  },
  {
    icon: Check,
    title: "Influencer Dropship Setup",
    gradient: "from-emerald-500 to-teal-500",
    description: "Turn your following into revenue with zero inventory",
    features: [
      "TikTok Shop integration",
      "Instagram Shop setup",
      "Dropshipping supplier connections",
      "Direct-to-follower sales system",
      "Automated order fulfillment",
      "Low-inventory product testing"
    ],
    timeline: "1-3 weeks",
    startingAt: "Custom Quote",
    badge: "FOR INFLUENCERS"
  }
];

export function ProductsPage() {
  return (
    <div className="min-h-screen pt-24 px-6 pb-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.2) 0%, transparent 50%)"
        }} />
        <motion.div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)"
          }}
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <PageMeta 
        title="Packages & Pricing"
        description="From single-channel launches to complete multi-platform revenue systems. Choose the package that fits your business: Foundation, Multi-Channel, or Enterprise."
      />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Everything you need to build, connect, and scale your online revenue system.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-100 rounded-2xl blur transition-opacity`}
                />
                
                <div className="relative border border-slate-800 bg-[#0f0f1f] p-8 rounded-2xl hover:border-indigo-500/50 transition-all h-full">
                  {product.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
                      POPULAR
                    </div>
                  )}
                  {product.badge && (
                    <div className="absolute top-0 left-0 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-br-lg rounded-tl-xl">
                      {product.badge}
                    </div>
                  )}

                  <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${product.gradient} rounded-lg mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-3">{product.title}</h3>
                  <p className="text-slate-400 mb-6">{product.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className={`bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent mt-1`}>✓</span>
                        <span className="text-slate-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-slate-800/50 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-500">Timeline</span>
                      <span className="text-sm font-semibold text-white">{product.timeline}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-500">Investment</span>
                      <span className="text-sm font-semibold text-white">{product.startingAt}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Solutions */}
        <motion.div
          className="border border-indigo-500/30 bg-gradient-to-br from-indigo-950/20 to-[#0a0a1f] p-12 rounded-2xl backdrop-blur-sm text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold mb-4">Need Something Custom?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Every business is different. If you need a custom solution or combination of services, let's talk.
          </p>
          <Link to="/contact">
            <motion.button
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Call
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}