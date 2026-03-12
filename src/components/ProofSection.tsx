import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/* ── Card Data ──────────────────────────────────────────── */
const proofCards = [
  {
    id: 1,
    icon: TrendingUp,
    title: "[Case Study Title 1]",
    highlight: "[Highlight: E.g., Grew Business to 11K+]",
    description:
      "[Short Description: Briefly explain what was achieved and how it was done for this client.]",
  },
  {
    id: 2,
    icon: Users,
    title: "[Case Study Title 2]",
    highlight: "[Highlight: E.g., 3K-4K Follower Growth]",
    description:
      "[Short Description: Briefly explain what was achieved and how it was done for this client.]",
  },
  {
    id: 3,
    icon: Zap,
    title: "[Case Study Title 3]",
    highlight: "[Highlight: E.g., Authority Content System]",
    description:
      "[Short Description: Briefly explain what was achieved and how it was done for this client.]",
  },
];

/* ── Proof Card ─────────────────────────────────────────── */
const ProofCard = ({ card }: { card: (typeof proofCards)[0] }) => {
  const Icon = card.icon;

  return (
    <Link to={`/case-study/${card.id}`} className="block h-full outline-none">
      <motion.div
        className="bg-white rounded-2xl md:rounded-3xl p-7 md:p-9 border border-border/50 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full group cursor-pointer"
        whileHover={{ y: -6 }}
        transition={{ type: "spring", damping: 20, stiffness: 260 }}
      >
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary" />
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-display font-bold text-foreground tracking-tight mb-3">
          {card.title}
        </h3>

        {/* Highlight */}
        <p className="font-body font-semibold text-primary text-sm md:text-base mb-3">
          {card.highlight}
        </p>

        {/* Description */}
        <p className="text-muted-foreground font-body text-sm md:text-[15px] leading-relaxed flex-1">
          {card.description}
        </p>

        {/* View more hint */}
        <span className="mt-5 flex items-center gap-1.5 text-xs font-body font-semibold text-primary/80 uppercase tracking-widest group-hover:text-primary transition-colors duration-300">
          View Case Study
          <ArrowRight className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
        </span>
      </motion.div>
    </Link>
  );
};

/* ── Main Section ───────────────────────────────────────── */
const ProofSection = () => {
  return (
    <section className="bg-background py-24 md:py-32 px-6" id="proof">
      {/* Header */}
      <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
        <p className="text-primary font-body font-bold text-xs tracking-[0.25em] uppercase mb-4">
          PROOF OF WORK
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-foreground tracking-tighter leading-[0.95] mb-5">
          Built on{" "}
          <span className="text-primary">real experiments.</span>
        </h2>
        <p className="max-w-xl mx-auto text-base md:text-lg text-muted-foreground font-body leading-relaxed">
          Early experiments and growth projects demonstrating how authority
          brands are built.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {proofCards.map((card) => (
          <ProofCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};

export default ProofSection;
