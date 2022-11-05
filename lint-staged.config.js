const lintStagedConfig = {
  // Type check TypeScript files
  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx)': (filenames) => [
    `pnpm exec eslint --fix ${filenames.join(' ')}`,
    `pnpm exec prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) => `pnpm exec prettier --write ${filenames.join(' ')}`,
};

export default lintStagedConfig;
