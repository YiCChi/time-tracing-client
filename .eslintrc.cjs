module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  rules: {
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/init-declarations': 'error',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require',
      },

      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'function',
        modifiers: ['exported'],
        format: ['camelCase', 'PascalCase'],
      },
    ],
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-invalid-this': 'error',
    '@typescript-eslint/no-loop-func': 'error',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-redundant-type-constituents': 'warn',
    '@typescript-eslint/no-require-imports': 'warn',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-useless-empty-export': 'warn',
    '@typescript-eslint/parameter-properties': ['error', { prefer: 'parameter-property' }],
    '@typescript-eslint/prefer-enum-initializers': 'warn',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'warn',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArray: true }],
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/sort-type-union-intersection-members': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',

    // Formatting is almost using prettier. Only use these 3 formatting rules in linter.
    '@typescript-eslint/lines-between-class-members': 'error',
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'always',
        prev: ['case', 'default'],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: 'directive',
        next: '*',
      },
      {
        blankLine: 'any',
        prev: 'directive',
        next: 'directive',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['interface', 'type'],
      },
    ],
  },
};
