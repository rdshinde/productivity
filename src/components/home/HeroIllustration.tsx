"use client";

export function HeroIllustration() {
  return (
    <div className="hero-illustration animate-float">
      <svg viewBox="0 0 500 400" className="w-full h-auto max-w-lg mx-auto">
        {/* Productivity Workspace Illustration */}

        {/* Background Circle */}
        <circle
          cx="250"
          cy="200"
          r="180"
          fill="rgba(255, 255, 255, 0.1)"
          className="animate-pulse-slow"
        />

        {/* Desk */}
        <rect
          x="100"
          y="280"
          width="300"
          height="15"
          rx="7"
          fill="#ffffff"
          opacity="0.9"
        />

        {/* Monitor */}
        <rect
          x="180"
          y="180"
          width="140"
          height="100"
          rx="8"
          fill="#ffffff"
          className="animate-float-delayed"
        />
        <rect
          x="190"
          y="190"
          width="120"
          height="80"
          rx="4"
          fill="#00809D"
        />

        {/* Monitor Content - Task Board */}
        <rect
          x="200"
          y="200"
          width="25"
          height="4"
          rx="2"
          fill="#00B4D8"
        />
        <rect
          x="200"
          y="208"
          width="35"
          height="4"
          rx="2"
          fill="#0099CC"
        />
        <rect
          x="200"
          y="216"
          width="20"
          height="4"
          rx="2"
          fill="#00B4D8"
        />

        <rect
          x="240"
          y="200"
          width="30"
          height="4"
          rx="2"
          fill="#FF6B35"
        />
        <rect
          x="240"
          y="208"
          width="25"
          height="4"
          rx="2"
          fill="#FF8C69"
        />

        <rect
          x="280"
          y="200"
          width="28"
          height="4"
          rx="2"
          fill="#00B4D8"
        />
        <rect
          x="280"
          y="208"
          width="32"
          height="4"
          rx="2"
          fill="#0099CC"
        />

        {/* Laptop */}
        <ellipse
          cx="150"
          cy="260"
          rx="40"
          ry="25"
          fill="#ffffff"
          className="animate-float"
        />
        <rect
          x="125"
          y="245"
          width="50"
          height="30"
          rx="3"
          fill="#005577"
        />
        <rect
          x="130"
          y="250"
          width="40"
          height="20"
          rx="2"
          fill="#00809D"
        />

        {/* Coffee Cup */}
        <ellipse
          cx="350"
          cy="260"
          rx="15"
          ry="20"
          fill="#ffffff"
          className="animate-bounce-slow"
        />
        <ellipse cx="350" cy="250" rx="12" ry="8" fill="#FF6B35" />
        <path
          d="M 365 255 Q 375 255 375 265"
          stroke="#ffffff"
          strokeWidth="3"
          fill="none"
        />

        {/* Floating Notes/Documents */}
        <g className="floating-element">
          <rect
            x="80"
            y="120"
            width="60"
            height="80"
            rx="5"
            fill="#ffffff"
            opacity="0.9"
          />
          <rect
            x="90"
            y="135"
            width="40"
            height="3"
            rx="1.5"
            fill="#00809D"
          />
          <rect
            x="90"
            y="145"
            width="35"
            height="3"
            rx="1.5"
            fill="#00B4D8"
          />
          <rect
            x="90"
            y="155"
            width="30"
            height="3"
            rx="1.5"
            fill="#0099CC"
          />
          <circle cx="95" cy="170" r="3" fill="#FF6B35" />
          <circle cx="105" cy="170" r="3" fill="#00B4D8" />
          <circle cx="115" cy="170" r="3" fill="#0099CC" />
        </g>

        {/* Floating Calendar */}
        <g className="floating-element">
          <rect
            x="360"
            y="100"
            width="70"
            height="70"
            rx="5"
            fill="#ffffff"
            opacity="0.9"
          />
          <rect
            x="365"
            y="105"
            width="60"
            height="15"
            rx="2"
            fill="#00809D"
          />
          <circle cx="375" cy="130" r="4" fill="#FF6B35" />
          <circle cx="390" cy="130" r="4" fill="#00B4D8" />
          <circle cx="405" cy="130" r="4" fill="#0099CC" />
          <circle cx="375" cy="145" r="4" fill="#00B4D8" />
          <circle cx="390" cy="145" r="4" fill="#0099CC" />
          <circle cx="405" cy="145" r="4" fill="#FF6B35" />
          <circle cx="375" cy="160" r="4" fill="#0099CC" />
          <circle cx="390" cy="160" r="4" fill="#FF6B35" />
        </g>

        {/* AI Brain/Network */}
        <g className="animate-pulse-slow">
          <circle
            cx="250"
            cy="80"
            r="25"
            fill="rgba(255, 255, 255, 0.2)"
          />
          <circle cx="250" cy="80" r="15" fill="#00B4D8" opacity="0.8" />
          <circle cx="220" cy="100" r="8" fill="#0099CC" opacity="0.6" />
          <circle cx="280" cy="100" r="8" fill="#FF6B35" opacity="0.6" />
          <circle cx="230" cy="60" r="6" fill="#00B4D8" opacity="0.7" />
          <circle cx="270" cy="60" r="6" fill="#0099CC" opacity="0.7" />

          {/* Connecting Lines */}
          <line
            x1="250"
            y1="80"
            x2="220"
            y2="100"
            stroke="#ffffff"
            strokeWidth="2"
            opacity="0.5"
          />
          <line
            x1="250"
            y1="80"
            x2="280"
            y2="100"
            stroke="#ffffff"
            strokeWidth="2"
            opacity="0.5"
          />
          <line
            x1="250"
            y1="80"
            x2="230"
            y2="60"
            stroke="#ffffff"
            strokeWidth="2"
            opacity="0.5"
          />
          <line
            x1="250"
            y1="80"
            x2="270"
            y2="60"
            stroke="#ffffff"
            strokeWidth="2"
            opacity="0.5"
          />
        </g>

        {/* Productivity Arrows */}
        <g className="animate-float">
          <path
            d="M 50 180 Q 100 160 150 180"
            stroke="#ffffff"
            strokeWidth="3"
            fill="none"
            opacity="0.6"
          />
          <polygon
            points="145,175 155,180 145,185"
            fill="#ffffff"
            opacity="0.6"
          />
        </g>

        <g className="animate-float-delayed">
          <path
            d="M 450 180 Q 400 160 350 180"
            stroke="#ffffff"
            strokeWidth="3"
            fill="none"
            opacity="0.6"
          />
          <polygon
            points="355,175 345,180 355,185"
            fill="#ffffff"
            opacity="0.6"
          />
        </g>

        {/* Sparkles/Stars */}
        <g className="animate-pulse-slow">
          <polygon
            points="120,50 125,60 135,60 127,68 130,78 120,72 110,78 113,68 105,60 115,60"
            fill="#ffffff"
            opacity="0.7"
          />
          <polygon
            points="380,40 383,47 390,47 385,52 387,59 380,55 373,59 375,52 370,47 377,47"
            fill="#ffffff"
            opacity="0.6"
          />
          <polygon
            points="420,180 423,187 430,187 425,192 427,199 420,195 413,199 415,192 410,187 417,187"
            fill="#ffffff"
            opacity="0.5"
          />
          <polygon
            points="60,220 63,227 70,227 65,232 67,239 60,235 53,239 55,232 50,227 57,227"
            fill="#ffffff"
            opacity="0.6"
          />
        </g>
      </svg>
    </div>
  );
} 