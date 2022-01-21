import {Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // bind to some property to witch a value will be important npr style
  // great working with a element inside of a directive
  //you can bind to any property you are siting on

  // now with input we can bind this form outside html with []
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';

  // above- attach to a allias and change in html code
  @HostBinding('style.backgroundColor') backgroundColor: string;



  constructor(private elRef: ElementRef, private renderer: Renderer2) { }


  ngOnInit(){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    this.backgroundColor = this.defaultColor;
  }

  //this is better approach. Better render for DOM access
  // easy way of changing

  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    this.backgroundColor = this.highlightColor;


  }
  //Reactive directive
  // change the background color on element when you set the cursor on the element
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
    this.backgroundColor = this.defaultColor;


  }

}
