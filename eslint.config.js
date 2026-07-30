import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/*.js',
      '**/*.d.ts',
      '**/*.config.ts',
      '**/*.config.*.ts',
      'project-ports.ts',
      'scripts/**',
    ],
  },
  {
    files: ['web/src/**/*.ts', 'web/src/**/*.tsx'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      parserOptions: {
        project: './web/tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'id-length': ['warn', { min: 3, exceptions: ['_', 'i', 'j', 'id'] }],
      'no-nested-ternary': 'warn',
      'no-restricted-syntax': ['warn',
        { selector: 'CallExpression[callee.property.name="map"]', message: 'Use for-of loop instead of .map()' },
        { selector: 'CallExpression[callee.property.name="filter"]', message: 'Use for-of loop instead of .filter()' },
        { selector: 'CallExpression[callee.property.name="forEach"]', message: 'Use for-of loop instead of .forEach()' },
        { selector: 'CallExpression[callee.property.name="reduce"]', message: 'Use for-of loop instead of .reduce()' },
        { selector: 'CallExpression[callee.property.name="flatMap"]', message: 'Use for-of loop instead of .flatMap()' },
        { selector: 'CallExpression > ArrowFunctionExpression.callee', message: 'No IIFE — extract to a variable above JSX' },
        { selector: 'CallExpression > FunctionExpression.callee', message: 'No IIFE — extract to a variable above JSX' },
      ],
    },
  },
);
