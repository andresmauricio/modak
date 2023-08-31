import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ButtonModule } from 'primeng/button';
import { PrimeModule } from '../prime/prime.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginViewComponent } from './pages/login-view/login-view.component';

@NgModule({
  declarations: [LoginComponent, LoginViewComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    PrimeModule,
    ReactiveFormsModule,
  ],
})
export class AuthenticationModule {}
