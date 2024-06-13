import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'docs', // Carpeta de destino para GitHub Pages
      assets: 'docs',
      fallback: null,
      precompress: false,
      strict: true
    }),
    paths: {
      base: dev ? '' : ''
    }
  }
};

export default config;
