import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef, useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Globe, 
  Smartphone, 
  Mail, 
  MessageSquare, 
  Search, 
  Code, 
  Rocket,
  ArrowLeft,
  Check,
  Sparkles,
  TrendingUp,
  Users,
  Shield,
  Clock,
  Share2,
  MapPin,
  Phone
} from 'lucide-react';
import { ContactModal } from '../components/ContactModal';

// Animated particle field
function ParticleField() {
  const particles = useMemo(() => 
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Neural network animation
function NeuralNetwork() {
  const nodes = [
    { x: 20, y: 30, color: 'from-blue-500 to-cyan-500' },
    { x: 50, y: 15, color: 'from-purple-500 to-pink-500' },
    { x: 80, y: 30, color: 'from-green-500 to-emerald-500' },
    { x: 35, y: 60, color: 'from-orange-500 to-red-500' },
    { x: 65, y: 60, color: 'from-yellow-500 to-orange-500' },
    { x: 50, y: 85, color: 'from-indigo-500 to-purple-500' },
  ];

  const connections = [
    [0, 1], [1, 2], [0, 3], [1, 4], [2, 4], [3, 5], [4, 5], [3, 4]
  ];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <svg className="w-full h-full">
        {connections.map(([start, end], i) => (
          <motion.line
            key={i}
            x1={`${nodes[start].x}%`}
            y1={`${nodes[start].y}%`}
            x2={`${nodes[end].x}%`}
            y2={`${nodes[end].y}%`}
            stroke="url(#gradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2, delay: i * 0.2 }}
          />
        ))}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className={`absolute w-4 h-4 rounded-full bg-gradient-to-br ${node.color}`}
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
        />
      ))}
    </div>
  );
}

// Feature showcase with interactive demo
function FeatureShowcase({ 
  icon: Icon, 
  title, 
  description, 
  delay,
  demo
}: { 
  icon: any; 
  title: string; 
  description: string; 
  delay: number;
  demo: React.ReactNode;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [showDemo, setShowDemo] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className="relative group"
    >
      <div 
        className="bg-slate-800/50 border-2 border-cyan-500/30 rounded-2xl p-6 cursor-pointer transition-all hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/20"
        onClick={() => setShowDemo(!showDemo)}
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
          </div>
        </div>
        
        <button className="text-cyan-400 text-sm font-semibold hover:text-cyan-300 transition-colors">
          {showDemo ? '← Hide Demo' : 'View Interactive Demo →'}
        </button>

        <AnimatePresence>
          {showDemo && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 overflow-hidden"
            >
              <div className="bg-slate-900/80 rounded-xl p-4 border border-cyan-500/20">
                {demo}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// Code typing animation
function CodeDemo() {
  const [code, setCode] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullCode = `const yourSite = {\n  design: 'stunning',\n  speed: 'blazing-fast',\n  mobile: 'perfect',\n  seo: 'optimized',\n  forms: 'connected'\n};`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullCode.length) {
        setCode(fullCode.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <pre className="text-cyan-400 font-mono text-xs overflow-x-auto">
      <code>{code}{showCursor && <span className="text-cyan-400">|</span>}</code>
    </pre>
  );
}

// Device switching demo
function DeviceDemo() {
  const [activeDevice, setActiveDevice] = useState(0);
  const devices = ['Mobile', 'Tablet', 'Desktop'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDevice(prev => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-2">
      {devices.map((device, i) => (
        <motion.div
          key={device}
          animate={{
            scale: activeDevice === i ? 1.1 : 1,
            backgroundColor: activeDevice === i ? 'rgba(6, 182, 212, 0.2)' : 'rgba(30, 41, 59, 1)',
          }}
          transition={{ duration: 0.3 }}
          className="rounded p-2 text-center border-2"
          style={{
            borderColor: activeDevice === i ? '#06b6d4' : 'transparent',
          }}
        >
          <motion.div
            animate={{ rotate: activeDevice === i ? [0, 5, -5, 0] : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Smartphone className="h-8 w-8 text-cyan-400 mx-auto mb-1" />
          </motion.div>
          <div className="text-xs text-gray-400">{device}</div>
        </motion.div>
      ))}
    </div>
  );
}

// Form submission demo
function FormDemo() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const submitInterval = setInterval(() => {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 2000);
      }, 1500);
    }, 5000);
    
    return () => clearInterval(submitInterval);
  }, []);

  return (
    <div className="space-y-2">
      <motion.input 
        type="text" 
        placeholder="John Doe" 
        className="w-full bg-slate-800 text-white px-3 py-2 rounded text-sm border-2" 
        animate={{ borderColor: isSubmitting ? '#06b6d4' : 'rgba(6, 182, 212, 0)' }}
        readOnly
      />
      <motion.input 
        type="email" 
        placeholder="john@example.com" 
        className="w-full bg-slate-800 text-white px-3 py-2 rounded text-sm border-2" 
        animate={{ borderColor: isSubmitting ? '#06b6d4' : 'rgba(6, 182, 212, 0)' }}
        readOnly
      />
      <motion.button 
        className="w-full bg-cyan-600 text-white py-2 rounded text-sm font-semibold relative overflow-hidden"
        animate={{
          backgroundColor: isSuccess ? '#10b981' : '#0891b2',
        }}
        whileHover={{ scale: 1.02 }}
      >
        {isSubmitting && (
          <motion.div
            className="absolute inset-0 bg-cyan-400"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, repeat: 0 }}
          />
        )}
        <span className="relative z-10">
          {isSuccess ? '✓ Sent!' : isSubmitting ? 'Sending...' : 'Submit'}
        </span>
      </motion.button>
    </div>
  );
}

// Social media with hover effects
function SocialDemo() {
  const socials = [
    { name: 'Facebook', letter: 'f', color: 'from-blue-600 to-blue-700' },
    { name: 'Instagram', letter: 'i', color: 'from-pink-600 to-purple-600' },
    { name: 'Twitter', letter: 'X', color: 'from-cyan-600 to-blue-600' },
    { name: 'LinkedIn', letter: 'in', color: 'from-blue-700 to-blue-800' },
  ];
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex gap-3 justify-center">
      {socials.map((social, i) => (
        <motion.div
          key={social.name}
          className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center cursor-pointer shadow-lg`}
          whileHover={{ scale: 1.2, rotate: 360 }}
          animate={
            hoveredIndex === null
              ? {
                  y: [0, -5, 0],
                  transition: {
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }
              : {
                  y: 0,
                  transition: {
                    duration: 0.3
                  }
                }
          }
          onHoverStart={() => setHoveredIndex(i)}
          onHoverEnd={() => setHoveredIndex(null)}
        >
          <span className="text-white text-xs font-bold">{social.letter}</span>
        </motion.div>
      ))}
    </div>
  );
}

// SEO checklist with sequential animation
function SEODemo() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>([false, false, false]);
  
  useEffect(() => {
    const timer1 = setTimeout(() => setCheckedItems([true, false, false]), 500);
    const timer2 = setTimeout(() => setCheckedItems([true, true, false]), 1000);
    const timer3 = setTimeout(() => setCheckedItems([true, true, true]), 1500);
    const reset = setTimeout(() => setCheckedItems([false, false, false]), 4000);
    
    const interval = setInterval(() => {
      setCheckedItems([false, false, false]);
      setTimeout(() => setCheckedItems([true, false, false]), 500);
      setTimeout(() => setCheckedItems([true, true, false]), 1000);
      setTimeout(() => setCheckedItems([true, true, true]), 1500);
    }, 5000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(reset);
      clearInterval(interval);
    };
  }, []);

  const items = [
    'Meta tags configured',
    'Lightning-fast loading',
    'Mobile optimized'
  ];

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <motion.div 
          key={item}
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ 
            opacity: checkedItems[i] ? 1 : 0.3,
            x: checkedItems[i] ? 0 : -20,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            animate={{ 
              scale: checkedItems[i] ? [1, 1.3, 1] : 1,
              rotate: checkedItems[i] ? [0, 10, -10, 0] : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <Check className={`h-4 w-4 transition-colors ${checkedItems[i] ? 'text-green-400' : 'text-gray-600'}`} />
          </motion.div>
          <span className={`text-sm transition-colors ${checkedItems[i] ? 'text-gray-300' : 'text-gray-600'}`}>
            {item}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// Uptime monitor with live graph
function UptimeDemo() {
  const [uptime, setUptime] = useState(99.9);
  
  // Memoize bar heights so they don't recalculate on every render
  const barHeights = useMemo(() => 
    Array.from({ length: 12 }, () => ({
      start: 70 + Math.random() * 30,
      end: 70 + Math.random() * 30,
    })),
    []
  );
  
  useEffect(() => {
    const interval = setInterval(() => {
      setUptime(prev => {
        const newValue = 99.7 + Math.random() * 0.3;
        return Math.round(newValue * 10) / 10;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3">
      <div className="text-center">
        <motion.div 
          key={uptime}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2"
        >
          {uptime}% Uptime
        </motion.div>
        <div className="text-xs text-gray-400">Always online, always fast</div>
      </div>
      
      {/* Simple bar graph */}
      <div className="flex items-end justify-center gap-1 h-12">
        {barHeights.map((heights, i) => (
          <motion.div
            key={i}
            className="w-2 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-sm"
            animate={{
              height: [
                `${heights.start}%`,
                `${heights.end}%`,
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function StarterHubShowcase() {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: Globe,
      title: 'Professional Single-Page Website',
      description: 'A stunning, modern website that loads in under 2 seconds. Built with the latest tech, optimized for conversions.',
      demo: <CodeDemo />
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive Design',
      description: 'Looks perfect on every device - phone, tablet, desktop. Your customers get a flawless experience anywhere.',
      demo: <DeviceDemo />
    },
    {
      icon: Mail,
      title: 'Contact Form & Lead Capture',
      description: 'Every submission goes straight to your email. Never miss a potential customer again.',
      demo: <FormDemo />
    },
    {
      icon: MessageSquare,
      title: 'Social Media Integration',
      description: 'Links to all your social profiles. Make it easy for customers to follow and engage with you.',
      demo: <SocialDemo />
    },
    {
      icon: Search,
      title: 'Basic SEO Optimization',
      description: 'Optimized for Google from day one. Meta tags, fast loading, mobile-friendly - all the ranking factors.',
      demo: <SEODemo />
    },
    {
      icon: Rocket,
      title: 'Hosting Included',
      description: 'We handle everything. Your site is live, secure, and backed up automatically. Zero tech headaches.',
      demo: <UptimeDemo />
    },
  ];

  const bonuses = [
    { icon: Clock, text: '2-Week Delivery' },
    { icon: Users, text: 'Unlimited Revisions' },
    { icon: Shield, text: 'SSL Security Included' },
    { icon: TrendingUp, text: 'Built To Scale With You' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <ParticleField />
      <NeuralNetwork />

      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 z-50 bg-slate-800/80 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold hover:bg-slate-700 transition-colors flex items-center gap-2 border border-cyan-500/30"
      >
        <ArrowLeft className="h-4 w-4" />
        Back Home
      </motion.button>

      {/* Hero Section */}
      <section ref={heroRef} className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-6">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full font-black text-sm uppercase tracking-wider animate-pulse">
                🔥 Launch Special — 80% Off — Limited Time
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight px-2">
              Your Business
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Online. Today.
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed px-4">
              A professional website that looks like a million bucks, loads like lightning, and turns visitors into customers.
            </p>

            {/* Pricing with strikethrough */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-slate-900/80 backdrop-blur-xl border-2 border-cyan-500/30 rounded-2xl px-6 sm:px-8 py-4">
                <div className="text-center sm:text-right">
                  <div className="text-gray-500 line-through text-lg sm:text-xl">$2,997</div>
                  <div className="text-xs text-gray-400">Regular Price</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
                <div className="text-center sm:text-left">
                  <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    $599
                  </div>
                  <div className="text-xs text-cyan-400 font-bold">Launch Special 🚀</div>
                </div>
              </div>
            </motion.div>

            {/* Pulsing CTA */}
            <motion.button
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: [
                  '0 0 20px rgba(6, 182, 212, 0.5)',
                  '0 0 40px rgba(6, 182, 212, 0.8)',
                  '0 0 20px rgba(6, 182, 212, 0.5)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-black inline-flex items-center gap-3 cursor-pointer"
            >
              <Rocket className="h-6 w-6" />
              Let's Build This Thing
            </motion.button>
          </motion.div>

          {/* Animated Starter Hub Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative max-w-4xl mx-auto mb-20"
          >
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border-2 border-cyan-500/30 shadow-2xl">
              <div className="relative h-64 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                      radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                  }}
                />

                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative z-10"
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                    <Brain className="h-16 w-16 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full blur-3xl opacity-50" />
                </motion.div>

                {/* Orbiting elements */}
                {[Globe, Smartphone, Mail, MessageSquare].map((Icon, i) => (
                  <motion.div
                    key={i}
                    className="absolute hidden sm:block"
                    style={{
                      top: '50%',
                      left: '50%',
                    }}
                    animate={{
                      rotate: [i * 90, i * 90 + 360],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <motion.div
                      style={{
                        x: 100,
                        y: -16,
                      }}
                      animate={{
                        rotate: [0, -360],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg"
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  This Is What We Build
                </h3>
                <p className="text-gray-400">
                  Not a template. Not a theme. A custom system designed for YOUR business.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-white mb-4">
              What's Inside Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Starter Hub</span>
            </h2>
            <p className="text-xl text-gray-400">
              Click any feature to see it in action
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {features.map((feature, index) => (
              <FeatureShowcase
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
                demo={feature.demo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-cyan-500/30"
          >
            <div className="text-center mb-8">
              <Sparkles className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-3xl font-black text-white mb-2">
                Plus These Bonuses
              </h3>
              <p className="text-gray-400">All included in your Starter Hub</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bonuses.map((bonus, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3 bg-slate-800/50 rounded-xl p-4"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <bonus.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-white font-semibold">{bonus.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Integrations */}
      <section className="relative z-10 py-20 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-white mb-4">
              Easy Integration With Your Tools
            </h2>
            <p className="text-xl text-gray-400">
              We'll connect your existing social media and basic tools
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Instagram', icon: MessageSquare },
              { name: 'Facebook', icon: Share2 },
              { name: 'LinkedIn', icon: Share2 },
              { name: 'Google Maps', icon: MapPin },
              { name: 'Contact Forms', icon: Mail },
              { name: 'Email Links', icon: Mail },
              { name: 'Phone Links', icon: Phone },
              { name: 'WhatsApp', icon: MessageSquare },
            ].map((platform, i) => {
              const Icon = platform.icon;
              return (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center hover:border-cyan-400/50 hover:bg-slate-800 transition-all"
                >
                  <Icon className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                  <h3 className="font-bold text-white text-sm">{platform.name}</h3>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <button 
              onClick={() => navigate('/business-hub')}
              className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors cursor-pointer underline decoration-cyan-400/50 hover:decoration-cyan-300"
            >
              Need more advanced integrations? Check out Business Hub →
            </button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-7xl font-black text-white mb-6">
              Ready To Go
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                All The Way?
              </span>
            </h2>
            <p className="text-2xl text-gray-300 mb-12">
              This is just the beginning. When you're ready to scale, we grow with you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-full text-xl font-black inline-flex items-center gap-3 shadow-2xl"
              >
                <Rocket className="h-6 w-6" />
                Get Your Starter Hub
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 100);
                }}
                className="bg-slate-800 text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-slate-700 transition-colors"
              >
                Explore Other Options
              </motion.button>
            </div>

            <p className="text-cyan-400 text-lg font-semibold mt-8">
              Let's build something amazing together 🚀
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        defaultPackage="starter"
      />
    </div>
  );
}
