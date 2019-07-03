import { Component, h, Method, Element, Prop } from "@stencil/core";

@Component({
  tag: "my-modal",
  styleUrl: "my-modal.scss"
})
export class MyModal {
  @Element() modalEl: HTMLElement;

  @Prop() name: string = "simple modal";
  @Prop() bodytxt: string = "This is a simple Modal";

  @Method()
  async open() {
    this.modalEl.style.display = "block";
  }

  hideButtonHandler() {
    this.modalEl.style.display = "none";
  }
  showButtonHandler() {
    const modal = document.querySelector(".wc-modal__wrap") as HTMLElement;
    modal.style.display = "block";
  }

  componentDidLoad() {
    console.log("Component has been rendered");
  }

  render() {
    return (
      <div>
        <button id="modal-btn" onClick={this.showButtonHandler.bind(this)}>
          Modal button
        </button>
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
      </div>
    );
  }
}
