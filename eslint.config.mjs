import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',  // Enforces no usage of `any`
      'react/react-in-jsx-scope': 'off',  // Disable react/react-in-jsx-scope rule (Next.js automatically imports React)
    },
    plugins: ["@typescript-eslint"],
    parserOptions: {
      project: './tsconfig.json', // Path to TypeScript config
    },
  },
];

export default eslintConfig;
