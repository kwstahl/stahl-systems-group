import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Rocket, Zap, TrendingUp, Sparkles } from 'lucide-react';

const milestones = [
  {
    icon: Rocket,
    month: 'Month 1',
    title: 'Launch Your Hub',
    description: 'Start with a professional, mobile-responsive website. All your contact info, social links, and basic lead capture in one place.',
    price: '$599 (Reg. $2,997)',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    month: 'Month 3',
    title: 'Add Communication',
    description: 'Business growing? Add phone routing, SMS messaging, and email campaigns. Never miss a customer again.',
    price: 'As Needed',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: TrendingUp,
    month: 'Month 6',
    title: 'Enable Commerce',
    description: 'Ready to sell? Integrate payment processing with Stripe, Klarna, Afterpay. Connect your Shopify store seamlessly.',
    price: 'As Needed',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Sparkles,
    month: 'Month 12',
    title: 'Full Automation',
    description: 'Scale effortlessly with advanced CRM, marketing automation, analytics dashboards, and custom workflows.',
    price: 'As Needed',
    color: 'from-orange-500 to-red-500',
  },
];

export function Journey() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-blue-600 uppercase tracking-wider text-sm font-medium border border-blue-200 px-4 py-2 rounded-full bg-blue-50">
              Your Growth Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Start Simple, Scale Smart
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No massive upfront investment. Add tools and capabilities as your business grows. 
            We're built to evolve with you.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 -translate-x-1/2"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`inline-block mb-3`}>
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {milestone.month}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      {milestone.description}
                    </p>
                    <div className="text-lg font-semibold text-blue-600">
                      {milestone.price}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative">
                    <div className={`w-20 h-20 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center shadow-2xl z-10 relative`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color} rounded-full blur-xl opacity-50`}></div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden lg:block"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-8">
            <p className="text-2xl mb-2 text-gray-900">
              No switching platforms. No starting over.
            </p>
            <p className="text-gray-600">
              Your hub grows with you, seamlessly.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
