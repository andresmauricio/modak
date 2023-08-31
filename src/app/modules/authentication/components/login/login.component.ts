import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SingUp } from '../../@types';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  signUpForm!: FormGroup;

  @Output() signUpEmitter = new EventEmitter<SingUp>();

  constructor(private fb: FormBuilder) {
    this.setUpForm();
  }

  handleSubmit() {
    if (this.signUpForm.valid) {
      this.signUpEmitter.emit(this.signUpForm.value);
      return;
    }
    this.signUpForm.markAllAsTouched();
  }

  private setUpForm() {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
}
