import GridBackgroundDemo from "@/components/GridBackground";
import Technologies from "./heros/Technologies";
import NavbarFeat from "@/components/Navbar";
import Projects from "./heros/Projects";
import Posts from "./heros/Posts";
import Footer from "./heros/Footer";

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <NavbarFeat />

      <GridBackgroundDemo title="Mateus Teruki" />

      <Projects />

      <Technologies />

      <Posts />

      <Footer />
    </div>
  );
};

export default LandingPage;
