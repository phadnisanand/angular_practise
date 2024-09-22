import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators,NgForm} from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  signupForm:FormGroup;
  FirstName:string="";
  LastName:string="";
  Email:string="";
  Password:string="";
  constructor(private frmbuilder:FormBuilder) {
    this.signupForm= frmbuilder.group({
      fname:['',Validators.compose([Validators.required,Validators.maxLength(15),Validators.minLength(1)])],
      lname:['',[Validators.required,Validators.maxLength(19)]],
      Emailid:['',[Validators.required,Validators.email]],
      userpassword:['',Validators.required]
    })
  }
  ngOnInit() {
  }
  PostData(signupForm:any)
  {
    if (this.signupForm.valid == true){
      console.log(signupForm.controls.fname.value);
      console.log(signupForm.controls.lname.value);
      console.log(signupForm.controls.Emailid.value);
      console.log(signupForm.controls.userpassword.value);
      alert("Form Submitted Successfully")
    }
    else{
      alert("Ooops! fill in the fields carefully")
    }

  }

}
