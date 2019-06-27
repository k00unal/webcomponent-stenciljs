# webcomponent-stenciljs

Source code For tutorial for creating Web Components with Stencil js

# add global.scss

Add to the heads of html file as :

```
<link href="/build/webcomponent-stenciljs.css" rel="stylesheet" />

```

Then add thes changes to stencil.config.ts

```
plugins: [
    sass(),
    postcss({
      plugins: [
        autoprefixer({
          browsers: ["last 6 versions"],
          cascade: false
        })
      ]
    })
  ],
  globalStyle: "src/global.scss"
};

```
