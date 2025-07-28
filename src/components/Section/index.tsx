import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

const Section = ({ children, id, className = undefined }: SectionProps) => {
  return (
    <section
      id={id}
      className={`${className} flex my-10 md:my-14 flex-col items-center justify-center gap-10 p-6`}
    >
      {children}
    </section>
  );
};

export default Section;
