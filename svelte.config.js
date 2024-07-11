import sveltePreprocess from 'svelte-preprocess';
import node from '@sveltejs/adapter-node';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(),

  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    //
    // Deactivate standard Node app
    // adapter: node(),
    //
    // Configure an adapter for static site generation 
    // https://kit.svelte.dev/docs/adapter-static
    adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
    vite: {
      server: {
        fs: {
          // Allow serving files from one level up to the project root
          allow: ['..']
        }
      }
    }
  }
};
