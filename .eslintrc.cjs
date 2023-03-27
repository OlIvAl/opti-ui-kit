module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "prettier",
    "react-hooks",
    "sonarjs",
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "plugin:sonarjs/recommended",
    "plugin:storybook/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "tsconfig.json",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "prettier/prettier": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-useless-constructor": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/unbound-method": "off",
    curly: "error",
    "prefer-template": "error",
    "max-classes-per-file": "error",
    eqeqeq: "error",
    "max-lines": ["error", 200],
    "max-lines-per-function": "error",
    "max-nested-callbacks": "error",
    "no-else-return": "error",
    // "no-confusing-arrow": "error",
    "no-lonely-if": "error",
    "no-new-wrappers": "error",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-unused-private-class-members": "error",
    "import/prefer-default-export": "off",
    "@typescript-eslint/consistent-type-exports": "warn",
    "@typescript-eslint/consistent-type-imports": "warn",
    "@typescript-eslint/method-signature-style": ["warn", "method"],
    "@typescript-eslint/member-delimiter-style": "warn",
    /*"@typescript-eslint/naming-convention": [
      "error",
      { "selector": "variableLike", "format": ["camelCase"] }
    ],*/
    "@typescript-eslint/ban-ts-comment": [
      "error",
      { "ts-expect-error": "allow-with-description" },
    ],
    "padding-line-between-statements": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/member-ordering": [
      "warn",
      {
        "default": [
          // Index signature
          "signature",
          "call-signature",

          // Fields
          "public-static-field",
          "static-field",
          "public-decorated-field",
          "decorated-field",
          "public-instance-field",
          "public-field",
          "instance-field",
          "field",
          "public-abstract-field",
          "abstract-field",

          "public-static-get",
          "static-get",
          "public-get",
          "public-decorated-get",
          "public-instance-get",
          "public-abstract-get",
          "decorated-get",
          "instance-get",
          "get",
          "abstract-get",

          "public-static-set",
          "public-decorated-set",
          "decorated-set",
          "static-set",
          "public-instance-set",
          "public-set",
          "instance-set",
          "set",
          "public-abstract-set",
          "abstract-set",

          "protected-static-field",
          "protected-decorated-field",
          "protected-instance-field",
          "protected-field",
          "protected-abstract-field",

          "protected-static-get",
          "protected-decorated-get",
          "protected-get",
          "protected-abstract-get",

          "protected-static-set",
          "protected-decorated-set",
          "protected-instance-set",
          "protected-set",
          "protected-abstract-set",

          "private-static-field",
          "#private-static-field",
          "private-decorated-field",
          "private-instance-field",
          "#private-instance-field",
          "private-field",
          "#private-field",

          "private-static-get",
          "#private-static-get",
          "protected-instance-get",
          "private-decorated-get",
          "private-instance-get",
          "#private-instance-get",
          "private-get",
          "#private-get",

          "private-static-set",
          "#private-static-set",
          "private-decorated-set",
          "private-instance-set",
          "#private-instance-set",
          "private-set",
          "#private-set",

          // Static initialization
          "static-initialization",

          // Constructors
          "public-constructor",
          "protected-constructor",
          "private-constructor",

          "constructor",

          // Methods
          "public-static-method",
          "static-method",
          "public-decorated-method",
          "decorated-method",
          "public-method",
          "public-instance-method",
          "instance-method",
          "method",
          "public-abstract-method",
          "abstract-method",

          "protected-static-method",
          "protected-decorated-method",
          "protected-instance-method",
          "protected-method",
          "protected-abstract-method",

          "private-static-method",
          "#private-static-method",
          "private-decorated-method",
          "private-instance-method",
          "private-method",
          "#private-instance-method",
          "#private-method",
        ]
      }
    ],
    "@typescript-eslint/padding-line-between-statements": [
      "warn",
      {
        blankLine: "always",
        prev: "*",
        next: ["interface", "type"],
      },
      {
        blankLine: "any",
        prev: ["interface", "type"],
        next: "*",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "return"
      },
      {
        blankLine: "always",
        prev: ["const", "let"],
        next: "block-like",
      },
      {
        blankLine: "always",
        prev: ["const", "let"],
        next: "*",
      },
      {
        blankLine: "any",
        prev: ["const", "let"],
        next: ["const", "let"],
      },
      {
        blankLine: "always",
        prev: ["if", "for", "while", "switch"],
        next: "*",
      },
      {
        blankLine: "any",
        prev: ["if", "for", "while", "switch"],
        next: ["if", "for", "while", "switch"],
      },
      {
        blankLine: "always",
        prev: "*",
        next: "break"
      },
      {
        blankLine: "never",
        prev: "*",
        next: ["case", "default"]
      },
      {
        blankLine: "always",
        prev: "*",
        next: "throw"
      },
      {
        blankLine: "always",
        prev: "import",
        next: "*"
      },
      {
        blankLine: "any",
        prev: "import",
        next: "import"
      },
      {
        blankLine: "always",
        prev: "*",
        next: "export"
      },
    ],
    "react/jsx-curly-brace-presence": ["error", "never"],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-curly-spacing": [
      "error",
      {
        when: "never",
        children: true,
      },
    ],
    "react/jsx-pascal-case": "error",
    "react/jsx-tag-spacing": ["warn", { beforeClosing: "allow" }],
    "react/no-multi-comp": "error",
    // "react/boolean-prop-naming": "warn",
    "react/destructuring-assignment": [
      "warn",
      "always",
      { destructureInSignature: "always" },
    ],
    "react/jsx-boolean-value": ["error", "always"],
    // "react/jsx-no-leaked-render": ["error"],
    "react/jsx-props-no-spreading": "error",
    "react/no-array-index-key": "error",
    "react-hooks/exhaustive-deps": "off",
  },
  overrides: [
    {
      files: ["**/*.tsx", "**/styled.ts"],
      rules: {
        "max-lines-per-function": ["error", 200],
      },
    },
    {
      files: ["**/__fixtures__/**"],
      rules: {
        "max-lines": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "sonarjs/no-duplicate-string": "off",
      },
    },
    {
      files: ["**/**/styled.ts"],
      rules: {
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
      },
    },
  ],
};
