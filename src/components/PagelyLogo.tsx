export const PagelyLogo = () => (
  <div className="inline-flex items-center gap-2">
    {/* SVG mark: a stylised chain-link / page "P" */}
    <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 shadow-md shadow-purple-900/40">
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* top link */}
        <rect x="4" y="3" width="14" height="4" rx="2" fill="white" />
        {/* middle link – offset right to imply chain */}
        <rect
          x="7"
          y="9"
          width="11"
          height="4"
          rx="2"
          fill="white"
          fillOpacity="0.85"
        />
        {/* bottom link */}
        <rect
          x="4"
          y="15"
          width="14"
          height="4"
          rx="2"
          fill="white"
          fillOpacity="0.7"
        />
      </svg>
    </span>
    <span className="text-lg font-bold tracking-tight text-white">Pagely</span>
  </div>
);
