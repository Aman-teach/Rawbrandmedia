import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const caseStudyOneProfileImageCandidates = [
  "/case-study/case-study-1-profile.png",
  "/case-study/case-study-1-profile.jpg",
  "/case-study/case-study-1-profile.jpeg",
  "/case-study/rawbrand-profile.png",
  "/case-study/rawbrand-profile.jpg",
  "/case-study/profile.png",
  "/case-study/profile.jpg",
];

const CaseStudyOne = () => {
  const [profileImageIndex, setProfileImageIndex] = useState(0);
  const profileImageSrc =
    profileImageIndex >= 0 ? caseStudyOneProfileImageCandidates[profileImageIndex] : "";

  return (
    <>
      <header className="mb-16 border-b border-border/40 pb-12">
        <p className="text-primary font-body font-bold text-xs md:text-sm tracking-[0.25em] uppercase mb-4 md:mb-6">
          CASE STUDY 1
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-foreground tracking-tighter leading-[0.95] mb-8">
          From 0 to 11,000 Followers With a Simple Content System
        </h1>

        <p className="text-xl md:text-2xl font-body text-muted-foreground leading-relaxed max-w-3xl">
          Most Instagram pages don&apos;t die from bad content. They die from no direction.
        </p>
      </header>

      <div className="space-y-16">
        <section className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white">
            {profileImageSrc ? (
              <img
                src={profileImageSrc}
                alt="Case Study 1 Instagram profile screenshot"
                className="w-full rounded-xl object-contain bg-white max-h-[340px] md:max-h-[500px]"
                loading="lazy"
                onError={() => {
                  if (profileImageIndex < caseStudyOneProfileImageCandidates.length - 1) {
                    setProfileImageIndex((prev) => prev + 1);
                    return;
                  }
                  setProfileImageIndex(-1);
                }}
              />
            ) : (
              <div className="h-[280px] md:h-[360px] rounded-xl border border-dashed border-slate-300/80 bg-slate-50 flex items-center justify-center px-4">
                <span className="font-body text-slate-500 text-sm md:text-base text-center">
                  Profile screenshot
                </span>
              </div>
            )}
          </div>

          <div className="prose prose-lg md:prose-xl max-w-none text-muted-foreground font-body leading-relaxed">
            <p>
              People post when they feel like it, chase whatever trend is performing that week, and then wonder why nothing sticks. It&apos;s not a content problem. It&apos;s a system problem. This is the story of what happens when you fix that.
            </p>
          </div>
        </section>

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

          <div className="prose prose-lg md:prose-xl max-w-none text-muted-foreground font-body leading-relaxed space-y-4">
            <div>
              <p>
                There was nothing to work with here. No followers, no archive of old posts, no personal brand to ride on. No ads budget either.
              </p>
              <p>
                Just a faceless page and a question: can structured content alone build an audience?
              </p>
              <p>
                That constraint was actually useful. When there&apos;s no personality to carry the page, the system has to carry it instead. So that&apos;s what we built.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: What We Actually Did */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-display font-bold text-sm">
              2
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              What We Actually Did
            </h2>
          </div>

          <div className="prose prose-lg md:prose-xl max-w-none text-muted-foreground font-body leading-relaxed space-y-8">
            <div>
              <h3>First, we gave the page an identity.</h3>
              <p>
                Before a single post went out, we got clear on what the page stood for. Not vaguely clear, sharply clear. The niche, the angle, the bio, and the profile structure.
              </p>
              <p>
                The kind of clarity where someone lands on the page for the first time and immediately gets it. No confusion. No guessing. That first impression matters more than most people think.
              </p>
            </div>

            <div>
              <h3>Then, we studied what was already working.</h3>
              <p>
                Not to copy it. To understand it.
              </p>
              <p>
                We looked at top creators in the niche and asked: why does this post stop the scroll? Why does this format keep people watching? What topics keep showing up in the comments? How are top creators structuring content?
              </p>
              <p>
                That research turned content creation from guesswork into a repeatable process.
              </p>

              <div className="not-prose mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <img
                    src="/case-study/post-1.png"
                    alt="Post example 1"
                    className="rounded-2xl border border-slate-300/70 w-full h-[420px] object-cover"
                  />

                  <img
                    src="/case-study/post-2.png"
                    alt="Post example 2"
                    className="rounded-2xl border border-slate-300/70 w-full h-[420px] object-cover"
                  />

                  <img
                    src="/case-study/post-3.png"
                    alt="Post example 3"
                    className="rounded-2xl border border-slate-300/70 w-full h-[420px] object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3>Then, we built around clear themes.</h3>
              <p>
                Instead of posting whatever felt relevant that day, the page was organized around a handful of ideas the audience already cared about. Every piece of content connected back to one of those themes.
              </p>
              <p>
                It kept the page focused, made the content easier to understand at a glance, and made consistent posting much less painful.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: What Happened */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-display font-bold text-sm">
              3
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              What Happened
            </h2>
          </div>

          <div className="mb-8">
            <img
              src="/case-study/insights.png"
              alt="Instagram insights screenshot"
              className="rounded-2xl border border-slate-300/70 w-full max-h-[420px] object-contain bg-white"
            />
          </div>

          <div className="prose prose-lg md:prose-xl max-w-none text-muted-foreground font-body leading-relaxed space-y-4">
            <p>
              Within a few months, the page hit 11,000 followers. Reach went up by over 400%. Several posts pulled in thousands of views, all without spending a dollar on promotion.
            </p>
            <p>
              But the number that mattered most wasn&apos;t any of those. It was consistency. The page didn&apos;t grow in random spikes. It grew steadily, predictably, post after post.
            </p>
            <p>
              When content is built around a system instead of a feeling, the results stop being random too.
            </p>
            <p>
              The content didn&apos;t go viral. It just kept working.
            </p>
            <p>
              That&apos;s the real takeaway. Not only that this page grew to 11K, but that it grew the same way every week because the system made it almost impossible for it not to.
            </p>
          </div>
        </section>

        <section>
          <div className="flex justify-center">
            <img
              src="/case-study/growth.png"
              alt="Follower growth graph"
              className="rounded-2xl border border-slate-300/70 max-h-[420px] w-auto object-contain"
            />
          </div>
        </section>
      </div>
    </>
  );
};

const CaseStudyTwo = () => {
  return (
    <>
      <header className="mb-16 border-b border-border/40 pb-12">
        <p className="text-primary font-body font-bold text-xs md:text-sm tracking-[0.25em] uppercase mb-4 md:mb-6">
          CASE STUDY 2
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-foreground tracking-tighter leading-[0.95] mb-8">
          How a Forex Coaching Account Gained 3,000 Targeted Followers in 60 Days
        </h1>

        <p className="text-xl md:text-2xl font-body text-muted-foreground leading-relaxed max-w-3xl">
          Most coaching accounts don&apos;t fail because the coach is bad at what they do. They fail because nobody can tell what the page is about or who it is for. This case study shows what happens when that problem is fixed.
        </p>
      </header>

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
          <div className="prose prose-lg md:prose-xl max-w-none text-muted-foreground font-body leading-relaxed space-y-4">
            <p>
              The coach was posting, showing up, and putting in the work. But growth had flatlined at just 79 followers.
            </p>
            <p>
              Some views here and there. A few followers every week. When the page was reviewed, the issue was obvious: the content had no clear direction. Trading tips one day, mindset content the next, market updates after that. Good posts, but random posts.
            </p>
            <p>
              When there is no system, new viewers land on your page and feel nothing. No reason to follow. No reason to stay.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <img
              src="/case-study/forex-before.png"
              alt="Instagram profile before growth"
              className="rounded-2xl border border-slate-300/70 max-h-[420px] w-auto object-contain"
            />
          </div>
        </section>

        {/* Section 2: What We Changed */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-display font-bold text-sm">
              2
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              What We Changed
            </h2>
          </div>

          <div className="prose prose-lg md:prose-xl max-w-none text-muted-foreground font-body leading-relaxed space-y-6">
            <div>
              <h3>First — we got specific about who the page was for.</h3>
              <p>
                Not just "forex traders". We narrowed it down to beginners who keep losing money and don&apos;t understand why. That one shift made every piece of content easier to write and every hook more relevant.
              </p>
            </div>

            <div>
              <h3>Then — we gave the content a structure.</h3>
              <p>
                Three pillars: practical trading breakdowns, beginner education, and trading mindset. Every post fit into one of those three, implemented with different content formats. The page finally had a clear identity.
              </p>
            </div>

            <div>
              <h3>Last — we fixed how the ideas were delivered.</h3>
              <p>
                The content itself was good; it just wasn&apos;t landing. Scripts were improved, more storytelling structure was added, and more of the coach&apos;s journey was shared so people could actually relate.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <img
              src="/case-study/forex-content.png"
              alt="Content performance screenshot"
              className="rounded-2xl border border-slate-300/70 max-h-[420px] w-auto object-contain"
            />
          </div>
        </section>

        {/* Section 3: The Outcome */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-display font-bold text-sm">
              3
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              The Outcome
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-primary text-white rounded-2xl p-6 flex flex-col justify-center shadow-md">
              <span className="text-3xl md:text-5xl font-display font-black tracking-tight mb-2">
                3K
              </span>
              <span className="text-xs md:text-sm font-body font-medium text-white/80 uppercase tracking-widest">
                New Followers
              </span>
            </div>
          </div>

          <div className="mb-8 flex justify-center">
            <img
              src="/case-study/forex-after.png"
              alt="Instagram profile after growth"
              className="rounded-2xl border border-slate-300/70 max-h-[420px] w-auto object-contain"
            />
          </div>

          <div className="prose prose-lg md:prose-xl max-w-none text-muted-foreground font-body leading-relaxed space-y-4">
            <p>
              The page gained 3,000 new followers in 60 days. Not random followers, but people genuinely interested in forex coaching — the kind who visit your profile, watch your content, and eventually become clients.
            </p>
            <p>
              The takeaway is simple. The coach didn&apos;t need to post every reel as a sales pitch. By adding personality and a clear identity, the page stopped looking directionless and started attracting attention.
            </p>
            <p>
              The coach didn&apos;t need to post more. They needed a brand that felt personal: a real identity, a clear voice, and a clear person behind it. Once that was in place, people started paying attention.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

const CaseStudy = () => {
  const { id } = useParams();
  const isSecond = id === "2";

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
            {isSecond ? <CaseStudyTwo /> : <CaseStudyOne />}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default CaseStudy;
