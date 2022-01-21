import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  //whenever this condition changes execute a metod - impl a setter
  // it changes when it does from outside
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();

    }

  }

  //tamplate - what to render, ViewContainerRef - where to render
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef ) { }

}
