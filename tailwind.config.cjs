/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				navEnter: {
					'0%': { opacity: 0, transform: 'translateX(300px)', visibility: 'hidden' },
					'100%': { opacity: 1, transform: 'translateX(0px)', visibility: 'visible' }
				},
				navExit: {
					from: { opacity: 1, transform: 'translateX(0px)', visibility: 'visible' },
					to: { opacity: 0, transform: 'translateX(300px)', visibility: 'hidden' }
				},
				brandCentre: {
					from: { transform: 'translateX(0)', left: 0 },
					to: { transform: 'translateX(-50%)', left: '50%' }
				},
				brandBack: {
					from: { transform: 'translateX(-50%)', left: '50%' },
					to: { transform: 'translateX(0)', left: 0 }
				},
				
			},
			animation: {
				navEnter: 'navEnter 200ms cubic-bezier(.01,-0.01,.61,.99) 1 forwards',
				navExit: 'navExit 200ms cubic-bezier(.01,-0.01,.61,.99) forwards',
				brandCentre: 'brandCentre 200ms cubic-bezier(.01,-0.01,.61,.99) forwards',
				brandBack: 'brandBack 200ms cubic-bezier(.01,-0.01,.61,.99) forwards'
			}
		}
	},
	plugins: []
};
