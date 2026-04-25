import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["node_modules/**", ".next/**", "tsconfig.tsbuildinfo"],
  },
  ...tseslint.configs.recommended,
  {
    rules: {
      // Allow empty catch blocks (used intentionally in JSON.parse fallbacks)
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  }
);
