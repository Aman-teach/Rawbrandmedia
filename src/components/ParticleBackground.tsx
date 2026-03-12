import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

interface Particle {
  baseX: number;
  baseY: number;
  currentX: number;
  currentY: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  opacity: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const prevMouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    if (shouldReduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;
    let particles: Particle[] = [];

    /* ── Config ──────────────────────────── */
    const isMobile = window.innerWidth < 768;
    const COUNT = isMobile ? 200 : 500;
    const BLUE = '#0571d3';
    const YELLOW = '#FFC107';
    const REPEL_RADIUS = 140;
    const REPEL_STRENGTH = 18;
    const SPRING = 0.04; // how fast particles ease back

    /* ── Helpers ─────────────────────────── */
    const hexToRgba = (hex: string, alpha: number) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r},${g},${b},${alpha})`;
    };

    /* ── Init — ring galaxy around center text ── */
    const init = () => {
      particles = [];
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;

      // outer ellipse boundary
      const rx = w * 0.46;
      const ry = h * 0.42;
      // inner dead-zone so particles don't cover the text
      const innerRx = isMobile ? w * 0.18 : w * 0.22;
      const innerRy = isMobile ? h * 0.08 : h * 0.1;

      for (let i = 0; i < COUNT; i++) {
        const angle = Math.random() * Math.PI * 2;

        // distribute between inner and outer edge (ring shape)
        const t = Math.random();  // 0→1
        // bias toward inner edge for denser ring core
        const blend = t * t;
        const distX = innerRx + blend * (rx - innerRx);
        const distY = innerRy + blend * (ry - innerRy);

        const x = cx + Math.cos(angle) * distX;
        const y = cy + Math.sin(angle) * distY;

        const isYellow = Math.random() < 0.12;
        // ring-core particles (near inner edge) are brighter
        const ringFade = 1 - blend * 0.4;

        // ~20% medium dots, ~80% small dots
        const isMedium = Math.random() < 0.2;
        const radius = isMedium
          ? Math.random() * 1.5 + 1.8   // 1.8 – 3.3 px (medium)
          : Math.random() * 1.2 + 0.5;  // 0.5 – 1.7 px (small)

        particles.push({
          baseX: x,
          baseY: y,
          currentX: x,
          currentY: y,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius,
          color: isYellow ? YELLOW : BLUE,
          opacity: (Math.random() * 0.25 + 0.3) * ringFade,
        });
      }
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      init();
    };

    /* ── Animation loop ──────────────────── */
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // mouse speed (used to amplify the ripple when cursor moves fast)
      const mdx = mouseRef.current.x - prevMouseRef.current.x;
      const mdy = mouseRef.current.y - prevMouseRef.current.y;
      const speed = Math.sqrt(mdx * mdx + mdy * mdy);
      prevMouseRef.current = { ...mouseRef.current };

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        /* 1. Slow ambient drift */
        p.baseX += p.vx;
        p.baseY += p.vy;

        // wrap edges
        if (p.baseX < -4) p.baseX = canvas.width + 4;
        else if (p.baseX > canvas.width + 4) p.baseX = -4;
        if (p.baseY < -4) p.baseY = canvas.height + 4;
        else if (p.baseY > canvas.height + 4) p.baseY = -4;

        /* 2. Cursor ripple repulsion */
        let tx = p.baseX;
        let ty = p.baseY;

        const dx = mouseRef.current.x - p.baseX;
        const dy = mouseRef.current.y - p.baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < REPEL_RADIUS && dist > 0.1) {
          const norm = (REPEL_RADIUS - dist) / REPEL_RADIUS; // 0→1
          const intensity = REPEL_STRENGTH * norm * (1 + Math.min(speed * 0.08, 1.5));
          tx -= (dx / dist) * intensity;
          ty -= (dy / dist) * intensity;
        }

        /* 3. Spring ease toward target */
        p.currentX += (tx - p.currentX) * SPRING;
        p.currentY += (ty - p.currentY) * SPRING;

        /* 4. Draw */
        ctx.beginPath();
        ctx.arc(p.currentX, p.currentY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = hexToRgba(p.color, p.opacity);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    /* ── Events ──────────────────────────── */
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    resize();
    raf = requestAnimationFrame(tick);

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};

export default ParticleBackground;
