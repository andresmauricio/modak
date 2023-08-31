import { Store } from '@ngrx/store';
import { AppState } from '../state';
import { Injectable } from '@angular/core';
import { SingUp, UserInfo } from '../modules/authentication/@types';
import * as userActions from 'src/app/state/user/user.actions';
import { SignupService } from '../modules/authentication/services/signup.service';
import { map, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserFacade {
  constructor(
    private store: Store<AppState>,
    private signupService: SignupService
  ) {}

  signUp(credentials: SingUp) {
    return this.signupService
      .singup(credentials)
      .pipe(tap((userInfo) => this.setUserInformation(credentials, userInfo)));
  }

  private setUserInformation(credentials: SingUp, userInfo: UserInfo) {
    this.store.dispatch(userActions.signup(credentials));
    this.store.dispatch(userActions.userInfo(userInfo));
  }
}
