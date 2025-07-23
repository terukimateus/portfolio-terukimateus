import { GlowingEffect } from "@/components/ui/GlowingEffect";
import type { ReactNode } from "react";

type GlowingCardProps = {
  cards: GridItemProps[];
};

export function GlowingCards({ cards }: GlowingCardProps) {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-5 lg:gap-4 xl:max-h-[42rem] xl:w-2/3">
      {cards.map((card, index) => (
        <GridItem {...card} key={index} />
      ))}
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon?: ReactNode;
  title: string;
  description: ReactNode;
  cover?: ReactNode;
  extra?: ReactNode;
}

const GridItem = ({
  area,
  icon,
  title,
  extra,
  cover,
  description,
}: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            {icon && (
              <div className="w-fit rounded-lg border border-gray-600 p-2">
                {icon}
              </div>
            )}
            {cover}
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
              {extra}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
