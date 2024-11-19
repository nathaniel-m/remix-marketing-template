import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'white': '#FFF',
      'gray': '#CACACA',
      'gray-50': '#f7f7f7',
      'gray-100': '#e3e3e3',
      'gray-200': '#c8c8c8',
      'gray-300': '#a4a4a4',
      'gray-400': '#818181',
      'gray-500': '#666666',
      'gray-600': '#515151',
      'gray-700': '#3e3e3e',
      'gray-800': '#383838',
      'gray-900': '#313131',
      'gray-950': '#111111',
      'black': '#000',
      '50': '#eefdfd',
      '100': '#d3f8fa',
      '200': '#adf1f4',
      '300': '#74e5ec',
      '400': '#35cfdb',
      '500': '#19b3c1',
      '600': '#188fa2',
      '700': '#1a7384',
      '800': '#206574',
      '900': '#1d4f5c',
      '950': '#0e343e',
    },
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
