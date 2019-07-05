/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MyBackdrop {}
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface MyModal {
    'bodytxt': string;
    'name': string;
    'open': () => Promise<void>;
  }
  interface SimpleSlider {
    'fifthslide': string;
    'firstslide': string;
    'fourthslide': string;
    'secondslide': string;
    'thirdslide': string;
  }
  interface WcSidedrawer {
    'open': boolean;
    'titlename': string;
  }
}

declare global {


  interface HTMLMyBackdropElement extends Components.MyBackdrop, HTMLStencilElement {}
  var HTMLMyBackdropElement: {
    prototype: HTMLMyBackdropElement;
    new (): HTMLMyBackdropElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLMyModalElement extends Components.MyModal, HTMLStencilElement {}
  var HTMLMyModalElement: {
    prototype: HTMLMyModalElement;
    new (): HTMLMyModalElement;
  };

  interface HTMLSimpleSliderElement extends Components.SimpleSlider, HTMLStencilElement {}
  var HTMLSimpleSliderElement: {
    prototype: HTMLSimpleSliderElement;
    new (): HTMLSimpleSliderElement;
  };

  interface HTMLWcSidedrawerElement extends Components.WcSidedrawer, HTMLStencilElement {}
  var HTMLWcSidedrawerElement: {
    prototype: HTMLWcSidedrawerElement;
    new (): HTMLWcSidedrawerElement;
  };
  interface HTMLElementTagNameMap {
    'my-backdrop': HTMLMyBackdropElement;
    'my-component': HTMLMyComponentElement;
    'my-modal': HTMLMyModalElement;
    'simple-slider': HTMLSimpleSliderElement;
    'wc-sidedrawer': HTMLWcSidedrawerElement;
  }
}

declare namespace LocalJSX {
  interface MyBackdrop extends JSXBase.HTMLAttributes<HTMLMyBackdropElement> {}
  interface MyComponent extends JSXBase.HTMLAttributes<HTMLMyComponentElement> {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
  interface MyModal extends JSXBase.HTMLAttributes<HTMLMyModalElement> {
    'bodytxt'?: string;
    'name'?: string;
  }
  interface SimpleSlider extends JSXBase.HTMLAttributes<HTMLSimpleSliderElement> {
    'fifthslide'?: string;
    'firstslide'?: string;
    'fourthslide'?: string;
    'secondslide'?: string;
    'thirdslide'?: string;
  }
  interface WcSidedrawer extends JSXBase.HTMLAttributes<HTMLWcSidedrawerElement> {
    'open'?: boolean;
    'titlename'?: string;
  }

  interface IntrinsicElements {
    'my-backdrop': MyBackdrop;
    'my-component': MyComponent;
    'my-modal': MyModal;
    'simple-slider': SimpleSlider;
    'wc-sidedrawer': WcSidedrawer;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


