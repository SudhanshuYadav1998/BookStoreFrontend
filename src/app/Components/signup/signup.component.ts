import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  hide = true;

  signUpForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]]
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
      console.log("api call");
      

      let payload = {    //this payload is a json object
        fullName: this.signUpForm.value.fullName, // leftside firstname is exactly same as that of backend API and rightside firstname i.e., ,firstName should be exact same as that of formcontrolname in .html file or same as written above in ngonit 
        email: this.signUpForm.value.email,
        password: this.signUpForm.value.password,
        mobile_Number:this.signUpForm.value.mobileNumber
       

       }
      this.user.register(payload).subscribe((response: any) => {    //subscribe is a method from observable
        console.log(response);
      })
    }
     else {
      console.log("enter data");
    }
  }
  onReset() {
    this.submitted = false;
    this.signUpForm.reset();
  }
}
