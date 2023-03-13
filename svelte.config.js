import preprocess from 'svelte-preprocess';

const config = {
  preprocess: preprocess({
    build: {
      rollupOptions: {
        input: 'src/index.ts',
      },
    },
  })
}

export default config;
