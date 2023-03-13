import preprocess from 'svelte-preprocess';
import css from 'rollup-plugin-import-css';

const config = {
  preprocess: preprocess({
    build: {
      rollupOptions: {
        plugins :[
          css()
        ]
      },
    },
  })
}

export default config;
