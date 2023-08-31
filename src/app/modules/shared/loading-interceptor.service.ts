import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UiFacade } from 'src/app/facedes /UIFacede';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private uiFacade: UiFacade) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    this.uiFacade.showLoading();
    return next
      .handle(request)
      .pipe(
        catchError((err) => {
          this.uiFacade.hiddenLoading();
          return err;
        })
      )
      .pipe(
        map((evt) => {
          if (evt instanceof HttpResponse) {
            this.uiFacade.hiddenLoading();
          }
          return evt;
        })
      );
  }
}
