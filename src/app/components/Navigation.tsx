import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Journal", path: "/journal" },
  { name: "About", path: "/about" },
  { name: "Lab", path: "/lab" }
];

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    if (path === "/" && location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled 
          ? "bg-[#0a0a1f]/90 backdrop-blur-lg border-b border-indigo-500/20" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.div 
              className="flex items-center gap-2"
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
              >
                <motion.div
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-indigo-400"
                      : "text-slate-400 hover:text-white"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500"
                      layoutId="underline"
                    />
                  )}
                </motion.div>
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-slate-800">
              <Link to="/contact">
                <motion.button
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2 rounded-md text-sm font-semibold relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Talk to Us</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4 bg-[#0a0a1f] rounded-lg border border-indigo-500/20 p-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => handleNavClick(link.path)}
                  >
                    <div
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        location.pathname === link.path
                          ? "text-indigo-400 bg-indigo-500/10"
                          : "text-slate-400 hover:bg-slate-800"
                      }`}
                    >
                      {link.name}
                    </div>
                  </Link>
                ))}
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 rounded-lg text-sm font-semibold mt-2">
                    Talk to Us
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}