const config = {
"transform": {
  "^.+\\.svelte$": [
    "svelte-jester",
    {
      "preprocess": true
    }
  ],
  "^.+\\.(t|j)sx?$": "@swc/jest"
},
"moduleFileExtensions": [
  "js",
  "ts",
  "svelte"
],
  "testEnvironment": "jsdom"
}
export default config