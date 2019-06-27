import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "wc-sidedrawer",
  styleUrl: "./side-drawer.scss",
  shadow: true
})
export class SideDrawer {
  @Prop({ reflectToAttr: true }) titlename: string;
  @Prop({ reflectToAttr: true, mutable: true }) open: boolean;

  onCloseDrawer() {
    this.open = false;
  }

  render() {
    return (
      <aside class="sidemenu">
        <header class="sidemenu__head">
          <h1 class="sidemenu__htag">{this.titlename}</h1>
          <button
            onClick={this.onCloseDrawer.bind(this)}
            class="sidemenu__clsbtn"
          >
            x
          </button>
        </header>
        <main>
          <slot />
        </main>
      </aside>
    );
  }
}
