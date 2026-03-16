import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ── Custom SVG icons — hand-crafted, not generic ── */
const CrosshairIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3.5" />
    <line x1="12" y1="2" x2="12" y2="5" />
    <line x1="12" y1="19" x2="12" y2="22" />
    <line x1="2" y1="12" x2="5" y2="12" />
    <line x1="19" y1="12" x2="22" y2="12" />
  </svg>
);

const ShieldCrackIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" />
    <path d="M12 8l-1.5 3.5L13 13l-2 4" />
  </svg>
);

const ScatterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
    <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" strokeDasharray="2 2" />
  </svg>
);

const BrokenGearIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
    <path d="M14 10l3-3" strokeWidth="2.2" />
  </svg>
);

const problems = [
  {
    Icon: CrosshairIcon,
    number: "01",
    title: "Blurry Positioning",
    description:
      "You're speaking to everyone, which means you're reaching no one. Without a sharp brand angle and clear ideal client, they scroll right past you and book someone else.",
  },
  {
    Icon: ShieldCrackIcon,
    number: "02",
    title: "The Trust Problem",
    description:
      "Your Instagram profile looks like every other coach. No clear structure, no trust signals, and nothing that makes a stranger stop and think, \"This person can solve my problem.\"",
  },
  {
    Icon: ScatterIcon,
    number: "03",
    title: "Content Without a System",
    description:
      "You post when you feel like it, try different formats, and hope something goes viral. But without a content system, you're just wasting time.",
  },
  {
    Icon: BrokenGearIcon,
    number: "04",
    title: "Invisible Expertise",
    description:
      "You've got the results. You've got the method. But none of that matters if the right people can't see it, feel it, and trust it fast enough to act.",
  },
];

/* ── Card animation: staggered pop-in with a subtle rotation ── */
const cardVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 40, rotateX: 8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.18,
      ease: [0.34, 1.56, 0.64, 1], // spring-like overshoot
    },
  }),
};

const ProblemSection = () => {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ backgroundColor: "#FFC107" }}
    >
      {/* Subtle dot pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-[35%] h-[35%] bg-gradient-to-br from-black/[0.04] via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[35%] h-[35%] bg-gradient-to-tl from-black/[0.04] via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <AnimateOnScroll className="max-w-3xl mb-10 md:mb-14">
          <p className="font-body font-semibold text-xs tracking-[0.25em] uppercase mb-3 text-black/50">
            THE REAL PROBLEM
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-[1.05] mb-4 tracking-tight text-black">
            The coaches getting clients online aren't better than you.{" "}
            <span className="block">They just have a better system.</span>
          </h2>
          <p className="text-sm md:text-base font-body leading-relaxed max-w-2xl text-black/65">
            If your posts get ignored and your message feels unclear, the issue isn’t your authenticity. It’s the brand around it.
          </p>
        </AnimateOnScroll>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
          style={{ perspective: "900px" }}
        >
          {problems.map((p, i) => {
            const { Icon } = p;

            return (
              <motion.div
                key={p.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                  boxShadow: "0 20px 40px -12px rgba(0,0,0,0.18)",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group rounded-xl p-5 border border-black/[0.08] cursor-default transition-[border-color] duration-500 hover:border-black/20"
                style={{
                  backgroundColor: "rgba(250, 249, 246, 0.92)",
                  boxShadow: "0 8px 32px -8px rgba(0,0,0,0.1)",
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: "rgba(255, 193, 7, 0.18)" }}
                  >
                    <Icon className="w-[20px] h-[20px] text-black/70" />
                  </div>
                  <span className="font-display font-bold text-2xl text-black/[0.07]">
                    {p.number}
                  </span>
                </div>
                <h3 className="text-base lg:text-lg font-display font-semibold mb-1.5 text-black/90">
                  {p.title}
                </h3>
                <p className="font-body leading-relaxed text-xs lg:text-sm text-black/55">
                  {p.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;