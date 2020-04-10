import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  private refreshTokenInProgress = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  constructor() { }
  intercept = (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> => {
    // const request = this.addAuthenticationToken(req);
    return next.handle(req).pipe(
      catchError((err, caught) => {
        if (err.status === 401) {
          if (this.refreshTokenInProgress) {
          } else {
          }
        }
        // this.handlerErrorService.transformError(err);
        return observableThrowError(err);
      })
    );
  }


  // addAuthenticationToken = (req) => {
  //   const token = this.authMsapiService.getToken('msapi_token') || '';
  //   let request = req;

  //   if (req.url.includes('MicroStrategyLibrary') && !req.url.includes('/api/auth/login')) {
  //     request = req.clone({
  //       setHeaders: {
  //         'X-MSTR-AuthToken': token
  //       }
  //     });
  //   }
  //   return request;
  // }
}
