import { storiesOf } from "@storybook/html";
import { withActions } from "@storybook/addon-actions";

storiesOf("Star Rating", module)
  .addDecorator(withActions("starRating"))
  .add("Default", () => "<star-rating></star-rating>", {});
