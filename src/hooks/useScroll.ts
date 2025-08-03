import { useAnimate, useInView } from "motion/react";
import { useEffect, useRef } from "react";

export const useScrollAnimation = () => {
  const [, animate] = useAnimate();
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView && ref.current) {
      animate(ref.current, "visible");
    }
  }, [animate, inView]);

  return { ref, inView, animate };
};
