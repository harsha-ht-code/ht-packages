const path = require('path');

module.exports = {
  configPath: path.join(__dirname, 'phpcs.xml'),
  getConfigPath: () => path.join(__dirname, 'phpcs.xml')
};