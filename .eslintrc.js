module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {},
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'semi': 0,
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/ban-types': 'warn',
        '@typescript-eslint/ban-ts-comment': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-non-null-assertion': 'off',
        'react-native/no-inline-styles': 'off',
        'react/no-unstable-nested-components': 'off',
        'eslint-comments/no-unlimited-disable': 'off',
      },
    },
  ],
}
