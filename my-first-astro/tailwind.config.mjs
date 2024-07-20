/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		height: {
		  'hero': 'calc(100svh - 4rem)',
		},


	  },
	},
	plugins: [
	  require('daisyui'),
	  require('@tailwindcss/forms'),
	  require('@tailwindcss/typography'),
	],
	daisyui: {
	  themes: ['light'],
	},
  };
  