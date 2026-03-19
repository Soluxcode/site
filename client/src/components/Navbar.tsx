import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/academia", label: "Academia" },
  { href: "/universo-solux", label: "Universo Solux" },
  { href: "/refugio-solux", label: "Refúgio Solux" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-deep/95 backdrop-blur-md border-b border-border/30 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-serif text-xl md:text-2xl font-semibold tracking-wide text-gold transition-colors group-hover:text-gold-light">
            SoluxCode
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm font-sans tracking-wide transition-colors duration-300 rounded-sm ${
                location === link.href
                  ? "text-gold"
                  : "text-cream/70 hover:text-cream"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/ikigai"
            className="ml-3 px-4 py-2 text-sm font-sans font-bold tracking-wide bg-gold/10 border border-gold/30 text-gold rounded-sm hover:bg-gold/20 transition-all duration-300"
          >
            Ikigai
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-cream/80 hover:text-gold transition-colors"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-navy-deep/98 backdrop-blur-md border-b border-border/30 overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 text-base font-sans transition-colors rounded-sm ${
                    location === link.href
                      ? "text-gold bg-gold/5"
                      : "text-cream/70 hover:text-cream hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/ikigai"
                className="mt-2 px-4 py-3 text-base font-sans font-bold text-gold bg-gold/10 border border-gold/30 rounded-sm text-center"
              >
                Descubra seu Ikigai
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
