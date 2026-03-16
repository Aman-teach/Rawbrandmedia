import { Sparkles, ArrowRight, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { motion } from "framer-motion";

const forYouItems = [
  "Expert coaches ready to scale without DIY brand-building",
  "Coaches who want quality leads, not just followers",
  "Those committed to a done-for-you system",
];

const whatYouGet = [
  "Done-for-you brand positioning & content strategy",
  "24 pieces of authority content monthly",
  "Full Instagram profile transformation",
  "Direct access & early-partner rates",
];

const EarlyPartnerSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <AnimateOnScroll>
          {/* Elevated off-white container */}
          <div
            className="relative rounded-[26px] border border-primary/15 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #F8FAFF 0%, #FFFFFF 40%, #F5F8FD 100%)",
              boxShadow:
                "0 8px 40px -12px rgba(5, 113, 211, 0.10), 0 2px 12px -4px rgba(5, 113, 211, 0.06)",
            }}
          >
            {/* Subtle gradient accent in top-right corner */}
            <div className="absolute top-0 right-0 w-[55%] h-[50%] bg-gradient-to-bl from-primary/[0.04] via-primary/[0.01] to-transparent pointer-events-none" />
            {/* Subtle secondary gradient accent in bottom-left */}
            <div className="absolute bottom-0 left-0 w-[40%] h-[35%] bg-gradient-to-tr from-secondary/[0.03] via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-14">
                {/* ─── Left Column: Content ─── */}
                <div className="flex-1 min-w-0">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5 mb-7">
                    <Sparkles className="w-3.5 h-3.5 text-secondary" />
                    <span className="text-secondary font-body text-xs font-semibold tracking-wide uppercase">
                      Limited Availability
                    </span>
                  </div>

                  {/* Headline */}
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-[1.08] mb-2 tracking-tight">
                    The Early Partner Program.
                  </h2>
                  <p className="text-2xl md:text-3xl font-display font-bold text-foreground/70 leading-[1.1] mb-6 tracking-tight">
                    5 Spots. Real Results. No Hype.
                  </p>

                  {/* Supporting paragraph */}
                  <p className="text-muted-foreground font-body text-[15px] leading-relaxed max-w-2xl mb-6">
                    You get a complete done-for-you brand system at early-partner rates. I document your success, build case studies, and refine the system at scale. It's direct, honest, and designed to deliver measurable results.
                  </p>

                  {/* This is for you if */}
                  <p className="font-body font-semibold text-sm text-foreground mb-2.5">This is for you if:</p>
                  <ul className="space-y-2 mb-7">
                    {forYouItems.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-muted-foreground font-body text-[15px]"
                      >
                        <ChevronRight className="w-4 h-4 text-primary/60 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* What you get */}
                  <p className="font-body font-semibold text-sm text-foreground mb-2.5">What you get:</p>
                  <ul className="space-y-2.5 mb-7">
                    {whatYouGet.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-3 text-foreground font-body text-[15px]"
                      >
                        <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <p className="text-primary font-display font-bold text-base mb-6">Only 5 spots available.</p>

                  {/* CTA */}
                  <Button variant="hero" size="lg" className="group" asChild>
                    <a
                      href="https://calendly.com/amank420835/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      Let's Connect
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <p className="mt-2 text-muted-foreground/70 font-body text-[13px]">
                    Quick chat to see if we're aligned.
                  </p>
                </div>

                {/* ─── Right Column: 5 Spots Left Visual ─── */}
                <div className="hidden lg:flex items-center justify-center flex-shrink-0">
                  <div className="relative w-56 h-56">
                    {/* Animated stacked cards behind */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl border border-primary/10"
                      style={{
                        rotate: 10,
                        background:
                          "linear-gradient(135deg, hsl(213 94% 42% / 0.06), hsl(45 100% 51% / 0.04))",
                      }}
                      whileHover={{ rotate: 14, scale: 1.02 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-3xl border border-secondary/10"
                      style={{
                        rotate: -5,
                        background:
                          "linear-gradient(135deg, hsl(45 100% 51% / 0.05), hsl(213 94% 42% / 0.03))",
                      }}
                      whileHover={{ rotate: -9, scale: 1.02 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />

                    {/* Main spots card */}
                    <div
                      className="absolute inset-3 rounded-2xl flex flex-col items-center justify-center gap-3 border border-primary/12"
                      style={{
                        background:
                          "linear-gradient(160deg, hsl(213 94% 42% / 0.07), hsl(45 100% 51% / 0.05), hsl(213 94% 42% / 0.03))",
                      }}
                    >
                      {/* Decorative ring */}
                      <div className="absolute inset-6 rounded-full border border-dashed border-primary/10" />

                      <motion.span
                        className="font-display font-black text-7xl bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                      >
                        5
                      </motion.span>
                      <span className="font-body text-xs text-muted-foreground uppercase tracking-[0.2em] font-semibold">
                        spots left
                      </span>
                      {/* Subtle progress dots */}
                      <div className="flex items-center gap-1.5 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 rounded-full bg-primary/20 border border-primary/15"
                          />
                        ))}
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={`taken-${i}`}
                            className="w-2 h-2 rounded-full bg-primary/60"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile: Inline spots indicator */}
                <div className="flex lg:hidden items-center gap-4 px-5 py-4 rounded-2xl border border-primary/10 bg-primary/[0.03] w-full">
                  <span className="font-display font-black text-4xl bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                    5
                  </span>
                  <div>
                    <span className="font-body text-xs text-muted-foreground uppercase tracking-[0.15em] font-semibold block">
                      spots left
                    </span>
                    <span className="font-body text-xs text-muted-foreground/70">
                      for early partners
                    </span>
                  </div>
                  <div className="flex items-center gap-1 ml-auto">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-primary/20 border border-primary/15"
                      />
                    ))}
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={`taken-${i}`}
                        className="w-1.5 h-1.5 rounded-full bg-primary/60"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default EarlyPartnerSection;
