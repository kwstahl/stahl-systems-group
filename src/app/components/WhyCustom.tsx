import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Zap, Crown, Code, Rocket } from 'lucide-react';

export function WhyCustom() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            animation: 'gridPulse 4s ease-in-out infinite',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6 relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 rounded-full blur-2xl opacity-50"
            />
            <div className="relative bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-8 py-4 rounded-full font-black text-2xl shadow-2xl border-4 border-yellow-300 flex items-center gap-3">
              <Crown className="h-8 w-8" />
              THE BEST IN THE RGV
              <Crown className="h-8 w-8" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl mb-6 text-white font-bold">
            Just Look At This Page
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Shopify, WordPress, and template builders are great starting points. We use them too when they fit the need.
          </p>
          <p className="text-2xl text-cyan-400 max-w-3xl mx-auto font-semibold">
            But when you need <em>this</em> level of design and technical power? That's our specialty.
          </p>
        </motion.div>

        {/* Showcase boxes */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-2 border-cyan-400/50 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 text-6xl opacity-10">⚡</div>
            <Code className="h-12 w-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Elite Development</h3>
            <p className="text-gray-300">
              World-class code. Advanced animations. Built to impress and perform.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-2 border-purple-400/50 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 text-6xl opacity-10">⚡</div>
            <Zap className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Blazing Fast</h3>
            <p className="text-gray-300">
              Lightweight. No bloat. Lightning fast. Your users will notice.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-orange-900/50 to-red-900/50 border-2 border-orange-400/50 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 text-6xl opacity-10">🔧</div>
            <Rocket className="h-12 w-12 text-orange-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Trusted Integrations</h3>
            <p className="text-gray-300">
              We connect to enterprise-grade platforms. Reliable, secure, proven technology.
            </p>
          </motion.div>
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-cyan-900/50 via-blue-900/50 to-purple-900/50 border-2 border-cyan-400/50 rounded-2xl p-8 text-center relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-purple-400/10"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Code className="h-10 w-10 text-cyan-400" />
              <h3 className="text-4xl font-bold text-white">Top-Tier Programming</h3>
              <Rocket className="h-10 w-10 text-cyan-400" />
            </div>
            <p className="text-2xl text-gray-300 mb-4">
              <strong className="text-cyan-400">We know code. We know tech.</strong> Better than anyone in the Rio Grande Valley.
            </p>
            <p className="text-lg text-white font-semibold">
              We stitch everything together. We solve it all in one place.
              <br />
              <span className="text-cyan-400 text-xl">That's what we deliver.</span>
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes gridPulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  );
}
