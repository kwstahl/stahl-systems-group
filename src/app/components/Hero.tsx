import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Zap } from "lucide-react";
import heroBackground from "../../assets/hero.jpg";


export function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6 py-20 overflow-hidden bg-[#111111]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/70 via-[#111111]/60 to-[#111111]/90" />
        {/* Subtle blue accent overlay */}
        <motion.div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(30, 91, 191, 0.12) 0%, transparent 50%)"
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3]
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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white">
            <span className="block">Build.</span>
            <span className="block bg-gradient-to-r from-[#1E5BBF] to-[#2F6FD6] bg-clip-text text-transparent">
              Sell.
            </span>
            <span className="block">Scale.</span>
          </h1>
        </motion.div>

        <motion.p 
          className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
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
              className="group relative bg-[#1E5BBF] text-white px-10 py-5 rounded-lg overflow-hidden text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-[#2F6FD6]"
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
            className="border-2 border-[#2F6FD6]/40 text-white px-10 py-5 rounded-lg hover:bg-[#2F6FD6]/10 transition-all backdrop-blur-sm text-lg font-semibold"
            whileHover={{ scale: 1.05, borderColor: "rgba(47, 111, 214, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            See How It Works
          </motion.button>
        </motion.div>

        <motion.div
          className="pt-8 border-t border-[#2F6FD6]/20 max-w-3xl mx-auto"
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