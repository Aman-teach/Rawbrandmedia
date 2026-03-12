import { Button } from "@/components/ui/button";

const phases = [
  {
    phase: "Foundation (Month 1-2)",
    description: "Strategy → Who you are and why anyone should care",
  },
  {
    phase: "Presence (Month 3-4)",
    description: "Build → Your brand becomes real and credible",
  },
  {
    phase: "Visibility (Month 5-7)",
    description: "Get Found → SEO, LinkedIn, AI search",
  },
  {
    phase: "Authority (Month 8-9)",
    description: "Get Recognized → Thought leadership and media",
  },
];

const JourneySection = () => {
  return (
    <section className="py-24 md:py-32 bg-foreground">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-primary font-display font-bold text-sm uppercase tracking-widest mb-4">
            ✦ Signature Offering
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-black text-primary-foreground leading-tight mb-4">
            The Complete{" "}
            <span className="text-primary italic">Journey</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Nine months. One direction. From no one to someone.
          </p>
        </div>

        {/* Price card */}
        <div className="bg-card/10 border border-border/20 rounded-3xl p-10 md:p-14 mb-12">
          <p className="text-primary-foreground font-display mb-2">
            <span className="text-primary text-lg">$</span>
            <span className="text-5xl md:text-7xl font-black">1,900</span>
            <span className="text-muted-foreground text-lg font-body"> /month</span>
          </p>
          <p className="text-primary font-body font-semibold mb-6">9 month partnership</p>
          <p className="text-muted-foreground font-body leading-relaxed mb-8 max-w-xl">
            Everything you need to go from invisible to influential — done in the right order.
            We build your brand the way it is meant to be built — no shortcuts, no skipped stages, no guessing.
          </p>
          <Button variant="hero" size="xl">
            Start Your Journey
          </Button>
          <p className="text-muted-foreground/60 font-body text-sm mt-4">
            No contracts. Honest conversations first.
          </p>
        </div>

        {/* Phases */}
        <div className="space-y-4">
          {phases.map((p) => (
            <div
              key={p.phase}
              className="bg-card/10 border border-border/20 rounded-2xl p-8"
            >
              <p className="text-primary font-display font-bold text-sm uppercase tracking-widest mb-2">
                {p.phase}
              </p>
              <p className="text-muted-foreground font-body text-lg">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
