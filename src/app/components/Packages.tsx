import { motion } from "motion/react";
import { Rocket, TrendingUp, Zap, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const packages = [
  {
    icon: Rocket,
    title: "Store Launch",
    tagline: "Your online store as a hub for all sales channels.",
    gradient: "from-[#1E5BBF] to-[#2F6FD6]"
  },
  {
    icon: TrendingUp,
    title: "Channel Expansion",
    tagline: "Sell on more platforms.",
    gradient: "from-[#2F6FD6] to-[#1E5BBF]"
  },
  {
    icon: Zap,
    title: "Ongoing Support",
    tagline: "We stay on your team.",
    gradient: "from-[#1E5BBF] to-[#2F6FD6]",
    featured: true
  }
];

export function Packages() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="px-6 py-32 bg-[#F7F8FA] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(circle at 50% 50%, rgba(30, 91, 191, 0.05) 0%, transparent 50%)"
        }} />
        <motion.div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 70% 70%, rgba(47, 111, 214, 0.05) 0%, transparent 50%)"
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

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-[#111111]">
            Signature Packages
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
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
                {/* Glowing border effect */}
                <motion.div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${pkg.gradient} rounded-xl blur transition-opacity`}
                  animate={{
                    opacity: hoveredIndex === index ? [0.2, 0.3, 0.2] : 0
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <div className="relative border border-gray-200 bg-white rounded-xl hover:border-[#2F6FD6]/50 transition-all p-8 h-full flex flex-col shadow-sm">
                  {pkg.featured && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-[#1E5BBF] to-[#2F6FD6] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                      POPULAR
                    </div>
                  )}

                  <motion.div
                    className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${pkg.gradient} rounded-lg mb-6`}
                    animate={{ rotate: hoveredIndex === index ? 360 : 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-[#111111]">{pkg.title}</h3>
                  <p className="text-[#666666] leading-relaxed">
                    {pkg.tagline}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Influencer offering - less prominent */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-6">
            <span className="text-sm text-[#666666] uppercase tracking-wider">Also Offering</span>
          </div>
          
          <Link to="/products">
            <motion.div
              className="border border-[#2F6FD6]/20 bg-white p-8 rounded-xl hover:border-[#2F6FD6]/50 transition-all group shadow-sm"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#1E5BBF] to-[#2F6FD6] rounded-lg">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#111111]">Influencer Infrastructure</h3>
              </div>
              <p className="text-[#666666] mb-4">
                Turn your following into direct revenue. We build the dropshipping infrastructure so you can sell directly from your posts on TikTok Shop, Instagram Shop, and beyond—zero inventory, automated fulfillment.
              </p>
              <span className="text-[#2F6FD6] text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                Learn more about influencer packages
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}