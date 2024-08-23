"use client"; // indicates Client Component

// Import with next's dynamic import
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});
const Cursor = () => {
  return (
<AnimatedCursor
  innerSize={8}
  outerSize={30}
  innerScale={1}
  outerScale={1.7}
  outerAlpha={0}
  outerStyle={{
    border: '3px solid #fff'
  }}
  innerStyle={{
    backgroundColor: '#fff'
  }}
/>

  );
};

export default Cursor;
