/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		height: {
		  'hero': 'calc(100svh - 4rem)',
		},
		animation: {
			// adjust speed according to your need
			marquee: 'marquee 40s linear infinite',
		  },
		  keyframes: {
			marquee: {
			  '0%': { transform: 'translateX(100%)' },
			  '100%': { transform: 'translateX(-200%)' },
			}
		  }


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
	variants: {
		extend: {
		  animation: ['hover', 'focus'],
		}
	  },
  };
  