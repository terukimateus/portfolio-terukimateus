import { cn } from "@/lib/utils";
import { Spotlight } from "../Spotlight";
import { motion } from "motion/react";
import HoverButtonGradient from "../HoverButtonGradient";

type GridBackgroundProps = {
  title: string;
};

function GridBackgroundDemo({ title }: GridBackgroundProps) {
  return (
    <section
      id="home"
      className="relative flex md:h-[50rem] h-screen w-full items-center justify-center bg-white dark:bg-background overflow-hidden"
    >
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-background"></div>
      <Spotlight />
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="w-[90%] duration-[0.6] ease-out flex flex-col items-center gap-4 z-20"
      >
        <div className="flex items-center md:gap-4 flex-wrap justify-center">
          <span className="text-5xl sm:text-7xl font-regular text-foreground">
            Hello, I'm
          </span>
          <span className="relative bg-gradient-to-l from-blue-800 to-blue-300 text-center bg-clip-text text-5xl font-bold text-transparent sm:text-7xl">
            {title}
          </span>
        </div>
        <span className="z-20 text-md text-gray-500 dark:text-gray-400 max-w-lg text-center">
          Passionate about building modern and scalable web applications using
          Typescript. Strong focus on clean architecture, code quality, and
          continuous improvement.
        </span>
        <HoverButtonGradient
          as="button"
          onClick={() => {
            window.location.href = "#contact";
          }}
          containerClassName="rounded-full"
          className="flex items-center space-x-2 !cursor-pointer"
        >
          <span className="text-md">Get in Touch</span>
        </HoverButtonGradient>
      </motion.div>
    </section>
  );
}

export default GridBackgroundDemo;
