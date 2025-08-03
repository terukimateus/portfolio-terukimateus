import type { ReactNode } from "react";
import { motion } from "motion/react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

const Section = ({ children, id, className = undefined }: SectionProps) => {
  return (
    <motion.section
      id={id}
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      }}
      viewport={{ once: true }}
      className={`${className} flex my-10 md:my-14 flex-col items-center justify-center gap-10 p-6`}
    >
      {children}
    </motion.section>
  );
};

export default Section;
