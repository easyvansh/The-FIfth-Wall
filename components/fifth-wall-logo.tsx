type FifthWallLogoProps = {
  className?: string;
};

export function FifthWallLogo({ className = '' }: FifthWallLogoProps) {
  return (
    <svg
      width="200"
      height="250"
      viewBox="0 0 200 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`fifth-wall-logo ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <style>{`
        .fifth-wall-logo {
          overflow: visible;
        }

        .fifth-wall-logo .corner {
          stroke: #D3CABB;
          stroke-dasharray: 40;
          stroke-dashoffset: 40;
          animation: drawCorner 1.15s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        .fifth-wall-logo .wall-layer {
          fill: #D3CABB;
          animation: wallReveal 1s ease-out forwards;
          transform-origin: left;
        }
        
        .fifth-wall-logo .wall-shadow {
          fill: #A09484;
        }

        .fifth-wall-logo .rupture {
          fill: #221F1F;
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: revealRupture 1s ease-out forwards 0.5s;
        }

        .fifth-wall-logo .cracks {
          stroke: #807D77;
          stroke-width: 1.5;
        }

        .fifth-wall-logo .observer-iris {
          fill: #BF8742;
          opacity: 0;
          animation: wakeObserver 1.2s ease forwards 0.95s;
        }
        
        .fifth-wall-logo .observer-pupil {
          fill: #221F1F;
          opacity: 0;
          animation: wakeObserver 1.2s ease forwards 0.95s;
        }

        .fifth-wall-logo .text {
          fill: #221F1F;
          font-family: sans-serif;
          font-size: 20px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-anchor: middle;
        }

        @keyframes drawCorner {
          to { stroke-dashoffset: 0; }
        }

        @keyframes wallReveal {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @keyframes revealRupture {
          to { stroke-dashoffset: 0; }
        }

        @keyframes wakeObserver {
          to { opacity: 1; }
        }
      `}</style>

      {/* Frame Corners */}
      <path d="M50 30 V10 H80" strokeWidth="4" strokeLinecap="square" className="corner" />
      <path d="M150 30 V10 H120" strokeWidth="4" strokeLinecap="square" className="corner" />
      <path d="M50 170 V190 H80" strokeWidth="4" strokeLinecap="square" className="corner" />
      <path d="M150 170 V190 H120" strokeWidth="4" strokeLinecap="square" className="corner" />

      {/* Background Rupture & Void */}
      <polygon points="100,50 160,80 160,120 100,150" className="rupture" />
      <path d="M120,70 L160,80 L160,100 Z" className="cracks" fill="none"/>
      <path d="M140,110 L160,120 L130,135 Z" className="cracks" fill="none"/>

      {/* Wall Layer (Slightly Angled for Perspective) */}
      <rect x="75" y="45" width="20" height="110" className="wall-shadow" />
      <polygon points="40,50 95,50 95,150 40,150" className="wall-layer" />
      <rect x="65" y="50" width="3" height="100" className="wall-shadow" />

      {/* Observer Eye */}
      <ellipse cx="100" cy="100" rx="20" ry="12" className="observer-iris" />
      <circle cx="100" cy="100" r="6" className="observer-pupil" />

      {/* Text */}
      <text x="100" y="220" className="text">FIFTH WALL</text>
    </svg>
  );
}