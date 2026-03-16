import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Target, LayoutGrid, Film, Scissors, Type, Calendar, ArrowRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Positioning",
    text: "Your brand angle is defined and locked in. Every piece of content supports that message so people quickly understand what you stand for.",
    icon: Target,
  },
  {
    num: "02",
    title: "Strategy",
    text: "We study the top creators and best-performing content in your niche, then build content pillars that guide people from discovering you to trusting you and eventually becoming clients.",
    icon: LayoutGrid,
  },
  {
    num: "03",
    title: "Scripting",
    text: "Using research and what we learn about your business, we script a full month of short-form content around your voice and methodology.",
    icon: Film,
  },
  {
    num: "04",
    title: "Editing",
    text: "Once you send the raw clips, we edit them into polished, on-brand short-form videos for your brand.",
    icon: Scissors,
  },
  {
    num: "05",
    title: "Publishing",
    text: "24 posts go live every month. Your brand stays active without you managing it.",
    icon: Type,
  },
  {
    num: "06",
    title: "Analysis",
    text: "We review performance data and refine future content based on what works best, and send you a simple report.",
    icon: Calendar,
  },
];

const IntroPanel = () => (
  <div className="w-screen flex-shrink-0 flex flex-col justify-center px-8 md:px-24 h-full">
    <p className="text-primary font-body font-bold text-xs tracking-[0.25em] uppercase mb-6">
      WHAT DONE-FOR-YOU ACTUALLY LOOKS LIKE
    </p>
    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-foreground tracking-tighter leading-[0.95] mb-6">
      You Show Up.{" "}
      <span className="text-primary">I Handle Everything Else.</span>
    </h2>
    <p className="max-w-xl text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-10">
      Here's every layer I handle inside your content engine — so you never have to think about it.
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
        WHAT DONE-FOR-YOU ACTUALLY LOOKS LIKE
      </p>
      <h2 className="text-4xl sm:text-5xl font-display font-black text-foreground tracking-tighter leading-[0.95] mb-5">
        You Show Up.{" "}
        <span className="text-primary">I Handle Everything Else.</span>
      </h2>
      <p className="max-w-xl text-lg text-muted-foreground font-body leading-relaxed">
        Here's every layer I handle inside your content engine — so you never have to think about it.
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
