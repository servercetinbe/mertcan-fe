# Prettier ve ESLint Kullanım Kılavuzu

This guide explains how to install and use Prettier and ESLint.

## Installation

### Step 1: Adding Prettier and ESLint to the Project

First, add Prettier and ESLint as project dependencies:

```bash
npm install --save-dev prettier eslint
```

### Step 2: Creating Prettier and ESLint Configuration Files

Create `.prettierrc` and `.eslintrc.json` files in the root directory of the project.

#### `.prettierrc`

```json
{
  "singleQuote": true,
  "trailingComma": "all"
}
```

#### `.eslintrc.json`

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "single"]
  }
}
```

## Usage

### Step 3: Running Prettier and ESLint Commands

You can run Prettier and ESLint using the following commands:

#### Prettier

```bash
npx prettier --write .
```

#### ESLint

```bash
npx eslint .
```

### Step 4: Integrating Prettier and ESLint into Git Hooks

You can integrate Prettier and ESLint into git hooks using `husky` and `lint-staged`:

```bash
npm install --save-dev husky lint-staged
```

Add the following section to the `package.json` file:

```json
"husky": {
    "hooks": {
        "pre-commit": "lint-staged"
    }
},
"lint-staged": {
    "*.{js,jsx,ts,tsx}": [
        "eslint --fix",
        "prettier --write"
    ]
}
```

By following these steps, you can use Prettier and ESLint in your project.
