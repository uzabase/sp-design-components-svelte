import preprocess from 'svelte-preprocess';
import postcss from 'rollup-plugin-postcss'

const config = {
  preprocess: preprocess({
    build: {
      rollupOptions: {
        input: "src/index.ts",
      },
      plugins :[
        postcss({})
      ]
    },
  })
}

export default config;
