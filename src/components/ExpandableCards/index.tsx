import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import Icon from "../Icon";

export type Card = {
  title: string;
  description: string;
  src: string;
  ctaLink: string;
  readTime: string;
  posted: string;
  groups: string[];
  content: (() => React.ReactNode) | React.ReactNode;
};

type ExpandableCardProps = {
  cards: Card[];
};

function ExpandableCard({ cards }: ExpandableCardProps) {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null!);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-xs h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center z-[100] bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[700px]  h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-lg overflow-hidden"
            >
              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className="relative w-full h-48 overflow-hidden"
              >
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                    <span>{active.posted}</span>
                    <span>{active.readTime}</span>
                  </div>
                  <div className="flex items-center flex-wrap gap-2 justify-between">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-xl text-neutral-800 dark:text-neutral-200 text-left"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href={active.ctaLink}
                      target="_blank"
                      className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    >
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#CBE8FF_0%,#3988B2_50%,#CBE8FF_100%)]" />
                      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Read more
                      </span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3  xl:w-4/5">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col justify-between bg-card items-center rounded-md cursor-pointer border dark:border-neutral-700 overflow-hidden"
          >
            <motion.div
              layoutId={`image-${card.title}-${id}`}
              className="relative w-full h-48 overflow-hidden"
            >
              <img
                src={card.src}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                  <span>{card.posted}</span>
                  <span>{card.readTime}</span>
                </div>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-xl text-neutral-800 dark:text-neutral-200 text-left"
                >
                  {card.title}
                </motion.h3>
              </div>
            </motion.div>
            <div className="flex gap-4 py-8 px-5 w-full justify-between flex-col">
              <motion.p
                layoutId={`description-${card.description}-${id}`}
                className="text-muted-foreground text-left"
              >
                {card.description}
              </motion.p>
              <div className="flex items-center gap-2 flex-wrap">
                {card.groups.map((group) => (
                  <span
                    key={`${card.title}-${group}`}
                    className="text-xs bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 px-2.5 py-1.5 rounded-full"
                  >
                    {group}
                  </span>
                ))}
              </div>
              <div>
                <motion.button
                  layoutId={`button-${card.title}-${id}`}
                  className="text-sm rounded-full flex items-center gap-1 cursor-pointer"
                >
                  Read more
                  <Icon family="Lucide" name="LuArrowRight" size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

export default ExpandableCard;
