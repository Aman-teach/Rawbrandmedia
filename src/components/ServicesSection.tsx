import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Target, LayoutGrid, Film, Scissors, Type, Calendar, ArrowRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Positioning",
    text: "We distill what makes you different into a razor-sharp brand angle. You never blend in with the noise again.",
    icon: Target,
  },
  {
    num: "02",
    title: "Strategy",
    text: "Strategic content pillars and messaging themes mapped to your buyer's journey. Every post moves them closer to booking a call.",
    icon: LayoutGrid,
  },
  {
    num: "03",
    title: "Scripting",
    text: "Hooks that stop the scroll. Scripts that showcase your expertise. Engineered to position you as the authority in your niche.",
    icon: Film,
  },
  {
    num: "04",
    title: "Editing",
    text: "We turn your raw footage into polished, scroll-worthy Instagram reels. Clean cuts, on-brand visuals, and cinematic pacing.",
    icon: Scissors,
  },
  {
    num: "05",
    title: "Formatting",
    text: "Captions that hook, educate, and convert. We use strategic CTAs keeping your audience reading to the last line.",
    icon: Type,
  },
  {
    num: "06",
    title: "Publishing",
    text: "Your content goes live like clockwork. 24 pieces per month, published at optimal times. You show up consistently without lifting a finger.",
    icon: Calendar,
  },
];

const IntroPanel = () => (
  <div className="w-screen flex-shrink-0 flex flex-col justify-center px-8 md:px-24 h-full">
    <p className="text-primary font-body font-bold text-xs tracking-[0.25em] uppercase mb-6">
      THE CONTENT PIPELINE
    </p>
    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-foreground tracking-tighter leading-[0.95] mb-6">
      A complete content system,{" "}
      <span className="text-primary">done for you.</span>
    </h2>
    <p className="max-w-xl text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-10">
      We handle every layer of your Instagram content engine. You focus on coaching. Scroll to see the pipeline.
    </p>
    <div className="flex items-center gap-3 text-muted-foreground">
      <span className="text-sm font-body">Scroll to explore</span>
      <motion.div
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowRight className="w-5 h-5" />
      </motion.div>
      <div className="w-24 h-px bg-border ml-2" />
    </div>
  </div>
);

const ServicePanel = ({ service }: { service: typeof services[0] }) => {
  const Icon = service.icon;
  return (
    <div className="w-[85vw] md:w-[60vw] h-[70vh] flex-shrink-0 mx-4 md:mx-8 bg-white rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden border border-border/50 shadow-sm">
      {/* Large background number */}
      <span className="absolute top-6 left-8 md:top-8 md:left-12 text-7xl md:text-8xl lg:text-9xl font-display font-bold text-border/40 select-none pointer-events-none">
        {service.num}
      </span>
      
      {/* Icon top right */}
      <div className="self-end relative z-10">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
          <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
        </div>
      </div>

      {/* Content bottom left */}
      <div className="relative z-10">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-foreground tracking-tight mb-4">
          {service.title}
        </h3>
        <p className="text-base md:text-lg text-muted-foreground font-body leading-relaxed max-w-md">
          {service.text}
        </p>
      </div>
    </div>
  );
};

const MobileLayout = () => (
  <section className="bg-background py-20 px-6">
    <div className="mb-16">
      <p className="text-primary font-body font-bold text-xs tracking-[0.25em] uppercase mb-5">
        THE CONTENT PIPELINE
      </p>
      <h2 className="text-4xl sm:text-5xl font-display font-black text-foreground tracking-tighter leading-[0.95] mb-5">
        A complete content system,{" "}
        <span className="text-primary">done for you.</span>
      </h2>
      <p className="max-w-xl text-lg text-muted-foreground font-body leading-relaxed">
        We handle every layer of your Instagram content engine. You focus on coaching.
      </p>
    </div>
    <div className="space-y-6">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <div
            key={service.num}
            className="bg-white rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-border/50 shadow-sm"
          >
            <span className="absolute top-4 right-4 text-5xl font-display font-bold text-border/40 select-none">
              {service.num}
            </span>
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-2xl font-display font-extrabold text-foreground tracking-tight mb-3">
              {service.title}
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              {service.text}
            </p>
          </div>
        );
      })}
    </div>
  </section>
);

const DesktopHorizontalScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // 7 panels total (1 intro + 6 services), translate from 0 to roughly -85%
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-82%"]);

  return (
    <section ref={containerRef} className="h-[400vh] bg-background relative">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div className="flex" style={{ x }}>
          <IntroPanel />
          {services.map((service) => (
            <ServicePanel key={service.num} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const isMobile = useIsMobile();
  
  // Use window width check for SSR safety and breakpoint at 1024px
  const isLargeScreen = typeof window !== "undefined" && window.innerWidth >= 1024;

  if (isMobile || !isLargeScreen) {
    return <MobileLayout />;
  }

  return <DesktopHorizontalScroll />;
};

export default ServicesSection;
