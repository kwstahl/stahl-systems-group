import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Brain, Phone, CreditCard, TrendingUp, Settings, X, Sparkles, DollarSign } from 'lucide-react';

const connections = [
  {
    icon: CreditCard,
    title: 'Payments &\nCommerce',
    shortTitle: 'Payments & Commerce',
    desc: 'Stripe, Shopify, Klarna',
    color: 'from-green-500 to-emerald-500',
    angle: -45,
    priority: true,
    tierIndex: 1, // Business Hub
    details: {
      title: 'Get Paid. Easily.',
      features: [
        'Stripe payment processing (cards, Apple Pay, Google Pay)',
        'Connect to your existing Shopify store',
        'Klarna, Afterpay, buy now pay later',
        'Secure checkout flows that convert',
      ],
      cta: 'Accept payments from anyone, anywhere. No platform lock-in.',
    },
  },
  {
    icon: TrendingUp,
    title: 'Meta & Google\nAds',
    shortTitle: 'Meta & Google Ads',
    desc: 'Facebook, Instagram, Search',
    color: 'from-purple-500 to-pink-500',
    angle: 45,
    priority: true,
    tierIndex: 1, // Business Hub
    details: {
      title: 'Drive Traffic & Sales',
      features: [
        'Meta Ads (Facebook & Instagram) campaign management',
        'Google Ads integration & tracking',
        'Real-time analytics dashboards',
        'ROI tracking so you know what works',
      ],
      cta: 'Connect your ad accounts. See what drives revenue.',
    },
  },
  {
    icon: Phone,
    title: 'Customer\nConnection',
    shortTitle: 'Customer Connection',
    desc: 'Twilio, SMS, Email',
    color: 'from-blue-500 to-cyan-500',
    angle: -135,
    priority: false,
    tierIndex: 1, // Business Hub
    details: {
      title: 'Connect With Every Customer',
      features: [
        'Automated SMS & email campaigns',
        'Connect to Twilio for phone routing',
        'Live chat integration',
        'Lead capture forms',
      ],
      cta: 'Automate your customer communication.',
    },
  },
  {
    icon: Settings,
    title: 'Business\nOperations',
    shortTitle: 'Business Operations',
    desc: 'CRM, Automation',
    color: 'from-orange-500 to-red-500',
    angle: 135,
    priority: false,
    tierIndex: 2, // Enterprise Hub
    details: {
      title: 'Automate Everything',
      features: [
        'Connect to HubSpot, Salesforce, or any CRM',
        'Automated workflows & triggers',
        'Calendar booking (Calendly, Cal.com)',
        'Custom business logic',
      ],
      cta: 'Stop doing manual work. Let the system handle it.',
    },
  },
];

const milestones = [
  {
    stage: 'Day 1',
    icon: Sparkles,
    title: 'Just Starting Out',
    desc: 'You need a website that looks professional and loads fast',
    relatable: 'I just need to get online and look legit',
    color: 'from-blue-500 to-cyan-500',
    tierIndex: 0, // Starter Hub
  },
  {
    stage: 'Month 3',
    icon: Phone,
    title: 'Getting Traction',
    desc: 'Customers are coming in. You need better ways to communicate',
    relatable: 'I am spending too much time on emails and calls',
    color: 'from-green-500 to-emerald-500',
    tierIndex: 1, // Business Hub
  },
  {
    stage: 'Month 6',
    icon: DollarSign,
    title: 'Ready to Scale',
    desc: 'Time to accept payments online and run real ad campaigns',
    relatable: 'I need to sell online and reach more people',
    color: 'from-purple-500 to-pink-500',
    tierIndex: 1, // Business Hub
  },
  {
    stage: 'Year 1+',
    icon: TrendingUp,
    title: 'Dominating',
    desc: 'Full automation. CRM. Analytics. You are running a machine',
    relatable: 'I want my business to run while I sleep',
    color: 'from-orange-500 to-red-500',
    tierIndex: 2, // Enterprise Hub
  },
];

export function GrowthHub() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedTool, setSelectedTool] = useState<number | null>(null);
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4 relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-40"></div>
            <span className="relative text-blue-400 uppercase tracking-wider text-sm font-bold border-2 border-blue-400/50 px-6 py-2 rounded-full backdrop-blur-sm bg-slate-900/80 inline-flex items-center gap-2 shadow-2xl">
              <Sparkles className="h-4 w-4 text-cyan-400" />
              Your Command Center
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl mb-6 text-white font-black">
            Your Site Is
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              The Boss
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-3 leading-relaxed">
            Everything in one place. Your site is the hub where payments, marketing, customer tools, and operations all connect.
          </p>
          <p className="text-cyan-400 font-semibold text-lg">
            Click any tool below to see what it does
          </p>
        </motion.div>

        {/* Circular hub layout */}
        <div className="relative h-[600px] md:h-[700px] flex items-center justify-center mb-20">
          {/* Simplified Central Brain */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute z-30"
          >
            <div className="relative">
              <div className="w-36 h-36 md:w-48 md:h-48 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-blue-400/50 relative">
                <Brain className="h-16 w-16 md:h-24 md:w-24 text-white" />
                
                {/* Simple glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-2xl opacity-50"></div>
              </div>
              
              {/* Single subtle ring */}
              <motion.div
                className="absolute inset-0 border-2 border-cyan-400/40 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
              <div className="text-white font-black text-xl md:text-3xl">The Hub</div>
              <div className="text-cyan-400 text-sm md:text-lg font-bold">You're In Control</div>
            </div>
          </motion.div>

          {/* Connected tools */}
          {connections.map((connection, index) => {
            const Icon = connection.icon;
            const radius = window.innerWidth < 640 ? 140 : window.innerWidth < 768 ? 180 : 220;
            const angleRad = (connection.angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                style={{ x, y }}
                className="absolute cursor-pointer"
                onClick={() => setSelectedTool(index)}
              >
                {/* Simple connection line */}
                <svg width="250" height="250" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20 sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]">
                  <line
                    x1="250"
                    y1="250"
                    x2={250 - x}
                    y2={250 - y}
                    stroke="rgba(59, 130, 246, 0.6)"
                    strokeWidth="1"
                  />
                </svg>

                {/* Tool node */}
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br ${connection.color} rounded-xl flex items-center justify-center shadow-2xl border-2 border-white/30 relative`}>
                    <Icon className="h-12 w-12 md:h-16 md:w-16 text-white" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${connection.color} rounded-xl blur-lg opacity-60`}></div>
                  </div>

                  {/* Priority badge for money-makers */}
                  {connection.priority && (
                    <div className="absolute -top-2 -right-2 bg-yellow-400 text-slate-900 rounded-full px-2 py-1 text-xs font-black shadow-lg">
                      <DollarSign className="h-4 w-4" />
                    </div>
                  )}

                  {/* Subtle data pulse */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyan-400/60 rounded-full"
                    style={{ x: -x * 0.5, y: -y * 0.5 }}
                    animate={{
                      x: [-x * 0.5, 0],
                      y: [-y * 0.5, 0],
                      scale: [0, 1, 0],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeOut",
                    }}
                  />
                </motion.div>

                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center w-32">
                  <div className="text-white text-xs md:text-sm font-bold whitespace-pre-line leading-tight">{connection.title}</div>
                  <div className="text-gray-400 text-[10px] md:text-xs mt-1">{connection.desc}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tool Details Modal */}
        <AnimatePresence>
          {selectedTool !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
              onClick={() => setSelectedTool(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className={`bg-gradient-to-br ${connections[selectedTool].color} p-1 rounded-2xl max-w-md w-full shadow-2xl`}
              >
                <div className="bg-slate-900 rounded-xl p-8 relative">
                  <button
                    onClick={() => setSelectedTool(null)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>

                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${connections[selectedTool].color} rounded-xl flex items-center justify-center`}>
                      {(() => {
                        const Icon = connections[selectedTool].icon;
                        return <Icon className="h-8 w-8 text-white" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{connections[selectedTool].details.title}</h3>
                      <p className="text-gray-400 text-sm">{connections[selectedTool].shortTitle}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {connections[selectedTool].details.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <span className="text-cyan-400 mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-cyan-400 font-semibold mb-6">{connections[selectedTool].details.cta}</p>

                  <a
                    href="#pricing"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedTool(null);
                      setTimeout(() => {
                        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                        setTimeout(() => {
                          window.dispatchEvent(new CustomEvent('highlightPricing', {
                            detail: { tierIndex: connections[selectedTool].tierIndex }
                          }));
                        }, 1200);
                      }, 300);
                    }}
                    className="block w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center py-3 rounded-xl font-bold hover:scale-105 transition-transform"
                  >
                    Add This To Your Site
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Growth stages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl text-white mb-3 font-bold">Which Stage Are You At?</h3>
          <p className="text-gray-400 mb-10 text-lg">We grow with you. Hover to see yourself.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  onMouseEnter={() => setHoveredMilestone(index)}
                  onMouseLeave={() => setHoveredMilestone(null)}
                  className={`relative bg-gradient-to-br ${milestone.color} p-1 rounded-2xl cursor-pointer transition-all ${
                    hoveredMilestone === index ? 'scale-105' : ''
                  }`}
                >
                  <div className="bg-slate-800/95 rounded-xl p-6 h-full relative overflow-hidden">
                    {/* Hover glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredMilestone === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="relative z-10">
                      <IconComponent className="h-12 w-12 text-cyan-400 mb-3" />
                      <div className="text-cyan-400 font-bold text-lg mb-2">{milestone.stage}</div>
                      <div className="text-white font-semibold text-base mb-3">{milestone.title}</div>
                      <div className="text-gray-400 text-sm mb-4 leading-relaxed">{milestone.desc}</div>
                      
                      {/* Relatable quote */}
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: hoveredMilestone === index ? 'auto' : 0,
                          opacity: hoveredMilestone === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-l-4 border-cyan-400 pl-3 py-2 bg-slate-900/50 rounded mb-3">
                          <p className="text-cyan-300 italic text-sm">{milestone.relatable}</p>
                        </div>
                        
                        <a
                          href="#pricing"
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                            setTimeout(() => {
                              window.dispatchEvent(new CustomEvent('highlightPricing', { 
                                detail: { tierIndex: milestone.tierIndex } 
                              }));
                            }, 1200);
                          }}
                          className="block w-full bg-cyan-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-cyan-500 transition-colors text-sm"
                        >
                          That's Me Right Now
                        </a>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
