import { LayoutWrapper } from "./components/LayoutWrapper";
import { HeroSection } from "./components/Hero";
import { Projects } from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <div>
        <LayoutWrapper>
          <HeroSection />
          <Skills />
          <Projects />
        </LayoutWrapper>
      </div>
    </>
  );
}
