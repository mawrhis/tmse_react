module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['no-unsanitized', 'lodash', 'canonical', 'css-modules'],
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:compat/recommended',
    'plugin:no-unsanitized/DOM',
    'plugin:css-modules/recommended',
  ],
  rules: {
    // 'canonical/filename-no-index': 'warn',
    'lodash/import-scope': [2, 'method'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['external', 'internal', 'builtin', 'parent', 'sibling', 'index'],
        'newlines-between': 'never',
        pathGroupsExcludedImportTypes: ['builtin'],
        pathGroups: [
          {
            pattern: 'src/**',
            group: 'builtin',
          },
          {
            pattern: './**',
            group: 'sibling',
          },
        ],
      },
    ],
    // 'import/no-default-export': 'warn',
    'import/no-extraneous-dependencies': [
      'error',
      {
        // v pluginu je bohužel bug https://github.com/benmosher/eslint-plugin-import/issues/1109
        // nelze použít víc rootů proto se musí dev závislostí instalovat i do balíků
        // packageDir: ['.', '../..'],
        devDependencies: [
          '**/.*.js',
          '**/.storybook/*.*s*',
          '**/*.test.*s*',
          '**/*.config.*s*',
          '**/*.generator.js*',
          '**/*.spec.*s*',
          '**/*.story.ts*',
          '**/__tests__/*',
          '**/__mocks__/*',
          'yalc-watcher.js',
          './tests/*',
          'testcafeRunner.js',
          './next.config.js',
        ],
      },
    ],
    // 'import/prefer-default-export': 0,
    'import/no-import-module-exports': 0,
    // chceme mít možnost psát pevné mezery
    'no-irregular-whitespace': 0,
    curly: [2, 'all'],
    'eol-last': ['error', 'always'],
    'class-methods-use-this': 0,
    'object-curly-spacing': ['error', 'always'],
    'max-len': ['error', { code: 100, ignorePattern: '^import', ignoreStrings: true }],
    'max-lines': ['warn', { max: 750 }],
    'max-params': ['error', { max: 3 }],
    // není kompatibilní s prettier
    'react/jsx-wrap-multilines': 0,
    'default-param-last': 0,
    // aplikuje se i pro ne-react soubory
    'react/destructuring-assignment': 0,
    'no-unsafe-optional-chaining': 'warn',
    'no-promise-executor-return': 'warn',
  },
  reportUnusedDisableDirectives: true,
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
    polyfills: ['URLSearchParams', 'URL', 'Promise'],
    react: {
      version: '17',
    },
  },
  overrides: [
    // Unit / integration tests
    // {
    //   files: ['*.test.*', '**/__mocks__/*'],
    //   env: { jest: true },
    //   plugins: ['jest', 'testing-library'],
    //   extends: ['plugin:jest/recommended', 'plugin:testing-library/react'],
    //   rules: {
    //     'jest/no-mocks-import': 'off',
    //     'jest/require-top-level-describe': 2,
    //     'testing-library/prefer-screen-queries': 'warn',
    //     'testing-library/prefer-find-by': 'warn',
    //     'testing-library/no-unnecessary-act': 'warn',
    //     'testing-library/no-await-sync-events': 2,
    //     // ovlivňuje věci, které se netýkají testing library
    //     'testing-library/no-await-sync-query': 0,
    //     'testing-library/prefer-presence-queries': 'warn',
    //     'testing-library/no-node-access': 'warn',
    //     'testing-library/render-result-naming-convention': 'warn',
    //     'testing-library/no-wait-for-empty-callback': 2,
    //     'testing-library/prefer-wait-for': 2,
    //     // pro účely mockování je někdy třeba použít jest dřív
    //     'import/first': 0,
    //   },
    // },
    // react files
    {
      files: ['*.*sx'],
      plugins: ['react'],
      rules: {
        'react/no-unused-class-component-methods': 'warn',
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/prop-types': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-no-useless-fragment': 'off',
        'react/jsx-no-constructed-context-values': 0,
        'react/no-unstable-nested-components': 'warn',
        'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
        // bohužel vykazuje mnoho false positives
        'react/no-unused-prop-types': 0,
        'react/jsx-sort-props': [
          2,
          {
            callbacksLast: true,
            shorthandFirst: true,
          },
        ],
        'react/jsx-props-no-spreading': 0,
        'react/require-default-props': 0,
        // by default je nutné mít label a input zanořený
        // nicméně mělo by stačít mít label provázaný přes id
        // je k tomu diskuse https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/718
        'jsx-a11y/label-has-associated-control': [2, { assert: 'htmlFor' }],
      },
    },
    // storybook
    {
      files: ['*.story.*'],
      plugins: ['react-hooks'],
      rules: {
        'import/no-default-export': 0,
        'no-console': 0,
      },
    },
    {
      files: ['*.jsx', '*.tsx', '*.js', '*.ts'],
      plugins: ['react-hooks'],
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
      },
    },
    // Typescript files
    {
      files: ['*.tsx', '*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'typescript-sort-keys'],
      rules: {
        // abychom nezapomínaly awaitovat promisy
        '@typescript-eslint/no-floating-promises': 'warn',
        // abychom na promis nestavěli boolean podmínky
        '@typescript-eslint/no-misused-promises': 'warn',
        // abychom mohli voidovat čekání na promisy eg. void Router.push(redirectPath)
        'no-void': ['error', { allowAsStatement: true }],
        '@typescript-eslint/typedef': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true,
          },
        ],
        'typescript-sort-keys/interface': 2,
        'typescript-sort-keys/string-enum': 2,
        '@typescript-eslint/no-non-null-assertion': 2,
        '@typescript-eslint/no-use-before-define': 2,
        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: 'interface',
            format: ['PascalCase'],
          },
        ],
        '@typescript-eslint/no-explicit-any': 'warn',
        // vypneme položky které nejsou kompatibilní s typescriptem
        camelcase: 0,
        'no-undef': 0,
        'no-redeclare': 0,
        'no-unused-vars': 0,
        'no-shadow': 0,
        'no-use-before-define': 0,
        'no-useless-constructor': 0,
        '@typescript-eslint/no-useless-constructor': 'warn',
        'no-empty-function': 0,
        '@typescript-eslint/no-empty-function': [
          'error',
          {
            // zkopirovano defaultni pravidlo
            allow: ['arrowFunctions', 'functions', 'methods'],
          },
        ],
        'no-return-await': 'off',
        '@typescript-eslint/return-await': ['warn', 'in-try-catch'],
      },
    },
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
