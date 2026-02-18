import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Brain, Network, Cpu, CloudCog, Workflow, Sparkles } from 'lucide-react';

const processes = [
  {
    icon: Brain,
    title: 'Central Hub',
    description: 'Your website serves as the intelligent core, coordinating all digital operations.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Network,
    title: 'Neural Network',
    description: 'Seamlessly connect social media, CRMs, databases, and communication tools.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Cpu,
    title: 'Smart Processing',
    description: 'Automated workflows handle repetitive tasks, freeing you to focus on growth.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: CloudCog,
    title: 'Cloud Synchronization',
    description: 'Real-time data sync across all platforms ensures nothing falls through the cracks.',
    color: 'from-pink-500 to-purple-500',
  },
  {
    icon: Workflow,
    title: 'Adaptive Routing',
    description: 'Intelligent call routing, email management, and customer interaction handling.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Sparkles,
    title: 'Continuous Evolution',
    description: 'Your system grows with you, adding capabilities as your business expands.',
    color: 'from-indigo-500 to-purple-500',
  },
];

export function ProcessesBrain() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 px-6 relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 90%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      {/* Grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-blue-400 uppercase tracking-wider text-sm font-medium border border-blue-400/30 px-4 py-2 rounded-full bg-blue-500/10">
              The Brain Architecture
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            The Platform Architecture
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your hub connects everything—from customer touchpoints to backend operations—
            giving you a single dashboard to manage your entire digital ecosystem.
          </p>
        </motion.div>

        {/* Central brain visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-16 flex justify-center items-center h-32 md:h-40 overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50 border-4 border-blue-400/30">
              <Brain className="h-12 w-12 md:h-16 md:w-16 text-white" />
            </div>
          </div>
          
          {/* Connection lines radiating out - reduced on mobile */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="absolute top-1/2 left-1/2 w-16 md:w-24 lg:w-32 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent origin-left"
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg)`,
              }}
            />
          ))}
        </motion.div>

        {/* Process cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processes.map((process, index) => {
            const Icon = process.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl -z-10"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                  }}
                />
                <div className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-2xl p-6 hover:border-blue-400/50 transition-all h-full group-hover:transform group-hover:scale-105">
                  <div className={`w-12 h-12 bg-gradient-to-br ${process.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-12 transition-transform`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
