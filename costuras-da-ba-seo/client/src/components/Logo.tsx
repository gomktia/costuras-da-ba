import type { FC } from "react";

// Brand colors — Costuras da Bá (Verde Bebê)
const COLORS = {
  green: "#8BBD9F",        // Verde bebê principal — linha e detalhes
  greenDark: "#6A9E80",    // Verde mais profundo — gradientes e contraste
  greenLight: "#B5D8C4",   // Verde clarinho — gradientes suaves
  charcoal: "#3A4A3F",     // Carvão esverdeado — textos
  accent: "#5C8E6E",       // Verde musgo — acentos e divisores
} as const;

interface LogoProps {
  /** Controls the icon height in pixels (default 40) */
  size?: number;
  /** Whether to render the text alongside the symbol (default true) */
  showText?: boolean;
  /** Layout variant: full (stacked), icon (symbol only), horizontal (side by side) */
  variant?: "full" | "icon" | "horizontal";
  /** Optional className for the wrapper */
  className?: string;
}

/**
 * Costuras da Bá — Brand Logo
 *
 * A sewing needle with flowing thread that traces an elegant cursive "B",
 * evoking artisanal craftsmanship and warmth.
 */
export function Logo({
  size = 40,
  showText = true,
  variant = "full",
  className,
}: LogoProps) {
  // In icon-only mode, never show text regardless of showText prop
  const renderText = variant !== "icon" && showText;
  const isHorizontal = variant === "horizontal";

  // Scale factor based on the canonical 80px icon
  const scale = size / 80;

  // Dimensions
  const iconW = 80 * scale;
  const iconH = 90 * scale;

  if (!renderText) {
    // ── Icon only ──
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 80 90"
        width={iconW}
        height={iconH}
        fill="none"
        role="img"
        aria-label="Costuras da Bá"
        className={className}
      >
        <title>Costuras da Bá</title>
        <NeedleAndThread />
      </svg>
    );
  }

  if (isHorizontal) {
    // ── Horizontal: icon left, text right ──
    const textScale = scale;
    const totalW = 280 * scale;
    const totalH = 90 * scale;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 280 90"
        width={totalW}
        height={totalH}
        fill="none"
        role="img"
        aria-label="Costuras da Bá"
        className={className}
      >
        <title>Costuras da Bá</title>
        <NeedleAndThread />
        <g transform="translate(90, 0)">
          <BrandText alignment="left" />
        </g>
      </svg>
    );
  }

  // ── Full (stacked): icon on top, text below ──
  const totalW = 200 * scale;
  const totalH = 140 * scale;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 140"
      width={totalW}
      height={totalH}
      fill="none"
      role="img"
      aria-label="Costuras da Bá"
      className={className}
    >
      <title>Costuras da Bá</title>
      <g transform="translate(60, 0)">
        <NeedleAndThread />
      </g>
      <BrandText alignment="center" />
    </svg>
  );
}

// ─────────────────────────────────────────────
//  Needle + Thread Symbol
//  A diagonal sewing needle with a flowing
//  thread that sweeps into a cursive "B" shape
// ─────────────────────────────────────────────

function NeedleAndThread() {
  return (
    <g>
      {/* ── Thread ──
          A flowing line from the needle eye that curves into
          an elegant "B" shape: two rounded bumps on the right
          connected by a vertical spine. */}
      <defs>
        <linearGradient id="threadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={COLORS.greenLight} />
          <stop offset="50%" stopColor={COLORS.green} />
          <stop offset="100%" stopColor={COLORS.greenDark} />
        </linearGradient>
        <linearGradient id="needleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={COLORS.greenLight} />
          <stop offset="40%" stopColor={COLORS.accent} />
          <stop offset="100%" stopColor={COLORS.greenDark} />
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0.5" dy="1" stdDeviation="1.2" floodColor={COLORS.charcoal} floodOpacity="0.15" />
        </filter>
      </defs>

      {/*
        Thread path — forms a decorative cursive "B":
        Starts from needle eye area (top-left), sweeps right and down
        into two looping bumps, then trails off with a gentle curve.
      */}
      <path
        d={`
          M 18 16
          C 14 22, 12 30, 16 36
          C 20 42, 30 40, 38 36
          C 46 32, 52 28, 54 32
          C 58 38, 50 46, 42 48
          C 34 50, 26 48, 22 52
          C 18 56, 20 62, 26 66
          C 32 70, 42 68, 50 64
          C 58 60, 62 54, 58 48
          M 22 52
          C 18 56, 16 64, 20 70
          C 24 76, 34 78, 44 76
          C 54 74, 60 68, 58 62
        `}
        stroke="url(#threadGrad)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#softShadow)"
      />

      {/* Small decorative loop near the start of the thread */}
      <path
        d={`
          M 18 16
          C 20 12, 26 10, 28 14
          C 30 18, 24 20, 20 18
        `}
        stroke="url(#threadGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Trailing thread end — a gentle wave below */}
      <path
        d={`
          M 44 76
          C 38 80, 30 84, 24 82
          C 18 80, 16 76, 18 74
        `}
        stroke="url(#threadGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />

      {/* ── Sewing Needle ──
          A sleek diagonal needle pointing top-left to bottom-right,
          positioned so the eye sits near the thread start */}
      <g filter="url(#softShadow)">
        {/* Needle body */}
        <line
          x1="10"
          y1="8"
          x2="30"
          y2="28"
          stroke="url(#needleGrad)"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        {/* Needle point — sharper tip */}
        <path
          d="M 30 28 L 34 32 L 31 31 Z"
          fill={COLORS.accent}
        />
        {/* Needle eye — small oval near the top */}
        <ellipse
          cx="13"
          cy="11"
          rx="1.8"
          ry="3"
          transform="rotate(45, 13, 11)"
          stroke={COLORS.accent}
          strokeWidth="1.2"
          fill="none"
        />
      </g>

      {/* Small stitch marks for artisanal feel */}
      <g stroke={COLORS.green} strokeWidth="1.2" strokeLinecap="round" opacity="0.5">
        <line x1="62" y1="42" x2="66" y2="46" />
        <line x1="64" y1="38" x2="68" y2="42" />
        <line x1="62" y1="58" x2="66" y2="62" />
        <line x1="64" y1="54" x2="68" y2="58" />
      </g>
    </g>
  );
}

// ─────────────────────────────────────────────
//  Brand Text
// ─────────────────────────────────────────────

function BrandText({ alignment }: { alignment: "center" | "left" }) {
  const anchor = alignment === "center" ? "middle" : "start";
  const x = alignment === "center" ? 100 : 0;
  const yPrimary = alignment === "center" ? 110 : 42;
  const ySecondary = alignment === "center" ? 128 : 62;

  return (
    <g>
      {/* Primary name */}
      <text
        x={x}
        y={yPrimary}
        textAnchor={anchor}
        fontFamily="'DM Serif Display', 'Playfair Display', 'Georgia', serif"
        fontWeight="400"
        fontSize="26"
        fill={COLORS.charcoal}
        letterSpacing="1"
      >
        Costuras da B
        <tspan fill={COLORS.green} fontStyle="italic">á</tspan>
      </text>

      {/* Decorative divider line */}
      {alignment === "center" ? (
        <line
          x1={x - 40}
          y1={yPrimary + 6}
          x2={x + 40}
          y2={yPrimary + 6}
          stroke={COLORS.accent}
          strokeWidth="0.8"
          opacity="0.6"
        />
      ) : (
        <line
          x1={x}
          y1={yPrimary + 6}
          x2={x + 80}
          y2={yPrimary + 6}
          stroke={COLORS.accent}
          strokeWidth="0.8"
          opacity="0.6"
        />
      )}

      {/* Tagline */}
      <text
        x={x}
        y={ySecondary}
        textAnchor={anchor}
        fontFamily="'DM Sans', 'Helvetica Neue', sans-serif"
        fontWeight="400"
        fontSize="9"
        fill={COLORS.accent}
        letterSpacing="3"
        textDecoration="none"
      >
        COSTURA &amp; REPAROS
      </text>
    </g>
  );
}

export default Logo;
