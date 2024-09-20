# Prettier ve ESLint Kullanım Kılavuzu

Bu kılavuz, Prettier ve ESLint'in nasıl kurulacağını ve kullanılacağını açıklamaktadır.

## Kurulum

### Adım 1: Prettier ve ESLint'i Projeye Dahil Etme

Öncelikle, Prettier ve ESLint'i proje bağımlılıkları olarak ekleyin:

```bash
npm install --save-dev prettier eslint
```

### Adım 2: Prettier ve ESLint Yapılandırma Dosyalarını Oluşturma

Proje kök dizininde `.prettierrc` ve `.eslintrc.json` dosyalarını oluşturun.

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
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "single"]
    }
}
```

## Kullanım

### Adım 3: Prettier ve ESLint Komutlarını Çalıştırma

Aşağıdaki komutları kullanarak Prettier ve ESLint'i çalıştırabilirsiniz:

#### Prettier

```bash
npx prettier --write .
```

#### ESLint

```bash
npx eslint .
```

### Adım 4: Prettier ve ESLint'i Git Hooklarına Entegre Etme

`husky` ve `lint-staged` kullanarak Prettier ve ESLint'i git hooklarına entegre edebilirsiniz:

```bash
npm install --save-dev husky lint-staged
```

`package.json` dosyasına aşağıdaki bölümü ekleyin:

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

Bu adımları takip ederek Prettier ve ESLint'i projenizde kullanabilirsiniz.