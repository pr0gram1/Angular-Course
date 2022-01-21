import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cookpit',
  templateUrl: './cookpit.component.html',
  styleUrls: ['./cookpit.component.css']
})
export class CookpitComponent implements OnInit {

  //creating components

  // input makes your properties bindable from outside from parent component same as output to listen your own events with emmiter
  //eventE object in angular that emmits your own events

  // emits event.. split into several component wich are communicating between eachother
  // output listen to your custom events witch you could crete with eventEmitter
  // as input decorator you can asign alliases Output('allias') listening from outside
  // when adding allies to decorator to listen from outside you need to change in app component
  // blueprint created to bpCreated
  @Output()serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated')blueprintCreated= new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName = '';
  //newServerContent = '';

// type of elementref - direct access to elements in DOM in template through at view child
  @ViewChild('serverNameInput') serverContectInput: ElementRef;



  constructor() { }

  //ngOnInit is a lifecycle hook(on of many Angulars)
  // life cycle when u create new comp in DOM
  // ngOnChanges -> ngOnInit (basic initialization, object was creatired and it will after constructor) -> ngDoCheck - if smth changed inside comp or template Angular checks triggers. This will be executed
  // ngAfterContentInit -> ngAfterContecntChecked -> ngAferViewInit -> ngAfterViewChecked -> ngOnDestroy
  ngOnInit(){
  }

  onAddServer(nameInput: HTMLInputElement) {

    // this gives us element of all properties... local reference. Not all elements have the same properties
   this.serverCreated.emit({
     serverName: nameInput.value,
     serverContent: this.serverContectInput.nativeElement.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {

    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContectInput.nativeElement.value});

  }
// we are passing data one is missing... now me need to make listeneble from outside... decorator output
}
