# webcomponent-stenciljs

Source code For tutorial for creating Web Components with Stencil js

# Storybook Viewport Addon

Storybook Viewport Addon allows your stories to be displayed in different sizes and layouts in [Storybook](https://storybook.js.org). This helps build responsive components inside of Storybook.

[Framework Support](https://github.com/storybookjs/storybook/blob/master/ADDONS_SUPPORT.md)

![Screenshot](https://github.com/storybookjs/storybook/blob/master/addons/viewport/docs/viewport.png)

## Installation

Install the following npm module:

```sh
npm i --save-dev @storybook/addon-viewport
```

or with yarn:

```sh
yarn add -D @storybook/addon-viewport
```

Then, add following content to .storybook/addons.js

```js
import "@storybook/addon-viewport/register";
```

You should now be able to see the viewport addon icon in the the toolbar at the top of the screen.

## Configuration

The viewport addon is configured by story parameters with the `viewport` key. To configure globally, import `addParameters` from your app layer in your `config.js` file.

```js
import { addParameters } from "@storybook/react";

addParameters({ viewport: { viewports: newViewports } });
```
