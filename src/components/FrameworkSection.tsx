import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

/* Custom Graphic Icons */
const DiscoveryIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 7v4.5m-2.25-2.25h4.5" />
  </svg>
);

const AnglesIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.125A59.769 59.769 0 0121.485 12 59.768 59.768 0 013.27 20.875L5.999 12zm0 0h7.5" />
  </svg>
);

const AuthorityIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const EngineIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0a7.5 7.5 0 11-15 0m15 0a7.5 7.5 0 10-15 0M4.5 19.5h15" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ExecuteIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);


const steps = [
  {
    number: "01",
    title: "Brand Foundation",
    icon: DiscoveryIcon,
    text: "Before a single word gets written or a reel gets made, we go deep and understand your story, your method, your voice, and your edge. This is where your brand stops sounding like everyone else's.",
  },
  {
    number: "02",
    title: "Strategic Positioning",
    icon: AnglesIcon,
    text: "I clarify your audience, your problem space, and your unique coaching angle. This gives your brand a clear position that builds real connection with clients and dream followers.",
  },
  {
    number: "03",
    title: "Authority Profile",
    icon: AuthorityIcon,
    text: "Your Instagram bio, highlights, and profile get rebuilt from scratch into a conversion machine. First impressions now work for you, not against you.",
  },
  {
    number: "04",
    title: "Content System Design",
    icon: EngineIcon,
    text: "I define three core content pillars and build a monthly posting structure around them. You always know what to talk about, how it connects to your brand, and how it attracts the right clients.",
  },
  {
    number: "05",
    title: "Flywheel Execution",
    icon: ExecuteIcon,
    text: "Every month, you record the ideas. We edit, package, and publish 24 pieces of authentic content for your brand.",
  },
];

const StackedCard = ({ step, index, progress, total }: { step: typeof steps[0], index: number, progress: MotionValue<number>, total: number }) => {
  const Icon = step.icon;

  const A = index / (total - 1);
  const stepSize = 1 / (total - 1);

  // Create a "plateau" or "padding" area where the card holds perfectly still and fully visible
  // This makes the scroll much more forgiving so the user doesn't have to hit the exact pixel to read the card
  const padding = stepSize * 0.15; // 15% of the step is pure hold

  // Calculate increasing peak scale for each subsequent card
  const peakScale = 1 + (index * 0.05);
  const nextScale = peakScale - 0.05;

  let inRange = [A - stepSize, A - padding, A + padding, A + stepSize];
  let yOut = [800, 0, 0, -50];       // Push slightly further back (-50) to increase stacking distance
  let scaleOut = [0.8, peakScale, peakScale, nextScale];

  // Opacity should hold at 1 for the plateau, then fade fast when the next card starts coming up
  let opRange = [A - stepSize, A - padding, A + padding, A + stepSize * 0.7];
  let opOut = [0, 1, 1, 0];

  if (index === 0) {
    inRange = [0, 0, padding, stepSize];
    yOut = [0, 0, 0, -50];
    scaleOut = [1, 1, 1, 0.95];
    opRange = [0, 0, padding, stepSize * 0.7];
    opOut = [1, 1, 1, 0];
  }
  else if (index === total - 1) {
    inRange = [A - stepSize, A - padding, A, A];
    yOut = [800, 0, 0, 0];
    scaleOut = [0.8, peakScale, peakScale, peakScale];
    opRange = [A - stepSize, A - padding, A, A];
    opOut = [0, 1, 1, 1];
  }

  const y = useTransform(progress, inRange, yOut);
  const scale = useTransform(progress, inRange, scaleOut);
  const opacity = useTransform(progress, opRange, opOut);

  return (
    <motion.div
      style={{ y, scale, opacity, zIndex: index + 10, transformOrigin: "top center" }}
      className="absolute inset-0 bg-[#0571D3] shadow-[0_20px_40px_-15px_rgba(5,113,211,0.3)] rounded-[32px] flex flex-col items-center justify-center p-8 md:p-12 text-center will-change-transform"
    >
      <div className="absolute top-6 right-8 whitespace-nowrap">
        <span className="text-6xl md:text-8xl font-display font-black text-white/10 select-none">
          {step.number}
        </span>
      </div>

      <div className="bg-white/10 text-white p-4 rounded-2xl mb-6 relative z-10 mt-6 md:mt-2">
        <Icon className="w-10 h-10 md:w-12 md:h-12" />
      </div>
      <h3 className="text-2xl md:text-4xl font-display font-bold text-white tracking-tight mb-4 relative z-10">
        {step.title}
      </h3>
      <p className="text-white/85 font-body leading-relaxed text-sm md:text-lg max-w-md relative z-10 block">
        {step.text}
      </p>
    </motion.div>
  );
};

const DesktopMorphingCore = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    // Height reduced to 300vh to make scrolling through the 5 steps much faster/easier
    <section ref={containerRef} className="relative bg-background" style={{ height: "300vh" }} id="framework">

      {/* Sticky container that stays glued to the screen while you scroll down */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

        {/* Fixed Header */}
        <div className="absolute top-16 md:top-24 left-0 right-0 z-50 text-center px-6 pointer-events-none">
          <p className="text-primary font-body font-bold text-xs tracking-[0.25em] uppercase mb-3 text-shadow-sm">
            THE RAWBRAND SYSTEM
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-foreground tracking-tighter leading-[0.95] drop-shadow-md">
            One System. Built Around{" "}
            <span className="text-primary">You.</span>
            <span className="block mt-1">From Unknown to Undeniable.</span>
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-base md:text-lg text-muted-foreground font-body leading-relaxed drop-shadow-sm">
            The best personal brands don’t grow from random posts. They grow from clear systems.
          </p>
        </div>

        {/* Stacked Cards Area - Adjusted for rectangular shape */}
        <div className="relative w-full max-w-[360px] md:max-w-[640px] h-[400px] md:h-[340px] mt-48 lg:mt-64 pointer-events-auto">
          {steps.map((step, i) => (
            <StackedCard key={i} index={i} step={step} progress={scrollYProgress} total={steps.length} />
          ))}
        </div>

      </div>
    </section>
  );
};

const MobileLayout = () => (
  <section className="bg-background py-20 px-6 overflow-hidden" id="framework">
    <div className="text-center mb-16">
      <p className="text-primary font-body font-bold text-xs tracking-[0.25em] uppercase mb-4">
        THE RAWBRAND SYSTEM
      </p>
      <h2 className="text-4xl sm:text-5xl font-display font-black text-foreground tracking-tighter leading-[0.95] mb-4">
        One System. Built Around{" "}
        <span className="text-primary">You.</span>
      </h2>
      <p className="max-w-xl mx-auto text-lg text-muted-foreground font-body leading-relaxed">
        The best personal brands don’t grow from random posts. They grow from clear systems.
      </p>
    </div>
    <div className="space-y-6 max-w-md mx-auto flex flex-col items-center justify-center">
      {steps.map((step, index) => {
        const Icon = step.icon;

        // Use a progressive scale effect without exceeding viewport constraints
        const mobileScale = 1 - ((steps.length - 1 - index) * 0.04);

        return (
          <div
            key={step.number}
            className="bg-[#0571D3] shadow-[0_20px_40px_-15px_rgba(5,113,211,0.3)] rounded-3xl p-8 py-10 text-center w-full"
            style={{
              transform: `scale(${mobileScale})`,
              transformOrigin: "center center"
            }}
          >
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <span className="text-5xl font-display font-black text-white/10 select-none block mb-2">
              {step.number}
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mb-3">
              {step.title}
            </h3>
            <p className="text-white/85 font-body leading-relaxed text-base">
              {step.text}
            </p>
          </div>
        );
      })}
    </div>
  </section>
);

const FrameworkSection = () => {
  const isMobile = useIsMobile();
  const isLargeScreen = typeof window !== "undefined" && window.innerWidth >= 1024;

  if (isMobile || !isLargeScreen) return <MobileLayout />;
  return <DesktopMorphingCore />;
};

export default FrameworkSection;
