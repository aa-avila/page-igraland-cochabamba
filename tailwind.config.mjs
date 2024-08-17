/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    require('tailwindcss-elevation'),
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          '.btn-facebook': {
            'background-color': '#1444cc',
            'border-color': '#1444cc',
          },
          '.btn-facebook:hover': {
            'background-color': '#445fd4',
            'border-color': '#445fd4',
          },
          '.btn-instagram': {
            'background-color': '#9444ec',
            'border-color': '#9444ec',
          },
          '.btn-instagram:hover': {
            'background-color': '#b486e8',
            'border-color': '#b486e8',
          },
          '.btn-tiktok': {
            'background-color': '#fc4474',
            'border-color': '#fc4474',
          },
          '.btn-tiktok:hover': {
            'background-color': '#fc9bb4',
            'border-color': '#fc9bb4',
          },
          primary: '#cbab63',
          'primary-content': '#845c30',
          secondary: '#ebd3ab',
          'secondary-content': '#848382',
          accent: '#bb5c04',
          neutral: '#433722',
          'neutral-content': '#a78e7b',
          base: '#efa31e',
        },
      },
    ],
  },
};
