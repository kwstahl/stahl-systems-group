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
          ? "bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm" 
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
                <Zap className="w-5 h-5 text-[#1E5BBF]" />
              </motion.div>
              <span className="text-xl font-bold tracking-tight">
                <span className={scrolled ? "text-[#111111]" : "text-white"}>Stahl</span>
                <span className="text-[#666666]">//</span>
                <span className="text-[#1E5BBF]">
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
                      ? "text-[#1E5BBF]"
                      : scrolled ? "text-[#666666] hover:text-[#111111]" : "text-slate-300 hover:text-white"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1E5BBF]"
                      layoutId="underline"
                    />
                  )}
                </motion.div>
              </Link>
            ))}
            <div className={`ml-4 pl-4 border-l ${scrolled ? "border-gray-300" : "border-slate-700"}`}>
              <Link to="/contact">
                <motion.button
                  className="bg-[#1E5BBF] text-white px-5 py-2 rounded-md text-sm font-semibold relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Talk to Us</span>
                  <motion.div
                    className="absolute inset-0 bg-[#2F6FD6]"
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
            className={scrolled ? "md:hidden text-[#111111]" : "md:hidden text-white"}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4 bg-white rounded-lg border border-gray-200 p-2 shadow-lg"
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
                          ? "text-[#1E5BBF] bg-[#1E5BBF]/10"
                          : "text-[#666666] hover:bg-gray-100"
                      }`}
                    >
                      {link.name}
                    </div>
                  </Link>
                ))}
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-[#1E5BBF] text-white px-5 py-3 rounded-lg text-sm font-semibold mt-2">
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