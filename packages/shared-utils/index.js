/**
 * Shared utilities for HoliThemes packages
 */

export const validateConfig = (config) => {
  if (!config || typeof config !== 'object') {
    throw new Error('Configuration must be an object');
  }
  return true;
};

export const mergeConfigs = (...configs) => {
  return configs.reduce((merged, config) => {
    return { ...merged, ...config };
  }, {});
};

export const getPackageInfo = () => {
  return {
    name: '@holithemes/shared-utils',
    version: '1.0.0'
  };
};