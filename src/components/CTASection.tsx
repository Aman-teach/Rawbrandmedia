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

            <div className="relative z-10 max-w-3xl mx-auto">

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6 tracking-tight">
                Stop being the best-kept secret in your niche.
              </h2>

              <p className="text-primary-foreground/70 text-lg md:text-xl font-body leading-relaxed mb-10">
                Let's talk about your brand, your content, and the system that
                turns your expertise into real authority online.
              </p>

              <Button
                size="xl"
                className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-body font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
                asChild
              >
                <a href="#contact" className="inline-flex items-center gap-2">
                  Book Your Discovery Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

            </div>
          </div>

        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CTASection;