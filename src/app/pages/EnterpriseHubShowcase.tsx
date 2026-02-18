import { motion, useInView } from 'motion/react';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Infinity, Shield, Headphones,
  Crown, Globe, TrendingUp, Users, Cpu, Lock, 
  Layers, Network, BarChart4,
  DollarSign, MessageSquare, Mail, Database, Rocket
} from 'lucide-react';
import { ContactModal } from '../components/ContactModal';

export function EnterpriseHubShowcase() {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const capabilities = [
    {
      icon: Infinity,
      title: 'Unlimited Integrations',
      description: 'Connect every tool in your tech stack—no limits, no compromises. From CRMs to payment processors, social media to analytics platforms.',
    },
    {
      icon: Cpu,
      title: 'Advanced Automation',
      description: 'Complex workflows that handle multi-step processes automatically. Save time, reduce errors, and scale your operations effortlessly.',
    },
    {
      icon: TrendingUp,
      title: 'Infinite Scalability',
      description: 'Built to grow with you from startup to enterprise scale. Handle millions of transactions without breaking a sweat.',
    },
    {
      icon: Network,
      title: 'Custom API Development',
      description: 'Need something unique? We build custom APIs and integrations tailored specifically to your business needs.',
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'SOC 2 compliant with advanced encryption, role-based access control, and comprehensive audit logs.',
    },
    {
      icon: BarChart4,
      title: 'Advanced Analytics',
      description: 'Real-time insights, predictive analytics, and custom dashboards that give you complete visibility into your operations.',
    },
  ];

  const enterpriseFeatures = [
    { icon: Shield, title: 'Enterprise Security', desc: 'SOC 2 compliant with advanced encryption' },
    { icon: Headphones, title: 'Dedicated Support', desc: '24/7 priority support with dedicated account manager' },
    { icon: Lock, title: 'Custom Permissions', desc: 'Role-based access control and audit logs' },
    { icon: Globe, title: 'Global CDN', desc: 'Lightning-fast performance worldwide' },
    { icon: Users, title: 'Team Training', desc: 'Comprehensive onboarding and ongoing training' },
    { icon: BarChart4, title: 'Advanced Analytics', desc: 'Real-time insights and predictive analytics' },
  ];

  const integrationCategories = [
    {
      name: 'E-Commerce & Payments',
      color: 'purple',
      platforms: [
        { name: 'Shopify', icon: Globe },
        { name: 'WooCommerce', icon: Globe },
        { name: 'Stripe', icon: DollarSign },
        { name: 'Square', icon: DollarSign },
        { name: 'PayPal', icon: DollarSign },
      ]
    },
    {
      name: 'Marketing & Advertising',
      color: 'pink',
      platforms: [
        { name: 'Google Ads', icon: TrendingUp },
        { name: 'Meta Ads', icon: Users },
        { name: 'LinkedIn Ads', icon: Users },
        { name: 'TikTok Ads', icon: Users },
        { name: 'Google Analytics', icon: BarChart4 },
      ]
    },
    {
      name: 'CRM & Sales Tools',
      color: 'cyan',
      platforms: [
        { name: 'Salesforce', icon: Database },
        { name: 'HubSpot', icon: Database },
        { name: 'Pipedrive', icon: Database },
        { name: 'Zoho CRM', icon: Database },
        { name: 'Monday.com', icon: Layers },
      ]
    },
    {
      name: 'Communication Platforms',
      color: 'green',
      platforms: [
        { name: 'Twilio', icon: MessageSquare },
        { name: 'Mailchimp', icon: Mail },
        { name: 'SendGrid', icon: Mail },
        { name: 'Slack', icon: MessageSquare },
        { name: 'Intercom', icon: Headphones },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultPackage="Enterprise Hub" />
      
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
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
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
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-black text-sm uppercase tracking-wider flex items-center gap-2 justify-center">
                <Crown className="h-4 w-4" />
                Enterprise Hub — Premium
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
              Full-Scale
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                Operations Center
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 px-4">
              Unlimited integrations. Advanced automation. Enterprise-grade security. Scale without limits with a dedicated team supporting your growth.
            </p>

            {/* Pricing */}
            <div className="flex flex-col items-center gap-6 mb-12">
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-slate-900/80 backdrop-blur-xl border-2 border-purple-500/30 rounded-2xl px-6 sm:px-8 py-4">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    From $15,000
                  </div>
                  <div className="text-xs text-gray-400">Custom implementation</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-purple-400 to-transparent"></div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    $1,497<span className="text-xl">+/mo</span>
                  </div>
                  <div className="text-xs text-gray-400">Premium support</div>
                </div>
              </div>
              <p className="text-sm text-gray-400">Fully custom quotes for enterprise requirements</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full text-xl font-black inline-flex items-center gap-3 shadow-2xl shadow-purple-500/30"
              >
                <Crown className="h-6 w-6" />
                Contact Sales
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/')}
                className="bg-slate-800 border-2 border-slate-700 text-white px-10 py-4 rounded-full text-xl font-black hover:border-purple-400 transition-colors"
              >
                Explore Other Options
              </motion.button>
            </div>
          </motion.div>

          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-slate-900/50 backdrop-blur border border-purple-500/30 rounded-2xl px-6 sm:px-8 py-6">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Unlimited
                </div>
                <div className="text-gray-400 text-sm">Integrations</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-purple-400 to-transparent"></div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  24/7
                </div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-purple-400 to-transparent"></div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Dedicated
                </div>
                <div className="text-gray-400 text-sm">Team</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Enterprise-Grade
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Capabilities</span>
            </h2>
            <p className="text-xl text-gray-400">
              Built for organizations that demand the best
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, i) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-purple-400/50 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white mb-2">{capability.title}</h3>
                      <p className="text-gray-400">{capability.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Major Platforms & Integrations */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-900/50 to-purple-900/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Connect Everything
            </h2>
            <p className="text-xl text-gray-400">
              Unlimited integrations with all major platforms
            </p>
          </motion.div>

          {integrationCategories.map((category, categoryIndex) => (
            <div key={category.name} className="mb-12">
              <h3 className={`text-2xl font-bold text-${category.color}-400 mb-6 text-center`}>
                {category.name}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {category.platforms.map((platform, i) => {
                  const Icon = platform.icon;
                  return (
                    <motion.div
                      key={platform.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className={`bg-slate-800/50 border border-${category.color}-400/30 rounded-xl p-4 text-center hover:border-${category.color}-400 hover:bg-slate-800 transition-all`}
                    >
                      <Icon className={`h-8 w-8 text-${category.color}-400 mx-auto mb-2`} />
                      <h4 className="font-bold text-white text-sm">{platform.name}</h4>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <div className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-2xl px-8 py-6">
              <Infinity className="h-12 w-12 text-purple-400 mx-auto mb-3" />
              <p className="text-xl font-bold text-white mb-2">Unlimited Integration Potential</p>
              <p className="text-gray-400">If it has an API, we can connect it. Custom integrations included.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Features Grid */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Enterprise Features
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need for mission-critical operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enterpriseFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-purple-400/50 transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              What's Included
            </h2>
            <p className="text-xl text-gray-400">
              White-glove service from start to finish
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              { title: 'Discovery & Planning', desc: 'Deep dive into your business needs and technical requirements' },
              { title: 'Custom Architecture', desc: 'Tailored system design that scales with your business' },
              { title: 'Full Implementation', desc: 'Expert development team handles everything from start to finish' },
              { title: 'Integration Services', desc: 'Connect unlimited platforms and custom APIs' },
              { title: 'Team Training', desc: 'Comprehensive onboarding for your entire team' },
              { title: 'Dedicated Support', desc: '24/7 priority support with a dedicated account manager' },
              { title: 'Ongoing Optimization', desc: 'Continuous improvements and feature updates' },
              { title: 'Security & Compliance', desc: 'Enterprise-grade security and compliance management' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-4 bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-black text-sm">{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Crown className="h-16 w-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6">
              Ready to Scale?
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 mb-12">
              Let's build an enterprise solution that grows with your ambitions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full text-xl font-black inline-flex items-center gap-3 shadow-2xl shadow-purple-500/30"
              >
                <Rocket className="h-6 w-6" />
                Schedule Consultation
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/')}
                className="bg-slate-800 text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-slate-700 transition-colors"
              >
                View All Options
              </motion.button>
            </div>

            <p className="text-purple-400 text-lg font-semibold mt-8">
              Premium solutions for premium results 👑
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
