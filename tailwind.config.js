/** @type {import('tailwindcss').Config} */
module.exports = {
   presets: [require('@spartan-ng/ui-core/hlm-tailwind-preset')],
   content: ['./src/**/*.{html,ts}', './src/libs/ui/**/*.{html,ts}'],
   theme: {
      extend: {
         colors: {
            'slate-900': '#0F172A',
         },
      },
   },
   plugins: [],
};
