import { defineConfig } from '@pandacss/dev';
import { globalStyle } from 'src/ui/globalStyle';
import { keyframes } from 'src/ui/keyframes';
import { tokens } from 'src/ui/tokens';
import { textStyles } from 'src/ui/tokens/textStyles';

export default defineConfig({
  globalCss: globalStyle,
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  presets: [],
  theme: {
    keyframes,
    tokens,
    textStyles,
  },
  outdir: 'styled-system',
});
