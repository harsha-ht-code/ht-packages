# @holithemes/phpcs-config

PHP CodeSniffer configuration for WordPress projects.

## Installation

```bash
npm install --save-dev @holithemes/phpcs-config
```

## Setup

### 1. Install PHP Dependencies
```bash
composer require --dev squizlabs/php_codesniffer
composer require --dev wp-coding-standards/wpcs
```

### 2. Create Configuration
Create `phpcs.xml` in your project root:
```xml
<?xml version="1.0"?>
<ruleset name="My Project">
  <rule ref="./node_modules/@holithemes/phpcs-config/phpcs.xml"/>
  <file>./src</file>
  <file>./includes</file>
</ruleset>
```

### 3. Run PHPCS
```bash
# Lint PHP files
./vendor/bin/phpcs

# Fix auto-fixable issues
./vendor/bin/phpcbf

# Lint specific files
./vendor/bin/phpcs src/my-file.php
```

## Features

### WordPress Standards
- WordPress core coding standards
- Security rules (SQL injection, XSS)
- Prepared statement validation
- WordPress-specific best practices

### Security Rules
- `WordPress.Security.*` - All security rules
- `WordPress.DB.PreparedSQL` - SQL injection prevention
- `WordPress.DB.PreparedSQLPlaceholders` - Placeholder validation

### Exclusions
- Commented out code detection (disabled)
- Non-PHP assets (JS, CSS, HTML)
- Vendor and node_modules directories

## Configuration Options

### Custom Exclusions
```xml
<?xml version="1.0"?>
<ruleset name="My Project">
  <rule ref="./node_modules/@holithemes/phpcs-config/phpcs.xml"/>
  
  <!-- Add your exclusions -->
  <exclude-pattern>*/tests/*</exclude-pattern>
  <exclude-pattern>*/build/*</exclude-pattern>
  
  <!-- Disable specific rules -->
  <rule ref="WordPress.Files.FileName">
    <severity>0</severity>
  </rule>
</ruleset>
```

### IDE Integration

#### VS Code
Install "PHP Sniffer" extension and add to settings.json:
```json
{
  "phpSniffer.standard": "./phpcs.xml"
}
```

#### PhpStorm
1. Go to Settings → PHP → Quality Tools → PHP_CodeSniffer
2. Set path to `./vendor/bin/phpcs`
3. Set coding standard to `./phpcs.xml`

## Publishing

```bash
# Update version
npm version patch

# Publish to npm
npm publish --access public
```

## Development

```bash
# Test configuration
echo "<?php echo 'test';" > test.php
composer install
./vendor/bin/phpcs test.php
rm test.php
```

## Programmatic Usage

```javascript
const { getConfigPath } = require('@holithemes/phpcs-config');
console.log(getConfigPath()); // Path to phpcs.xml
```