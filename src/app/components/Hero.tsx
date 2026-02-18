import { motion, AnimatePresence } from 'motion/react';
import { Zap, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  onOpenModal: () => void;
}

export function Hero({ onOpenModal }: HeroProps) {
  const [clickedButton, setClickedButton] = useState<string | null>(null);
  const [codeExploded, setCodeExploded] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (buttonId: string) => {
    setClickedButton(buttonId);
    setTimeout(() => setClickedButton(null), 1000);
  };

  const handleCodeClick = () => {
    setCodeExploded(true);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-6 py-12 md:py-16 relative overflow-hidden">
      {/* Hero content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 inline-block"
        >
          <div className="relative group">
            {/* Enhanced glow */}
            <motion.div 
              className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-40"
              animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            ></motion.div>
            
            {/* Badge */}
            <span className="relative text-blue-400 tracking-[0.15em] uppercase text-[10px] md:text-sm font-bold border-2 border-blue-400/60 px-3 md:px-6 py-1.5 md:py-2 rounded-full backdrop-blur-sm bg-slate-900/90 inline-flex items-center gap-1.5 md:gap-2.5 shadow-lg shadow-blue-500/20">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              <span className="hidden sm:inline">Built To Grow With Your Business</span>
              <span className="sm:hidden">Built To Grow</span>
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-6xl mb-4 md:mb-5 leading-[1.1] tracking-tight px-2"
        >
          <span className="text-white font-black drop-shadow-lg">
            We Build Your Website & Hook Up
          </span>
          <br />
          <motion.span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 font-black animate-gradient inline-block"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            All Your Business Tools
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed px-4"
        >
          From <span className="text-cyan-400 font-bold">Shopify stores to full websites,</span> we build what fits your business. Then we plug in Stripe, Google Ads, Twilio, your CRM—whatever you need. 
          <span className="text-cyan-400 font-bold"> Work with what you have. Grow without rebuilding.</span>
        </motion.p>

        {/* Code Demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8 mx-auto max-w-2xl relative"
        >
          <AnimatePresence mode="wait">
            {!codeExploded ? (
              <motion.div
                key="code"
                exit={{ scale: 0, opacity: 0, rotateX: 90 }}
                transition={{ duration: 0.6 }}
                onClick={handleCodeClick}
                className="relative cursor-pointer group"
              >
                {/* Enhanced pulsing hint */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute -inset-3 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"
                />
                
                <div className="relative bg-slate-900/95 backdrop-blur-md border-2 border-blue-500/50 rounded-2xl p-4 shadow-2xl shadow-blue-500/20 group-hover:border-cyan-400/70 transition-all group-hover:scale-[1.02] group-hover:shadow-cyan-500/30">
                  {/* Window header */}
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-700">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400 shadow-sm"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-sm"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-sm"></div>
                    <span className="text-xs text-cyan-400 ml-2 font-bold tracking-wide">StahlSystems.jsx</span>
                    <motion.span
                      animate={{ opacity: [0.5, 1, 0.5], y: [-1, 1, -1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="ml-auto text-xs text-yellow-300 font-black flex items-center gap-1.5"
                    >
                      👆 Click Me!
                    </motion.span>
                  </div>
                  
                  {/* Code */}
                  <div className="font-mono text-xs md:text-sm space-y-0.5 text-left">
                    <motion.div
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                    >
                      <span className="text-purple-400 font-semibold">function</span>{' '}
                      <span className="text-yellow-300 font-bold">connectEverything</span>
                      <span className="text-gray-400">() {'{'}</span>
                    </motion.div>
                    
                    <motion.div
                      className="pl-3"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                    >
                      <span className="text-cyan-300 font-semibold">stripe</span>
                      <span className="text-gray-400">.</span>
                      <span className="text-green-300 font-semibold">connect</span>
                      <span className="text-gray-400">();</span>
                    </motion.div>
                    
                    <motion.div
                      className="pl-3"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                    >
                      <span className="text-cyan-300 font-semibold">shopify</span>
                      <span className="text-gray-400">.</span>
                      <span className="text-green-300 font-semibold">integrate</span>
                      <span className="text-gray-400">();</span>
                    </motion.div>
                    
                    <motion.div
                      className="pl-3"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    >
                      <span className="text-cyan-300 font-semibold">googleAds</span>
                      <span className="text-gray-400">.</span>
                      <span className="text-green-300 font-semibold">track</span>
                      <span className="text-gray-400">();</span>
                    </motion.div>
                    
                    <motion.div
                      className="pl-3"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
                    >
                      <span className="text-cyan-300 font-semibold">metaAds</span>
                      <span className="text-gray-400">.</span>
                      <span className="text-green-300 font-semibold">sync</span>
                      <span className="text-gray-400">();</span>
                    </motion.div>
                    
                    <motion.div
                      className="pl-3"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.0 }}
                    >
                      <span className="text-cyan-300 font-semibold">twilio</span>
                      <span className="text-gray-400">.</span>
                      <span className="text-green-300 font-semibold">link</span>
                      <span className="text-gray-400">();</span>
                    </motion.div>
                    
                    <motion.div
                      className="pl-3"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
                    >
                      <span className="text-blue-300 font-semibold">return</span>{' '}
                      <span className="text-orange-300 font-semibold">"Everything Connected!"</span>
                      <span className="text-gray-400">;</span>
                    </motion.div>
                    
                    <motion.div
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
                    >
                      <span className="text-gray-400">{'}'}</span>
                    </motion.div>
                  </div>
                </div>

                {/* Explosion particles (hidden until click) */}
              </motion.div>
            ) : (
              <motion.div
                key="cta"
                initial={{ scale: 0, rotateY: -180 }}
                animate={{ scale: 1, rotateY: 0 }}
                transition={{ type: "spring", duration: 0.8, bounce: 0.4 }}
                className="relative"
              >
                {/* Explosion particles */}
                {[...Array(35)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2.5 h-2.5 rounded-full"
                    style={{
                      background: `linear-gradient(45deg, ${
                        ['#fbbf24', '#f59e0b', '#3b82f6', '#06b6d4', '#8b5cf6'][i % 5]
                      }, ${['#f59e0b', '#ef4444', '#06b6d4', '#3b82f6', '#6366f1'][i % 5]})`,
                      left: '50%',
                      top: '50%',
                      boxShadow: '0 0 15px currentColor'
                    }}
                    initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                    animate={{
                      scale: [0, 1.8, 0],
                      x: Math.cos((i / 35) * Math.PI * 2) * (150 + Math.random() * 100),
                      y: Math.sin((i / 35) * Math.PI * 2) * (150 + Math.random() * 100),
                      opacity: [1, 1, 0],
                    }}
                    transition={{
                      duration: 1.6,
                      ease: "easeOut",
                    }}
                  />
                ))}

                {/* CTA Card */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
                  className="bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 rounded-2xl p-6 md:p-10 text-center shadow-2xl shadow-blue-500/30"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                  >
                    <Sparkles className="h-12 w-12 md:h-16 md:w-16 text-yellow-300 mx-auto mb-4 drop-shadow-lg" />
                  </motion.div>
                  
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-2xl md:text-4xl font-black text-white mb-3 tracking-tight"
                  >
                    Impressive?
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-lg md:text-xl text-white/95 mb-6"
                  >
                    Let's get started <span className="text-yellow-300 font-black text-xl md:text-2xl">$599</span>
                  </motion.p>
                  
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, type: "spring", bounce: 0.4 }}
                    onClick={onOpenModal}
                    className="inline-flex items-center gap-2.5 bg-white text-blue-600 px-7 py-3.5 rounded-xl font-black text-base hover:scale-110 transition-all shadow-2xl hover:shadow-white/20 cursor-pointer"
                  >
                    <Zap className="h-5 w-5" />
                    Let's Build It
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <button
            onClick={(e) => {
              handleButtonClick('starter');
              navigate('/starter-hub');
            }}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 overflow-hidden cursor-pointer"
          >
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            <span className="relative flex items-center gap-2">
              Start Your Site — $599
              <Zap className="h-5 w-5" />
            </span>
            
            {/* Click effect */}
            {clickedButton === 'starter' && (
              <>
                <motion.div
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 3, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 border-4 border-yellow-400 rounded-xl"
                />
                <motion.div
                  initial={{ y: 0, opacity: 1 }}
                  animate={{ y: -100, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <Zap className="h-12 w-12 text-yellow-400" />
                </motion.div>
              </>
            )}
          </button>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              handleButtonClick('services');
              setTimeout(() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }, 300);
            }}
            className="group px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 rounded-xl font-bold text-lg hover:border-blue-400 hover:text-blue-600 transition-all hover:scale-105 hover:shadow-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative flex items-center gap-2">
              See What We Connect
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            
            {/* Click effect */}
            {clickedButton === 'services' && (
              <>
                <motion.div
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 3, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 border-4 border-blue-400 rounded-xl"
                />
                <motion.div
                  initial={{ x: 0, opacity: 1 }}
                  animate={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <ArrowRight className="h-12 w-12 text-blue-600" />
                </motion.div>
              </>
            )}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
