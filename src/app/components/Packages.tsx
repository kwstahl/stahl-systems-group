import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { Rocket, TrendingUp, Zap, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ use react-router-dom (unless you're truly on @remix-run/router)

type PackageCard = {
  icon: LucideIcon;
  title: string;
  tagline: string;
  gradient: string;
  featured?: boolean;
  badge?: string; // ✅ optional, fixes TS2339
};

const packages: PackageCard[] = [
  {
    icon: Rocket,
    title: "Store Launch",
    tagline: "Your online store as a hub for all sales channels.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Channel Expansion",
    tagline: "Sell on more platforms.",
    gradient: "from-purple-500 to-pink-500",
    // badge: "NEW", // example if you want it
  },
  {
    icon: Zap,
    title: "Ongoing Support",
    tagline: "We stay on your team.",
    gradient: "from-orange-500 to-red-500",
    featured: true,
    badge: "POPULAR", // ✅ you can put POPULAR here instead of the featured ribbon if you want
  },
];

export function Packages() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="px-6 py-32 bg-[#050510] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.2) 0%, transparent 50%)",
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)",
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
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
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Signature Packages
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.title}
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
                    opacity: hoveredIndex === index ? [0.5, 0.8, 0.5] : 0,
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <div className="relative border border-slate-800 bg-[#0a0a1f] rounded-xl hover:border-indigo-500/50 transition-all p-8 h-full flex flex-col">
                  {/* Keep either featured ribbon OR badge — you can use both if you want */}
                  {pkg.featured && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                      POPULAR
                    </div>
                  )}
                  {pkg.badge && (
                    <div className="absolute top-0 left-0 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-br-lg rounded-tl-lg">
                      {pkg.badge}
                    </div>
                  )}

                  <motion.div
                    className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${pkg.gradient} rounded-lg mb-6`}
                    animate={{ rotate: hoveredIndex === index ? 360 : 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4">{pkg.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{pkg.tagline}</p>
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
            <span className="text-sm text-slate-500 uppercase tracking-wider">
              Also Offering
            </span>
          </div>

          <Link to="/products">
            <motion.div
              className="border border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 to-teal-950/20 p-8 rounded-xl hover:border-emerald-500/50 transition-all group"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Influencer Infrastructure</h3>
              </div>
              <p className="text-slate-400 mb-4">
                Turn your following into direct revenue. We build the product
                distribution infrastructure so you can sell directly from your
                posts on TikTok Shop, Instagram Shop, and beyond—zero inventory,
                automated fulfillment.
              </p>
              <span className="text-emerald-400 text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                Learn more about influencer packages
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}