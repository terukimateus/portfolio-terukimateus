import { GlowingCards } from "@/components/GlowingCard";
import BrDocsCard from "./components/BrDocsCard";
import DamoreCard from "./components/DamoreCard";
import RentCard from "./components/RentCard";
import Section from "@/components/Section";

const cards = [BrDocsCard, DamoreCard, RentCard];

const Projects = () => {
  return (
    <Section>
      <span className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-foreground">
        Some projects I have worked on
      </span>
      <GlowingCards cards={cards} />
    </Section>
  );
};

export default Projects;
