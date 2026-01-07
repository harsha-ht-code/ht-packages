# @holithemes/shared-utils

Shared utilities for HoliThemes packages.

## Installation

```bash
npm install @holithemes/shared-utils
```

## Usage

```javascript
import { validateConfig, mergeConfigs } from '@holithemes/shared-utils';

// Validate configuration
validateConfig(myConfig);

// Merge multiple configs
const merged = mergeConfigs(config1, config2);
```

## Functions

- `validateConfig(config)` - Validates configuration objects
- `mergeConfigs(...configs)` - Merges multiple configurations
- `getPackageInfo()` - Returns package information