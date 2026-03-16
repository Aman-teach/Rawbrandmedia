import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="pt-8 pb-16 bg-background relative overflow-hidden">
      <div className="px-6 md:px-10 lg:px-16 relative z-10">
        <AnimateOnScroll>

          <div className="w-full rounded-[28px] bg-primary px-10 py-20 sm:px-16 md:px-24 md:py-24 text-center relative overflow-hidden">

            {/* background accents */}
            <div className="absolute top-0 right-0 w-[40%] h-[50%] bg-gradient-to-bl from-primary-foreground/[0.04] via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[30%] h-[40%] bg-gradient-to-tr from-secondary/[0.06] via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto">

              <p className="text-primary-foreground/50 font-body font-bold text-xs tracking-[0.25em] uppercase mb-5">
                ONE LAST THING
              </p>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-4 tracking-tight">
                 You already know your
                <br />
                 brand isn't where it should be.
              </h2>

              <p className="text-primary-foreground/80 text-lg md:text-xl font-body leading-relaxed mb-4">
                You wouldn't be here if it was.
              </p>

              <p className="text-primary-foreground/60 text-base font-body leading-relaxed mb-10">
                Let's get on a call. No pitch. No pressure. Just 20 minutes to look at where you are, where you want to go, and whether I'm the right person to get you there.
              </p>

              <Button
                size="xl"
                className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-body font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
                asChild
              >
                <a href="https://calendly.com/amank420835/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  Book Your Free Discovery Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <p className="mt-4 text-primary-foreground/40 text-sm font-body">
                20 minutes. Completely free. Brutally honest.
              </p>

            </div>
          </div>

        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CTASection;