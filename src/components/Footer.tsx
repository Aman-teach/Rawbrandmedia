const Footer = () => {
  return (
    <footer className="bg-background">
      {/* ─── Large Brand Typography (top) ─── */}
      <div className="container mx-auto px-6 max-w-6xl pt-4 pb-12 md:pb-16">
        <h2
          className="font-display font-black text-foreground/[0.06] leading-none tracking-tighter select-none text-center whitespace-nowrap mb-12 md:mb-16"
          style={{ fontSize: "clamp(3rem, 10vw, 11rem)" }}
        >
          RawBrandMedia
        </h2>
        <div className="border-t border-border" />
      </div>

      {/* ─── Footer Navigation (below brand text) ─── */}
      <div className="container mx-auto px-6 max-w-6xl pt-4 pb-16 md:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-baseline gap-0.5 mb-4">
              <span className="font-display text-2xl font-bold text-foreground">
                RawBrand
              </span>
              <span className="font-body text-[11px] font-semibold text-primary tracking-widest uppercase">
                Media
              </span>
            </div>
            <p className="text-muted-foreground font-body leading-relaxed text-sm italic mb-3">
              Built for coaches who are done being invisible.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed text-sm">
              Rawbrand Media is a done-for-you personal branding studio. We build authority-driven Instagram brands for coaches from positioning to content, handled completely.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <p className="font-display font-semibold text-foreground text-sm mb-5 tracking-wide uppercase">
              Navigation
            </p>
            <div className="space-y-3">
              {[
                { label: "Framework", href: "#framework" },
                { label: "Services", href: "#services" },
                { label: "Proof of Work", href: "#proof" },
                { label: "Contact", href: "https://calendly.com/amank420835/30min", external: true },
              ].map((link: any) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="block text-muted-foreground hover:text-foreground font-body text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Resources */}
          <div>
            <p className="font-display font-semibold text-foreground text-sm mb-5 tracking-wide uppercase">
              Resources
            </p>
            <div className="space-y-3">
              {[
                { label: "Early Partner Program", href: "#partners" },
                { label: "Brand System", href: "#framework" },
                { label: "Content Strategy", href: "#services" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground font-body text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Connect */}
          <div>
            <p className="font-display font-semibold text-foreground text-sm mb-5 tracking-wide uppercase">
              Connect
            </p>
            <div className="space-y-3">
              {[
                { label: "Instagram → @rawbrandmedia", href: "https://instagram.com/rawbrandmedia" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-foreground font-body text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Legal Row ─── */}
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="border-t border-border pt-6 pb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs font-body">
            © 2025 Rawbrand Media. Dive in the world of personal branding.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-muted-foreground hover:text-foreground text-xs font-body transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
