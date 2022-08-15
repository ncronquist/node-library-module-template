module.exports = {
  extends: '@istanbuljs/nyc-config-typescript',
  all: true,
  exclude: [
    '.eslintrc.js',
    '.mocharc.js',
    '.prettierrc.js',
    'nyc.config.js',
    'test/**',
  ]
}
