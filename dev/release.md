
This package provides shared configuration for ESLint (JavaScript) and PHP_CodeSniffer (PHP) to ensure consistent coding standards across projects.

## 📦 Contents

- **ESLint Config**: `eslint.config.mjs` (ESLint 9+ compatible)
- **PHPCS Config**: `phpcs.xml` (WordPress Coding Standards)



## 🛠 Development Commands

| Command | Description |
|---------|-------------|
| `npm run lint:js` | Lint JavaScript files. |
| `npm run lint:js:fix` | Fix JavaScript linting errors automatically. |
| `npm run lint:php` | Lint PHP files. |
| `npm run lint:php:fix` | Fix PHP linting errors automatically. |
| `npm run lint:all` | Run both JS and PHP linters. |
| `npm run lint:all:report` | Generate JSON/Text reports (requires `dev/reports/` scripts). |

---

## 📦 Publishing the Package

You do **not** need to run GitHub Actions to publish; you can publish directly from your local machine.

### Prerequisites
1. You must have an account on npmjs.com.
2. You must be logged in locally:
   ```bash
   npm login
   ```

### Publishing Individual Packages

#### 1. ESLint Config Package
```bash
cd packages/eslint-config

# Update version  # or minor/major
npm version patch

# First publish (sets public access)
npm publish --access public

# Subsequent publishes
npm publish

# Verify publication
npm view @holithemes/eslint-config
```

#### 2. PHPCS Config Package
```bash
cd packages/phpcs-config

# Update version
npm version patch

# First publish (one time only)
npm publish --access public

# Subsequent publishes
npm publish

# Verify publication
npm view @holithemes/phpcs-config
```


# the commandes to install
```bash
npm install --save-dev @holithemes/eslint-config

npm install --save-dev @holithemes/phpcs-config
         #or 
npm i @holithemes/eslint-config

npm i @holithemes/phpcs-config
 ```


# auto update for getting the new version
```bash
npm i 
         #or
npm install 
         #or
npm install @holithemes/eslint-config@latest

npm install @holithemes/phpcs-config@latest