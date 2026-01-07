# @holithemes/eslint-config

ESLint configuration with security and best practices for HoliThemes projects.

## Installation

```bash
npm install --save-dev @holithemes/eslint-config
```

## Usage

### Basic Setup
Create `eslint.config.js` in your project root:
```javascript
import config from '@holithemes/eslint-config';
export default config;
```

### Advanced Setup
```javascript
import htConfig from '@holithemes/eslint-config';

export default [
  ...htConfig,
  {
    // Your custom rules
    rules: {
      'no-console': 'warn'
    }
  }
];
```

### Run ESLint
```bash
# Lint all files
npx eslint .

# Fix auto-fixable issues
npx eslint . --fix

# Lint specific directory
npx eslint src/
```

## Features

### Security Rules
- XSS prevention (innerHTML, jQuery .html())
- Code injection protection (eval, Function constructor)
- URL validation (location.href, window.open)
- DOM manipulation safety

### Code Quality
- WordPress coding standards
- Modern ES2020 syntax support
- Consistent formatting rules
- Best practice enforcement

### Supported Globals
- jQuery ($, jQuery)
- WordPress (wp)
- Backbone.js
- Underscore.js
- Custom HT globals

## Configuration Details

### File Patterns
- **Regular files**: `**/*.js`, `**/*.jsx`
- **Minified files**: Special relaxed rules for `*.min.js`

### Key Rules
- **Spacing**: Tab indentation, consistent spacing
- **Security**: No eval, XSS protection, safe DOM manipulation
- **Quality**: Prefer const, no unused vars, proper error handling

## Publishing

```bash
# Update version
npm version patch

# Publish to npm
npm publish --access public
```

## Development

```bash
# Install dependencies
npm install

# Test configuration
echo "const test = 'hello';" > test.js
npx eslint test.js
rm test.js
```