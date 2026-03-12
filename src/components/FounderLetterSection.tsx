import { useState } from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Quote, X } from "lucide-react";

const FounderLetterSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-32 md:py-40 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <AnimateOnScroll>
          {/* Section label */}
          <p className="text-center text-primary font-body font-semibold text-xs tracking-[0.25em] uppercase mb-4">
            A Private Note
          </p>

          {/* Headline */}
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-[1.08] tracking-tight mb-4">
            Before you apply, read this.
          </h2>

          {/* Subtext */}
          <p className="text-center text-muted-foreground font-body text-lg mb-14">
            A short message for coaches building something real.
          </p>

          {/* ─── Sealed Card ─── */}
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.button
                key="sealed"
                onClick={() => setIsOpen(true)}
                className="group mx-auto flex flex-col items-center justify-center gap-4 w-full max-w-md rounded-[22px] border border-border/50 px-10 py-14 cursor-pointer bg-transparent transition-shadow duration-500"
                style={{
                  background:
                    "linear-gradient(170deg, #F8FAFF 0%, #FFFFFF 50%, #F5F8FD 100%)",
                  boxShadow:
                    "0 4px 24px -8px rgba(5,113,211,0.07), 0 1px 6px -2px rgba(5,113,211,0.04)",
                }}
                whileHover={{
                  y: -4,
                  boxShadow:
                    "0 12px 40px -10px rgba(5,113,211,0.13), 0 2px 10px -3px rgba(5,113,211,0.06)",
                }}
                exit={{
                  opacity: 0,
                  scale: 0.92,
                  transition: { duration: 0.3, ease: "easeIn" },
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {/* Envelope icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/12 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-primary/50 group-hover:text-primary/70 transition-colors duration-300" />
                </div>

                <div className="text-center">
                  <p className="font-display font-semibold text-foreground text-lg mb-1">
                    A letter from the founder
                  </p>
                  <p className="font-body text-muted-foreground/60 text-sm">
                    Click to open
                  </p>
                </div>

                {/* Decorative seal line */}
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mt-2" />
              </motion.button>
            ) : (
              <motion.div
                key="letter"
                className="relative mx-auto w-full max-w-2xl rounded-[22px] border border-border/50 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(175deg, #FAFBFE 0%, #FFFFFF 40%, #F7F8FC 100%)",
                  boxShadow:
                    "0 8px 40px -12px rgba(5,113,211,0.09), 0 2px 10px -3px rgba(5,113,211,0.04)",
                }}
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center transition-colors duration-200 z-10 cursor-pointer border-none"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>

                <div className="px-8 py-10 sm:px-12 sm:py-14 md:px-14 md:py-16">
                  {/* Letter title */}
                  <h3 className="font-display font-bold text-xl md:text-2xl text-foreground tracking-tight leading-snug mb-8 max-w-md">
                    A note for coaches who refuse to stay invisible
                  </h3>

                  {/* Letter body */}
                  <div className="space-y-5 text-muted-foreground text-[16px] md:text-[17px] font-body leading-[1.85]">
                    <p>
                      To the coach who knows their work deserves more attention
                      than it's getting right now.
                    </p>

                    <p>
                      Most advice online will tell you to post more content.
                      <br />
                      More reels. More posts. More noise.
                    </p>

                    <p>
                      But expertise rarely becomes visible through volume alone.
                    </p>

                    <p>
                      Authority comes from clarity — a clear voice, a clear
                      message, a clear position in your niche.
                    </p>

                    <p>
                      Raw Brand Media exists to help coaches turn their knowledge
                      into authority systems that build trust before the first
                      conversation ever happens.
                    </p>

                    <p>
                      If you are someone who wants to build something meaningful
                      instead of chasing trends, then you are exactly the kind of
                      person this studio was created for.
                    </p>
                  </div>

                  {/* Signature */}
                  <div className="mt-10 pt-8 border-t border-border/30">
                    <p
                      className="text-foreground text-xl mb-0.5"
                      style={{
                        fontFamily: "'Space Grotesk', serif",
                        fontStyle: "italic",
                        fontWeight: 500,
                      }}
                    >
                      Aman
                    </p>
                    <p className="font-body text-muted-foreground/60 text-sm">
                      Founder, RawBrandMedia
                    </p>
                  </div>

                  {/* Quote block */}
                  <div className="mt-8 flex items-start gap-2.5 bg-primary/[0.03] rounded-xl px-5 py-4 border border-primary/[0.06]">
                    <Quote className="w-3.5 h-3.5 text-primary/25 mt-0.5 flex-shrink-0" />
                    <p className="font-body text-sm text-muted-foreground/55 italic leading-relaxed">
                      Authority is built through consistency, not virality.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default FounderLetterSection;
