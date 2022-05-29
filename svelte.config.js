import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

import path from 'path';
const __dirname = path.resolve();

const production = process.env.NODE_ENV == 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			target: "#svelte",
		}),

		vite: () => ({
			build: {
				target: ['es2020']
			},
			server: {
				fs: {
					allow: ['static']
				}
			}
		}),

		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		},
		package: {
			exports: (filepath) => mm.isMatch(filepath, ['index.js', 'plugins/*/index.js'])
		}
	},

	plugins: [ ]
};

export default config;
