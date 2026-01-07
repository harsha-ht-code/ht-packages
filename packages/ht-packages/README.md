# @holithemes/ht-packages

Complete linting and coding standards package combining all HoliThemes configurations.

## Installation

```bash
npm install @holithemes/ht-packages
```

## Usage

### ESLint
```javascript
import { eslintConfig } from '@holithemes/ht-packages';
export default eslintConfig;
```

### All configs
```javascript
import htPackages from '@holithemes/ht-packages';
const { eslint, validateConfig } = htPackages;
```

## Includes

- @holithemes/eslint-config
- @holithemes/phpcs-config  
- @holithemes/shared-utils