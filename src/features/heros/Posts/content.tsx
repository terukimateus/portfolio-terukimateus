import type { Card } from "@/components/ExpandableCards";
import Markdown from "react-markdown";

const cards: Card[] = [
  {
    description:
      "Useful tips and tricks to master Jest and React Testing Library.",
    title: "How masterize Jest and React Testing Library",
    src: "src/assets/jest-post.png",
    ctaLink: "https://ui.aceternity.com/templates",
    posted: "12/05/2025",
    readTime: "10 min",
    groups: ["Performance", "Testing"],
    content: () => {
      return <Markdown></Markdown>;
    },
  },
  {
    description:
      "A comprehensive guide to mastering React Testing Library with practical examples.",
    title: "Mastering React Testing Library",
    src: "src/assets/jest-post.png",
    posted: "12/05/2025",
    readTime: "10 min",
    groups: ["Testing", "React"],
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <Markdown>
          {`# Título

Texto com **negrito**, _itálico_ e [link](https://vitejs.dev).

\`\`\`ts
const hello = "world"
\`\`\`

- Lista 1
- Lista 2
- Lista 3

- Lista 4
- Lista 5

Você pode usar \`inline code\` dentro do texto.
## Subtítulo
\`\`\`ts
const hello = "world"
\`\`\`
`}
        </Markdown>
      );
    },
  },
  {
    description:
      "A comprehensive guide to mastering React Testing Library with practical examples.",
    title: "Object assign",
    src: "src/assets/jest-post.png",
    posted: "12/05/2025",
    readTime: "10 min",
    groups: ["Testing", "React"],
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          This article provides a comprehensive guide to mastering React Testing
          Library, including practical examples and best practices for writing
          effective tests in React applications.
        </p>
      );
    },
  },
];

export { cards };
