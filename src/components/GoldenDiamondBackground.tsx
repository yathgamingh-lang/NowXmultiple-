import React, { useMemo } from 'react';

interface GoldenDiamondBackgroundProps {
  intensity?: 'subtle' | 'luxury' | 'vibrant';
  showParticles?: boolean;
}

export const GoldenDiamondBackground: React.FC<GoldenDiamondBackgroundProps> = ({
  intensity = 'luxury',
  showParticles = true,
}) => {
  // Pre-generate stable positions for twinkling golden diamond stars
  const sparkles = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      left: `${(i * 17 + 7) % 96}%`,
      top: `${(i * 23 + 11) % 94}%`,
      size: (i % 3) + 2, // 2px to 4px
      delay: `${(i * 0.4) % 4}s`,
      duration: `${3 + (i % 4)}s`,
      opacity: 0.25 + ((i % 5) * 0.15),
    }));
  }, []);

  // Pre-generate floating micro diamond shapes
  const floatingDiamonds = useMemo(() => {
    return [
      { top: '8%', left: '12%', size: 28, rotate: 15, opacity: 0.18, delay: '0s' },
      { top: '18%', right: '10%', size: 36, rotate: -25, opacity: 0.15, delay: '2s' },
      { top: '45%', left: '6%', size: 24, rotate: 45, opacity: 0.14, delay: '1s' },
      { top: '65%', right: '8%', size: 32, rotate: -15, opacity: 0.16, delay: '3s' },
      { top: '82%', left: '15%', size: 40, rotate: 30, opacity: 0.12, delay: '1.5s' },
      { top: '78%', right: '22%', size: 22, rotate: -40, opacity: 0.17, delay: '2.5s' },
      { top: '32%', right: '28%', size: 20, rotate: 10, opacity: 0.12, delay: '0.8s' },
    ];
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Deep Obsidian-Gold Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090703] via-[#0d0904] to-[#060401]" />

      {/* Top Ambient Golden Aurora (Crown Lighting) */}
      <div
        className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[90vw] max-w-[1000px] h-[480px] rounded-full blur-[110px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255, 215, 0, 0.22) 0%, rgba(218, 165, 32, 0.14) 40%, rgba(184, 134, 11, 0.05) 70%, transparent 100%)',
        }}
      />

      {/* Bottom Subtle Golden Horizon Glow */}
      <div
        className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[95vw] max-w-[1100px] h-[380px] rounded-full blur-[120px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(245, 158, 11, 0.16) 0%, rgba(217, 119, 6, 0.08) 50%, transparent 100%)',
        }}
      />

      {/* Side Jewel Ambient Reflections */}
      <div
        className="absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.15), transparent 70%)',
        }}
      />
      <div
        className="absolute top-2/3 -right-20 w-96 h-96 rounded-full blur-[110px] pointer-events-none opacity-35"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.18), transparent 70%)',
        }}
      />

      {/* Real Diamond Facet Geometric Isometric Grid (SVG Pattern) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-35"
        xmlns="http://www.w3.org/2000/svg"
        style={{ mixBlendMode: 'screen' }}
      >
        <defs>
          {/* Linear Gold Gradient for Facet Edges */}
          <linearGradient id="goldFacetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff2a8" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#ffd700" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#b38728" stopOpacity="0.10" />
          </linearGradient>

          {/* Secondary Shimmer Gradient */}
          <linearGradient id="goldGlintGrad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#fef08a" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ca8a04" stopOpacity="0.05" />
          </linearGradient>

          {/* Isometric Diamond Tile Pattern */}
          <pattern
            id="goldenDiamondGrid"
            width="60"
            height="104"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(0)"
          >
            {/* Upper Rhombus / Facet */}
            <polygon
              points="30,0 60,26 30,52 0,26"
              fill="rgba(255, 215, 0, 0.018)"
              stroke="url(#goldFacetGrad)"
              strokeWidth="0.75"
            />
            {/* Lower Rhombus / Facet */}
            <polygon
              points="30,52 60,78 30,104 0,78"
              fill="rgba(218, 165, 32, 0.025)"
              stroke="url(#goldFacetGrad)"
              strokeWidth="0.75"
            />
            {/* Center Cut Line for 3D Diamond Brilliance */}
            <line x1="30" y1="0" x2="30" y2="52" stroke="url(#goldGlintGrad)" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.5" />
            <line x1="30" y1="52" x2="30" y2="104" stroke="url(#goldGlintGrad)" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.5" />
            <line x1="0" y1="26" x2="60" y2="26" stroke="url(#goldFacetGrad)" strokeWidth="0.4" opacity="0.3" />
            <line x1="0" y1="78" x2="60" y2="78" stroke="url(#goldFacetGrad)" strokeWidth="0.4" opacity="0.3" />

            {/* Micro Gold Star Nodes at Intersections */}
            <circle cx="30" cy="52" r="1.2" fill="#fff" opacity="0.7" />
            <circle cx="0" cy="26" r="0.8" fill="#ffd700" opacity="0.5" />
            <circle cx="60" cy="26" r="0.8" fill="#ffd700" opacity="0.5" />
            <circle cx="0" cy="78" r="0.8" fill="#ffd700" opacity="0.5" />
            <circle cx="60" cy="78" r="0.8" fill="#ffd700" opacity="0.5" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#goldenDiamondGrid)" />
      </svg>

      {/* Floating 3D Diamond Wireframes */}
      {floatingDiamonds.map((d, index) => (
        <div
          key={index}
          className="absolute transition-transform duration-1000 ease-in-out pointer-events-none"
          style={{
            top: d.top,
            left: d.left,
            right: d.right,
            width: `${d.size}px`,
            height: `${d.size}px`,
            opacity: d.opacity,
            transform: `rotate(${d.rotate}deg)`,
            animation: `goldenDiamondFloat 8s ease-in-out infinite alternate ${d.delay}`,
          }}
        >
          {/* Faceted Brilliant-Cut Diamond Vector */}
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_12px_rgba(255,215,0,0.4)]">
            <polygon
              points="50,5 90,30 50,95 10,30"
              fill="rgba(255, 215, 0, 0.06)"
              stroke="#fbbf24"
              strokeWidth="2"
            />
            {/* Table Facet */}
            <polygon
              points="30,30 70,30 50,5"
              fill="rgba(255, 255, 255, 0.12)"
              stroke="#fef08a"
              strokeWidth="1.5"
            />
            <line x1="10" y1="30" x2="30" y2="30" stroke="#fbbf24" strokeWidth="1.5" />
            <line x1="70" y1="30" x2="90" y2="30" stroke="#fbbf24" strokeWidth="1.5" />
            {/* Pavillion Lines */}
            <line x1="30" y1="30" x2="50" y2="95" stroke="#f59e0b" strokeWidth="1.5" />
            <line x1="70" y1="30" x2="50" y2="95" stroke="#f59e0b" strokeWidth="1.5" />
          </svg>
        </div>
      ))}

      {/* Twinkling Golden Diamond Dust / Sparkles */}
      {showParticles && (
        <div className="absolute inset-0">
          {sparkles.map((s) => (
            <div
              key={s.id}
              className="absolute pointer-events-none"
              style={{
                left: s.left,
                top: s.top,
                animation: `goldenGlint ${s.duration} ease-in-out infinite ${s.delay}`,
              }}
            >
              {/* Diamond 4-Point Star Glint */}
              <svg
                width={s.size * 4}
                height={s.size * 4}
                viewBox="0 0 24 24"
                className="overflow-visible"
                style={{ opacity: s.opacity }}
              >
                <path
                  d="M12 0L14 9L24 12L14 15L12 24L10 15L0 12L10 9Z"
                  fill="#fff7cd"
                  className="drop-shadow-[0_0_6px_rgba(255,215,0,0.8)]"
                />
              </svg>
            </div>
          ))}
        </div>
      )}

      {/* Subtle Luxury Vignette Frame */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 100px 30px rgba(0, 0, 0, 0.85)',
        }}
      />
    </div>
  );
};
