const testimonials = [
  {
    quote: "They didn't just design a logo — they helped me understand who I really am as a brand. The transformation was incredible.",
    name: "Sarah Mitchell",
    role: "Life Coach & Speaker",
  },
  {
    quote: "My bookings tripled within three months of launching my new brand. These guys understand the game.",
    name: "Amara Osei",
    role: "Creative Director",
  },
  {
    quote: "Working with Rawbrand felt like having a co-founder who only cares about making you look legendary.",
    name: "David Chen",
    role: "Tech Founder",
  },
];

const ResultsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <p className="text-primary font-body font-semibold text-sm tracking-widest uppercase mb-4">
            Real Talk
          </p>
          <h2 className="text-5xl md:text-7xl font-display text-foreground tracking-wider">
            DON'T TAKE OUR WORD.
            <br />
            <span className="text-muted-foreground">TAKE THEIRS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border rounded-2xl overflow-hidden">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`p-10 md:p-12 flex flex-col justify-between ${
                i < testimonials.length - 1 ? "border-b md:border-b-0 md:border-r border-border" : ""
              } hover:bg-background transition-colors duration-300`}
            >
              <p className="text-foreground font-body leading-relaxed text-lg mb-10">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-display text-lg">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-display text-foreground text-lg tracking-wider">{t.name.toUpperCase()}</p>
                  <p className="text-muted-foreground font-body text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
