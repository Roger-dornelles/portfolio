import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import globals from 'globals';
import preferArrow from 'eslint-plugin-prefer-arrow';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      prettier: pluginPrettier,
      'prefer-arrow': preferArrow,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Regras principais
      'prettier/prettier': 'error',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-vars': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'linebreak-style': ['error', 'unix'],

      // Regras personalizadas
      quotes: ['error', 'single'],
      semi: ['error', true],
      indent: ['error', 2],
      'max-len': ['error', { code: 120 }],
      'padding-line-between-statements': ['error', { blankLine: 'always', prev: 'function', next: 'function' }],
      'sort-imports': ['error', { ignoreDeclarationSort: true }],
      'prefer-arrow-callback': 'error',
      'comma-dangle': ['error', 'always-multiline'],

      // ✅ Validação de variáveis não utilizadas
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'prefer-arrow/prefer-arrow-functions': [
        'error',
        {
          disallowPrototype: true,
          singleReturnOnly: false,
          classPropertiesAllowed: false,
        },
      ],
    },
  },
  prettier,
];
