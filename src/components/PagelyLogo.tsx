import type { FC } from "react";

type PagelyLogoProps = {
  className?: string;
};

const PagelyLogo: FC<PagelyLogoProps> = ({ className = "" }) => {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`.trim()}>
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 shadow-md shadow-purple-900/40">
        <span className="h-3.5 w-3.5 rounded-sm border-2 border-white" />
      </span>
      <span className="text-lg font-bold tracking-tight text-white">Pagely</span>
    </div>
  );
};

export default PagelyLogo;

