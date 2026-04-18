import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "หน้าแรก", href: "#hero" },
  { label: "หลักสูตร", href: "#courses" },
  { label: "ผู้สอน", href: "#instructor" },
  { label: "สถานที่", href: "#facilities" },
  { label: "ติดต่อ", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-navy/20"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-3 lg:py-4">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("#hero")}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
            <span className="text-gold font-serif font-bold text-lg lg:text-xl">T</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-white font-serif font-bold text-sm lg:text-base leading-tight">
              The One Persona
            </p>
            <p className="text-gold/80 text-[10px] lg:text-xs tracking-wider">
              VOCATIONAL SCHOOL
            </p>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-4 py-2 text-sm text-white/80 hover:text-gold transition-colors duration-300 font-medium"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:0924050378"
            className="ml-4 flex items-center gap-2 bg-gold/20 hover:bg-gold/30 border border-gold/40 text-gold px-5 py-2.5 rounded-sm text-sm font-semibold transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            โทรสอบถาม
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy/98 backdrop-blur-md border-t border-gold/10"
          >
            <div className="container py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-4 py-3 text-white/80 hover:text-gold hover:bg-white/5 transition-colors rounded-sm text-sm"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="tel:0924050378"
                className="flex items-center justify-center gap-2 bg-gold/20 border border-gold/40 text-gold px-5 py-3 rounded-sm text-sm font-semibold mt-3"
              >
                <Phone className="w-4 h-4" />
                โทรสอบถาม
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
