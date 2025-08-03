import type { Card } from "@/components/ExpandableCards";
import Markdown, { type Components } from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { arta } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import remarkGfm from "remark-gfm";

const customMarkdownComponents: Components = {
  pre: ({ children }) => (
    <pre className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg overflow-x-auto text-xs sm:text-sm border dark:border-gray-700 whitespace-pre">
      {children}
    </pre>
  ),
  code: ({ className, children, ...rest }) => {
    const match = /language-(\w+)/.exec(className || "");
    return match ? (
      <SyntaxHighlighter style={arta} language={match[1]}>
        {String(children)}
      </SyntaxHighlighter>
    ) : (
      <code {...rest} className={className}>
        {children}
      </code>
    );
  },
};

const cards: Card[] = [
  {
    description:
      "Useful tips and tricks to master Jest and React Testing Library.",
    title: "How to Master Jest and React Testing Library",
    src: "src/assets/jest-post.png",
    ctaLink: "#",
    posted: "08/05/2025",
    readTime: "10 min",
    groups: ["Jest", "Testing"],
    content: () => {
      return (
        <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none">
          <Markdown remarkPlugins={[remarkGfm]}>
            {`# How to Master Jest and React Testing Library
This article provides useful tips and tricks to master Jest and React Testing Library, including best practices for writing effective tests in React applications.

## Key Features of Jest
- **Snapshot Testing**: Capture the rendered output of components and compare it to a reference snapshot.
- **Mocking**: Easily mock functions, modules, and timers to isolate tests.
- **Watch Mode**: Automatically re-run tests when files change, speeding up the development process.
- **Code Coverage**: Generate reports to see which parts of your code are tested and which are not.

## Key Features of React Testing Library
- **User-Centric Testing**: Focus on testing components from the user's perspective, ensuring that the UI behaves as expected.
- **Queries**: Use queries to find elements in the DOM based on their role, text, or label, making tests more readable and maintainable.
- **Event Simulation**: Simulate user interactions like clicks and form submissions to test component behavior.
- **Cleanup**: Automatically cleans up the DOM after each test, preventing memory leaks and ensuring a clean slate for each test run.

## Best Practices
- **Write Clear and Descriptive Tests**: Use descriptive names for tests to make it easy to understand their purpose.
- **Use Mocks Wisely**: Mock external dependencies only when necessary to isolate tests, but avoid over-mocking as it can lead to brittle tests.
- **Keep Tests Fast**: Write tests that run quickly to maintain a smooth development workflow.
- **Test User Interactions**: Focus on testing how users interact with your components rather than implementation details.

## Conclusion
Mastering Jest and React Testing Library requires practice and adherence to best practices. By focusing on user-centric testing and leveraging the powerful features of these tools, you can write effective tests that ensure the reliability and maintainability of your React applications.

Thank you for reading this article about how to master Jest and React Testing Library. I hope it has been helpful for you to better understand these important tools in the React ecosystem. If you have any questions or want to discuss more about the topic, feel free to reach out or leave a comment. See you next time!
`}
          </Markdown>
        </div>
      );
    },
  },
  {
    description:
      "A deep dive into the differences between Functions and Arrow Functions in JavaScript.",
    title: "Differences between Functions and Arrow Functions",
    src: "src/assets/arrowfunctions.svg",
    posted: "08/02/2025",
    readTime: "15 min",
    groups: ["Arrow Function", "Javascript", "Functions"],
    ctaLink: "#",
    content: () => {
      return (
        <div className="prose dark:prose-invert max-w-none">
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={customMarkdownComponents}
          >
            {`# Differences between Functions and Arrow Functions

1. **This**, scope behavior:
- **Functions**: The value of \`this\` is determined by the call context.
- **Arrow Functions**: The value of \`this\` is lexically inherited from the context.
\`\`\`typescript
class Person {
  name = "John";
      
  arrowFunction = () => {
    console.log(this.name); // "John"
  };

  regularFunction() {
    console.log(this.name); 
  }
}
const person = new Person();
person.arrowFunction(); // "John"
person.regularFunction(); // undefined
\`\`\`

2. **Arguments**:
- **Functions**: Have the \`arguments\` object, which contains all passed arguments.
- **Arrow Functions**: Do not have the \`arguments\` object.
\`\`\`typescript
function regularFunction() {
  console.log(arguments); 
}

const arrowFunction = () => {
  console.log(arguments);
};

regularFunction(1, 2, 3);
arrowFunction(1, 2, 3); 
// ReferenceError
\`\`\`

3. **Constructor**:
- **Functions**: Can be used as constructors with the \`new\` keyword.
- **Arrow Functions**: Cannot be used as constructors and will throw an error if used with \`new\`.
\`\`\`typescript
function RegularFunction() {
  this.value = "I am a regular function";
}

const arrowFunction = () => {
  this.value = "I am an arrow function";
};

const instance1 = new RegularFunction();
console.log(instance1.value); 
// "I am a regular function"
const instance2 = new arrowFunction(); 
// TypeError: arrowFunction is not a constructor
\`\`\`

4. **Hoisting**:
- **Functions**: Are hoisted and can be called before being declared.
- **Arrow Functions**: Are not hoisted and must be declared before being called.
\`\`\`ts
console.log(hoistedFunction()); 
// "I am hoisted"

function hoistedFunction() {
  return "I am hoisted";
}

console.log(arrowFunction());
// Before declaration error

const arrowFunction = () => {
  return "I am not hoisted";
};
\`\`\`

Thank you for reading this article about the differences between functions and arrow functions in JavaScript. I hope it has been helpful for you to better understand these important concepts in the language. If you have any questions or want to discuss more about the topic, feel free to reach out or leave a comment. See you next time!
`}
          </Markdown>
        </div>
      );
    },
  },
  {
    description: "How optimize your Typescript code with Object Mapping.",
    title: "Object Mapping",
    src: "src/assets/objectmapping.png",
    posted: "08/12/2025",
    readTime: "10 min",
    groups: ["Typescript", "Tips", "Object Mapping"],
    ctaLink: "#",
    content: () => {
      return (
        <div className="prose dark:prose-invert max-w-none">
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={customMarkdownComponents}
          >
            {`# Object Mapping in TypeScript
Object mapping is a powerful feature in TypeScript that allows you to transform and manipulate objects in a type-safe manner. It enables you to create new objects based on existing ones while ensuring that the types are preserved and correctly inferred.

## Key Features of Object Mapping
- **Type Safety**: TypeScript ensures that the properties of the mapped object match the expected types, reducing runtime errors.
- **Readability**: Object mapping makes your code more readable and maintainable by clearly defining
- **Open-Closed Principle**: You can easily extend the mapping logic without modifying existing code, adhering to the open-closed principle of software design.

## Bad Example
\`\`\`typescript
type UserRole = 'ADMIN' | 'CUSTOMER' | 'GUEST';

function getPermissions(role: UserRole): string[] {
  switch (role) {
    case 'ADMIN':
      return ['read', 'write', 'delete', 'update'];
    case 'CUSTOMER':
      return ['read', 'write'];
    case 'GUEST':
      return ['read'];
    default:
      return [];
  }
} 
\`\`\`

## Example of Object Mapping
\`\`\`typescript
type UserRole = 'ADMIN' | 'CUSTOMER' | 'GUEST';

const USER_PERMISSIONS: 
  Record<UserRole, string[]> 
= {
    ADMIN: ['read', 'write', 'delete', 'update'],
    CUSTOMER: ['read', 'write'],
    GUEST: ['read'],
};

function getPermissions(role: UserRole): string[] {
    return USER_PERMISSIONS[role];
}

getPermissions('ADMIN') 
// ['read', 'write', 'delete', 'update']
\`\`\`

Thanks for reading this article about Object Mapping in TypeScript. I hope it has been helpful for you to better understand this powerful feature of the language. If you have any questions or want to discuss more about the topic, feel free to reach out or leave a comment. See you next time!
          `}
          </Markdown>
        </div>
      );
    },
  },
];

export { cards };
