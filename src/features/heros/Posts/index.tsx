import ExpandableCard from "@/components/ExpandableCards";
import HoverButtonGradient from "@/components/HoverButtonGradient";
import Section from "@/components/Section";
import { cards } from "./content";
import { BackgroundBeams } from "@/components/BackgroundBeams";

const Posts = () => {
  return (
    <Section id="articles" className="relative">
      <span className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-foreground">
        Latest articles
      </span>
      <ExpandableCard cards={cards} />

      <HoverButtonGradient>
        <a
          href="https://ui.aceternity.com/templates"
          target="_blank"
          rel="noopener noreferrer"
          className="text-md font-normal"
        >
          Read more articles
        </a>
      </HoverButtonGradient>

      <BackgroundBeams />
    </Section>
  );
};

export default Posts;
