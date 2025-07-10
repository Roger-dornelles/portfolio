import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import globals from 'globals';

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
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Prettier integrado
      'prettier/prettier': 'error',

      // React JSX
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-vars': 'warn',

      // React Hooks - uso correto obrigatório
      'react-hooks/rules-of-hooks': 'error', // erro se usar hooks fora de componente/função React
      'react-hooks/exhaustive-deps': 'warn', // aviso se dependências de useEffect incorretas

      // Variáveis, funções e hooks não usados
      'no-unused-vars': 'off', // desativa padrão ESLint
      '@typescript-eslint/no-unused-vars': [
        'warn', // erro para não usados
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],

      // Regras gerais
      quotes: ['error', 'single'],
      semi: ['error', true],
      'max-len': ['error', { code: 120 }],
      'padding-line-between-statements': ['error', { blankLine: 'always', prev: 'function', next: 'function' }],
      'sort-imports': ['error', { ignoreDeclarationSort: true }],
      'prefer-arrow-callback': 'error',
      indent: ['error', 2],
    },
  },
  prettier,
];
