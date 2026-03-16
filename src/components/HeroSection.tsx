import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Antigravity from "@/components/effects/Antigravity";

const easeOut = [0.0, 0.0, 0.2, 1] as const;

/* ── Main Hero ─────────────────────────────────────────────── */
const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-blue-50 via-blue-100/50 to-blue-200/30 overflow-hidden px-6 py-20 md:py-28"
    >
      {/* ─── Antigravity Background ─── */}
      <div className="absolute inset-0 z-0 opacity-55 pointer-events-none">
        <Antigravity
          count={210}
          magnetRadius={24}
          ringRadius={18}
          waveSpeed={0.26}
          waveAmplitude={0.34}
          particleSize={0.7}
          particleVariance={0.26}
          lerpSpeed={0.08}
          pulseSpeed={1.2}
          fieldStrength={16}
          depthFactor={0.92}
          rotationSpeed={0.02}
          particleShape="capsule"
          autoAnimate
          color="#2f8ee8"
        />
        <Antigravity
          count={120}
          magnetRadius={24}
          ringRadius={19}
          waveSpeed={0.22}
          waveAmplitude={0.26}
          particleSize={0.62}
          particleVariance={0.18}
          lerpSpeed={0.075}
          pulseSpeed={1.0}
          fieldStrength={20}
          depthFactor={0.95}
          rotationSpeed={0.015}
          particleShape="capsule"
          autoAnimate
          color="#121a26"
        />
      </div>

      {/* ─── Central Content (z-10) ─── */}
      <motion.div
        className="flex flex-col items-center text-center max-w-5xl relative z-10 pointer-events-none"
      >
        {/* Headline */}
        <motion.h1
          className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black leading-[0.95] tracking-tight text-black select-none"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0, ease: easeOut }}
        >
          <span className="block">
            YOU'RE A GREAT{" "}
            <span className="text-[#044fa0]">COACH.</span>
          </span>

          <span className="block mt-1 md:mt-2">
            YOUR BRAND DOESN'T{" "}
            <span className="relative inline-block text-foreground">
              SHOW IT YET.
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

        {/* Subheadline */}
        <motion.p
          className="mt-6 md:mt-8 max-w-2xl text-base md:text-lg text-black/60 font-body leading-relaxed"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
        >
          You coach. I build the Instagram system behind your personal brand.
        </motion.p>

      </motion.div>

      {/* ─── Corner Cues (desktop only, z-10) ─── */}
      <motion.a
        href="#framework"
        className="hidden md:flex absolute bottom-10 left-10 font-body text-base md:text-lg font-semibold uppercase tracking-tight text-black hover:text-[#0571d3] transition-colors z-10 items-center gap-2 pointer-events-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        See how it works ↓
      </motion.a>

      <motion.a
        href="https://calendly.com/amank420835/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex absolute bottom-10 right-10 font-body text-base md:text-lg font-semibold uppercase tracking-tight text-black hover:text-[#0571d3] transition-colors z-10 items-center gap-2 pointer-events-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        Book a Call →
      </motion.a>
    </section>
  );
};

export default HeroSection;
