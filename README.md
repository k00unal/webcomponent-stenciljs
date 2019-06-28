# webcomponent-stenciljs

Source code For tutorial for creating Web Components with Stencil js

# Storybook for HTML

# Manual setup

Add @storybook/html to your project. To do that, run:

```
npm install @storybook/html --save-dev

```

Add @babel/core and babel-loader

```
npm install babel-loader @babel/core --save-dev

```

Step 2: Add a npm script
Then add the following NPM script to your package.json in order to start the storybook later in this guide:

```
{
  "scripts": {
    "storybook": "start-storybook -p 9001 -c .storybook -s www"
  }
}

```

Manually create .storybook folder adjecent to src folder

Step 3: Create the config file
For a basic Storybook configuration, the only thing you need to do is tell Storybook where to find stories.

To do that, create a file at .storybook/config.js with the following content:

```
import { configure } from '@storybook/html';

function loadStories() {
  const req = require.context('../src', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

```

Requiring all your stories becomes bothersome real quick, so you can use this to load all stories matching a glob.

Step 4: Write your stories
Now create a ..src/components/my-modal/my-modal.stories.js file, and write your first story like this:

```
import { storiesOf } from '@storybook/html';

storiesOf('Button', module)
  .add('with text', () => '<button class="btn">Hello World</button>')
  .add('with emoji', () => {
    const button = document.createElement('button');
    button.innerText = '😀 😎 👍 💯';
    return button;
  });

```

Finally: Run your Storybook
Now everything is ready. Run your storybook with:

```
npm run storybook

```
