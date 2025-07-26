import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

const Section = ({ children, className = undefined }: SectionProps) => {
  return (
    <div
      className={`${className} flex my-10 md:my-14 flex-col items-center justify-center gap-10 p-6`}
    >
      {children}
    </div>
  );
};

export default Section;
