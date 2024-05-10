import { LayoutRouter } from "next/dist/server/app-render/entry-base";
import { LayoutWrapper } from "./components/LayoutWrapper";
import { HeroSection } from "./components/Hero";

export default function Home() {
  return (
    <>
      <div>
        <LayoutWrapper children={<HeroSection />
        } />
      </div>
    </>
  );
}
