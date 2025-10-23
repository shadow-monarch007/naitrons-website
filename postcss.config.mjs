// Tailwind v4 PostCSS plugin config (ESM friendly - avoid require in ESM scope)
// Disable the plugin in test to speed up component tests / avoid JSDOM style processing cost.
const isTest = process.env.NODE_ENV === 'test';
const config = {
  plugins: isTest ? {} : { '@tailwindcss/postcss': {} },
};
export default config;
