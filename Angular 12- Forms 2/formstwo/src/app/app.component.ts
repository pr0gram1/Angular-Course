import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators, FormArray, FormBuilder} from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    //creating rel form
    // nested form
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
      //controls - passing key values. email, usernam etc
      //ang will exec the method whenever the input of this controll is changed it just needs the reference
      'username': new FormControl(null, Validators.required, this.forbiddenNames.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email],
        this.forbiddenEmails),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    // values changes when smth changes in form and sysouts on console on web
    //this.signupForm.valueChages.subscribe(
      //(value) => console.log(value)
    // tests if form is valid and invalid... and pending
    this.signupForm.status.subscribe(
      (status) => console.log(status)
    );
    // form is prepopulated with setValue
    this.signupForm.setValue({
      'userData' : {
        'userName': 'Max',
        'email': 'max@test.com'
      },
        'gender': 'male',
        'hobbies': []
    });
    this.signupForm.patchValue({
      'userData' : {
        'userName': 'Ana',
      }
      });
  }
  //whetever u set here as arg, that is output as value form on web
    onSubmit() {
    console.log(this.signupForm);
    // reset - when you type stuff in form and hit submit it resets the objects
    this.signupForm.reset();

    }

    // using casting (<FormArray>) we are telling
    // everything in () is treated as array

    onAddHobby() {
      const control = new FormControl(null, Validators.required);
      (<FormArray>this.signupForm.get('hobbies')).push(control);

    }

    forbiddenNames(control: FormControl): {[s: string]: boolean} {
      if(this.forbiddenNames.indexOf(control.value) !== 1) {
        return {'nameIsForbidden': true};
      }
      return null;
    }

    // handles sync data
    forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
        }, 1500);
      });
    return promise;

    }
  }


