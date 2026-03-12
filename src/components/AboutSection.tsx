import { Button } from "@/components/ui/button";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";

const AboutSection = () => {
  return (
    <section className="py-28 md:py-36 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <AnimateOnScroll>
              <p className="text-primary font-body font-semibold text-sm tracking-widest uppercase">
                About Us
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h2 className="text-4xl md:text-6xl font-display text-foreground leading-[1.1]">
                We believe every person has a brand worth <em className="text-primary">building.</em>
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <div className="space-y-5">
                <p className="text-muted-foreground text-lg font-body leading-relaxed">
                  In a world full of noise, the most powerful thing you can be is authentically yourself. 
                  We don't create brands from thin air — we reveal the ones already within you.
                </p>
                <p className="text-muted-foreground text-lg font-body leading-relaxed">
                  Our approach combines deep strategy with intentional design. Every color, 
                  every word, every image is chosen to feel like home — <em>your</em> home.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.3}>
              <Button variant="hero-outline" size="lg">
                Our Story
              </Button>
            </AnimateOnScroll>
          </div>

          <StaggerContainer className="grid grid-cols-2 gap-5" staggerDelay={0.15}>
            {[
              { number: "150+", label: "Brands launched", accent: false },
              { number: "98%", label: "Client satisfaction", accent: true },
              { number: "25+", label: "Countries served", accent: true },
              { number: "9M+", label: "Reach generated", accent: false },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div
                  className={`rounded-2xl p-8 flex flex-col justify-end min-h-[180px] transition-all duration-300 hover:scale-[1.03] ${
                    stat.accent
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border hover:shadow-[var(--shadow-card)]"
                  }`}
                >
                  <p className={`text-4xl md:text-5xl font-display mb-2 ${
                    stat.accent ? "text-primary-foreground" : "text-foreground"
                  }`}>
                    {stat.number}
                  </p>
                  <p className={`font-body text-sm ${
                    stat.accent ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}>
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
