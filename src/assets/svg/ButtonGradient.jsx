const ButtonGradient = () => {
  return (
    <svg className="block" width={0} height={0} aria-hidden="true">
      <defs>
        {/* Left gradient - blue shades */}
        <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#00B7F3" /> {/* Light sky blue */}
          <stop offset="100%" stopColor="#0082CC" /> {/* Main blue */}
        </linearGradient>

        {/* Top gradient - full blue */}
        <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#00AAFF" /> {/* Light blue */}
          <stop offset="100%" stopColor="#0082CC" /> {/* Main blue */}
        </linearGradient>

        {/* Bottom gradient - blue */}
        <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#0096DD" /> {/* Bright blue */}
          <stop offset="100%" stopColor="#0082CC" /> {/* Main blue */}
        </linearGradient>

        {/* Right gradient - stronger orange accent */}
        <linearGradient id="btn-right" x1="100%" x2="5%" y1="100%" y2="5%">
          <stop offset="0%" stopColor="#f4a506" /> {/* Stronger orange at bottom-right */}
          <stop offset="50%" stopColor="#0082CC" /> {/* Main blue transition */}
          <stop offset="100%" stopColor="#00B7F3" /> {/* Light blue top-left */}
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ButtonGradient;
