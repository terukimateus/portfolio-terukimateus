import type { ReactNode } from "react";

type GlowingButtonProps = {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
};

const GlowingButton = ({
  children,
  icon,
  className = "",
  onClick,
  href,
  target = "_blank",
}: GlowingButtonProps) => {
  const baseClasses =
    "bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-8 text-white inline-block";
  const combinedClasses = `${baseClasses} ${className}`;

  const content = (
    <>
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      </span>
      <div className="relative flex space-x-2 gap-1 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
        {icon}
        {children}
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-blue-400/0 via-blue-400/80 to-blue-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  );
};

export default GlowingButton;
