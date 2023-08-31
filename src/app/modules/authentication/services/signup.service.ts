import { Injectable } from '@angular/core';
import { Observable, delay, map, of } from 'rxjs';
import { SingUp, UserInfo } from '../@types';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private store: Store) {}

  singup(credentials: SingUp): Observable<UserInfo> {
    return of({ token: this.generateToken(), email: credentials.email }).pipe(
      delay(300)
    );
  }

  generateToken(): string {
    const jwt = crypto.randomUUID();
    return jwt;
  }
}
