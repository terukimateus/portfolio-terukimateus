import Icon from "@/components/Icon";
import MovingTechs from "@/components/MovingTechs";

const icons = [
  <Icon
    family="DevIcons"
    name="DiReact"
    size={100}
    className="text-foreground opacity-40"
  />,
  <Icon
    family="DevIcons"
    name="DiPostgresql"
    size={100}
    className="text-foreground opacity-40"
  />,
  <Icon
    family="DevIcons"
    name="DiNodejsSmall"
    size={100}
    className="text-foreground opacity-40"
  />,
  <Icon
    family="DevIcons"
    name="DiGit"
    size={100}
    className="text-foreground opacity-40"
  />,
  <Icon
    family="DevIcons"
    name="DiDocker"
    size={100}
    className="text-foreground opacity-40"
  />,
  <Icon
    family="DevIcons"
    name="DiPython"
    size={100}
    className="text-foreground opacity-40"
  />,
  <Icon
    family="DevIcons"
    name="DiMongodb"
    size={100}
    className="text-foreground opacity-40"
  />,
];

const Technologies = () => (
  <div
    id="tech"
    className="my-10 md:my-14 gap-10 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
  >
    <span className="text-4xl text-transparent relative bg-gradient-to-l from-foreground to-neutral-500 text-center bg-clip-text font-bold">
      Technologies I work with
    </span>
    <MovingTechs items={icons} direction="left" speed="fast" />
  </div>
);

export default Technologies;
