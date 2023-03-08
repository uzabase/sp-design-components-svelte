const config = {
"transform": {
  "^.+\\.svelte$": [
    "svelte-jester",
    {
      "preprocess": true
    }
  ],
    "^.+\\.ts$": "ts-jest"
},
"moduleFileExtensions": [
  "js",
  "ts",
  "svelte"
],
  "testEnvironment": "jsdom"
}
export default config