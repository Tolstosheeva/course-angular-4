import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input()
  formType!: string;
  
  login = {
    email: '',
    password: '',
  }


  formRegister!: FormGroup;
  show = true;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      userName: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.maxLength(8)]]
    
    }, this.pwdMatchValidator);
  }

  get f() {
    return this.formRegister.controls;
  }
  pwdMatchValidator(group: FormGroup) {
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value;

    return pass === confirmPass ? null : { notSame: true } 
 }
  onLogin() {
    console.log(this.login);
  }

  onRegistration() {
    

  }

}