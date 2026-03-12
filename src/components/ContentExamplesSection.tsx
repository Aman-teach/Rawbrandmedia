import { useState } from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Play, Pause, Heart, MessageCircle, Send, Bookmark } from "lucide-react";

const mockReels = [
  {
    title: "3 signs you're invisible to your ideal clients",
    views: "24.5K",
    likes: "1,842",
    rotate: "-2deg",
    gradient: "from-primary/20 via-primary/5 to-secondary/10",
  },
  {
    title: "Viral content won't save your coaching business",
    views: "18.2K",
    likes: "1,204",
    rotate: "1.5deg",
    gradient: "from-secondary/15 via-transparent to-primary/10",
  },
  {
    title: "I stopped chasing trends and built a system instead",
    views: "31.8K",
    likes: "2,561",
    rotate: "-1deg",
    gradient: "from-primary/15 via-transparent to-primary/20",
  },
  {
    title: "The positioning mistake 90% of coaches make",
    views: "22.1K",
    likes: "1,678",
    rotate: "2deg",
    gradient: "from-secondary/10 via-primary/5 to-primary/15",
  },
  {
    title: "Why your hooks are failing (and how to fix them)",
    views: "45.1K",
    likes: "3,102",
    rotate: "-1.5deg",
    gradient: "from-primary/10 via-secondary/5 to-primary/20",
  },
  {
    title: "The only 3 content pillars you actually need",
    views: "28.4K",
    likes: "1,933",
    rotate: "1deg",
    gradient: "from-secondary/20 via-primary/10 to-transparent",
  },
];

const ContentExamplesSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const duplicatedReels = [...mockReels, ...mockReels];

  const handleReelClick = (id: string) => {
    if (activeVideo === id) {
      setActiveVideo(null);
    } else {
      setActiveVideo(id);
    }
  };

  return (
    <section className="py-28 md:py-36 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50%] h-[40%] bg-gradient-to-tr from-primary/[0.06] via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary font-body font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            Content That Builds Authority
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-deep-blue-foreground leading-[1.05] tracking-tight mb-6">
            Short-form content that{" "}
            <span className="text-secondary">positions you as the expert.</span>
          </h2>
          <p className="text-deep-blue-muted text-lg font-body leading-relaxed">
            Every reel we create is built to make your audience think, trust, and take action — not just double-tap and scroll.
          </p>
        </AnimateOnScroll>
      </div>

      <div 
        className="relative w-full overflow-hidden flex pb-12 pt-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* We use double width container and CSS marquee animation */}
        <div 
          className="flex w-max animate-marquee gap-5 md:gap-6 px-5"
          style={{ animationPlayState: (isHovered || activeVideo) ? 'paused' : 'running' }}
        >
          {duplicatedReels.map((reel, i) => {
            const id = `${reel.title}-${i}`;
            const isPlaying = activeVideo === id;
            
            return (
              <div key={id} className="w-[260px] md:w-[320px] flex-shrink-0">
                <div
                  className={`group relative cursor-pointer transition-all duration-500`}
                  style={{ transform: isPlaying ? 'rotate(0deg) scale(1.05)' : `rotate(${reel.rotate})` }}
                  onClick={() => handleReelClick(id)}
                >
                  {/* Phone mockup */}
                  <div className={`bg-deep-blue-card rounded-3xl border ${isPlaying ? 'border-primary shadow-[0_20px_60px_-15px_hsl(213_94%_42%/0.4)] z-20 relative' : 'border-deep-blue-border hover:border-primary/30 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_hsl(213_94%_42%/0.25)]'} overflow-hidden aspect-[9/16] relative transition-all duration-500`}>
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-b ${reel.gradient} transition-opacity duration-700 ${isPlaying ? 'opacity-50' : 'opacity-100'}`} />
                    
                    {/* Simulated playing state background */}
                    {isPlaying && (
                      <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] animate-pulse" />
                    )}
                    
                    {/* Phone notch */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-deep-blue-card rounded-full z-10" />
                    
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className={`w-14 h-14 rounded-full backdrop-blur-sm flex items-center justify-center transition-all duration-300 border border-primary-foreground/10 ${isPlaying ? 'bg-primary/40 scale-110' : 'bg-primary/20 group-hover:bg-primary/30 group-hover:scale-110'}`}>
                        {isPlaying ? (
                          <Pause className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
                        ) : (
                          <Play className="w-6 h-6 text-primary-foreground fill-primary-foreground ml-1" />
                        )}
                      </div>
                    </div>

                    {/* Right side icons */}
                    <div className="absolute right-3 bottom-20 flex flex-col items-center gap-4 z-10">
                      <div className="flex flex-col items-center gap-1">
                        <Heart className="w-4 h-4 text-deep-blue-foreground/80" />
                        <span className="text-[9px] font-body text-deep-blue-foreground/60">{reel.likes}</span>
                      </div>
                      <MessageCircle className="w-4 h-4 text-deep-blue-foreground/80" />
                      <Send className="w-4 h-4 text-deep-blue-foreground/80" />
                      <Bookmark className="w-4 h-4 text-deep-blue-foreground/80" />
                    </div>

                    {/* Bottom info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-deep-blue via-deep-blue/80 to-transparent z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-primary/30 border border-deep-blue-foreground/20" />
                        <span className="text-[10px] font-body font-semibold text-deep-blue-foreground/90">rawbrandmedia</span>
                      </div>
                      <p className="text-deep-blue-foreground font-body text-xs leading-snug line-clamp-2">
                        {reel.title}
                      </p>
                      <div className="flex items-center gap-1 mt-1.5">
                        <Play className="w-2.5 h-2.5 text-deep-blue-foreground/50 fill-deep-blue-foreground/50" />
                        <span className="text-[9px] font-body text-deep-blue-foreground/50">{reel.views} views</span>
                      </div>
                    </div>

                    {/* Top bar */}
                    <div className="absolute top-0 left-0 right-0 p-3 flex justify-between items-center z-10">
                      <div className="w-8 h-8 rounded-full bg-deep-blue-card/60 border border-deep-blue-border" />
                      <div className="flex gap-1">
                        <div className="w-1 h-1 rounded-full bg-deep-blue-foreground/40" />
                        <div className="w-1 h-1 rounded-full bg-deep-blue-foreground/40" />
                        <div className="w-1 h-1 rounded-full bg-deep-blue-foreground/40" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContentExamplesSection;

