import { Component, h, Method, Element, Prop } from "@stencil/core";

@Component({
  tag: "my-modal",
  styleUrl: "my-modal.scss"
})
export class MyModal {
  @Element() modalEl: HTMLElement;

  @Prop() name: string;
  @Prop() bodytxt: string;

  @Method()
  async open() {
    this.modalEl.style.display = "block";
  }

  hideButtonHandler() {
    this.modalEl.style.display = "none";
  }

  render() {
    return (
      <div class="wc-modal__wrap">
        <button
          class="wc-modal__cls"
          onClick={this.hideButtonHandler.bind(this)}
        >
          X
        </button>
        <h1>{this.name}</h1>
        <p>{this.bodytxt}</p>
      </div>
    );
  }
}
