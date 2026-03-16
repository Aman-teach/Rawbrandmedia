import { motion } from "framer-motion";
import { TrendingUp, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/* ── Card Data ──────────────────────────────────────────── */
const proofCards = [
  {
    id: 1,
    icon: TrendingUp,
    title: "Authority Page Growth Experiment",
    highlight: "0 → 11K Followers",
    description:
      "Started from zero with no existing audience. Built a positioning-first content system and grew the account to 11,000+ followers organically through authority content and strategic hooks.",
  },
  {
    id: 2,
    icon: Users,
    title: "Coaching Niche Authority Build",
    highlight: "3K Followers in 60 Days",
    description:
      "A coaching account stuck at a plateau. New brand angle, new content pillars, and improved storytelling formats led to 3,000 new targeted followers in the first 60 days.",
  },
];

/* ── Proof Card ─────────────────────────────────────────── */
const ProofCard = ({ card }: { card: (typeof proofCards)[0] }) => {
  const Icon = card.icon;

  return (
    <Link to={`/case-study/${card.id}`} className="block h-full outline-none">
      <motion.div
        className="bg-[#F8F9FB] rounded-[2.5rem] p-10 md:p-14 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full group"
        whileHover={{ y: -4 }}
      >
        <div className="flex flex-col h-full">
          {/* Top Row: Icon + Badge */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-[52px] h-[52px] rounded-2xl bg-white flex items-center justify-center border border-slate-200/60 shadow-sm shrink-0">
              <Icon className="w-5 h-5 text-slate-800" strokeWidth={2.5} />
            </div>
            <div className="h-[38px] px-4 rounded-full bg-white flex items-center justify-center border border-slate-200/60 shadow-sm">
              <span className="font-body font-bold text-slate-800 text-[13px] md:text-sm tracking-wide">
                {card.highlight}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-[28px] md:text-[32px] font-display font-bold text-[#111827] tracking-tight mb-5 leading-tight">
            {card.title}
          </h3>

          {/* Description */}
          <p className="text-slate-500 font-body text-base md:text-[17px] leading-relaxed flex-1">
            {card.description}
          </p>

          {/* Subtle Divider line before button */}
          <div className="w-full h-px bg-slate-200/60 my-8"></div>

          {/* CTA Button */}
          <div>
            <span className="inline-flex items-center gap-2 bg-[#111827] text-white font-body text-[13px] md:text-sm font-bold uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all duration-300 group-hover:bg-[#1f2937]">
              View Case Study
              <ArrowRight className="w-[14px] h-[14px] translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </div>
        </div>
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
          Building and Testing the System in Public.
        </h2>
        <p className="max-w-xl mx-auto text-base md:text-lg text-muted-foreground font-body leading-relaxed">
          Rawbrand is new. Instead of claiming years of results, every growth test is documented openly to show what actually works for coaches on Instagram.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          {proofCards.map((card) => (
            <ProofCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
