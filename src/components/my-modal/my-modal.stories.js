import { storiesOf } from "@storybook/html";

storiesOf("my-modal", module).add(
  "Default",
  () => `<button id="modal-btn">Modal button</button>
<my-modal style="display:block"
  class="wc-modal"
  name="Simple modal"
  bodytxt="This is a simple Modal"
></my-modal>`,
  {}
);
