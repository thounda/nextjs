// tailwind.config.ts

import type { Config } from "tailwindcss";
// NOTE: We keep 'require' but we'll use a type-safe approach for the function arguments.
const plugin = require("tailwindcss/plugin");

// Define a type for the arguments expected by the plugin function
type PluginApi = {
  addBase: (styles: Record<string, any>) => void;
  addComponents: (styles: Record<string, any>) => void;
  addUtilities: (
    utilities: Record<string, any>,
    options?: Record<string, any>
  ) => void;
  // We only need the arguments you actually use: addBase and theme
  theme: (path: string, defaultValue?: any) => any;
  config: (path: string, defaultValue?: any) => any;
  // ... other properties of the Plugin API if needed
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    // ⬇️ FIX: Apply the types directly to the function arguments
    plugin(function ({ addBase, theme }: PluginApi) {
      addBase({
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });
    }),
  ],
};
export default config;
