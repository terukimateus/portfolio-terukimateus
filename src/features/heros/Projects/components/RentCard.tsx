import GlowingButton from "@/components/GlowingButton";
import Icon from "@/components/Icon";
import RentCourtImg from "/assets/rentacourt.png";

const RentCard = {
  area: "md:[grid-area:7/6/2/13]",
  title: "Rent a Court",
  cover: (
    <div className="w-full overflow-hidden p-1.5 rounded-2xl border bg-card border-gray-300 dark:border-gray-700">
      <img
        src={RentCourtImg}
        alt="Rent a Court"
        className="w-full rounded-xl object-cover"
      />
    </div>
  ),
  extra: (
    <div className="flex flex-wrap gap-2">
      <GlowingButton
        icon={<Icon family="Lucide" name="LuGithub" size={18} />}
        href="https://github.com/terukimateus/agendamento-quadra"
      >
        View on GitHub
      </GlowingButton>
      <GlowingButton
        icon={<Icon family="Lucide" name="LuLink" size={18} />}
        href="https://agendamento-quadras-cliente.vercel.app/"
        target="_blank"
      >
        Website
      </GlowingButton>
    </div>
  ),
  description:
    "Tennis court booking platform with real-time availability, payment integration, and court management system.",
};

export default RentCard;
