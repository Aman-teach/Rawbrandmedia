const phases = [
  { step: "01", title: "FOUNDATION", months: "Month 1–2", desc: "Strategy. Positioning. Messaging. We figure out who you are and why anyone should care." },
  { step: "02", title: "PRESENCE", months: "Month 3–4", desc: "Visual identity, website, content system. Your brand becomes real and credible." },
  { step: "03", title: "VISIBILITY", months: "Month 5–7", desc: "SEO, LinkedIn, AI search optimization. We make sure the right people find you." },
  { step: "04", title: "AUTHORITY", months: "Month 8–9", desc: "Thought leadership, media, speaking. You become the go-to name in your space." },
];

const ProcessSection = () => {
  return (
    <section className="py-24 md:py-32 bg-foreground">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left sticky header */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <p className="text-primary font-body font-semibold text-sm tracking-widest uppercase mb-4">
              The Process
            </p>
            <h2 className="text-5xl md:text-6xl font-display text-primary-foreground tracking-wider leading-[1.1] mb-6">
              9 MONTHS.
              <br />
              <span className="text-secondary">ZERO</span> TO
              <br />
              KNOWN.
            </h2>
            <p className="text-muted-foreground font-body text-base leading-relaxed">
              Not a cookie-cutter package. A structured transformation built in the right order — so nothing gets skipped and everything compounds.
            </p>
          </div>

          {/* Right phases */}
          <div className="lg:col-span-8 space-y-6">
            {phases.map((p) => (
              <div
                key={p.step}
                className="bg-background/5 border border-border/15 rounded-2xl p-8 md:p-10 hover:bg-background/10 transition-colors duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                    <span className="text-primary font-display text-xl tracking-widest">{p.step}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-3 mb-3">
                      <h3 className="text-2xl md:text-3xl font-display text-primary-foreground tracking-wider">
                        {p.title}
                      </h3>
                      <span className="text-primary font-body text-sm font-semibold">{p.months}</span>
                    </div>
                    <p className="text-muted-foreground font-body leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Price callout */}
            <div className="bg-primary rounded-2xl p-8 md:p-10 mt-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="text-primary-foreground/70 font-body text-sm mb-1">Starting at</p>
                  <p className="text-primary-foreground font-display text-5xl md:text-6xl tracking-wider">
                    $1,900<span className="text-primary-foreground/50 text-2xl font-body">/mo</span>
                  </p>
                  <p className="text-primary-foreground/60 font-body text-sm mt-2">No contracts. Honest conversations first.</p>
                </div>
                <a href="#contact" className="inline-block bg-primary-foreground text-foreground font-display text-lg tracking-wider px-8 py-4 hover:bg-primary-foreground/90 transition-colors">
                  START NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
