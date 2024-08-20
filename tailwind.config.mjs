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
            'background-color': '#0049E8',
            'border-color': '#0049E8',
          },
          '.btn-facebook:hover': {
            'background-color': '#445fd4',
            'border-color': '#445fd4',
          },
          '.btn-instagram': {
            'background-color': '#D12CEC',
            'border-color': '#D12CEC',
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
          primary: '#18A2D9', // celeste
          'primary-content': '#ffffff',
          secondary: '#04bf68', // verde
          'secondary-content': '#ffffff',
          accent: '#f2c849', // amarillo
          neutral: '#242424',
          'neutral-content': '#ffffff',
          base: '#cfd7db',
        },
      },
    ],
  },
};
