import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useMenuOverlay } from "@/components/MenuFolder/MenuOverlayContext";

const DESKTOP_MENU_WIDTH = 440;
const NAV_MAX_WIDTH = 1040;
const NAV_WIDTH_RATIO = 0.9;
const NAV_VIEWPORT_GUTTER = 24;
const NAV_MENU_GAP = 40;

const Navbar = () => {
  const { isOpen, toggleMenu } = useMenuOverlay();
  const [canShiftForMenu, setCanShiftForMenu] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(() => window.innerWidth);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1025px)");

    const updateShiftState = () => {
      setCanShiftForMenu(mediaQuery.matches);
    };

    updateShiftState();
    mediaQuery.addEventListener("change", updateShiftState);

    return () => {
      mediaQuery.removeEventListener("change", updateShiftState);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closedNavWidth = Math.min(
    viewportWidth * NAV_WIDTH_RATIO,
    NAV_MAX_WIDTH,
    viewportWidth - NAV_VIEWPORT_GUTTER * 2
  );

  const openNavWidth = Math.min(
    closedNavWidth,
    viewportWidth - DESKTOP_MENU_WIDTH - NAV_MENU_GAP - NAV_VIEWPORT_GUTTER
  );

  const activeNavWidth = isOpen && canShiftForMenu
    ? openNavWidth
    : closedNavWidth;

  const openOffset = isOpen && canShiftForMenu
    ? viewportWidth / 2 - DESKTOP_MENU_WIDTH - NAV_MENU_GAP - activeNavWidth / 2
    : 0;

  const navTransform = `translateX(calc(-50% + ${openOffset}px))`;

  return (
    <nav
      className={`fixed top-4 left-1/2 z-50 rounded-[20px] border transition-all duration-300 ${isOpen ? "bg-white/90 shadow-[0_12px_36px_rgba(5,113,211,0.2)] backdrop-blur-2xl" : "bg-white/72 shadow-[0_10px_30px_rgba(5,113,211,0.12)] backdrop-blur-xl"}`}
      style={{
        width: `${Math.max(activeNavWidth, 320)}px`,
        transform: navTransform,
        transition: "transform 360ms cubic-bezier(0.22, 1, 0.36, 1), width 360ms cubic-bezier(0.22, 1, 0.36, 1)"
      }}
    >
      <div className="flex h-[66px] items-center justify-between px-4 sm:px-6 md:px-7">
        <a href="/" className="font-display text-base sm:text-lg md:text-xl font-black tracking-tight text-[#0d1726]">
          RawBrand <span className="text-[#0571d3]">Media</span>
        </a>

        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <button
            onClick={toggleMenu}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#d7e4f2] bg-white text-[#0d1726] transition-colors duration-300 hover:bg-[#f3f8fe]"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="staggered-menu-panel"
            type="button"
          >
            <span
              className={
                "absolute h-[2px] w-5 rounded-full bg-current transition-all duration-300 " +
                (isOpen ? "translate-y-0 rotate-45" : "-translate-y-[6px]")
              }
            />
            <span
              className={
                "absolute h-[2px] w-5 rounded-full bg-current transition-opacity duration-300 " +
                (isOpen ? "opacity-0" : "opacity-100")
              }
            />
            <span
              className={
                "absolute h-[2px] w-5 rounded-full bg-current transition-all duration-300 " +
                (isOpen ? "translate-y-0 -rotate-45" : "translate-y-[6px]")
              }
            />
          </button>

          <a
            href="https://calendly.com/amank420835/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#0571d3] px-4 sm:px-5 md:px-6 text-[11px] sm:text-xs md:text-sm font-display font-bold uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:bg-[#044fa0]"
          >
            Book a Call
            <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
