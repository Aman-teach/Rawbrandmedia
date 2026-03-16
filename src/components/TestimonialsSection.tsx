import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";

const testimonials = [
  {
    quote: "I'd been trying to figure out my Instagram for a year. Rawbrand built a system in two weeks that finally made sense. I actually know what to post now — and more importantly, why.",
    name: "Coach Name",
    role: "Niche",
    highlight: false,
  },
  {
    quote: "My profile used to look like every other coach online. Now when people land on it, they DM me. That's never happened before.",
    name: "Coach Name",
    role: "Niche",
    highlight: true,
  },
  {
    quote: "The done-for-you piece is what sold me. I don't have time to be a content creator — I have clients to coach. Rawbrand handles all of it.",
    name: "Coach Name",
    role: "Niche",
    highlight: false,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-28 md:py-36 bg-card">
      <div className="container mx-auto px-6 max-w-6xl">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-primary font-body font-semibold text-sm tracking-widest uppercase mb-3">
            WHAT EARLY PARTNERS SAY
          </p>
          <h2 className="text-5xl md:text-6xl font-display text-foreground leading-[1.1]">
            Don't Just Take My <em className="text-primary">Word For It.</em>
          </h2>
        </AnimateOnScroll>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.15}>
          {testimonials.map((t) => (
            <StaggerItem key={t.name + t.quote.slice(0, 20)}>
              <div
                className={`rounded-2xl p-9 flex flex-col justify-between h-full transition-all duration-500 hover:scale-[1.02] ${
                  t.highlight
                    ? "bg-foreground text-primary-foreground md:-translate-y-3 shadow-[var(--shadow-warm)]"
                    : "bg-background border border-border hover:shadow-[var(--shadow-card)]"
                }`}
              >
                <div className={`text-5xl font-display leading-none mb-4 ${
                  t.highlight ? "text-primary" : "text-primary/20"
                }`}>
                  "
                </div>

                <p className={`font-body leading-relaxed flex-1 mb-8 text-[15px] ${
                  t.highlight ? "text-primary-foreground/85" : "text-foreground"
                }`}>
                  {t.quote}
                </p>

                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-body font-semibold text-xs ${
                    t.highlight ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                  }`}>
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className={`font-body font-semibold text-sm ${
                      t.highlight ? "text-primary-foreground" : "text-foreground"
                    }`}>
                      {t.name}
                    </p>
                    <p className={`font-body text-xs ${
                      t.highlight ? "text-primary-foreground/60" : "text-muted-foreground"
                    }`}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TestimonialsSection;
