import { Directive, ElementRef, HostBinding, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';


function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3 | 0x8);

    return v.toString(16);
  })
}

@Directive({
  selector: '[appLoading]'
})
export class LoadingDirective implements OnInit, OnChanges {
  @HostBinding("style.position")
  hostPosition: string = "relative";

  @Input() appLoading: boolean = false;
  @Input() loaderColor: string = "#e4e4e4";
  @Input() fixedLoader: boolean = false;

  uid: any;


  constructor(private targetEl: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.uid = "loading-container-" + uuidv4();

    const loadingContainer = this.renderer.createElement("div");
    this.renderer.setStyle(
      loadingContainer,
      "display",
      this.appLoading ? "flex" : "none"
    );


    this.renderer.addClass(loadingContainer, this.uid);
    this.renderer.addClass(loadingContainer, 'cp-loader-overlay');
    this.renderer.setStyle(loadingContainer, "position", this.fixedLoader ? 'fixed' : 'absolute');


    // custom spinner start
    const spinnerContainer = this.renderer.createElement("div");
    this.renderer.addClass(spinnerContainer, "cp-loader");

    this.renderer.appendChild(loadingContainer, spinnerContainer);
    // custom spinner ends
    this.renderer.appendChild(this.targetEl.nativeElement, loadingContainer);
  }


  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges['appLoading']) {
      const container = this.targetEl.nativeElement;
      const div = container.querySelector("." + this.uid);
      if (div) {
        this.renderer.setStyle(
          div,
          "display",
          this.appLoading ? "flex" : "none"
        );

        this.renderer.setStyle(div, "position", this.fixedLoader ? 'fixed' : 'absolute');
        const mainRef = document.querySelector('main');
        if(mainRef)
          this.appLoading ? mainRef.style.overflowY = 'hidden' : mainRef.style.overflowY = 'overlay';
      }
    }
  }
}
