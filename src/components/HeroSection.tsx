import { motion, useReducedMotion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

const easeOut = [0.0, 0.0, 0.2, 1] as const;

/* ── Main Hero ─────────────────────────────────────────────── */
const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-blue-50 via-blue-100/50 to-blue-200/30 overflow-hidden px-6 py-20 md:py-28"
    >
      {/* ─── Interactive Particle Background (z-0) ─── */}
      <ParticleBackground />

      {/* ─── Central Content (z-10) ─── */}
      <motion.div
        className="flex flex-col items-center text-center max-w-5xl relative z-10"
      >
        {/* Headline */}
        <motion.h1
          className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black leading-[0.95] tracking-tight text-black"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0, ease: easeOut }}
        >
          <span className="block">
            WE BUILD PERSONAL{" "}
            <span className="text-[#044fa0]">BRANDS</span>
          </span>

          <span className="block mt-1 md:mt-2">
            THAT PEOPLE{" "}
            <span className="relative inline-block text-foreground">
              TRUST.
              <motion.span
                className="absolute bottom-1 md:bottom-2 left-0 w-full h-[2px] bg-secondary"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1.2, ease: easeOut }}
                style={{ originX: 0 }}
              />
            </span>
          </span>
        </motion.h1>


      </motion.div>

      {/* ─── Corner Cues (desktop only, z-10) ─── */}
      <motion.a
        href="#services"
        className="hidden md:flex absolute bottom-10 left-10 font-body text-base md:text-lg font-semibold uppercase tracking-tight text-black hover:text-[#0571d3] transition-colors z-10 items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        See What We Do
      </motion.a>

      <motion.a
        href="#contact"
        className="hidden md:flex absolute bottom-10 right-10 font-body text-base md:text-lg font-semibold uppercase tracking-tight text-black hover:text-[#0571d3] transition-colors z-10 items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        Dive In the world
      </motion.a>
    </section>
  );
};

export default HeroSection;
