import { FlatCompat } from "@eslint/eslintrc";
import reactThree from '@react-three/eslint-plugin';
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    plugins: {
       'react-three': reactThree,
    },
    rules: {
       "react/no-unknown-property": "off",
    },
  }
];

export default eslintConfig;
