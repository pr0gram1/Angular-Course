import { Component , trigger, state, style, transition,
  animate, keyframes, group} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // they are TS code - ang 2 anim
  animations: [
    // deffine certain name in DOM and trigger a animation
    // first arg defines the name of animation you want to animate the second is the array animatione second i
    trigger('divState', [
      state('normal', style({ //style like backgr
        'background-color': 'red',
        transform: 'translateX(0)' // default position
      })), // this needs to match in the code bellow to attach
      state('highlighted', style({
        'backgroundColor': 'blue',
        tranform: 'translateX(100px)'
      })),
      //transition method to make a animation.
      //Move square on touch with animate milisecond
      transition('normal <=> highlighted', animate(300)), //lef to to right or <=> to make as 2nd line
      //transition('highlighted => normal', animate(800)) // right to left

    ] ),
    trigger('wildState', [
      state('normal', style({ //style like backgr
        'background-color': 'red',
        transform: 'translateX(0) scale (1)' // default position
      })), // this needs to match in the code bellow to attach
      state('highlighted', style({
        'backgroundColor': 'blue',
        tranform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'backgroundColor': 'green',
        tranform: 'translateX(0) scale(0.5)'
      })),
      //transition method to make a animation.
      //Move square on touch with animate milisecond
      transition('normal => highlighted', animate(300)), //lef to to right or <=> to make as 2nd line
      transition('highlighted => normal', animate(800)), // right to left
      transition('shrunken <==> *', [
        style({
          'background-color' : 'orange'
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(500)
        // * wildcard.
      ])
      ]),

    // when typing in field and submit with button
    // object does slide animation on the list below - -100px
    trigger('list1', [
      state('in', style({ //style like background etc
        opacity:1,
        transform: 'translateX(0)' // default position
      })),
      transition('void <=> *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      // void is for cases when we do have element in  which wasnt added to the dom athe the beginningn state
      // void - non existing state to * existing
      ]),

      // here on click after the submit, it deletes the object from left to right - 100px
      transition('* <=> void', [

        animate(300, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))

      ]),
      trigger('list2', [
        state('in', style({
          opacity:1,
          transform: 'translateX(0)'
        })),
        transition('void => *', [
          animate(1000, keyframes( [
            // keyframes - more styles in one go
            // two submits with 2 different speed of adding on list
            style({
              transform: 'translateX(-100px)',
              opacity: 0,
              offset: 0
            }),
            style ({
              transform: 'translateX(-50px)',
              opacity: 0.5,
              offset: 0.3

            }),

            // starts fast but smooth finish
            style ({
              transform:'translateX(-20px)',
              opacity: 1,
              offset: 0.8
              }),
            style ({
              transform:'translateX(0px)',
              opacity: 1,
              offset: 1

            })

          ]))
        ]),

        // when a object gets removed on click while swipe
        // before the remove it gets red
        transition('* <=> void', [
          group({
            animate(300, style({
                                 color: 'red'
                               })),
          animate(300, style({
            transform: 'translateX(100px)',
            opacity: 0
          })),
        ])
        ])
      ]),
    ]
})
export class AppComponent {
  state = 'normal'; // 'highlight' turn square to blu and moves 100px into right
  wildState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  onAnimate() {
    // this onclick changes betwwen state and highlight
    this.state == 'normal' ? this.state = 'highlighted' : this.state='normal';
    this.wildState == 'normal' ? this.wildState = 'highlighted' : this.state='normal';
  }
  onShrink() {
    this.wildState = 'shrunken';
  }
    onAdd(item) {
      this.list.push(item);
    }

    // usefull for animation and after for exec
  // in html temp code we hae done and start events to do that
    animationStarted(event) {
    console.log(event)
  }
    animationEnded(event) {
    console.log(event)
    }
}

