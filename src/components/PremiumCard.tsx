import { useRef, useState, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
}

const PremiumCard = ({ children, className = "" }: PremiumCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [3, -3]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-3, 3]), springConfig);

  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
    spotlightX.set(x * 100);
    spotlightY.set(y * 100);
  };

  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => {
    setHovering(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
    spotlightX.set(50);
    spotlightY.set(50);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
      }}
      className={`relative ${className}`}
    >
      {/* Spotlight glow overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 rounded-2xl"
        style={{
          background: useMotionTemplate(spotlightX, spotlightY, hovering),
        }}
        animate={{ opacity: hovering ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
      {/* Border glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 rounded-2xl"
        animate={{
          boxShadow: hovering
            ? "0 0 40px -10px hsl(213 94% 42% / 0.15), 0 20px 60px -15px hsl(213 40% 12% / 0.12)"
            : "0 0 0px 0px transparent",
        }}
        transition={{ duration: 0.5 }}
      />
      {children}
    </motion.div>
  );
};

// Helper to build the radial gradient string reactively
function useMotionTemplate(
  x: ReturnType<typeof useMotionValue<number>>,
  y: ReturnType<typeof useMotionValue<number>>,
  hovering: boolean
) {
  // We use a static approach since useMotionTemplate from framer doesn't exist in all versions
  // Instead we'll use a transform
  const bg = useTransform([x, y], ([xVal, yVal]) =>
    `radial-gradient(circle at ${xVal}% ${yVal}%, rgba(255,255,255,0.06) 0%, rgba(5,113,211,0.03) 40%, transparent 70%)`
  );
  return bg;
}

export default PremiumCard;
