import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		paths: {
			base: ""
		},
		adapter: adapter({
			pages: "docs",
			precompress: false,
			strict: true,
			hydrate: true
		})
	}
};

export default config;