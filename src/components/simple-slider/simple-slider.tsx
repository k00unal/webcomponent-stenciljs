import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "simple-slider",
  styleUrl: "simple-slider.scss"
})
export class SimpleSlider {
  @Prop() firstslide: string = "1";
  @Prop() secondslide: string = "2";
  @Prop() thirdslide: string = "3";
  @Prop() fourthslide: string = "4";
  @Prop() fifthslide: string = "5";

  componentDidLoad() {
    let slides = document.querySelectorAll("#slides .slide");
    let currentSlide = 0;
    setInterval(nextSlide, 6000);

    function nextSlide() {
      slides[currentSlide].className = "slide";
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].className = "slide showing";
    }
  }

  render() {
    return (
      <ul id="slides">
        <li class="slide showing">{this.firstslide}</li>
        <li class="slide">{this.secondslide}</li>
        <li class="slide">{this.thirdslide}</li>
        <li class="slide">{this.fourthslide}</li>
        <li class="slide">{this.fifthslide}</li>
      </ul>
    );
  }
}
