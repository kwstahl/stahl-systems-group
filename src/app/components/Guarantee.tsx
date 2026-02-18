import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Shield, CheckCircle, Clock, Phone, Zap } from 'lucide-react';

const guarantees = [
  {
    icon: Shield,
    title: 'No BS Guarantee',
    description: 'We tell you exactly what you need, not what makes us the most money. If WordPress is better for you, we\'ll tell you. That\'s integrity.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We give you a timeline upfront. We stick to it. No endless delays, no excuses. Your launch date matters to us.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Phone,
    title: 'Direct Access',
    description: 'Text us. Call us. Email us. No ticket systems, no automated responses. You get real human support when you need it.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: CheckCircle,
    title: 'Built Right, Once',
    description: 'Clean code. Solid architecture. We build it right the first time so you\'re not paying for fixes and patches down the road.',
    color: 'from-orange-500 to-red-500',
  },
];

export function Guarantee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-40"></div>
            <span className="relative text-blue-400 uppercase tracking-wider text-sm font-bold border-2 border-blue-400/50 px-6 py-2 rounded-full backdrop-blur-sm bg-slate-900/80 inline-flex items-center gap-2 shadow-2xl">
              <Shield className="h-4 w-4 text-cyan-400" />
              Zero Risk
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl mb-6 text-white font-black">
            What You Can
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              Count On
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            These aren't just promises. This is how we operate. Every single project. Every single client.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`relative bg-gradient-to-br ${guarantee.color} p-[2px] rounded-2xl h-full group hover:scale-105 transition-transform`}>
                  <div className="bg-slate-900 rounded-2xl p-8 h-full relative overflow-hidden">
                    {/* Hover glow */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${guarantee.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                    />
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br ${guarantee.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {guarantee.title}
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {guarantee.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Big commitment statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-[2px] rounded-2xl max-w-4xl mx-auto">
            <div className="bg-slate-900 rounded-2xl p-12 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                style={{ backgroundSize: '200% 200%' }}
              />
              
              <div className="relative z-10">
                <Zap className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  The Bottom Line
                </h3>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
                  If we don't deliver what we promise, we don't deserve your business. Simple as that. 
                  We're not here to sell you a service—we're here to build something you're genuinely proud of.
                </p>
                <p className="text-cyan-400 font-bold text-2xl">
                  That's the Stahl Systems difference.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
