import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const CaseStudy = () => {
  const { id } = useParams();

  return (
    <PageTransition>
      <div className="min-h-screen bg-background pt-24 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/#proof"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 font-body font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="bg-white rounded-[32px] p-8 md:p-12 lg:p-16 shadow-sm border border-border/50">
            {/* Header Content */}
            <header className="mb-16 border-b border-border/40 pb-12">
              <p className="text-primary font-body font-bold text-xs md:text-sm tracking-[0.25em] uppercase mb-4 md:mb-6">
                CASE STUDY {id}
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-foreground tracking-tighter leading-[0.95] mb-8">
                [Insert Your Full Case Study Title Here]
              </h1>

              <p className="text-xl md:text-2xl font-body text-muted-foreground leading-relaxed max-w-3xl">
                [Add a strong hook or introduction to the case study here.
                Explain the problem, why it matters, and hint at the massive
                result.]
              </p>
            </header>

            {/* Main Content Body */}
            <div className="space-y-16">
              {/* Section 1: The Starting Point */}
              <section>
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-display font-bold text-sm">
                    1
                  </span>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    The Starting Point
                  </h2>
                </div>
                <div className="prose prose-lg md:prose-xl max-w-none text-muted-foreground font-body leading-relaxed">
                  <p>
                    [Describe the client's initial situation, the challenges
                    they faced, and what they needed from RawBrand Media. Be
                    specific about their pain points.]
                  </p>
                </div>

                {/* Optional Image Placeholder for "Before" Screenshot */}
                <div className="mt-8 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-12 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 text-gray-400">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-body font-medium text-gray-500">
                    [Insert "Before" Screenshot or Graph Here (Optional)]
                  </p>
                </div>
              </section>

              {/* Section 2: Our Strategy */}
              <section>
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-display font-bold text-sm">
                    2
                  </span>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    Our Strategy
                  </h2>
                </div>
                <div className="prose prose-lg md:prose-xl max-w-none text-muted-foreground font-body leading-relaxed mb-8">
                  <p>
                    [Detail the exact steps, framework, and strategy you applied
                    to solve their problem.]
                  </p>
                </div>

                {/* Feature Grid for Strategy Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6">
                  <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
                    <h4 className="font-display font-bold text-foreground mb-2">
                      [Strategy Step 1]
                    </h4>
                    <p className="text-sm font-body text-muted-foreground">
                      [Briefly explain how this strategy was implemented.]
                    </p>
                  </div>
                  <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
                    <h4 className="font-display font-bold text-foreground mb-2">
                      [Strategy Step 2]
                    </h4>
                    <p className="text-sm font-body text-muted-foreground">
                      [Briefly explain how this strategy was implemented.]
                    </p>
                  </div>
                </div>

                {/* Optional Image Placeholder for Strategy Visual */}
                <div className="mt-8 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-12 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 text-gray-400">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-body font-medium text-gray-500">
                    [Insert Content Calendar, Script Template, or Strategy Visual Here (Optional)]
                  </p>
                </div>
              </section>

              {/* Section 3: The Outcome & Proof */}
              <section>
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-display font-bold text-sm">
                    3
                  </span>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    The Outcome
                  </h2>
                </div>

                {/* High-Impact Metric Blocks */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-primary text-white rounded-2xl p-6 flex flex-col justify-center shadow-md">
                    <span className="text-3xl md:text-5xl font-display font-black tracking-tight mb-2">
                      [11K+]
                    </span>
                    <span className="text-xs md:text-sm font-body font-medium text-white/80 uppercase tracking-widest">
                      [Followers Gained]
                    </span>
                  </div>
                  <div className="bg-[#044fa0] text-white rounded-2xl p-6 flex flex-col justify-center shadow-md">
                    <span className="text-3xl md:text-5xl font-display font-black tracking-tight mb-2">
                      [400%]
                    </span>
                    <span className="text-xs md:text-sm font-body font-medium text-white/80 uppercase tracking-widest">
                      [Increase in Reach]
                    </span>
                  </div>
                </div>

                <div className="prose prose-lg md:prose-xl max-w-none text-muted-foreground font-body leading-relaxed mb-8">
                  <p>
                    [Highlight the results. Use the blocks above to call out the biggest numbers, and use this text to explain what those numbers actually meant for their business — e.g. more trust, more booked calls, etc.]
                  </p>
                </div>

                {/* Main Proof Screenshot Placeholder */}
                <div className="mt-8 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-16 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 text-primary">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-display font-bold text-gray-800 text-lg mb-2">
                    Visual Proof
                  </h4>
                  <p className="text-sm font-body font-medium text-gray-500 max-w-sm">
                    [Insert the ultimate "After" screenshot here: Instagram Insights graph, follower count, or a viral reel screenshot]
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default CaseStudy;
