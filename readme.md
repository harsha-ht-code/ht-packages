# HT Packages Monorepo

> 🏢 **Built by HoliThemes** - We build cutting-edge web technologies that bring your digital presence into the future

A collection of linting and coding standards packages for HoliThemes projects.

## Packages

### [@holithemes/eslint-config](./packages/eslint-config)
ESLint configuration with security and best practices rules.

### [@holithemes/phpcs-config](./packages/phpcs-config)
PHP CodeSniffer configuration for WordPress projects.

### [@holithemes/ht-packages](./packages/ht-packages)
Main package that combines all configurations.

### [@holithemes/shared-utils](./packages/shared-utils)
Shared utilities used across packages.

## Installation

Install individual packages:
```bash
npm install @holithemes/eslint-config
npm install @holithemes/phpcs-config
npm install @holithemes/ht-packages
npm install @holithemes/shared-utils
```

## Usage

### ESLint Config
```javascript
import config from '@holithemes/eslint-config';
export default config;
```

### PHPCS Config
```xml
<?xml version="1.0"?>
<ruleset name="My Project">
  <rule ref="./node_modules/@holithemes/phpcs-config/phpcs.xml"/>
</ruleset>
```

### Combined Package
```javascript
import { eslintConfig } from '@holithemes/ht-packages';
export default eslintConfig;
```

## Development

```bash
# Install dependencies
npm install

# Build all packages
npm run build

# Publish all packages
npm run publish:all

# Version bump
npm run version:patch
```

## Security

All packages include security-focused linting rules and best practices for secure coding.

### 📞 **Contact Us**
- 🌐 **Website**: [holithemes.com](https://holithemes.com)
- 📧 **Email**: [contact@holithemes.com](mailto:support@holithemes.com)