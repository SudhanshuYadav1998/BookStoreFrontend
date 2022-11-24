import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  onSubmit(){
    if(this.loginForm.valid){
      console.log("sign in works");
      let payload={
        email:this.loginForm.value.email,
        password:this.loginForm.value.password
      }
      this.user.login(payload).subscribe((response:any)=>{
        console.log(response.data);
        localStorage.setItem('token',response.data)
        
      })
      
    }
    else{
      console.log("not works");
      
    }
  }

}
