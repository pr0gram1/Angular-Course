import {Directive, ElementRef, OnInit} from "@angular/core";


// selector - we do place directive in out temp to attach to elements so we need to have some instr to give to angular

@Directive({

  selector: '[appBasicHighlight]'


})

export class BasicHighlightDirective implements OnInit {

  //reference to element to dir was placed on, property ref
  constructor( private elementRef: ElementRef) {

  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green'
  }

}
