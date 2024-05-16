import { LayoutWrapper } from "./components/LayoutWrapper";
import { HeroSection } from "./components/Hero";
import { Projects } from "./components/Projects";

export default function Home() {
  return (
    <>
      <div>
        <LayoutWrapper>
          <HeroSection />
          <Projects />
        </LayoutWrapper>
      </div>
    </>
  );
}
