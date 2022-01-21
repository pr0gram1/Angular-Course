import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector:'[appDropdown]'
})

// implement our own direct for dorpdown menu on header and recipe detail class
export class DropdownDirective {
 @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
