import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/Layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 0px 4px 0px rgba(0, 0, 0, 0.12);",
        blur: "0px 4px 20px 0px #00000012",
        miniblur: "0px 4px 20px 0px rgba(0, 0, 0, 0.07)",
        blurblue: "5.64px 9.32px 27px 0px rgba(39, 75, 137, 0.12)",
        box: "0px 2.96px 4.78px 0px rgba(0, 0, 0, 0.07)",
        greenblur: " 8px 26px 45px 0px rgba(95, 193, 70, 0.25)",
        dropShadow: "0px 20px 24px 0px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        pattern: "url('/svg/pattern.svg')",
        greenring: "url('/svg/green_ring.svg')",
        bluering: "url('/svg/blue_ring.svg')",
        orangering: "url('/svg/orange_ring.svg')",
        court: "url('/svg/background.svg')",
      },
      colors: {
        brand: "#274B89",
        "brand-light": "#edf3fb",
        branded: "#FF4B3E",
        GRAY: "#929AA7",
        darkblue: "#274B89",
        lightgrey: "#929AA7",
        brown: "#FFB211",
        lightbrown: "#FFB2113D",
        dimgreen: "#39B54A",
        lightergreen: "#39B54A36",
        lightblue: "#274B89",
        skyblue: "#1569FA",
        input_color: "#E1EFFB",
        textcolor: "#3B3B3BB2",
      },
    },
  },
  plugins: [],
};
export default config;
