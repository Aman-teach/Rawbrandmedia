import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const FounderSection = () => {
  return (
    <section className="py-28 md:py-36 bg-card relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll direction="left">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary/10 via-muted to-secondary/5 relative overflow-hidden border border-border">
                {/* Decorative grid overlay */}
                <div className="absolute inset-0 grid-pattern opacity-20" />

                <div className="absolute inset-0 flex items-end p-8">
                  <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-5 border border-border">
                    <p className="font-display font-semibold text-foreground text-lg mb-1">Aman</p>
                    <p className="font-body text-muted-foreground text-sm">Founder, RawBrandMedia</p>
                  </div>
                </div>
              </div>

              {/* Floating quote card */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-primary rounded-2xl p-6 shadow-[var(--shadow-warm)] max-w-[220px]"
                initial={{ rotate: 2 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Quote className="w-4 h-4 text-primary-foreground/50 mb-2" />
                <p className="text-primary-foreground font-body text-sm font-medium leading-snug">
                  "Authority is built through consistency, not virality."
                </p>
              </motion.div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right">
            <p className="text-primary font-body font-semibold text-sm tracking-[0.2em] uppercase mb-4">
              The Founder
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-[1.05] mb-8 tracking-tight">
              Built by Aman.
            </h2>

            <div className="space-y-5 text-muted-foreground text-lg font-body leading-relaxed">
              <p>
                Most coaches are told to "just post more." Aman saw the real problem: it's not about volume — it's about{" "}
                <span className="text-foreground font-medium">building a brand that earns trust before you ever get on a call</span>.
              </p>
              <p>
                RawBrandMedia exists to give coaches the unfair advantage of a structured personal brand system — one that turns their knowledge into magnetic content and their Instagram into a client acquisition channel.
              </p>
            </div>

            {/* Small accent line */}
            <div className="w-12 h-1 bg-secondary rounded-full mt-8" />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
