import { motion } from "motion/react";
import { Mail, Phone, Zap } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-[#0a0a1f] px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/">
              <motion.div 
                className="flex items-center gap-2 mb-4"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-5 h-5 text-indigo-400" />
                </motion.div>
                <span className="text-xl font-bold tracking-tight">
                  <span className="text-white">Stahl</span>
                  <span className="text-slate-600">//</span>
                  <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Systems
                  </span>
                </span>
              </motion.div>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              Sell everywhere. Manage once.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/lab" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                  Lab
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
              What We Build
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>Multi-Channel Systems</li>
              <li>Amazon Integration</li>
              <li>TikTok Shop Setup</li>
              <li>Instagram Shop</li>
              <li>Social Selling Infrastructure</li>
              <li>Backend Automation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-4">
              <a 
                href="mailto:kevin@stahlsystemsgroup.com"
                className="flex items-start gap-3 text-sm text-slate-400 hover:text-indigo-400 transition-colors group"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-indigo-400" />
                <span className="break-all">kevin@stahlsystemsgroup.com</span>
              </a>
              <a 
                href="tel:9568788083"
                className="flex items-start gap-3 text-sm text-slate-400 hover:text-indigo-400 transition-colors group"
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-indigo-400" />
                <span>(956) 878-8083</span>
              </a>
              <div className="pt-2">
                <Link to="/contact">
                  <motion.button
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg text-sm font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-600">
            © {currentYear} StahlSystemsGroup. All rights reserved.
          </p>
          <p className="text-xs text-slate-700">
            Built with precision. Designed for revenue.
          </p>
        </div>
      </div>
    </footer>
  );
}