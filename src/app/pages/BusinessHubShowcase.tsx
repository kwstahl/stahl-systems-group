import { motion, useInView } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Phone, Mail, MessageSquare, Users, Zap, 
  Check, TrendingUp, Clock, DollarSign, BarChart3, Shield,
  Database, Workflow, Target, Sparkles
} from 'lucide-react';
import { ContactModal } from '../components/ContactModal';

// Animated Stats Counter
function StatCounter({ end, label, prefix = '', suffix = '' }: { end: number; label: string; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-black text-white mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
}

// Integration Demo
function IntegrationDemo() {
  const [activeConnection, setActiveConnection] = useState(0);
  const connections = [
    { from: 'CRM', to: 'Email', color: 'from-blue-500 to-cyan-500' },
    { from: 'Phone', to: 'SMS', color: 'from-purple-500 to-pink-500' },
    { from: 'Forms', to: 'Database', color: 'from-green-500 to-emerald-500' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveConnection((prev) => (prev + 1) % connections.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-48 flex items-center justify-center overflow-hidden">
      <div className="grid grid-cols-2 gap-16 sm:gap-32 relative">
        <div className="flex flex-col gap-4">
          {connections.map((conn, i) => (
            <motion.div
              key={conn.from}
              className={`px-2 sm:px-4 py-2 rounded-lg border-2 text-center font-semibold text-sm ${
                activeConnection === i ? 'bg-blue-500/20 border-blue-400' : 'bg-slate-800 border-slate-700'
              }`}
              animate={{ scale: activeConnection === i ? 1.05 : 1 }}
            >
              {conn.from}
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {connections.map((conn, i) => (
            <motion.div
              key={conn.to}
              className={`px-2 sm:px-4 py-2 rounded-lg border-2 text-center font-semibold text-sm ${
                activeConnection === i ? 'bg-cyan-500/20 border-cyan-400' : 'bg-slate-800 border-slate-700'
              }`}
              animate={{ scale: activeConnection === i ? 1.05 : 1 }}
            >
              {conn.to}
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Animated connection line */}
      <motion.div
        className={`absolute left-1/2 top-1/2 w-12 sm:w-24 h-1 bg-gradient-to-r ${connections[activeConnection].color} -translate-x-1/2 -translate-y-1/2`}
        style={{ top: `${33 + activeConnection * 33}%` }}
        animate={{ scaleX: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>
  );
}

// Automation Workflow Demo
function AutomationDemo() {
  const [step, setStep] = useState(0);
  const steps = ['Lead Capture', 'Auto-Follow-Up', 'CRM Update', 'Notification'];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % steps.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3">
      {steps.map((stepName, i) => (
        <motion.div
          key={stepName}
          className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all ${
            step === i ? 'bg-blue-500/20 border-blue-400' : 'bg-slate-800/50 border-slate-700'
          }`}
          animate={{ 
            x: step === i ? 10 : 0,
            opacity: step >= i ? 1 : 0.5 
          }}
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
            step === i ? 'bg-blue-500 text-white' : 'bg-slate-700 text-gray-400'
          }`}>
            {i + 1}
          </div>
          <span className="text-sm font-semibold">{stepName}</span>
          {step === i && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="ml-auto"
            >
              <Zap className="h-5 w-5 text-yellow-400" />
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

// Multi-Channel Demo
function MultiChannelDemo() {
  const [activeChannels, setActiveChannels] = useState<number[]>([]);
  const channels = [
    { icon: Phone, label: 'Phone', color: 'text-green-400' },
    { icon: Mail, label: 'Email', color: 'text-blue-400' },
    { icon: MessageSquare, label: 'SMS', color: 'text-purple-400' },
    { icon: Users, label: 'Social', color: 'text-pink-400' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomChannel = Math.floor(Math.random() * channels.length);
      setActiveChannels((prev) => [...prev, randomChannel].slice(-2));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      {channels.map((channel, i) => {
        const Icon = channel.icon;
        const isActive = activeChannels.includes(i);
        return (
          <motion.div
            key={channel.label}
            className={`p-4 rounded-lg border-2 text-center ${
              isActive ? 'bg-slate-700 border-cyan-400' : 'bg-slate-800 border-slate-700'
            }`}
            animate={{ scale: isActive ? 1.1 : 1 }}
          >
            <Icon className={`h-8 w-8 mx-auto mb-2 ${channel.color}`} />
            <div className="text-xs font-semibold">{channel.label}</div>
          </motion.div>
        );
      })}
    </div>
  );
}

export function BusinessHubShowcase() {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: Phone,
      title: 'Phone & SMS Integration',
      description: 'Route calls, send SMS campaigns, and track all communications',
      demo: <MultiChannelDemo />,
    },
    {
      icon: Mail,
      title: 'Email Campaign Tools',
      description: 'Automated email sequences that convert leads to customers',
      demo: <AutomationDemo />,
    },
    {
      icon: Database,
      title: 'CRM Functionality',
      description: 'Track leads, manage contacts, and never miss a follow-up',
      demo: <IntegrationDemo />,
    },
    {
      icon: Workflow,
      title: 'Business Automation',
      description: 'Automate repetitive tasks and focus on growing your business',
      demo: <AutomationDemo />,
    },
  ];

  const benefits = [
    { icon: Clock, title: 'Save 15+ Hours/Week', desc: 'Automated workflows handle repetitive tasks' },
    { icon: DollarSign, title: 'Increase Revenue 40%', desc: 'Never miss a lead with auto-follow-ups' },
    { icon: TrendingUp, title: 'Boost Conversion Rates', desc: 'Multi-channel engagement converts more' },
    { icon: Shield, title: 'Enterprise-Grade Security', desc: 'Your data is protected and backed up' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultPackage="Business Hub" />
      
      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'instant' });
          navigate('/');
        }}
        className="fixed top-6 left-6 z-50 bg-slate-800/80 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold hover:bg-slate-700 transition-colors flex items-center gap-2 border border-cyan-500/30"
      >
        <ArrowLeft className="h-4 w-4" />
        Back Home
      </motion.button>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 py-20">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Removed old back button location */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full font-black text-sm uppercase tracking-wider">
                Business Hub — Most Popular
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
              Your Command
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Center
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
              Connect your essential business tools into one powerful hub. Phone systems, email campaigns, CRM, and more—all working together seamlessly.
            </p>

            {/* Pricing */}
            <div className="flex flex-col items-center gap-6 mb-12">
              <div className="inline-flex items-center gap-4 bg-slate-900/80 backdrop-blur-xl border-2 border-blue-500/30 rounded-2xl px-8 py-4">
                <div>
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    From $4,997
                  </div>
                  <div className="text-xs text-gray-400 text-center">One-time setup</div>
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
                <div>
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    $497<span className="text-xl">/mo</span>
                  </div>
                  <div className="text-xs text-gray-400">Support & updates</div>
                </div>
              </div>
              <p className="text-sm text-gray-400">Custom quotes based on your specific integrations</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-4 rounded-full text-xl font-black inline-flex items-center gap-3 shadow-2xl"
              >
                <Target className="h-6 w-6" />
                Get Custom Quote
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'instant' });
                  navigate('/');
                }}
                className="bg-slate-800 border-2 border-slate-700 text-white px-10 py-4 rounded-full text-xl font-black hover:border-cyan-400 transition-colors"
              >
                Explore Other Options
              </motion.button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            <StatCounter end={15} label="Hours Saved/Week" suffix="+" />
            <StatCounter end={3} label="Tool Integrations" suffix="+" />
            <StatCounter end={40} label="Revenue Increase" suffix="%" />
            <StatCounter end={99} label="Uptime Guarantee" suffix="%" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-white mb-4">
              What's Inside Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Business Hub</span>
            </h2>
            <p className="text-xl text-gray-400">
              Professional-grade tools that work together seamlessly
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                  
                  <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 overflow-hidden">
                    {feature.demo}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Major Integrations Section */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-white mb-4">
              Connect Your Essential Business Tools
            </h2>
            <p className="text-xl text-gray-400">
              We integrate with the platforms you already use
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { name: 'Google Ads', desc: 'Track campaigns & ROI', icon: TrendingUp },
              { name: 'Meta/Facebook', desc: 'Social advertising', icon: Users },
              { name: 'Twilio', desc: 'SMS & phone systems', icon: Phone },
              { name: 'Mailchimp', desc: 'Email automation', icon: Mail },
              { name: 'HubSpot CRM', desc: 'Customer management', icon: Database },
              { name: 'Calendly', desc: 'Appointment booking', icon: Clock },
              { name: 'Stripe', desc: 'Payment processing', icon: DollarSign },
              { name: 'Zapier', desc: 'Workflow automation', icon: Workflow },
            ].map((platform, i) => {
              const Icon = platform.icon;
              return (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center hover:border-cyan-400/50 hover:bg-slate-800 transition-all group overflow-hidden"
                >
                  <Icon className="h-10 w-10 text-cyan-400 mx-auto mb-3" />
                  <h3 className="font-bold text-white mb-1 break-words">{platform.name}</h3>
                  <p className="text-gray-400 text-xs break-words">{platform.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-400 mb-4">Plus dozens more...</p>
            <a href="/enterprise-hub" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors underline decoration-cyan-400/50 hover:decoration-cyan-300">Need a specific integration? Just ask—we'll make it work.</a>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-white mb-4">
              Real Business Impact
            </h2>
            <p className="text-xl text-gray-400">
              Measurable results that drive growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-400/30 rounded-xl p-6 text-center"
                >
                  <Icon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-white mb-4">Everything in Business Hub</h2>
            <p className="text-gray-400">Plus monthly support and updates</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Everything in Starter Hub',
              'Phone routing & call management',
              'Email campaign integration',
              'SMS messaging setup',
              'Basic CRM functionality',
              'Up to 3 tool integrations',
              'Monthly support & updates',
              'Priority email support',
              'Training & onboarding',
              'Custom branding',
              'Analytics dashboard',
              'Automated workflows',
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 text-gray-300"
              >
                <div className="w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-cyan-400" />
                </div>
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-white/10"></div>
            <div className="relative z-10">
              <Sparkles className="h-16 w-16 text-white mx-auto mb-6" />
              <h2 className="text-4xl font-black text-white mb-4">
                Ready to Scale Your Operations?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Let's discuss your business needs and build your custom hub
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-blue-600 px-10 py-4 rounded-full text-xl font-black inline-flex items-center gap-3 shadow-2xl"
              >
                <Target className="h-6 w-6" />
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
