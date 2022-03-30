module.exports = {
  content: [
    './node_modules/flowbite/**/*.js',
    './dist/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './*.html',
    '../../pkgs/theme/src/**/*.{js,jsx,ts,tsx}',
    '../../pkgs/web/ui/src/**/*.{js,jsx,ts,tsx}',
  ],
  corePlugins: {
    preflight: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/line-clamp'),
  ],
}
