module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'eol-last': 0,
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'no-trailing-spaces': [2, { skipBlankLines: true }],
    quotes: ['error', 'single'],
    indent: 'off',
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/order-in-components': ['error', {
        order: [
          'el',
          'name',
          ['components', 'directives', 'filters'],
          ['props', 'propsData'],
          'key',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          'extends',
          'mixins',
          ['provide', 'inject'],
          'ROUTER_GUARDS',
          'layout',
          'middleware',
          'validate',
          'scrollToTop',
          'transition',
          'loading',
          'inheritAttrs',
          'model',
          'emits',
          'setup',
          'asyncData',
          'data',
          'fetch',
          'head',
          'computed',
          'watch',
          'watchQuery',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError'
        ]
       }],
       'comma-dangle': ['error', {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
    }]
  }
}
