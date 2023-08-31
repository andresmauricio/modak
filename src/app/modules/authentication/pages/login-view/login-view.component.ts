import { Component } from '@angular/core';
import { SingUp } from '../../@types';
import { Router } from '@angular/router';
import { UserFacade } from 'src/app/facedes /UserFacede';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss'],
})
export class LoginViewComponent {
  constructor(private router: Router, private userFacade: UserFacade) {}

  signUp(credentials: SingUp) {
    this.userFacade.signUp(credentials).subscribe(() => {
      this.router.navigate(['home']);
    });
  }
}
