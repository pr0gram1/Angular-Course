import {
  Component,
  Input,
  OnChanges,
  OnInit,
  ViewEncapsulation,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy, ViewChild, ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],

  // dom shadowning tj. ekapuslacija viewa.. css color. Removing strange argumments form soruce code on net

  encapsulation: ViewEncapsulation.Emulated //.native uses DOM shadowing technology but use .emulated for adding a red css label
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
// binding properties with input import + srvrElement allias adding/ binding trough allias but element work work
  @Input('srvElement') element: {type: string , name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') parahraph: ElementRef;



  constructor() {
    console.log('constructor called');
  }
  // runs first
  ngOnChanges(changes:SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(){
    console.log('ngOnInit called');
    console.log('This text content:' + this.header.nativeElement.textContent);
    console.log('Text content of parahraph: ' + this.parahraph.nativeElement.textContent);

  }
// is called when action is performed on web. Every action is called with docheck
  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  // called after once after do check it doesnt get initilzed again
  ngAfterContentInit() {
    console.log('ngAfterContectInit called');
    console.log('Text content of parahraph: ' + this.parahraph.nativeElement.textContent);
// first time we call it on Init we cant see the initilaziation on source web, but here on after content we will see it
  }

  // called after doChecked
  ngAfterContentChecked(){
    console.log('ngAfterContectChecked called');

  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('This text content:' + this.header.nativeElement.textContent);

  }

  ngAfterViewChecked(){
    console.log('ngAfterViewCheck called');

  }

  // to see an element destroy we added a button in appcomponent
  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }

}
