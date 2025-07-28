import Icon from "@/components/Icon";

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="flex justify-center items-center flex-col gap-4 mx-auto text-center">
        <p className="text-sm">
          Build with ❤️ by Mateus Teruki. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/terukimateus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon family="Lucide" name="LuLinkedin" size={18} />
          </a>
          <a
            href="https://www.github.com/terukimateus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon family="Lucide" name="LuGithub" size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
