import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'docs', // carpeta de destino para GitHub Pages
      assets: 'docs',
      fallback: null,
      precompress: false,
      strict: true
    }),
    paths: {
      base: ''
    }
  }
};

export default config;
