import { useCallback, useLayoutEffect, useRef, type CSSProperties } from "react";
import { gsap } from "gsap";
import "./StaggeredMenu.css";

type StaggeredMenuItem = {
  label: string;
  link: string;
  ariaLabel?: string;
};

type StaggeredSocialItem = {
  label: string;
  link: string;
};

type StaggeredMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  position?: "left" | "right";
  colors?: string[];
  items?: StaggeredMenuItem[];
  socialItems?: StaggeredSocialItem[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  className?: string;
  accentColor?: string;
  closeOnClickAway?: boolean;
};

const StaggeredMenu = ({
  isOpen,
  onClose,
  position = "right",
  colors = ["#B19EEF", "#5227FF"],
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  className,
  accentColor = "#5227FF",
  closeOnClickAway = true
}: StaggeredMenuProps) => {
  const panelRef = useRef<HTMLElement | null>(null);
  const preLayersRef = useRef<HTMLDivElement | null>(null);
  const preLayerElsRef = useRef<HTMLDivElement[]>([]);
  const openTlRef = useRef<gsap.core.Timeline | null>(null);
  const closeTweenRef = useRef<gsap.core.Tween | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;
      if (!panel || !preContainer) return;

      const preLayers = Array.from(preContainer.querySelectorAll<HTMLDivElement>(".sm-prelayer"));
      preLayerElsRef.current = preLayers;

      const offscreen = position === "left" ? -100 : 100;
      gsap.set([panel, ...preLayers], { xPercent: offscreen });
    });

    return () => ctx.revert();
  }, [position]);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return null;

    openTlRef.current?.kill();
    closeTweenRef.current?.kill();

    const itemEls = Array.from(panel.querySelectorAll<HTMLElement>(".sm-panel-itemLabel"));
    const numberEls = Array.from(panel.querySelectorAll<HTMLElement>(".sm-panel-list[data-numbering] .sm-panel-item"));
    const socialTitle = panel.querySelector<HTMLElement>(".sm-socials-title");
    const socialLinks = Array.from(panel.querySelectorAll<HTMLElement>(".sm-socials-link"));

    const layerStates = layers.map(layer => ({
      layer,
      start: Number(gsap.getProperty(layer, "xPercent"))
    }));
    const panelStart = Number(gsap.getProperty(panel, "xPercent"));

    if (itemEls.length) {
      gsap.set(itemEls, { yPercent: 140, rotate: 10 });
    }
    if (numberEls.length) {
      gsap.set(numberEls, { "--sm-num-opacity": 0 });
    }
    if (socialTitle) {
      gsap.set(socialTitle, { opacity: 0 });
    }
    if (socialLinks.length) {
      gsap.set(socialLinks, { y: 25, opacity: 0 });
    }

    const timeline = gsap.timeline({ paused: true });

    layerStates.forEach((state, index) => {
      timeline.fromTo(
        state.layer,
        { xPercent: state.start },
        { xPercent: 0, duration: 0.5, ease: "power4.out" },
        index * 0.07
      );
    });

    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
    const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
    const panelDuration = 0.65;

    timeline.fromTo(
      panel,
      { xPercent: panelStart },
      { xPercent: 0, duration: panelDuration, ease: "power4.out" },
      panelInsertTime
    );

    if (itemEls.length) {
      const itemsStart = panelInsertTime + panelDuration * 0.15;
      timeline.to(
        itemEls,
        {
          yPercent: 0,
          rotate: 0,
          duration: 1,
          ease: "power4.out",
          stagger: { each: 0.1, from: "start" }
        },
        itemsStart
      );

      if (numberEls.length) {
        timeline.to(
          numberEls,
          {
            duration: 0.6,
            ease: "power2.out",
            "--sm-num-opacity": 1,
            stagger: { each: 0.08, from: "start" }
          },
          itemsStart + 0.1
        );
      }
    }

    if (socialTitle || socialLinks.length) {
      const socialsStart = panelInsertTime + panelDuration * 0.4;

      if (socialTitle) {
        timeline.to(
          socialTitle,
          {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out"
          },
          socialsStart
        );
      }

      if (socialLinks.length) {
        timeline.to(
          socialLinks,
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: "power3.out",
            stagger: { each: 0.08, from: "start" },
            onComplete: () => {
              gsap.set(socialLinks, { clearProps: "opacity" });
            }
          },
          socialsStart + 0.04
        );
      }
    }

    openTlRef.current = timeline;
    return timeline;
  }, []);

  const playClose = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return;

    openTlRef.current?.kill();
    openTlRef.current = null;

    const allPanels = [...layers, panel];
    const offscreen = position === "left" ? -100 : 100;

    closeTweenRef.current?.kill();
    closeTweenRef.current = gsap.to(allPanels, {
      xPercent: offscreen,
      duration: 0.32,
      ease: "power3.in",
      overwrite: "auto",
      onComplete: () => {
        const itemEls = Array.from(panel.querySelectorAll<HTMLElement>(".sm-panel-itemLabel"));
        if (itemEls.length) {
          gsap.set(itemEls, { yPercent: 140, rotate: 10 });
        }

        const numberEls = Array.from(panel.querySelectorAll<HTMLElement>(".sm-panel-list[data-numbering] .sm-panel-item"));
        if (numberEls.length) {
          gsap.set(numberEls, { "--sm-num-opacity": 0 });
        }

        const socialTitle = panel.querySelector<HTMLElement>(".sm-socials-title");
        const socialLinks = Array.from(panel.querySelectorAll<HTMLElement>(".sm-socials-link"));
        if (socialTitle) {
          gsap.set(socialTitle, { opacity: 0 });
        }
        if (socialLinks.length) {
          gsap.set(socialLinks, { y: 25, opacity: 0 });
        }
      }
    });
  }, [position]);

  useLayoutEffect(() => {
    if (isOpen) {
      const timeline = buildOpenTimeline();
      timeline?.play(0);
      return;
    }

    playClose();
  }, [isOpen, buildOpenTimeline, playClose]);

  useLayoutEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const layeredColors = (() => {
    const palette = colors.length ? colors.slice(0, 4) : ["#1e1e22", "#35353c"];
    if (palette.length < 3) return palette;

    const mid = Math.floor(palette.length / 2);
    const clone = [...palette];
    clone.splice(mid, 1);
    return clone;
  })();

  const wrapperStyle = accentColor
    ? ({ ["--sm-accent" as string]: accentColor } as CSSProperties)
    : undefined;

  return (
    <div
      className={(className ? `${className} ` : "") + "staggered-menu-wrapper fixed-wrapper"}
      style={wrapperStyle}
      data-position={position}
      data-open={isOpen || undefined}
    >
      {isOpen && closeOnClickAway ? (
        <button
          className="sm-backdrop"
          onClick={onClose}
          aria-label="Close menu"
          type="button"
        />
      ) : null}

      <div ref={preLayersRef} className="sm-prelayers" aria-hidden="true">
        {layeredColors.map((color, index) => (
          <div key={index} className="sm-prelayer" style={{ background: color }} />
        ))}
      </div>

      <aside id="staggered-menu-panel" ref={panelRef} className="staggered-menu-panel" aria-hidden={!isOpen}>
        <div className="sm-panel-inner">
          <ul className="sm-panel-list" role="list" data-numbering={displayItemNumbering || undefined}>
            {items.length ? (
              items.map((item, index) => (
                <li className="sm-panel-itemWrap" key={`${item.label}-${index}`}>
                  <a
                    className="sm-panel-item"
                    href={item.link}
                    aria-label={item.ariaLabel}
                    data-index={index + 1}
                    onClick={onClose}
                  >
                    <span className="sm-panel-itemLabel">{item.label}</span>
                  </a>
                </li>
              ))
            ) : (
              <li className="sm-panel-itemWrap" aria-hidden="true">
                <span className="sm-panel-item">
                  <span className="sm-panel-itemLabel">No items</span>
                </span>
              </li>
            )}
          </ul>

          {displaySocials && socialItems.length > 0 ? (
            <div className="sm-socials" aria-label="Social links">
              <h3 className="sm-socials-title">Socials</h3>
              <ul className="sm-socials-list" role="list">
                {socialItems.map((social, index) => (
                  <li key={`${social.label}-${index}`} className="sm-socials-item">
                    <a href={social.link} target="_blank" rel="noopener noreferrer" className="sm-socials-link">
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </aside>
    </div>
  );
};

export default StaggeredMenu;
