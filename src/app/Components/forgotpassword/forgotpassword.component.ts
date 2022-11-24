import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotPasswordForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      let reqData = {
        email: this.forgotPasswordForm.value.email,
      }
      this.userService.forgotpassword(reqData).subscribe((response: any) => {
        console.log("Reset link sent successfully", response);
      });
    }
  }

}
