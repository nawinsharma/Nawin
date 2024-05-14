import { LayoutWrapper } from "./components/LayoutWrapper";
import { HeroSection } from "./components/Hero";

export default function Home() {
  return (
    <>
      <div>
        <LayoutWrapper>
          <HeroSection />
        </LayoutWrapper>
      </div>
    </>
  );
}
