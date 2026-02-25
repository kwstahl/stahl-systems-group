import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Zap } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a1f]/50 to-[#0a0a1f]" />
        <motion.div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.15) 0%, transparent 50%)"
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <motion.div 
        className="relative z-10 text-center max-w-5xl"
        style={{ opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block">Build.</span>
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sell.
            </span>
            <span className="block">Scale.</span>
          </h1>
        </motion.div>

        <motion.p 
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We connect your products to every channel that makes you money.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/contact">
            <motion.button 
              className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-5 rounded-lg overflow-hidden text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative flex items-center gap-2">
                Start Selling
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </Link>
          
          <motion.button 
            className="border-2 border-indigo-500/50 px-10 py-5 rounded-lg hover:bg-indigo-500/10 transition-all backdrop-blur-sm text-lg font-semibold"
            whileHover={{ scale: 1.05, borderColor: "rgba(99, 102, 241, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            See How It Works
          </motion.button>
        </motion.div>

        <motion.div
          className="pt-8 border-t border-indigo-500/20 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-slate-300 text-xl font-semibold">
            Amazon · TikTok Shop · Instagram Shop · Shopify · Walmart · WooCommerce
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}