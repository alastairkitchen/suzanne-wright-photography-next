import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const config = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Custom rules and settings
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
  },

  // Example: Customize Chakra UI imports optimization (this part is unrelated to ESLint itself)
  {
    settings: {
      chakra: {
        optimizePackageImports: ["@chakra-ui/react"],
      },
    },
  },
];

export default config;
