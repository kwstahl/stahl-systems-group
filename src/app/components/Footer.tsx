import { motion } from "motion/react";
import { Mail, Phone, Zap } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-[#111111] px-6 py-16">
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
                  <Zap className="w-5 h-5 text-[#2F6FD6]" />
                </motion.div>
                <span className="text-xl font-bold tracking-tight">
                  <span className="text-white">Stahl</span>
                  <span className="text-[#666666]">//</span>
                  <span className="text-[#2F6FD6]">
                    Systems
                  </span>
                </span>
              </motion.div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
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
                <Link to="/" className="text-slate-400 hover:text-[#2F6FD6] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-[#2F6FD6] transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/lab" className="text-slate-400 hover:text-[#2F6FD6] transition-colors text-sm">
                  Lab
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-slate-400 hover:text-[#2F6FD6] transition-colors text-sm">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-[#2F6FD6] transition-colors text-sm">
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
                className="flex items-start gap-3 text-sm text-slate-400 hover:text-[#2F6FD6] transition-colors group"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-[#2F6FD6]" />
                <span className="break-all">kevin@stahlsystemsgroup.com</span>
              </a>
              <a 
                href="tel:9568788083"
                className="flex items-start gap-3 text-sm text-slate-400 hover:text-[#2F6FD6] transition-colors group"
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-[#2F6FD6]" />
                <span>(956) 878-8083</span>
              </a>
              <div className="pt-2">
                <Link to="/contact">
                  <motion.button
                    className="bg-[#1E5BBF] text-white px-6 py-2 rounded-lg text-sm font-semibold"
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
        <div className="pt-8 border-t border-[#333333] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} StahlSystemsGroup. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built with precision. Designed for revenue.
          </p>
        </div>
      </div>
    </footer>
  );
}