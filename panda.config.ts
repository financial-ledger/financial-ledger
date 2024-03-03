import { defineConfig } from "@pandacss/dev";
import { globalStyle } from "src/ui/globalStyle";
import { keyframes } from "src/ui/keyframes";
import { tokens } from "src/ui/tokens";

export default defineConfig({
  globalCss: globalStyle,
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    keyframes,
    tokens,
  },
  outdir: "styled-system",
});
