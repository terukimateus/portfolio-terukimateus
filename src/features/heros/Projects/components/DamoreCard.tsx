/* eslint-disable @typescript-eslint/ban-ts-comment */
import GlowingButton from "@/components/GlowingButton";
import Icon from "@/components/Icon";
import { cn } from "@/lib/utils";
import { animate, motion } from "motion/react";
import { useEffect } from "react";

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};

const Skeleton = () => {
  const scale = [1, 1.1, 1];

  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];

  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    animate(sequence, {
      // @ts-expect-error
      repeat: Infinity,
      repeatDelay: 1,
    });
  });

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row shrink-0 justify-center items-center gap-2">
        <Container className="h-8 w-8 circle-1">
          <Icon
            family="Lucide"
            name="LuCode"
            className="h-4 w-4 text-blue-400"
          />
        </Container>
        <Container className="h-12 w-12 circle-2">
          <Icon
            family="DevIcons"
            name="DiJavascript"
            className="h-6 w-6 text-yellow-200"
          />
        </Container>
        <Container className="circle-3">
          <Icon
            family="Lucide"
            name="LuShoppingBag"
            className="h-6 w-6 text-purple-400"
          />
        </Container>
        <Container className="h-12 w-12 circle-4">
          <Icon
            family="DevIcons"
            name="DiReact"
            className="h-6 w-6 text-blue-400"
          />
        </Container>
        <Container className="h-8 w-8 circle-5">
          <Icon
            family="DevIcons"
            name="DiGit"
            className="h-4 w-4 text-red-400"
          />
        </Container>
      </div>

      <div className="h-40 w-px absolute m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};

const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

const DamoreCard = {
  area: "md:[grid-area:7/1/2/6]",
  title: "D'amore Boutique",
  cover: <Skeleton />,
  extra: (
    <div className="flex flex-wrap gap-2">
      <GlowingButton
        icon={<Icon family="Lucide" name="LuLink" size={18} />}
        href="https://damoreboutique.com.br/"
        target="_blank"
      >
        Website
      </GlowingButton>
    </div>
  ),
  description:
    "Elegant institutional website for a luxury boutique with product showcase, brand story, and contact integration.",
};

export default DamoreCard;
