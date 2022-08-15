module.exports = {
  root: true, // Tells eslint this is the root configuration and not to search any further up the filesystem
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: [
    // Load the following plugin packages
    '@typescript-eslint', // Plugin for working with Typescript
    'import',
    'mocha',
  ],
  extends: [
    // Extend the following configurations
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb-typescript/base',
    'plugin:mocha/recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    'mocha/no-mocha-arrows': 'off',
  },
};
