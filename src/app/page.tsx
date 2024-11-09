import { LayoutWrapper } from "./components/LayoutWrapper";
import { HeroSection } from "./components/Hero";
import { Projects } from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { FloatingBar } from "./components/FloatingDock/FloatingBar"; // Adjust the path as necessary
// import OpenSource from "./components/ProofOfWork/OpenSource";

export default function Home() {
  return (
    <>
      <main className="relative flex justify-center overflow-x-hidden items-center flex-col mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <LayoutWrapper>
            <HeroSection />
            <Skills />
            <Projects />
            {/* <OpenSource /> */}
            <Contact />
          </LayoutWrapper>
        </div>
      </main>
      <FloatingBar />
    </>
  );
}
