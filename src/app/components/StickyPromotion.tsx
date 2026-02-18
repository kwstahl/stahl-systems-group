import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function StickyPromotion() {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {hasScrolled && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-20 right-6 z-40 max-w-sm"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-50 rounded-xl"></div>
            
            {/* Content */}
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl shadow-2xl border border-blue-400/30">
              <button
                onClick={() => setIsVisible(false)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors border border-blue-400/30"
              >
                <X className="h-3 w-3" />
              </button>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Launch Special
                  </div>
                  <div className="text-sm text-white/90">
                    Starter sites <span className="font-bold">$599</span> <span className="line-through text-white/50 text-xs">$2,997</span>
                  </div>
                  <button
                    className="mt-2 text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors"
                    onClick={() => navigate('/starter-hub')}
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
