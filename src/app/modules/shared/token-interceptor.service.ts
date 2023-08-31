import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable, switchMap, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserState } from 'src/app/state/user/user.reduce';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<{ user: UserState }>) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store.select('user').pipe(
      take(1),
      switchMap((state) => {
        const authRequest = request.clone({
          setHeaders: {
            Authorization: `Bearer ${state?.token}`,
          },
        });
        return next.handle(authRequest);
      })
    );
  }
}
