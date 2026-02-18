import { motion, AnimatePresence } from 'motion/react';
import { X, Rocket, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: string;
}

export function ContactModal({ isOpen, onClose, defaultPackage }: ContactModalProps) {
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your interest! We will be in touch soon.');
    onClose();
  };

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 rounded-2xl shadow-2xl border-2 border-cyan-500/30 pointer-events-auto relative"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

              {/* Header */}
              <div className="sticky top-0 bg-slate-900/95 backdrop-blur-xl border-b border-cyan-500/20 p-6 z-10">
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 w-10 h-10 bg-slate-800/50 hover:bg-slate-800 border border-cyan-500/30 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all group"
                >
                  <X className="h-5 w-5 group-hover:rotate-90 transition-transform" />
                </button>

                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Let's Launch Your Project</h2>
                </div>
                <p className="text-gray-400 text-lg">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 relative z-10">
                {/* Launch Offer Banner */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-8 relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl"></div>
                  <div className="relative bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border border-cyan-400/30 rounded-xl p-6 backdrop-blur">
                    <div 
                      className="flex items-start gap-3 cursor-pointer hover:scale-[1.02] transition-transform"
                      onClick={() => {
                        onClose();
                        navigate('/starter-hub');
                      }}
                    >
                      <Sparkles className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                          <span className="text-cyan-400 font-bold">Limited Time Launch Offer — 80% Off!</span>
                        </div>
                        <div className="text-xl font-bold text-white mb-1">
                          Starter Hub: <span className="line-through text-gray-500">$2,997</span> <span className="text-cyan-400">$599</span>
                        </div>
                        <div className="text-gray-300 text-sm">Professional website package at a promotional price • Click to learn more →</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="grid md:grid-cols-2 gap-5"
                  >
                    <div className="relative group">
                      <label className="block text-sm font-medium text-gray-400 mb-2">Your Name *</label>
                      <Input
                        type="text"
                        placeholder="John Doe"
                        required
                        className="w-full bg-slate-950/50 border-cyan-500/30 text-white placeholder:text-gray-600 focus:border-cyan-400 transition-all"
                      />
                      <div className="absolute inset-0 bg-cyan-500/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    </div>

                    <div className="relative group">
                      <label className="block text-sm font-medium text-gray-400 mb-2">Email Address *</label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="w-full bg-slate-950/50 border-cyan-500/30 text-white placeholder:text-gray-600 focus:border-cyan-400 transition-all"
                      />
                      <div className="absolute inset-0 bg-cyan-500/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 }}
                    className="grid md:grid-cols-2 gap-5"
                  >
                    <div className="relative group">
                      <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="w-full bg-slate-950/50 border-cyan-500/30 text-white placeholder:text-gray-600 focus:border-cyan-400 transition-all"
                      />
                      <div className="absolute inset-0 bg-cyan-500/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    </div>

                    <div className="relative group">
                      <label className="block text-sm font-medium text-gray-400 mb-2">Company (Optional)</label>
                      <Input
                        type="text"
                        placeholder="Your Business Name"
                        className="w-full bg-slate-950/50 border-cyan-500/30 text-white placeholder:text-gray-600 focus:border-cyan-400 transition-all"
                      />
                      <div className="absolute inset-0 bg-cyan-500/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="relative group"
                  >
                    <label className="block text-sm font-medium text-gray-400 mb-2">Tell Us About Your Project *</label>
                    <Textarea
                      placeholder="I'm looking for help with..."
                      rows={6}
                      required
                      className="w-full bg-slate-950/50 border-cyan-500/30 text-white placeholder:text-gray-600 focus:border-cyan-400 transition-all resize-none"
                    />
                    <div className="absolute inset-0 bg-cyan-500/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-lg shadow-cyan-500/30 text-white border-0 text-lg py-6 relative overflow-hidden group"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                      <span className="relative flex items-center justify-center gap-2">
                        <Rocket className="h-5 w-5" />
                        Launch My Project
                      </span>
                    </Button>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-gray-500 text-sm"
                  >
                    We respond within 24 hours. Usually much faster. 🚀
                  </motion.p>

                  {/* Direct Contact Info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55 }}
                    className="mt-6 pt-6 border-t border-cyan-500/20 text-center"
                  >
                    <p className="text-gray-400 text-sm mb-3">Or reach us directly:</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
                      <a 
                        href="mailto:kevin@stahlsystemsgroup.com" 
                        className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                      >
                        kevin@stahlsystemsgroup.com
                      </a>
                      <span className="hidden sm:inline text-gray-600">•</span>
                      <a 
                        href="tel:+19568788083" 
                        className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                      >
                        956-878-8083
                      </a>
                    </div>
                    
                    {/* Showcase Link */}
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.65 }}
                      onClick={() => {
                        onClose();
                        navigate('/starter-hub');
                      }}
                      className="mt-6 text-sm text-gray-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <span>Want to see what $600 gets you?</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
