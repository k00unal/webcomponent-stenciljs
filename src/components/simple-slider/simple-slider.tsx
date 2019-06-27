import { Component, h } from "@stencil/core";

@Component({
  tag: "simple-slider",
  styleUrl: "simple-slider.scss"
})
export class SimpleSlider {
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
      [
        <ul id="slides">
          <li class="slide showing">Slide 1</li>
          <li class="slide">Slide 2</li>
          <li class="slide">Slide 3</li>
          <li class="slide">Slide 4</li>
          <li class="slide">Slide 5</li>
        </ul>,
        <div clas="slidernav">
          <div id="arrow-left" class="arrow" />
          <div id="arrow-right" class="arrow" />
        </div>

      ];
  }
}
