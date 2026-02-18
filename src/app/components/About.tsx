import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const ref = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const imageInView = useInView(imageRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 px-6 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <span className="text-blue-600 uppercase tracking-wider text-sm font-medium border border-blue-200 px-4 py-2 rounded-full bg-blue-50">
                About Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6">
              We Build Everything
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="font-bold text-blue-600">Full Shopify stores. Custom websites. Complex integrations.</span> We do it all.
                Whether you need an e-commerce platform from scratch or a custom-coded solution that does exactly what you need—we got you.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                We build and manage the systems that connect all your business tools: 
                Shopify stores, WooCommerce, Wix integrations, call routing, email campaigns, payment processing, CRMs—everything.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                No technical knowledge required. You get simple controls and bulletproof systems 
                that you can't break, no matter how hard you try.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 50 }}
            animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYnVzaW5lc3MlMjBzb2x1dGlvbnN8ZW58MXx8fHwxNzcxMzczOTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Digital solutions"
                className="w-full h-full object-cover"
              />
              {/* Tech overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 mix-blend-overlay"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-2xl shadow-blue-500/50 max-w-xs"
            >
              <p className="text-2xl mb-2">Complex problems.</p>
              <p className="text-2xl">Simple solutions.</p>
              <div className="absolute top-0 left-0 w-full h-full bg-blue-400/20 rounded-xl blur-xl -z-10"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
