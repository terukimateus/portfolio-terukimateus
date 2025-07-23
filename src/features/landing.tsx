import GridBackgroundDemo from "@/components/GridBackground";
import Technologies from "./heros/Technologies";
import { GlowingCards } from "@/components/GlowingCard";
import Icon from "@/components/Icon";
import NavbarFeat from "@/components/Navbar";
import GlowingButton from "@/components/GlowingButton";
import CodeBlock from "@/components/Codeblock";

const BR_DOCS_CODE = `import { Cpf, Cnpj } from "br-docs";

Cpf.isValid("123.456.789-09"); // true
Cnpj.format("11222333000181"); // '11.222.333/0001-81'`;

const cards = [
  {
    area: "md:[grid-area:3/1/1/13]",
    title: "BR Docs",
    cover: (
      <CodeBlock
        language="typescript"
        filename="br-docs.ts"
        code={BR_DOCS_CODE}
      />
    ),
    extra: (
      <div className="flex gap-2">
        <GlowingButton
          icon={<Icon family="Lucide" name="LuGithub" size={18} />}
          href=""
        >
          View on GitHub
        </GlowingButton>
        <GlowingButton
          icon={<Icon family="Lucide" name="LuLink" size={18} />}
          href="https://br-docs.vercel.app/"
          target="_blank"
        >
          Package
        </GlowingButton>
      </div>
    ),
    description:
      "Open-source package for formatting, validating, and generating Brazilian documents.",
  },
  {
    icon: <Icon family="Lucide" name="LuShoppingBag" />,
    area: "md:[grid-area:7/1/3/8]",
    title: "D'amore Boutique",
    extra: (
      <div className="flex flex-wrap gap-2">
        <GlowingButton
          icon={<Icon family="Lucide" name="LuGithub" size={18} />}
          href=""
        >
          View on GitHub
        </GlowingButton>
        <GlowingButton
          icon={<Icon family="Lucide" name="LuLink" size={18} />}
          href="https://damore-boutique.vercel.app/"
          target="_blank"
        >
          Website
        </GlowingButton>
      </div>
    ),
    description: "Institutional website for a fashion boutique.",
  },
  {
    icon: <Icon family="Lucide" name="LuVolleyball" />,
    area: "md:[grid-area:7/8/3/13]",
    title: "Rent a Court",
    extra: (
      <div className="flex flex-wrap gap-2">
        <GlowingButton
          icon={<Icon family="Lucide" name="LuGithub" size={18} />}
          href=""
        >
          View on GitHub
        </GlowingButton>
        <GlowingButton
          icon={<Icon family="Lucide" name="LuLink" size={18} />}
          href="https://rent-a-court.vercel.app/"
          target="_blank"
        >
          Website
        </GlowingButton>
      </div>
    ),
    description: "Platform for renting sports courts, with a focus on tennis.",
  },
];

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <NavbarFeat />
      <GridBackgroundDemo title="Mateus Teruki" />
      <div className="flex my-10 md:my-14 flex-col items-center justify-center gap-10 p-6">
        <span className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-foreground">
          Some projects I have worked on
        </span>
        <GlowingCards cards={cards} />
      </div>
      <Technologies />
    </div>
  );
};

export default LandingPage;
