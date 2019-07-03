import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
import { postcss } from "@stencil/postcss";
import autoprefixer from "autoprefixer";

export const config: Config = {
  namespace: "webcomponent-stenciljs",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    sass(),
    postcss({
      plugins: [
        autoprefixer({
          // browsers: ["last 6 versions"],
          // cascade: false
        })
      ]
    })
  ],
  globalStyle: "src/global.scss"
};
