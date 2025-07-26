import CodeBlock from "@/components/Codeblock";
import GlowingButton from "@/components/GlowingButton";
import Icon from "@/components/Icon";

const BR_DOCS_CODE = `import { Cpf, Cnpj } from "br-docs";

Cpf.isValid("123.456.789-09"); // true
Cnpj.format("11222333000181"); // '11.222.333/0001-81'

Cep.isValid("01234-567"); // true
Cep.format("01234567"); // '01234-567'`;

const brDocsCard = {
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
    <div className="flex flex-wrap gap-2">
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
    "NPM Open-Source package for Brazilian document validation and formatting (CPF, CNPJ, CEP..) with TypeScript support.",
};

export default brDocsCard;
