import Script from "next/script";
import React from "react";

// Define the custom widget-web-component as part of the global JSX
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "widget-web-component": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        theme: string;
        username: string;
      };
    }
  }
}

const OpenSource: React.FC = () => {
  return (
    <>
      {/* Load the widget script */}
     <div id="opensource" className="mt-5">
     <Script async src="https://custom-web-widget.vercel.app/widget.umd.js" />
      
      {/* Use the widget component */}
      <widget-web-component theme="dark" username="NawinKumarSharma" />
     </div>
    </>
  );
};

export default OpenSource;
