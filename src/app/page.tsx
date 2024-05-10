import { LayoutRouter } from "next/dist/server/app-render/entry-base";
import { LayoutWrapper } from "./components/LayoutWrapper";

export default function Home() {
  return (
   <>
   <div>
    <LayoutWrapper />
   </div>
   </>
  );
}
