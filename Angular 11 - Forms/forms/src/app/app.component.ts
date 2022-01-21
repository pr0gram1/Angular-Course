import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'teacher';
  answer = ' ';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer:'',
    gender:''
  };
  submitted = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    //this.signupForm.setValue({
    // userData: {
    //username: suggestedName,
    // email: ''
    // };
    // secret: 'pet',
    //questionAnswer: '',
    // gender:'male'
    // });


    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });



    //setValue - you can set the values of all controls where you pass an exact copy of that form, of the form value
    // as JS object and can overwrite each controll

  }
  // ngSubmit on form... one event to listen to. Will be fired whenever form or default behaviour is submitted
  // hit the button. The form gets submitted on console web site
  // every change in form you need to change on template!!
  // elementref - gets the value in onSubmit form like (f) #f and it will print it out in web console
  // ngForm - tells angular please give me access to this form that you created automatically
  // to print it we dont need elementref so we call and import ngform to get it
  // when we enter in the texfield string and press submit. In console it will print ot the ngForm with its propertys
  // in the value prop are the sysout strings in textfields
  // dirty is true when smth is typed and false if not, touched if smth is clicked


 // onSubmit(form: NgForm) {
   // console.log(form);

  // same but to access it earlier using ViewChild for local
  //extract data
  onSubmit(form: NgForm) {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.userData.secret;
    this.user.answer = this.signupForm.value.userData.questionAnswer;
    this.user.gender = this.signupForm.value.userData.gender;

    this.signupForm.reset();
    //reset the form. Reset the state like valid or detouched. Like these properties
    // this feels like the site is untouched and loaded again. Even though you entered all info in fields



  }
}
