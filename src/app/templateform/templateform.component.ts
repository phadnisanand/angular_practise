import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})

export class TemplateformComponent  {

   constructor() {

   }
   form = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  };

  onSubmit(): void {
    console.log(JSON.stringify(this.form, null, 2));
  }

  onReset(form: NgForm): void {
    form.reset();
  }

}
