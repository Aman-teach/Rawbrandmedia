import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Framework", href: "#framework" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#founder" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ─── Top Bar ─── */}
      <nav
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[85%] max-w-5xl transition-all duration-300 bg-[#EFF6FF]/60 backdrop-blur-lg shadow-sm border border-[#EFF6FF]/30 rounded-3xl`}
      >
        <div className="px-6 md:px-8 py-3 md:py-4 flex items-center justify-between">
          {/* Left: Logo */}
          <a href="#" className="flex flex-col items-start leading-none">
            <span className="font-display text-xl md:text-2xl text-black font-black tracking-tight">
              RawBrand
            </span>
            <span className="font-body font-bold text-[8px] md:text-[9px] text-[#0571d3] tracking-[0.25em] uppercase">
              MEDIA
            </span>
          </a>

          {/* Right: Menu Button + CTA */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* CTA: Let's Talk */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 bg-[#0571d3] text-white font-display font-bold text-xs md:text-sm tracking-wide px-5 py-2.5 md:px-6 md:py-3 rounded-lg hover:bg-[#044fa0] transition-colors duration-300 uppercase"
            >
              Let's Talk
              <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </a>

            {/* Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 text-black hover:text-neutral-500 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? (
                <X className="w-6 h-6 md:w-7 md:h-7 stroke-[1.5]" />
              ) : (
                <Menu className="w-6 h-6 md:w-7 md:h-7 stroke-[1.5]" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ─── Full-Screen Navigation Panel ─── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#EFF6FF] flex flex-col"
          >
            {/* Spacer for the nav bar */}
            <div className="h-20 md:h-24 flex-shrink-0" />

            {/* Links centered in the remaining space */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8 md:gap-12">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.05 + i * 0.07,
                    ease: "easeOut",
                  }}
                  className="text-black font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight hover:text-[#0571d3] transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Bottom: mobile CTA */}
            <div className="sm:hidden flex justify-center pb-10">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 bg-[#0571d3] text-white font-display font-bold text-sm tracking-wide px-8 py-3.5 rounded-lg hover:bg-[#044fa0] transition-colors duration-300 uppercase"
              >
                Let's Talk
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
