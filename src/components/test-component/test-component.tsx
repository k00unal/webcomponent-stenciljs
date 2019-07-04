import { Component, h, Listen } from "@stencil/core";
import { StarRating } from "../star-rating/star-rating";

@Component({
  tag: "test-component"
})
export class TestComponent {
  @Listen("starRating")
  onStarRating(event) {
    console.log(event);
  }

  render() {
    return (
      <div>
        <p>Gotta Catch 'Em All ^_^</p>
        <star-rating />
      </div>
    );
  }
}
