# webcomponent-stenciljs

Source code For tutorial for creating Web Components with Stencil js

# Webpack Setup

## for storybook hotmodule reloading

Add copy-webpack-plugin to your project. To do that, run:

```
npm install copy-webpack-plugin --save-dev

```

Add write-file-webpack-plugin also

```
npm install write-file-webpack-plugin --save-dev

```

Add npm-run-all also to run stencil and storybook together

```
npm install npm-run-all --save-dev

```

Step 2: Add a npm script
Then add the following NPM script to your package.json in order to start the storybook in parellel with stencil but without serving stencil:

```
{
  "scripts": {
    "story": "npm-run-all --parallel start-stencil storybook",
  }
}

```

Finally: Run your Story
Now everything is ready. Run your storybook along with stencil with one go:

```
npm run story

```
