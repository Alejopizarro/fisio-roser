const Waves = () => {
  return (
    <svg
      width="100%"
      height="100%"
      id="svg"
      viewBox="0 0 1440 390"
      xmlns="http://www.w3.org/2000/svg"
      className="transition duration-300 ease-in-out delay-150"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stopColor="#F78DA7"></stop>
          <stop offset="95%" stopColor="#9900ef"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,400 L 0,100 C 142.64285714285714,100.10714285714286 285.2857142857143,100.21428571428571 391,93 C 496.7142857142857,85.78571428571429 565.4999999999999,71.25 665,69 C 764.5000000000001,66.75 894.7142857142858,76.78571428571429 1029,84 C 1163.2857142857142,91.21428571428571 1301.642857142857,95.60714285714286 1440,100 L 1440,400 L 0,400 Z"
        stroke="none"
        strokeWidth="0"
        fill="url(#gradient)"
        fillOpacity="0.53"
        className="transition-all duration-300 ease-in-out delay-150 path-0"
      ></path>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stop-color="#F78DA7"></stop>
          <stop offset="95%" stop-color="#9900ef"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,400 L 0,233 C 144.82142857142858,251.96428571428572 289.64285714285717,270.92857142857144 398,267 C 506.35714285714283,263.07142857142856 578.25,236.25 682,216 C 785.75,195.75 921.3571428571429,182.07142857142856 1053,186 C 1184.642857142857,189.92857142857144 1312.3214285714284,211.46428571428572 1440,233 L 1440,400 L 0,400 Z"
        stroke="none"
        strokeWidth="0"
        fill="url(#gradient)"
        fillOpacity="1"
        className="transition-all duration-300 ease-in-out delay-150 path-1"
      ></path>
    </svg>
  );
};

export default Waves;
