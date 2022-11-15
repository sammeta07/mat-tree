import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: UntypedFormGroup;
  constructor(
    private fb              : UntypedFormBuilder,
  ) { }

  ngOnInit(): void {
    this.initializeLoginForm();
  }
  onLogin= async ()=>{}
  initializeLoginForm(){
    const numberRegX = "^[0-9]*$";
    this.loginForm = this.fb.group({
      clientID  : [null, [Validators.required, Validators.pattern(numberRegX)]],
      emailId   : [null, Validators.required],
      password  : [null, Validators.required],
      rememberMe: [false],
    });
  }
  onChangeRememberMeCheckbox(loginFormData: { value: { rememberMe: any; }; }){
    console.log(loginFormData.value.rememberMe);
    if(loginFormData.value.rememberMe){
     
    }else {
    }
  }

}
