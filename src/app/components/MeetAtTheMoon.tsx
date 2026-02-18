import { motion, useMotionValue, useTransform } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useMemo } from 'react';
import { Heart, Rocket, Moon, Sparkles, Users, Brain, Code, Zap } from 'lucide-react';

export function MeetAtTheMoon() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isLaunched, setIsLaunched] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showLoveMessage, setShowLoveMessage] = useState(false);
  
  // Generate stable star positions and animation timings
  const stars = useMemo(() => 
    Array.from({ length: 40 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 2,
    })),
    []
  );
  
  const handleLaunch = () => {
    if (!isLaunched) {
      setIsLaunched(true);
      setTimeout(() => setShowMessage(true), 2500);
    }
  };

  const handleWorkTogether = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowLoveMessage(true);
    setTimeout(() => {
      setShowLoveMessage(false);
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
  };

  return (
    <section ref={ref} className="py-20 px-6 bg-slate-950 relative overflow-hidden">
      {/* Animated stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl mb-6 text-white font-black">
            We'll Meet You
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              At The Moon
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
            When you work with Stahl Systems, you're not just another client. You're family.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We meet in person. We take the time. We care about your business like it's our own. When you're in, you're in—and we'll go to the moon and back to take care of you.
          </p>
        </motion.div>

        {/* Interactive moon scene */}
        <div className="relative h-[600px] flex items-center justify-center mb-16">
          {/* The Moon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1 }}
            className="absolute top-20 right-1/4 cursor-pointer group"
            onClick={handleLaunch}
          >
            <div className="relative">
              {/* Moon glow - enhanced */}
              <div className="absolute inset-0 bg-yellow-200 rounded-full blur-3xl opacity-30 scale-150"></div>
              
              {/* Clickable ring indicator */}
              {!isLaunched && (
                <motion.div
                  className="absolute inset-0 -m-6 border-4 border-cyan-400 rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              )}
              
              {/* Moon surface */}
              <motion.div 
                className="relative w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full shadow-2xl"
                animate={!isLaunched ? {
                  scale: [1, 1.05, 1],
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                {/* Craters */}
                <div className="absolute top-4 left-6 w-8 h-8 bg-gray-300 rounded-full opacity-60"></div>
                <div className="absolute top-12 right-8 w-6 h-6 bg-gray-300 rounded-full opacity-60"></div>
                <div className="absolute bottom-8 left-10 w-10 h-10 bg-gray-300 rounded-full opacity-60"></div>
                
                {/* Moon icon */}
                <Moon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 md:h-16 md:w-16 text-yellow-100 opacity-30" />
              </motion.div>

              {/* Always visible click hint */}
              {!isLaunched && (
                <motion.div
                  className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-center"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <div className="bg-cyan-400/20 backdrop-blur-sm border-2 border-cyan-400 rounded-full px-6 py-2">
                    <p className="text-cyan-400 text-base md:text-lg font-bold whitespace-nowrap">👆 Click the moon!</p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Launch Platform - redesigned to be less phallic */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-20 left-1/4"
          >
            <div className="relative">
              {/* Platform base */}
              <div className="w-32 h-6 bg-gradient-to-b from-slate-600 to-slate-700 rounded-lg border-2 border-slate-500 shadow-xl"></div>
              
              {/* Platform legs */}
              <div className="absolute -bottom-8 left-2 w-2 h-10 bg-slate-700 border border-slate-600"></div>
              <div className="absolute -bottom-8 right-2 w-2 h-10 bg-slate-700 border border-slate-600"></div>
              
              {/* Launch ramp/tower */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-16 h-20">
                {/* Tower structure */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-700 to-slate-600 border-2 border-slate-500" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)' }}></div>
                
                {/* Platform top */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-3 bg-gradient-to-r from-slate-600 to-slate-700 border-2 border-slate-500 rounded-sm"></div>
                
                {/* Tech details */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-8 bg-red-500 opacity-60"></div>
                <div className="absolute top-1/3 left-2 w-1 h-1 bg-cyan-400 rounded-full"></div>
                <div className="absolute top-2/3 right-2 w-1 h-1 bg-cyan-400 rounded-full"></div>
              </div>

              {/* Ground */}
              <div className="absolute -bottom-6 -left-10 w-52 h-2 bg-slate-800 rounded-full opacity-50"></div>
            </div>
          </motion.div>

          {/* Rocket */}
          <motion.div
            className="absolute bottom-32 left-1/4"
            animate={
              isLaunched
                ? {
                    x: [0, 300, 600],
                    y: [0, -200, -400],
                    rotate: [45, 45, 45],
                    scale: [1, 0.7, 0.4],
                  }
                : {}
            }
            transition={{
              duration: 2.5,
              ease: "easeIn",
            }}
          >
            <div className="relative">
              <Rocket className="h-12 w-12 md:h-16 md:w-16 text-cyan-400" style={{ transform: 'rotate(-45deg)' }} />
              
              {/* Rocket trail */}
              {isLaunched && (
                <motion.div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2"
                  animate={{
                    opacity: [0.8, 0.4, 0.8],
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: Infinity,
                  }}
                >
                  <div className="w-8 h-16 bg-gradient-to-b from-orange-400 via-red-400 to-transparent blur-sm"></div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Success message */}
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-50"
            >
              <div className="bg-slate-900/90 backdrop-blur-sm border-2 border-cyan-400 rounded-2xl p-8 shadow-2xl">
                <Heart className="h-16 w-16 text-pink-400 mx-auto mb-4" />
                <p className="text-2xl font-bold text-white mb-2">That's the commitment.</p>
                <p className="text-cyan-400 mb-6">We'll go the distance for you.</p>
                
                {/* CTA Button */}
                <a
                  href="#contact"
                  onClick={handleWorkTogether}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-pink-400/20"
                >
                  <Heart className="h-5 w-5" />
                  Let's Work Together
                </a>
              </div>
            </motion.div>
          )}

          {/* Love message */}
          {showLoveMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-[60]"
            >
              <div className="bg-gradient-to-br from-pink-600 to-purple-600 backdrop-blur-sm border-4 border-pink-300 rounded-3xl p-12 shadow-2xl">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                  }}
                >
                  <Heart className="h-24 w-24 text-white mx-auto mb-4 fill-current" />
                </motion.div>
                <p className="text-4xl font-black text-white mb-3">OMG WE LOVE YOU! 💖</p>
                <p className="text-2xl text-pink-100 font-bold mb-2">UwU</p>
                <p className="text-xl text-pink-50">Can't wait to work together! ✨</p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Relationship values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">In-Person Connection</h3>
            <p className="text-gray-400">
              We meet face-to-face. Your business deserves real relationships, not just emails.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Like Family</h3>
            <p className="text-gray-400">
              When you're in, you're in. We care about your success like it's our own family business.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Pride in Craft</h3>
            <p className="text-gray-400">
              Every pixel, every line, every integration—we take pride in delivering work that makes you proud.
            </p>
          </div>
        </motion.div>

        {/* About Kevin Stahl */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
              Who We Are
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left column - Main bio */}
            <div className="space-y-6">
              <p className="text-xl text-gray-200 leading-relaxed">
                We build systems that solve real business problems.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Our team specializes in full-stack development, systems architecture, and automation engineering—designing scalable digital infrastructure for growing companies. We work at the intersection of software engineering, business operations, and strategic thinking.
              </p>

              <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-2 border-cyan-400/30 rounded-xl p-6">
                <p className="text-lg text-white font-semibold mb-2">
                  We don't just build websites.
                </p>
                <p className="text-xl text-cyan-400 font-bold">
                  We build structured digital ecosystems.
                </p>
              </div>

              <p className="text-gray-300 leading-relaxed">
                With expertise in React, Next.js, Node.js, database design, automation workflows, and API integrations, we create platforms that connect websites, CRMs, payment processors, communications systems, and analytics into one cohesive architecture. Every project is built with performance, maintainability, and long-term scalability in mind.
              </p>
            </div>

            {/* Right column - Background & Philosophy */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border-2 border-slate-700">
                <h4 className="text-xl font-bold text-white mb-4">Our Background</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Our team brings experience from <span className="text-cyan-400 font-semibold">enterprise software development</span> and <span className="text-cyan-400 font-semibold">government systems</span>, where precision and reliability aren't optional—they're required.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We combine technical expertise with analytical discipline, bringing the same rigor to your business that we brought to mission-critical applications.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border-2 border-slate-700">
                <h4 className="text-xl font-bold text-white mb-4">Our Approach</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <p className="text-gray-300">Clear structure</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <p className="text-gray-300">Logical architecture</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <p className="text-gray-300">Clean execution</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <p className="text-gray-300">Long-term vision</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy statement */}
          <div className="mt-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 border-2 border-cyan-400/30 text-center">
            <Brain className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
            <p className="text-2xl md:text-3xl text-white font-bold mb-4">
              We build connections that power your business.
            </p>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every tool, every platform, every integration working together seamlessly.
            </p>
            <div className="mt-8 pt-8 border-t border-slate-700">
              <p className="text-cyan-400 font-semibold text-lg">
                Stahl Systems Group — Built to connect everything.
              </p>
            </div>
          </div>

          {/* Personal commitment - kept but made team-focused */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border-2 border-purple-400/30">
              <p className="text-lg text-gray-300 leading-relaxed italic">
                "When you work with us, you're family. We meet you in person, answer your calls, and genuinely care about making your business succeed. You're not a ticket number—you're someone we're personally invested in."
              </p>
              <p className="text-purple-400 font-semibold mt-4">— The Stahl Systems Team</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
