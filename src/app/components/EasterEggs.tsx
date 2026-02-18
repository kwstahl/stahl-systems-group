import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Zap, Heart, Rocket, Star, TrendingUp, Code, Coffee, Trophy } from 'lucide-react';

const konamiCode = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

const easterEggMessages = [
  { text: "You found the secret! You're a legend.", icon: Sparkles },
  { text: "Konami code? Respect. You know what's up.", icon: Zap },
  { text: "We love clients who explore. Call us!", icon: Heart },
  { text: "This is the energy we want. Let's build together.", icon: Rocket },
];

export function EasterEggs() {
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [showKonamiEgg, setShowKonamiEgg] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [showClickEgg, setShowClickEgg] = useState(false);
  const [rainbowMode, setRainbowMode] = useState(false);
  
  // New easter egg states
  const [shiftHoldTime, setShiftHoldTime] = useState(0);
  const [showShiftEgg, setShowShiftEgg] = useState(false);
  const [showScrollEgg, setShowScrollEgg] = useState(false);
  const [showShakeEgg, setShowShakeEgg] = useState(false);
  const [showSpaceEgg, setShowSpaceEgg] = useState(false);
  const [confettiMode, setConfettiMode] = useState(false);

  // Konami code detector
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === konamiCode[konamiIndex]) {
        const newIndex = konamiIndex + 1;
        setKonamiIndex(newIndex);

        if (newIndex === konamiCode.length) {
          setShowKonamiEgg(true);
          setRainbowMode(true);
          setKonamiIndex(0);
          setTimeout(() => setShowKonamiEgg(false), 5000);
          setTimeout(() => setRainbowMode(false), 10000);
        }
      } else {
        setKonamiIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiIndex]);

  // Hidden click counter on logo
  useEffect(() => {
    const handleLogoClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-easter-egg="logo"]')) {
        const newCount = clickCount + 1;
        setClickCount(newCount);

        if (newCount === 7) {
          setShowClickEgg(true);
          setClickCount(0);
          setTimeout(() => setShowClickEgg(false), 4000);
        }
      }
    };

    document.addEventListener('click', handleLogoClick);
    return () => document.removeEventListener('click', handleLogoClick);
  }, [clickCount]);

  // Secret: Type "stahl" anywhere on the page
  useEffect(() => {
    let typed = '';
    const handleKeyPress = (e: KeyboardEvent) => {
      typed += e.key.toLowerCase();
      if (typed.includes('stahl')) {
        const particles = document.createElement('div');
        particles.innerHTML = '⚡';
        particles.style.position = 'fixed';
        particles.style.left = `${Math.random() * window.innerWidth}px`;
        particles.style.top = `${Math.random() * window.innerHeight}px`;
        particles.style.fontSize = '48px';
        particles.style.pointerEvents = 'none';
        particles.style.zIndex = '9999';
        particles.style.animation = 'fadeOut 2s forwards';
        document.body.appendChild(particles);
        setTimeout(() => particles.remove(), 2000);
        typed = '';
      }
      // NEW: Type "systems" easter egg
      if (typed.includes('systems')) {
        setConfettiMode(true);
        setTimeout(() => setConfettiMode(false), 5000);
        typed = '';
      }
      if (typed.length > 10) typed = typed.slice(-10);
    };

    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeOut {
        0% { opacity: 1; transform: scale(1) translateY(0); }
        100% { opacity: 0; transform: scale(2) translateY(-100px); }
      }
    `;
    document.head.appendChild(style);

    window.addEventListener('keypress', handleKeyPress);
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
      style.remove();
    };
  }, []);

  // NEW: Easy - Hold Shift for 3 seconds
  useEffect(() => {
    let shiftTimer: ReturnType<typeof setTimeout>;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Shift' && shiftHoldTime === 0) {
        shiftTimer = setInterval(() => {
          setShiftHoldTime(prev => {
            const newTime = prev + 100;
            if (newTime >= 3000) {
              setShowShiftEgg(true);
              setTimeout(() => setShowShiftEgg(false), 4000);
              clearInterval(shiftTimer);
              return 0;
            }
            return newTime;
          });
        }, 100);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Shift') {
        clearInterval(shiftTimer);
        setShiftHoldTime(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      clearInterval(shiftTimer);
    };
  }, [shiftHoldTime]);

  // NEW: Easy - Scroll to bottom and wait
  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;
    
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      
      const scrolledToBottom = 
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      
      if (scrolledToBottom) {
        scrollTimeout = setTimeout(() => {
          setShowScrollEgg(true);
          setTimeout(() => setShowScrollEgg(false), 4000);
        }, 2000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // NEW: Hard - Shake mouse rapidly
  useEffect(() => {
    let mousePositions: { x: number; y: number; time: number }[] = [];
    
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      mousePositions.push({ x: e.clientX, y: e.clientY, time: now });
      
      // Keep only last 500ms of positions
      mousePositions = mousePositions.filter(pos => now - pos.time < 500);
      
      // Check if mouse is shaking (rapid back and forth movement)
      if (mousePositions.length > 20) {
        let totalDistance = 0;
        for (let i = 1; i < mousePositions.length; i++) {
          const dx = mousePositions[i].x - mousePositions[i-1].x;
          const dy = mousePositions[i].y - mousePositions[i-1].y;
          totalDistance += Math.sqrt(dx * dx + dy * dy);
        }
        
        // If moved a lot in short time = shaking
        if (totalDistance > 1000) {
          setShowShakeEgg(true);
          setTimeout(() => setShowShakeEgg(false), 4000);
          mousePositions = [];
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // NEW: Hard - Hold spacebar for 5 seconds
  useEffect(() => {
    let spaceHoldStart = 0;
    let spaceTimer: ReturnType<typeof setTimeout>;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && spaceHoldStart === 0 && !(e.target as HTMLElement).matches('input, textarea')) {
        spaceHoldStart = Date.now();
        spaceTimer = setTimeout(() => {
          setShowSpaceEgg(true);
          setTimeout(() => setShowSpaceEgg(false), 4000);
          spaceHoldStart = 0;
        }, 5000);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        clearTimeout(spaceTimer);
        spaceHoldStart = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      clearTimeout(spaceTimer);
    };
  }, []);

  // Confetti effect for "systems" easter egg
  useEffect(() => {
    if (confettiMode) {
      const emojis = ['🎉', '🎊', '✨', '⭐', '💫', '🚀', '💻', '⚡'];
      const interval = setInterval(() => {
        for (let i = 0; i < 3; i++) {
          const confetti = document.createElement('div');
          confetti.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
          confetti.style.position = 'fixed';
          confetti.style.left = `${Math.random() * 100}%`;
          confetti.style.top = '-50px';
          confetti.style.fontSize = '32px';
          confetti.style.pointerEvents = 'none';
          confetti.style.zIndex = '9999';
          confetti.style.animation = 'confettiFall 3s linear forwards';
          document.body.appendChild(confetti);
          setTimeout(() => confetti.remove(), 3000);
        }
      }, 200);

      const style = document.createElement('style');
      style.id = 'confetti-style';
      style.textContent = `
        @keyframes confettiFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(${window.innerHeight + 100}px) rotate(720deg); opacity: 0; }
        }
      `;
      document.head.appendChild(style);

      return () => {
        clearInterval(interval);
        document.getElementById('confetti-style')?.remove();
      };
    }
  }, [confettiMode]);

  // Rainbow mode effect
  useEffect(() => {
    if (rainbowMode) {
      document.body.style.animation = 'rainbow 3s infinite';
      const style = document.createElement('style');
      style.id = 'rainbow-style';
      style.textContent = `
        @keyframes rainbow {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        document.body.style.animation = '';
        document.getElementById('rainbow-style')?.remove();
      };
    }
  }, [rainbowMode]);

  const randomMessage = easterEggMessages[Math.floor(Math.random() * easterEggMessages.length)];
  const MessageIcon = randomMessage.icon;

  return (
    <>
      {/* Konami code easter egg */}
      <AnimatePresence>
        {showKonamiEgg && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -50 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] pointer-events-none"
          >
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white px-8 py-6 rounded-2xl shadow-2xl border-4 border-yellow-400">
              <div className="flex items-center gap-4">
                <MessageIcon className="h-12 w-12" />
                <div>
                  <p className="text-2xl font-black mb-1">{randomMessage.text}</p>
                  <p className="text-sm opacity-90">Rainbow mode: ACTIVATED</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click counter easter egg */}
      <AnimatePresence>
        {showClickEgg && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed top-20 right-6 z-[9999] pointer-events-none"
          >
            <div className="bg-gradient-to-br from-cyan-600 to-blue-600 text-white px-6 py-4 rounded-xl shadow-2xl border-2 border-cyan-400">
              <p className="text-lg font-bold">7 clicks? You're persistent!</p>
              <p className="text-sm opacity-90">That's the kind of dedication we love.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NEW: Shift hold easter egg */}
      <AnimatePresence>
        {showShiftEgg && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed top-1/3 right-6 z-[9999] pointer-events-none"
          >
            <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white px-6 py-4 rounded-xl shadow-2xl border-2 border-orange-400">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-8 w-8" />
                <div>
                  <p className="text-lg font-bold">Patience unlocked! ⌨️</p>
                  <p className="text-sm opacity-90">Good things come to those who wait</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NEW: Scroll to bottom easter egg */}
      <AnimatePresence>
        {showScrollEgg && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[9999] pointer-events-none"
          >
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white px-6 py-4 rounded-xl shadow-2xl border-2 border-indigo-400">
              <div className="flex items-center gap-3">
                <Trophy className="h-8 w-8" />
                <div>
                  <p className="text-lg font-bold">You made it to the end! 🏆</p>
                  <p className="text-sm opacity-90">Thoroughness is a virtue</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NEW: Mouse shake easter egg */}
      <AnimatePresence>
        {showShakeEgg && (
          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: [0, 5, -5, 0] }}
            exit={{ opacity: 0, rotate: 10 }}
            transition={{ rotate: { repeat: 3, duration: 0.2 } }}
            className="fixed top-1/4 left-6 z-[9999] pointer-events-none"
          >
            <div className="bg-gradient-to-br from-pink-600 to-rose-600 text-white px-6 py-4 rounded-xl shadow-2xl border-2 border-pink-400">
              <div className="flex items-center gap-3">
                <Zap className="h-8 w-8" />
                <div>
                  <p className="text-lg font-bold">Whoa, easy there! 🖱️</p>
                  <p className="text-sm opacity-90">That's some serious energy!</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NEW: Spacebar hold easter egg */}
      <AnimatePresence>
        {showSpaceEgg && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-1/2 right-6 z-[9999] pointer-events-none"
          >
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white px-6 py-4 rounded-xl shadow-2xl border-2 border-blue-400">
              <div className="flex items-center gap-3">
                <Coffee className="h-8 w-8" />
                <div>
                  <p className="text-lg font-bold">Taking a space break? ☕</p>
                  <p className="text-sm opacity-90">We dig the chill vibes</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress indicator for konami code (hidden until you start) */}
      {konamiIndex > 0 && konamiIndex < konamiCode.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed bottom-6 right-6 z-50 pointer-events-none"
        >
          <div className="bg-slate-900/80 backdrop-blur-sm text-cyan-400 px-3 py-1 rounded-full text-xs font-mono border border-cyan-400/30">
            {konamiIndex}/{konamiCode.length}
          </div>
        </motion.div>
      )}

      {/* NEW: Shift hold progress indicator */}
      {shiftHoldTime > 0 && shiftHoldTime < 3000 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed bottom-6 left-6 z-50 pointer-events-none"
        >
          <div className="bg-slate-900/80 backdrop-blur-sm text-orange-400 px-3 py-2 rounded-lg text-xs font-mono border border-orange-400/30">
            <div className="flex items-center gap-2">
              <span>Hold Shift...</span>
              <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-orange-500 to-red-500"
                  style={{ width: `${(shiftHoldTime / 3000) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
