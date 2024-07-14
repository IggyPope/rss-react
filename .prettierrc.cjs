module.exports = {
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  endOfLine: 'lf',
  importOrder: ['^react(.*)', '<THIRD_PARTY_MODULES>', '@/(.*)', '^[./]'],
  importOrderSeparation: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};
